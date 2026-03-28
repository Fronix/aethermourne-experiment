# Labor Coalition Geographic Analysis - Cycle 5

## Task Context
Message: "Cycle 5 Phase 2 Workshop: Labor Coalition - Analysis Only"
Instruction: Analyze geographic content for potential mapping, do not edit map-data.json yet.

## Findings

### 1. Organizing Hubs (Existing Settlement Sub-Locations)

**Ironhollow North Barracks** (within Ironhollow hamlet at [222, 262])
- Type: Sub-location landmark (organizing base)
- Description: "north barracks" - one of three boarding house buildings near ore yard
- Function: Senna Kade's organizing base for contract miners
- Geographic detail: "near the ore yard" (central location within settlement)
- Mapping potential: Could be added as a point landmark with small radius (~5 units) within Ironhollow

**Ashcrag Timber Yards** (south of Ashcrag at [285, 325])
- Type: Sub-location landmark (organizing base)
- Description: "South of the confluence, near the treeline"
- Function: Orrin Pike's charcoal kiln and organizing base for tenant farmers
- Geographic detail: South of The Confluence landmark at [280, 320], forest edge
- Mapping potential: Could be added as point landmark south of current Ashcrag position
  - Suggested position: [295, 325] (10 units south of Ashcrag, same x-axis)

### 2. Inter-Settlement Routes

**Ironhollow to Ashcrag Route**
- Distance: "eight miles north through hills that grow rockier and more barren"
- Current map distance: 89.1 units (Ironhollow [222, 262] to Ashcrag [285, 325])
- Direction: Ironhollow is north (lower y) of Ashcrag
- Terrain: "rough terrain", "rocky hills"
- Function: Ore cart road, also used by supply runs where Senna Kade met Orrin Pike
- Mapping potential: Could add as a road/trail landmark with points array following Cold Run
  - Already partially represented by Cold Run river landmark
  - Road would parallel river from Ironhollow south to Ashcrag

### 3. Other Coalition-Relevant Geography

**Harth Estate** (mentioned in Ashcrag.md)
- Location: "hillside north of town" (north of Ashcrag at [285, 325])
- Relevance: Tenant farmers work Harth's land, target of Orrin Pike's organizing
- Mapping potential: Could add as point landmark
  - Suggested position: [275, 315] (10 units north, 10 units west of Ashcrag)

**The Pits** (mentioned in Ironhollow.md)
- Location: "scattered across the hills north and east of the valley"
- Description: "pit mines are shallow excavations"
- Relevance: Where contract miners work under cartel control
- Mapping potential: Could add as area or scattered point landmarks
  - North of Ironhollow: [212, 262] and [215, 270]
  - East of Ironhollow: [222, 275] and [220, 280]

## Mapping Recommendations

### Option 1: Minimal (Sub-location points only)
Add 2 point landmarks:
- "North Barracks" at Ironhollow position [222, 262] radius 3
- "Timber Yards" south of Ashcrag at [295, 325] radius 5

### Option 2: Moderate (Organizing hubs + major estate)
Add 3 point landmarks:
- "North Barracks" at [222, 262] radius 3
- "Timber Yards" at [295, 325] radius 5
- "Harth Estate" at [275, 315] radius 8

### Option 3: Comprehensive (Full coalition geography)
Add 7 landmarks:
- 2 organizing hubs (barracks, timber yards)
- 1 estate (Harth Estate)
- 1 road (Ironhollow-Ashcrag ore road, parallel to Cold Run)
- 3 pit mine locations (scattered around Ironhollow)

## Geographic Content Gaps

No gaps found. Vault content provides sufficient spatial detail for all Labor Coalition locations:
- Ironhollow: "north barracks" clearly identified as organizing base within settlement
- Ashcrag: "Timber Yards" explicitly described as "south of the confluence, near the treeline"
- Route: "eight miles north" with terrain description
- All locations tie to existing mapped features (Cold Run, The Confluence, settlement positions)

## Recommendation for Next Phase

**Wait for Gamemaster instruction on scope:**
- If campaign needs visual distinction of organizing locations → Option 1 (minimal)
- If players will interact with specific sites → Option 2 (moderate)
- If full geographic detail needed for hooks/encounters → Option 3 (comprehensive)

Current map scale may not support sub-settlement detail visibility. Recommend Gamemaster confirm desired level of detail before implementation.

## Status
Analysis complete. Awaiting instruction to proceed with map edits or hold for Cycle 5 Phase 3.
