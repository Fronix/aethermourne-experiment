# Cartographer Infinite Improvement Mode

## Overview

The Cartographer can now run in **infinite improvement mode**, continuously refining the Aethermourne world map through autonomous cycles of scanning, adding, analyzing, and improving.

This mode enables hands-off map refinement that runs independently of the Gamemaster's bbqsauce workflow.

---

## How It Works

### 8-Phase Iteration Cycle

Each iteration performs a complete improvement cycle:

1. **Vault Scan** - Finds settlements/landmarks in vault not yet in map-data.json (starts persistent snapshot server on first iteration)
2. **Add Missing Content** - Syncs new entries with calculated positions
3. **Pre-Improvement Snapshot** - Fast PNG capture using persistent server (2-3 seconds)
4. **Visual Analysis** - Analyzes snapshot for spacing, label, and polygon issues
5. **Make Improvements** - Fixes identified issues (rate-limited for safety)
6. **Post-Improvement Snapshot** - Fast PNG capture to verify improvements
7. **Progress Report** - Logs changes (reports every 10 iterations)
8. **Continue Loop** - Returns to Phase 1 naturally (no automatic /compact)

**Performance:** Uses persistent web server and browser throughout all iterations. Snapshots take ~2-3 seconds instead of ~15 seconds.

### Rate Limits (Safety)

Per iteration maximums prevent runaway changes:
- **10 position adjustments** (settlements/landmarks)
- **20 polygon reshapes** (region boundaries - higher limit for aggressive natural shaping)
- **5 label moves** (region labelPos)

### Visual Analysis

The Cartographer first views reference maps (`data/reference-maps/`) to understand what high-quality cartography looks like, then analyzes current snapshots to identify:

- ✗ **Shape problems (HIGHEST PRIORITY):** Circular/blob-shaped regions that don't look like real geography
- ✗ Settlement markers < 20 units apart (spacing violations)
- ✗ Region labels overlapping settlements (label collisions)
- ✗ Coastal regions not touching ocean (polygon mismatches)
- ✗ Region labels outside polygon boundaries (label displacement)
- ✗ Settlements rendered outside assigned region (positioning errors)

**Primary goal:** Make the map look natural and realistic with varied coastlines, terrain-following borders, and complex geography like the reference map - not simple circular regions.

**Reference benchmarks:**
- Settlement spacing: 50+ pixels (reference standard) vs 20+ units (Aethermourne minimum)
- Label collisions: Zero (reference achieves this consistently)
- Region labels: Centered in territory (reference best practice)
- Visual hierarchy: Clear capital > city > town distinction

---

## Usage

### Starting Infinite Mode

1. Launch the Cartographer agent in Claude Code
2. Send the message: **"improvemode"**
3. The Cartographer will:
   - Write `infinite` to `.agents/cartographer-mode`
   - Report: "Entering infinite improvement mode. Starting Phase 1."
   - Begin continuous improvement cycles

### Stopping Infinite Mode

At any time, send: **"stop"**

The Cartographer will:
1. Complete the current phase gracefully
2. Stop the persistent snapshot server
3. Write `normal` to `.agents/cartographer-mode`
4. Report final summary (total iterations, changes made, final state)
5. Return to normal task-driven mode (follows Worker Idle Protocol)

### Resuming After Crash

If the Cartographer session crashes mid-iteration:

1. Launch the Cartographer agent again
2. After `/compact`, it automatically reads `.agents/cartographer-mode`
3. If mode is `infinite`, it resumes from Phase 1 (not mid-phase)
4. If mode is `normal`, it follows Worker Idle Protocol (waits for GM tasks)

---

## Monitoring Progress

### Progress Log

All changes are logged to: `/home/aethermourne/gamemaster/data/cartographer-infinite-progress.log`

Format:
```
[2026-03-26T23:45:12Z] Iteration 1: Added 12 settlements, adjusted 5 positions, 0 polygons, 2 labels
[2026-03-26T23:52:34Z] Iteration 10: Report - 95 total changes, 3 clean iterations, converging
```

### Snapshots

Pre/post-improvement snapshots saved to: `/home/aethermourne/gamemaster/data/snapshots/`

Naming convention:
- `pre-iteration-1.png`, `post-iteration-1.png`
- `pre-iteration-2.png`, `post-iteration-2.png`
- etc.

**Automatic cleanup:** Only the last 5 iterations (10 images) are kept. Older snapshots are automatically deleted when new ones are created.

### Version Control

All changes to `map-data.json` are tracked via git. Use `git diff` to review changes and `git checkout` to revert if needed.

---

## Safety Mechanisms

### Never Modified
The Cartographer will **never** modify these fields:
- Region IDs (`ashen-dominion`, etc.)
- Region colors (`#hexcolor`)
- God associations (`god: "..."`
- Terrain descriptions (`terrain: "..."`)
- Capital names (`capital: "..."`)
- Population values (`population: "..."`)

### Only Modified
The Cartographer **only** modifies:
- `polygon` arrays (region boundaries)
- `labelPos` coordinates (region label positions)
- `position` coordinates (settlement/landmark positions)

### Additional Safety
- ✓ JSON validation after changes
- ✓ Auto-restore on validation failure
- ✓ Never deletes entries
- ✓ Never renames entries
- ✓ Rate limits prevent bulk changes
- ✓ DM can interrupt at any time

---

## Convergence

The Cartographer tracks convergence metrics:
- Clean iterations (no changes needed)
- Spacing violations remaining
- Label collisions remaining
- Polygon mismatches remaining

After **3+ consecutive clean iterations**, it reports convergence signal to DM:
```
Convergence detected: 3 clean iterations. Map quality stable.
```

**Note:** Convergence does NOT stop the loop. Only DM can stop via "stop" command.

---

## Integration with Gamemaster Workflow

Infinite mode runs **independently** of the Gamemaster's bbqsauce cycles.

- ✓ Does not block GM build cycles
- ✓ Does not use AMP for coordination
- ✓ Runs in parallel to GM work
- ✓ DM launches directly (not GM-delegated)

The Gamemaster can still send one-off map sync tasks via AMP while Cartographer is in normal mode. When in infinite mode, the Cartographer ignores AMP inbox (except from DM to stop).

---

## Files & Directories

| File | Purpose |
|------|---------|
| `.agents/cartographer-mode` | Mode tracker (`infinite` or `normal`) |
| `.agents/snapshot-server.pid` | Persistent snapshot server state |
| `data/cartographer-infinite-progress.log` | Iteration log with timestamps |
| `data/snapshot-server.log` | Snapshot server log |
| `data/reference-maps/` | High-quality map examples for learning |
| `data/reference-maps/README.md` | Reference map documentation and quality benchmarks |
| `data/snapshots/` | Snapshot images directory |
| `data/snapshots/pre-iteration-N.png` | Pre-improvement snapshots (last 5 kept) |
| `data/snapshots/post-iteration-N.png` | Post-improvement snapshots (last 5 kept) |
| `data/map-data.json` | Live map data (modified during iterations) |
| `scripts/start-snapshot-server.sh` | Start persistent server |
| `scripts/stop-snapshot-server.sh` | Stop persistent server |
| `scripts/snapshot-fast.sh` | Fast snapshot via HTTP API |
| `scripts/snapshot-server.mjs` | Persistent server implementation |

---

## Example Session

```
DM: improvemode

Cartographer: Entering infinite improvement mode. Starting Phase 1.

--- Iteration 1 ---
Phase 1: Vault Scan - Found 12 missing settlements
Phase 2: Added 12 settlements to map-data.json
Phase 3: Snapshot taken (pre-iteration-1.png)
Phase 4: Analysis - 5 spacing violations, 2 label collisions detected
Phase 5: Adjusted 5 positions, moved 2 labels
Phase 6: Snapshot taken (post-iteration-1.png)
Phase 7: Progress logged
Phase 8: Continue to Phase 1...

--- Iteration 2 ---
Phase 1: Vault Scan - All settlements synced
Phase 2: No missing content
Phase 3: Snapshot taken (pre-iteration-2.png)
Phase 4: Analysis - 2 spacing violations detected
Phase 5: Adjusted 2 positions
Phase 6: Snapshot taken (post-iteration-2.png)
Phase 7: Progress logged
Phase 8: Continue to Phase 1...

[... iterations continue ...]

--- Iteration 10 ---
Phase 7: Report - 10 iterations complete, 95 total changes, 3 clean iterations

[... continues until DM stops ...]

DM: stop

Cartographer: Completing current phase...
Final summary: 15 iterations completed, 142 total changes
- Added 12 settlements
- Adjusted 78 positions
- Reshaped 12 polygons
- Moved 40 labels
- 5 consecutive clean iterations (converged)

Exiting infinite improvement mode. Returning to normal mode.
```

---

## Troubleshooting

### Mode stuck on "infinite" after crash
```bash
echo "normal" > /home/aethermourne/gamemaster/.agents/cartographer-mode
```

### Need to revert changes
```bash
git checkout data/map-data.json  # Revert to last commit
git diff data/map-data.json      # Review changes before reverting
```

### Clear old snapshots
```bash
rm /home/aethermourne/gamemaster/data/*-iteration-*.png
```

### View current mode
```bash
cat /home/aethermourne/gamemaster/.agents/cartographer-mode
```

---

## Design Notes

This feature mirrors the Gamemaster's bbqsauce autonomous loop pattern but applies it to map refinement work. It intentionally violates the Worker Agent Idle Protocol **only when in infinite mode**, enabling continuous autonomous operation while maintaining safety through:

1. Explicit mode tracking (file-based persistence)
2. DM override (can stop at any time)
3. Rate limits (prevents bulk changes)
4. Validation (prevents corruption)
5. Git version control (enables rollback)
6. Convergence tracking (provides stopping signal to DM)

The Cartographer returns to normal task-driven behavior when exiting infinite mode, restoring Worker Idle Protocol compliance.
