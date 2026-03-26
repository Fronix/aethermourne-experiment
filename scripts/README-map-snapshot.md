# Map Snapshot Tool

## Purpose

The Map Snapshot Tool enables the Cartographer agent to take visual snapshots of the rendered Aethermourne world map. This allows the Cartographer to verify that `data/map-data.json` produces an accurate and visually coherent geographic representation.

## Usage

### Basic Usage

```bash
# Take a snapshot with automatic timestamp filename
./scripts/map-snapshot.sh

# Take a snapshot with custom filename
./scripts/map-snapshot.sh my-map-verification.png
```

### Output Location

All snapshots are saved to: `/home/aethermourne/gamemaster/data/`

### Automatic Filename Format

If no filename is provided, the snapshot is saved as:
```
map-snapshot-YYYY-MM-DD-HHmmss.png
```

Example: `map-snapshot-2026-03-26-232645.png`

## How It Works

1. **Starts a temporary web server** on a random available port
2. **Serves the map HTML** from `/map/index.html`
3. **Serves map data** from `/data/map-data.json`
4. **Launches headless Chromium** via Playwright
5. **Navigates to the map** and waits for full rendering:
   - Waits for Leaflet.js to initialize
   - Waits for map data to load via fetch
   - Waits for region polygons to render
   - Allows 3 seconds for final layer settling
6. **Takes a high-resolution screenshot** (1920x1080 @ 2x scale)
7. **Saves the PNG file** to the data directory
8. **Cleans up old snapshots** (keeps only last 5 iterations = 10 images)
9. **Shuts down** the temporary server and browser

## What the Cartographer Should Look For

When analyzing snapshots, verify:

### Region Polygons
- [ ] Polygons form sensible geographic boundaries
- [ ] Polygons don't overlap incorrectly
- [ ] Region colors are visually distinct
- [ ] Polygon shapes match lore descriptions (coastal regions touch ocean, etc.)

### Settlements
- [ ] All settlements are within their correct region boundaries
- [ ] Capitals are clearly distinguishable (larger markers)
- [ ] No overlapping markers (minimum 20 units spacing)
- [ ] Settlement labels are readable and don't collide
- [ ] Coastal settlements are near coastlines
- [ ] Directional placements match descriptions (northern, southern, etc.)

### Landmarks
- [ ] Mountain ranges render as dashed lines in the correct locations
- [ ] Trenches appear as appropriate geographic features
- [ ] Craters and vortexes are positioned correctly
- [ ] Landmark labels don't overlap with settlements

### Labels
- [ ] Region labels fall within their polygon boundaries
- [ ] Region labels don't overlap with settlement clusters
- [ ] God names appear under region labels
- [ ] Settlement names are offset from their markers for readability

### Overall Coherence
- [ ] The map visually represents the described world
- [ ] Geographic relationships make sense (proximity, connectivity)
- [ ] The composition is balanced and readable

## Troubleshooting

### Dependencies Not Installed

If you see errors about missing dependencies, run:

```bash
cd /home/aethermourne/gamemaster/scripts
npm install
npx playwright install chromium
```

### Map Data Not Found

Ensure `/home/aethermourne/gamemaster/data/map-data.json` exists and is valid JSON.

### Server Port Conflicts

The script uses a random available port, so conflicts are unlikely. If you see port errors, kill any hung processes:

```bash
pkill -f "map-snapshot"
```

### Browser Launch Failures

If Chromium fails to launch, reinstall Playwright browsers:

```bash
npx playwright install --force chromium
```

## Integration with Cartographer Workflow

The Cartographer should take snapshots:

1. **After major sync operations** - verify new settlements and landmarks appear correctly
2. **After polygon refinements** - ensure region boundaries look accurate
3. **Before reporting completion** - provide visual proof of work to Gamemaster
4. **When investigating issues** - debug visual problems reported by others

### Example Workflow

```bash
# 1. Sync settlements from vault
# (Cartographer reads vault files and updates map-data.json)

# 2. Take snapshot to verify
./scripts/map-snapshot.sh post-settlement-sync.png

# 3. Read the snapshot with Claude's vision
# (Analyze for placement accuracy)

# 4. Make corrections if needed
# (Edit map-data.json)

# 5. Take final verification snapshot
./scripts/map-snapshot.sh final-verification.png

# 6. Report to Gamemaster via AMP
amp-send.sh aethermourne-gamemaster "Settlement sync complete" \
  "Added 12 settlements. Verification snapshot: data/final-verification.png" \
  --type status
```

## Technical Details

- **Resolution:** 1920x1080 pixels at 2x device scale (3840x2160 effective)
- **Format:** PNG with full transparency support
- **File size:** Typically 500KB - 2MB depending on map complexity
- **Browser:** Chromium (headless)
- **Rendering engine:** Leaflet.js with Simple CRS coordinate system
- **Coordinate mapping:** `[y, x]` where y=0 is north, converted to Leaflet's lat/lng

## Files

- `/scripts/map-snapshot.mjs` - Main Node.js script (Playwright automation)
- `/scripts/map-snapshot.sh` - Shell wrapper (checks dependencies, runs script)
- `/map/index.html` - Map visualization (Leaflet.js)
- `/data/map-data.json` - Source data for the map
- `/data/*.png` - Generated snapshot files

## Notes for Agent Operation

- The Cartographer has Claude Code's image reading capability, so it can directly view and analyze the PNG snapshots
- Snapshots should be referenced in AMP messages to the Gamemaster using relative paths: `data/filename.png`
- Old snapshots can be deleted after verification to save space
- Taking a snapshot does not modify any files except creating the PNG output
- The temporary web server only runs during snapshot generation and shuts down immediately after
