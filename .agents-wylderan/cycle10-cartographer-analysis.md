# Cycle 10 Cartographer Analysis: The Riverlands Region & The Pull Site

## Assignment
Cycle 10: The Riverlands Region Atlas + The Pull Site Landmark + First One-Shot Adventure

## Geographic Content Assessment

### Cycle Type
Build cycle. Created The Riverlands region atlas, The Pull Site landmark file, The Passage Keeper god entry, and "The Missing Barge" one-shot adventure (playable content, no new map features).

### New Geographic Features Requiring Mapping

#### 1. The Pull Site (UPDATED)
**Source:** `Compendium/World Atlas/Landmarks/The Pull Site.md` (135 lines, created Cycle 10)

**Description:**
- Delta convergence where Westrun, Centerflow, Saltcurrent channels meet
- Supernatural hazard zone with reversed currents during autumn low water
- Location: "2 miles upstream from Saltmere's docks"
- Divine remains: Passage Keeper's heart (house-sized, still beating) rests 20 feet below surface
- Grinding heartbeat sound, water density increase, vessels dragged off course
- Missing barge wreckage at bottom, crew bodies trapped

**Previous Map Entry (Cycle 1-2 placeholder):**
- Name: "The Pull"
- Position: [560, 800] (incorrect - downstream and east of Saltmere)
- Description: Generic placeholder

**Updated Map Entry (Cycle 10):**
- Name: "The Pull Site" (matches landmark file)
- Position: [535, 765] (corrected to 2 miles upstream from Saltmere at [540, 780])
- Description: "Delta convergence where supernatural currents drag vessels off course, site of Passage Keeper's beating heart, 2 miles upstream from Saltmere"
- Radius: 25 (unchanged)

**Rationale for Position Change:**
- Landmark file states "2 miles upstream from Saltmere's docks"
- Saltmere at [540, 780], so 2 miles upstream (north/upriver) = approximately [535, 765]
- This places The Pull Site between river points [530, 750] and [540, 780], matching the description
- Old position [560, 800] was 20 units downstream and east of Saltmere, contradicting the lore

**Action:** Updated existing landmark entry in map-data.json with corrected position and enhanced description

### Features Assessed But Not Mapped

#### 2. Millrun Falls (NOTED - NO LANDMARK FILE)
**Source:** `Compendium/World Atlas/Regions/The Riverlands.md` lines 44-46

**Description:**
- Northern boundary of The Riverlands region
- "Cascading rapids dropping 1,000 feet over three miles"
- Geographic transition: Stone Heights (highlands) to Riverlands (lowlands)
- Political transition: highland authority to lowland influence
- Critical to trade: barges must portage around falls

**Assessment:**
- Major geographic feature defining regional boundary
- Named feature with specific location and significance
- **However:** No dedicated landmark file exists (only mentioned in region atlas)
- **Precedent:** Cycle 8 cartographer mapped only features with dedicated landmark files
- **Decision:** Do NOT map at this time. If future cycle creates `Millrun Falls.md` landmark file, map it then.

**Recommended Position (if mapped in future):**
- Approximately [280, 240] (north of The Confluence at [280, 320], on Cold Run/Millrun River path)
- Should be positioned where river exits Stone Heights polygon

#### 3. The Ford at Millford (NOTED - IMPLICIT IN SETTLEMENT)
**Source:** `Compendium/World Atlas/Regions/The Riverlands.md` lines 50-54

**Description:**
- Sacred site at Millford settlement
- Passage Keeper's ribcage remains dissolved into riverbed (divine bones as cobbles)
- Only reliable crossing point between highlands and lowlands
- Toll collection, wagon traffic chokepoint
- Ford is sinking as divine bones dissolve (generational threat)

**Assessment:**
- Significant sacred site with divine remains
- Critical infrastructure (only ford crossing)
- **However:** No dedicated landmark file
- **More importantly:** The Ford IS Millford. They are the same location [450, 420].
- Millford exists because of the ford, they are not geographically distinct
- **Contrast with The Confluence:** The Confluence is mapped separately at [280, 320] because it's a distinct geographic feature (stream convergence) near but not identical to Ashcrag [285, 325]
- **Decision:** Do NOT map separately. The Ford is implicit in Millford settlement.

**Note:** If sacred geography becomes mechanically relevant (shrine mechanics, divine decay tracking), The Ford could be added as a separate landmark with radius ~10 centered on Millford's position.

### Geographic Framework Established (Cycle 10)

**The Passage Keeper's Fragmented Corpse:**
Cycle 10 established divine geography framework for the Millrun River corridor:

1. **Skull fragment:** At The Confluence [280, 320] in Stone Heights (already mapped)
2. **Ribcage fragment:** At The Ford, Millford [450, 420] in Riverlands (implicit in settlement)
3. **Heart fragment:** At The Pull Site [535, 765] in delta (now correctly mapped)

This three-point divine geography connects all three regions (Stone Heights → Riverlands → Saltfen) through the god's scattered remains. Divine decay mechanics (heart pulse accelerating, ford sinking, river behavior changing) provide campaign-scale threats.

**River System Refinement:**
The Riverlands atlas describes the Millrun splitting into three delta channels (Westrun, Centerflow, Saltcurrent) as it enters The Saltfen, converging at The Pull Site before reaching Saltmere. These channels are NOT yet mapped as separate river paths. Current map-data.json shows Millrun as a single river line from [280, 320] to [548, 835].

**Future Consideration:** If Cycle 11+ creates detailed delta channel navigation, may require adding three separate river paths splitting from Millrun around [520, 700] and converging at The Pull Site [535, 765].

### Other Cycle 10 Deliverables (No Map Impact)

**The Riverlands Region Atlas (332 lines):**
- Comprehensive region file establishing river corridor geography
- No new landmarks beyond The Pull Site
- Establishes boundaries: Millrun Falls (north) to delta marshes (south), 50-mile corridor
- Documents trade routes, seasonal navigation, ford economics, river culture
- Divine influence throughout (fragmented god defining river behavior)
- **Map Impact:** None directly. Region metadata can inform future region polygon if Riverlands polygon is added.

**The Passage Keeper God Entry (142 lines):**
- Cosmology file establishing dead god lore
- Domain: Passage, Rivers, Commerce, Transitions
- Death: Fragmented during Theomachis 75 years ago
- Philosophy: "Yield but don't break, flow around obstacles"
- **Map Impact:** None. Provides narrative context for existing geographic features.

**One-Shot Adventure: The Missing Barge (364 lines):**
- Playable content introducing Wylderan's tone and divine decay mechanics
- Three-act investigation → exploration → revelation structure
- Uses existing map features (Millford, river travel, The Pull Site)
- **Map Impact:** None. Adventure content, not geographic content.

**NPC Updates (7 Millford NPCs enriched):**
- Added Passage Keeper cultural references to existing NPCs
- No new NPCs created with location data
- **Map Impact:** None.

### Cycle 10 Summary

**Geographic Content Created:**
- 1 landmark file: The Pull Site
- 1 region atlas: The Riverlands (no direct map impact)
- 1 god entry: The Passage Keeper (narrative context)

**Map Updates Made:**
- Updated "The Pull" → "The Pull Site" with corrected position [535, 765] and enhanced description

**Features Noted But Not Mapped:**
- Millrun Falls (no landmark file, defer to future cycle)
- The Ford at Millford (implicit in settlement, no separate mapping)

**Current Map State:**
- 4 settlements: Ironhollow, Ashcrag, Millford, Saltmere (unchanged)
- 11 landmarks: The Confluence, Cold Run, Ashwater, Piney Flow, Millrun River, The Pull Site (updated), North Barracks, Halfway Burn Site, Timber Yards, Harth Estate (unchanged count, 1 updated)
- 3 region polygons: Stone Heights, Riverlands, Saltfen (unchanged)

**Divine Geography Framework:**
Cycle 10 established the Passage Keeper's three-fragment system (skull/ribcage/heart) connecting three regions through divine remains. This framework is now fully mapped and provides campaign-scale threats (divine reassembly, ford collapse, trade disruption).

### Cycle 11 Preparation

**Expected Cartography Work:**
If Cycle 11 follows the Cycle 9 audit recommendation to build The Saltfen region atlas, cartographer should assess:

1. **New landmarks in The Saltfen:**
   - Salt production sites (evaporation ponds, harvest yards)
   - Bay interface features (harbor mouth, tidal markers)
   - Delta channel system details (if channels mapped separately)
   - Coastal settlements or fishing villages
   - Dead god remains as terrain features (if Saltfen's dead god is different from Passage Keeper)

2. **Region boundary polygon:**
   - Saltfen region polygon may need refinement based on atlas definition
   - Current polygon: [600,200] → [600,600] → [750,650] → [850,600] → [850,400] → [800,250]
   - Verify boundaries match atlas description

3. **Cosmology integration:**
   - If The Saltfen has its own dead god (not just Passage Keeper fragments), may introduce new divine geography
   - Alternatively, if Passage Keeper is the primary god for all three regions, Saltfen atlas may detail heart fragment area around The Pull Site

**Alternative:** If Cycle 11 is another audit cycle (every 3rd cycle pattern), no new geographic content expected. Cartographer will review existing map data for consistency.

**Status:** Cycle 10 complete, 1 map update delivered, divine geography framework established, ready for Cycle 11 assignment.
