#!/usr/bin/env node

/**
 * Persistent Snapshot Server
 *
 * Keeps web server and Playwright browser running for fast map snapshots.
 * Used by Cartographer infinite mode to avoid startup/shutdown overhead.
 *
 * Exposes HTTP endpoints:
 *   GET  /capture?filename=X - Reload map and take screenshot
 *   GET  /status - Check server status
 *   POST /shutdown - Stop server and browser
 *
 * CLI Usage:
 *   node snapshot-server.mjs        # Start server (runs in foreground)
 *   node snapshot-server.mjs &      # Start in background
 */

import { chromium } from 'playwright';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gamemasterRoot = resolve(__dirname, '..');

const MAP_PORT = 3778;      // Serves the map HTML
const CONTROL_PORT = 3779;   // Control API for captures
const STATE_FILE = resolve(gamemasterRoot, '.agents', 'snapshot-server.pid');
const dataDir = resolve(gamemasterRoot, 'data', 'snapshots');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let browser, page;

async function cleanupOldSnapshots() {
  const MAX_ITERATIONS = 5;

  try {
    const files = fs.readdirSync(dataDir);

    const preSnapshots = files.filter(f => f.match(/^pre-iteration-(\d+)\.png$/))
      .map(f => ({ name: f, iteration: parseInt(f.match(/\d+/)[0]) }))
      .sort((a, b) => b.iteration - a.iteration);

    const postSnapshots = files.filter(f => f.match(/^post-iteration-(\d+)\.png$/))
      .map(f => ({ name: f, iteration: parseInt(f.match(/\d+/)[0]) }))
      .sort((a, b) => b.iteration - a.iteration);

    let cleaned = 0;

    for (const snapshot of preSnapshots.slice(MAX_ITERATIONS)) {
      try {
        fs.unlinkSync(join(dataDir, snapshot.name));
        cleaned++;
        console.log(`  Cleaned: ${snapshot.name}`);
      } catch (e) {
        console.warn(`  Failed to clean ${snapshot.name}: ${e.message}`);
      }
    }

    for (const snapshot of postSnapshots.slice(MAX_ITERATIONS)) {
      try {
        fs.unlinkSync(join(dataDir, snapshot.name));
        cleaned++;
        console.log(`  Cleaned: ${snapshot.name}`);
      } catch (e) {
        console.warn(`  Failed to clean ${snapshot.name}: ${e.message}`);
      }
    }

    if (cleaned > 0) {
      console.log(`  ✓ Cleaned ${cleaned} old snapshot(s), keeping last ${MAX_ITERATIONS} iterations`);
    }
  } catch (err) {
    console.warn(`Warning: Snapshot cleanup failed: ${err.message}`);
  }
}

async function startServer() {
  console.log('Starting persistent snapshot server...');

  // Map server
  const mapApp = express();
  mapApp.use('/map', express.static(join(gamemasterRoot, 'map')));
  mapApp.get('/map/map-data.json', (req, res) => {
    res.sendFile(join(gamemasterRoot, 'data', 'map-data.json'));
  });
  const mapServer = mapApp.listen(MAP_PORT);

  // Control API server
  const controlApp = express();
  controlApp.use(express.json());

  controlApp.get('/status', (req, res) => {
    res.json({
      status: 'running',
      pid: process.pid,
      mapPort: MAP_PORT,
      controlPort: CONTROL_PORT,
      uptime: process.uptime()
    });
  });

  controlApp.get('/capture', async (req, res) => {
    const filename = req.query.filename;

    if (!filename) {
      return res.status(400).json({ error: 'filename parameter required' });
    }

    const outputPath = resolve(dataDir, filename);

    try {
      console.log(`Capturing: ${filename}`);

      // Reload to get latest map-data.json
      await page.reload({ waitUntil: 'domcontentloaded', timeout: 10000 });

      // Wait for map render
      await page.waitForFunction(() => {
        const polys = document.querySelectorAll('.leaflet-overlay-pane path');
        return polys.length > 0;
      }, { timeout: 10000 });

      await page.waitForTimeout(2000);

      // Screenshot
      await page.screenshot({ path: outputPath, fullPage: false });

      // Cleanup
      await cleanupOldSnapshots();

      console.log(`✓ ${filename}`);
      res.json({ success: true, filename, path: outputPath });
    } catch (error) {
      console.error(`✗ Capture failed: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  });

  controlApp.post('/shutdown', async (req, res) => {
    console.log('Shutdown requested');
    res.json({ message: 'Shutting down...' });

    setTimeout(async () => {
      await cleanup();
      process.exit(0);
    }, 1000);
  });

  const controlServer = controlApp.listen(CONTROL_PORT);

  console.log(`Map server: http://localhost:${MAP_PORT}`);
  console.log(`Control API: http://localhost:${CONTROL_PORT}`);

  // Launch browser
  console.log('Launching browser...');
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });

  page = await context.newPage();
  await page.goto(`http://localhost:${MAP_PORT}/map/`, {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });

  await page.waitForSelector('#map', { timeout: 5000 });
  await page.waitForFunction(() => {
    return typeof L !== 'undefined' && document.querySelector('.leaflet-container');
  }, { timeout: 10000 });
  await page.waitForFunction(() => {
    const polys = document.querySelectorAll('.leaflet-overlay-pane path');
    return polys.length > 0;
  }, { timeout: 15000 });
  await page.waitForTimeout(2000);

  console.log('✓ Ready for snapshots');
  console.log('PID:', process.pid);

  // Save state
  fs.writeFileSync(STATE_FILE, JSON.stringify({
    pid: process.pid,
    mapPort: MAP_PORT,
    controlPort: CONTROL_PORT,
    started: new Date().toISOString()
  }));

  // Cleanup function
  async function cleanup() {
    console.log('Cleaning up...');
    if (browser) await browser.close();
    mapServer.close();
    controlServer.close();
    if (fs.existsSync(STATE_FILE)) fs.unlinkSync(STATE_FILE);
  }

  // Handle termination
  process.on('SIGTERM', async () => {
    await cleanup();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    await cleanup();
    process.exit(0);
  });
}

startServer().catch(err => {
  console.error('Failed to start:', err);
  process.exit(1);
});
