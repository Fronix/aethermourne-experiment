# Cycle 8 Cartographer Analysis: The Stone Heights Region Atlas

## Assignment
Cycle 8 Phase 2: Stone Heights Region Atlas workshop

## Geographic Content Assessment

### Existing Map Coverage
The following Stone Heights features are already mapped in `data/wylderan/map-data.json`:

**Settlements:**
- Ashcrag: [285, 325], population 350, type: village
- Ironhollow: [222, 262], population 175, type: hamlet

**Region:**
- The Stone Heights: Polygon defined, boundaries established

**Waterways:**
- Cold Run: Highland stream from Ironhollow to The Confluence
  - Points: [220,260] → [230,270] → [240,280] → [260,300] → [280,320]
- The Confluence: Landmark at [280, 320] where highland streams converge
- Millrun River: Major river flowing from Confluence through Riverlands to Saltmere delta

### New Geographic Features Requiring Mapping

#### 1. Halfway Burn Site (CONFIRMED)
**Source:** `Compendium/World Atlas/Landmarks/Halfway Burn Site.md` (existing file, 82 lines)

**Description:**
- Abandoned charcoal production site
- Located "4 miles from both Ironhollow and Ashcrag, along Cold Run"
- Used by Highland Workers Coalition as secret meeting location
- Forest clearing with ruined stone kiln

**Recommended Position:** [260, 300]
- Lies directly on Cold Run river path
- Approximately equidistant from Ironhollow [222, 262] and Ashcrag [285, 325]
- Matches geographic description in vault file

**Action:** Add to `landmarks` array in map-data.json

#### 2. Iron Bend Barge Landing (FLAGGED - INCONSISTENCY)
**Source:** `cycle8-discovery.md` line 38 claims this feature exists in Ironhollow.md

**Issue:** This feature does NOT appear in any existing vault file.
- Searched `Ironhollow.md`: No mention of "Iron Bend Barge Landing"
- Searched entire vault: Zero matches for "Iron Bend" or "barge landing" at Ironhollow
- Ironhollow.md describes ore transport via "carts" to Ashcrag, NOT barges

**Geographic Analysis:**
Cold Run is described as a highland stream that "freezes solid" in winter (Halfway Burn Site.md line 32). This suggests it is NOT navigable by cargo barges. The transport chain appears to be:
1. Ironhollow → cart/road transport to Ashcrag (8 miles, rough terrain)
2. Ashcrag → barge loading at The Confluence
3. The Confluence → barge transport down Millrun River to lowlands

**Recommendation:** Workshop should clarify:
- Is Cold Run navigable by barges, or only by small boats/rafts?
- Does Ironhollow have river access for cargo transport?
- If "Iron Bend Barge Landing" is a new feature, where exactly is it located?
- Does this require revising the Cold Run river path or adding a new waterway?

**Action:** Hold mapping of this feature pending workshop resolution

### Workshop Questions Affecting Cartography

From cycle8-discovery.md, the following workshop questions have geographic implications:

**Q3: River system**
- "Name(s)? Source and mouth? Barge navigation details?"
- Cold Run already named and mapped, but navigability is unclear
- Workshop should confirm/revise river characteristics

**Q2: Physical boundaries**
- "Where does the region start/end?"
- Current Stone Heights polygon may need adjustment
- Workshop should define northern/eastern/western boundaries

**Q6: Neighboring regions**
- "What lies beyond The Stone Heights?"
- May require adding adjacent region polygons (even if unpopulated)
- Defines context for Stone Heights positioning

**Q7: Supernatural threats**
- "Creatures, hazards, divine corruption stemming from dead god?"
- If workshop identifies specific geographic hazards (corrupted zones, divine remains as terrain features), these may require landmark markers

**Q1: Dead god identity**
- "Which of The Twelve died in The Stone Heights?"
- May define major terrain features (petrified bones as mountain range, divine blood as mineral veins, etc.)
- Could require significant new landmarks or terrain annotations

### Immediate Cartography Deliverables

**Phase 2A (now):** Add verified features
- Halfway Burn Site landmark

**Phase 2B (after workshop):** Pending workshop decisions on:
- Iron Bend Barge Landing resolution
- Dead god terrain features
- Region boundary adjustments
- Additional landmarks identified during atlas writing

### Summary

**Current Status:**
- 1 new landmark ready to map (Halfway Burn Site)
- 1 feature flagged as inconsistent (Iron Bend Barge Landing)
- Workshop questions 1-3, 6-7 may generate additional geographic content

**Next Action:** Add Halfway Burn Site to map-data.json, then monitor workshop output files for additional geographic features requiring mapping.
