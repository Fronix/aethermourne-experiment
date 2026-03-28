#!/usr/bin/env node

/**
 * Map Snapshot Tool
 *
 * Takes a screenshot of the rendered Aethermourne world map for the Cartographer
 * to verify and improve map data accuracy.
 *
 * Usage:
 *   ./map-snapshot.mjs [output-filename]
 *
 * If no filename is provided, uses: map-snapshot-YYYY-MM-DD-HHmmss.png
 */

import { chromium } from 'playwright';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gamemasterRoot = resolve(__dirname, '..');
const WORLD_NAME = process.env.WORLD_NAME || 'aethermourne';

// Parse arguments
const args = process.argv.slice(2);
const outputFilename = args[0] || `map-snapshot-${new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)}.png`;
const snapshotsDir = resolve(gamemasterRoot, 'data', WORLD_NAME, 'snapshots');
const outputPath = resolve(snapshotsDir, outputFilename);

// Ensure snapshots directory exists
if (!fs.existsSync(snapshotsDir)) {
  fs.mkdirSync(snapshotsDir, { recursive: true });
}

async function startServer() {
  const app = express();

  // Serve the map directory
  app.use('/map', express.static(join(gamemasterRoot, 'map')));

  // Serve map-data.json from data directory
  app.get('/map/map-data.json', (req, res) => {
    const mapDataPath = join(gamemasterRoot, 'data', WORLD_NAME, 'map-data.json');

    if (!fs.existsSync(mapDataPath)) {
      console.error(`Map data not found: ${mapDataPath}`);
      res.status(404).send(`Map data not found for world: ${WORLD_NAME}`);
      return;
    }

    console.log(`Serving map data: data/${WORLD_NAME}/map-data.json`);
    res.sendFile(mapDataPath);
  });

  const server = app.listen(0); // Use random available port
  const port = server.address().port;

  return { server, port };
}

async function takeSnapshot(port) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2, // High DPI for better quality
  });

  const page = await context.newPage();

  // Enable console logging for debugging
  page.on('console', msg => console.log('Browser console:', msg.text()));
  page.on('pageerror', err => console.error('Browser error:', err));

  try {
    console.log(`Navigating to http://localhost:${port}/map/`);

    // Navigate to the map
    await page.goto(`http://localhost:${port}/map/`, {
      waitUntil: 'domcontentloaded',
      timeout: 15000,
    });

    console.log('Page loaded, waiting for map container...');

    // Wait for the map container to exist
    await page.waitForSelector('#map', { timeout: 5000 });

    console.log('Map container found, waiting for Leaflet initialization...');

    // Wait for Leaflet to initialize
    await page.waitForFunction(() => {
      return typeof L !== 'undefined' && document.querySelector('.leaflet-container');
    }, { timeout: 10000 });

    console.log('Leaflet initialized, waiting for map data to load...');

    // Wait for regions to be rendered (they're added after fetch completes)
    await page.waitForFunction(() => {
      const polys = document.querySelectorAll('.leaflet-overlay-pane path');
      return polys.length > 0;
    }, { timeout: 15000 });

    console.log('Map data loaded, waiting for final render...');

    // Additional wait for all layers to settle
    await page.waitForTimeout(3000);

    console.log('Taking screenshot...');

    // Take screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: false,
    });

    console.log(`Map snapshot saved to: ${outputPath}`);

  } catch (error) {
    console.error('Error details:', error.message);

    // Take a debug screenshot even on error
    const debugPath = outputPath.replace('.png', '-debug.png');
    try {
      await page.screenshot({ path: debugPath });
      console.log(`Debug screenshot saved to: ${debugPath}`);
    } catch (e) {
      console.error('Could not save debug screenshot:', e.message);
    }

    throw error;
  } finally {
    await browser.close();
  }
}

async function cleanupOldSnapshots() {
  // Keep only last 5 iterations (10 files: 5 pre + 5 post)
  const MAX_ITERATIONS = 5;

  try {
    const files = fs.readdirSync(dataDir);

    // Find all iteration snapshots
    const preSnapshots = files.filter(f => f.match(/^pre-iteration-(\d+)\.png$/))
      .map(f => ({ name: f, iteration: parseInt(f.match(/\d+/)[0]) }))
      .sort((a, b) => b.iteration - a.iteration); // newest first

    const postSnapshots = files.filter(f => f.match(/^post-iteration-(\d+)\.png$/))
      .map(f => ({ name: f, iteration: parseInt(f.match(/\d+/)[0]) }))
      .sort((a, b) => b.iteration - a.iteration);

    // Delete old pre-iteration snapshots (keep last 5)
    for (const snapshot of preSnapshots.slice(MAX_ITERATIONS)) {
      const path = join(dataDir, snapshot.name);
      fs.unlinkSync(path);
      console.log(`Cleaned up old snapshot: ${snapshot.name}`);
    }

    // Delete old post-iteration snapshots (keep last 5)
    for (const snapshot of postSnapshots.slice(MAX_ITERATIONS)) {
      const path = join(dataDir, snapshot.name);
      fs.unlinkSync(path);
      console.log(`Cleaned up old snapshot: ${snapshot.name}`);
    }
  } catch (err) {
    // Non-fatal - just log and continue
    console.warn('Warning: Could not clean up old snapshots:', err.message);
  }
}

async function main() {
  console.log('Starting temporary web server...');
  const { server, port } = await startServer();

  console.log(`Server running on port ${port}`);
  console.log('Launching headless browser...');

  try {
    await takeSnapshot(port);

    // Clean up old snapshots after successful capture
    await cleanupOldSnapshots();
  } finally {
    server.close();
    console.log('Server stopped.');
  }
}

main().catch(err => {
  console.error('Error taking map snapshot:', err);
  process.exit(1);
});
