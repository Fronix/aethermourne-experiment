# Cycle 5 Build Plan: Highland Workers Coalition

## Discovery
Selected implication: Cross-settlement labor organizing between Senna Kade (Ironhollow) and Orrin Pike (Ashcrag)

## Workshop Synthesis

### Writer1 Input (Infrastructure)
- **Meeting places:** Timber yards (Ashcrag), north barracks (Ironhollow), **new landmark needed:** abandoned charcoal burn site halfway between settlements
- **Communication:** Cold Run as artery, charcoal shipments as message cover, seasonal workers as couriers (3-4 hour journey, 8 miles)
- **Strategy:** Front-load autumn organizing, weaponize winter isolation, synchronized disruption (work stoppage + charcoal cutoff)
- **Faction names suggested:** "The Cold Run Union" or "The Kiln & Hammer"

### Lorekeeper Input (Consistency Audit)
- **Timelines verified:** Both leaders started 5 years ago, met 2 years ago - CONSISTENT
- **Coalition strength:** Senna 12/30 miners committed, Orrin 15/40 farmers committed
- **Cartel capabilities:** Strategic foreclosures, information network, patience - well-documented
- **Historical precedent:** NONE - this is FIRST labor organizing in Wylderan history
- **GAPS IDENTIFIED:**
  1. Forge Council faction file missing (cannot assess their counter-insurgency symmetrically)
  2. Strike mechanics unclear (dual-target vs sequential? coordinated demands?)
  3. Cartel awareness level TBD (does Tallow Breck know?)
  4. Forge Council awareness level TBD (Myra Cadros knows, but response?)

### Characterwriter Input (NPCs & Structure)
- **6 new NPCs identified:**
  - **Message runners:** Kael Torrn (river worker), Lira Venn (charcoal hauler)
  - **Ironhollow lieutenants:** Torvin Marks (veteran miner), Dessa Kord (boarding house cook)
  - **Ashcrag lieutenants:** Halden Cray (tenant farmer), Mira Voss (grain sorter)
- **2 informants:** Rennic Vale (to Caden Wroth), Thom Harrow (to Tallow Breck)
- **Internal tensions:** Goal misalignment (debt relief vs land reform), class friction, geographic distance, leadership fragility, trust issues
- **Structure assessment:** Proto-faction, not real faction yet. Network not organization. Cell structure aspirational. Dual leadership fragile.
- **Verdict:** "Powder keg with damp fuse" - could become real or collapse into bloodbath

### Cartographer Input (Geography)
- **Existing organizing hubs:** North Barracks (Ironhollow), Timber Yards (Ashcrag)
- **Route:** 8 miles, parallels Cold Run, rough rocky terrain
- **Additional sites:** Harth Estate (north of Ashcrag), The Pits (scattered around Ironhollow)
- **Mapping options:** Minimal (2 points), Moderate (3 points), Comprehensive (7 points)
- **Gap analysis:** NO geographic gaps, sufficient spatial detail exists

---

## Key Decisions

### 1. Faction Status
**DECISION:** Create "Highland Workers Coalition" **proto-faction file**, NOT full faction file.

**RATIONALE:**
- Characterwriter assessment: "not yet a faction, a proto-faction"
- Coalition is a network, not an organization
- No formal leadership, no charter, no public identity
- Creating a full faction file would overstate their cohesion
- Proto-faction file documents nascent structure without implying they're a real political force yet

**SCOPE:** 60-80 lines covering:
- Origins (Senna + Orrin meeting 2 years ago)
- Current structure (dual leadership, cell structure, message runners)
- Goals (miners: debt relief, farmers: land reform)
- Internal tensions (goal misalignment, class friction, trust issues)
- Opposition (Cartel, Forge Council, informants)
- Resources (charcoal leverage, explosives, seasonal workers)
- Symbolism (charcoal smudge)
- Trajectories (could become real, could collapse)

### 2. NPCs to Create
**DECISION:** Create 6 new NPC files (60-90 lines each, enriched template)

**NPCs:**
1. **Kael Torrn** - Message runner (river worker, nephew of Dace Torrn)
2. **Lira Venn** - Message runner (charcoal hauler, widow)
3. **Torvin Marks** - Ironhollow lieutenant (veteran miner, fatalistic)
4. **Dessa Kord** - Ironhollow lieutenant (boarding house cook, strategist)
5. **Halden Cray** - Ashcrag lieutenant (tenant farmer, inspiring but reckless)
6. **Mira Voss** - Ashcrag lieutenant (grain sorter, information source)

**INFORMANTS:** Rennic Vale and Thom Harrow will be mentioned in other NPC files (Caden Wroth, Tallow Breck, Senna Kade, Orrin Pike) but do NOT get their own files yet. Keeping them as named threats, not full characters.

### 3. Landmarks to Create
**DECISION:** Create 1 new landmark file (50-80 lines)

**Landmark:**
- **Halfway Burn Site** - Abandoned charcoal burn site halfway between Ironhollow and Ashcrag along Cold Run
- Function: Neutral meeting ground for cross-settlement coordination
- Description: Cleared area with stone foundation remains, depleted forest, far enough from both settlements for privacy
- Status: Abandoned (historically used, now depleted)
- Type: Ruin / meeting site

### 4. Cartographer Mapping
**DECISION:** Option 1 (Minimal) + Halfway Burn Site

**Map updates (Phase 4):**
- Add "North Barracks" point landmark at Ironhollow position [222, 262] radius 3
- Add "Timber Yards" point landmark south of Ashcrag at [295, 325] radius 5
- Add "Halfway Burn Site" point landmark between settlements (calculate midpoint)

### 5. Forge Council Gap
**DECISION:** Acknowledge gap, do NOT block on it. Flag for Cycle 6.

**RATIONALE:**
- We have enough information about the coalition to build it now
- Forge Council is opposition/context, not the focus of this cycle
- Lorekeeper correctly identified this as a structural gap
- **Action:** Add "Create Forge Council faction file" to implications list for future cycle
- **For now:** Coalition content can reference Forge Council generically (guild control, land ownership, Myra Cadros as council head)

### 6. Strike Mechanics Clarification
**DECISION:** Dual-target coordinated action, NOT sequential.

**MECHANICS:**
- Miners strike against Highland Merchant Cartel (Ironhollow ore extraction stops)
- Farmers strike against Forge Council (Ashcrag grain/charcoal supply stops)
- Simultaneous timing to maximize pressure on both power structures
- Coordinated demands: workers' rights, debt relief, safety standards, land reform
- **Risk:** If either power structure offers concessions to their specific group, coalition splits

---

## Build Tasks - Phase 4 Assignments

### Task 1: Proto-Faction File
**Assignee:** Writer1
**File:** `Compendium/Factions/Highland Workers Coalition.md`
**Scope:** 60-80 lines
**Content:**
- YAML frontmatter: tags (faction, proto-faction, region/the-stone-heights), type (faction), status (nascent), founded (2 years ago when Senna and Orrin met)
- Overview: Origins, current structure, dual leadership
- Leadership: Senna Kade (miners), Orrin Pike (farmers)
- Structure: Cell structure (aspirational), message runners (Kael, Lira), lieutenants (Torvin, Dessa, Halden, Mira)
- Goals: Miners (debt relief, safety), Farmers (land reform, council representation)
- Resources: Charcoal leverage, explosives, seasonal workers, winter isolation
- Opposition: Highland Merchant Cartel (Caden, Tallow, Halven, Marna), Forge Council (Myra, Aldric), informants (Rennic Vale, Thom Harrow)
- Symbolism: Charcoal smudge on left wrist
- Internal tensions: Goal misalignment, class friction, trust issues, leadership fragility
- Trajectories: Could become real faction with PC help, external recognition, shared manifesto; could collapse from arrests, betrayal, cartel concessions
- GM callout: Assessment from characterwriter ("powder keg with damp fuse")

**Source material:** All 4 workshop responses

### Task 2: Halfway Burn Site Landmark
**Assignee:** Writer1
**File:** `Compendium/World Atlas/Landmarks/Halfway Burn Site.md`
**Scope:** 50-80 lines
**Content:**
- YAML frontmatter: tags (location, region/the-stone-heights, landmark), type (location), region (The Stone Heights), parent-location (between Ironhollow and Ashcrag), status (abandoned)
- Description: Abandoned charcoal burn site, cleared area with stone foundation remains, depleted forest, halfway along Cold Run between settlements
- History: Historically used by charcoal burners, now depleted, forgotten by most
- Current use: Coalition meeting site, neutral ground, far enough from both settlements for privacy
- Geography: 4 miles from both Ironhollow and Ashcrag, accessible via Cold Run path (frozen in winter)
- Encounters: Coalition meetings in autumn (pre-strike planning), potential cartel patrols, informant surveillance
- Hooks: PCs discover meeting in progress, PCs asked to courier messages, cartel asks PCs to spy on meetings
- GM callout: Key infrastructure for coalition coordination

**Source material:** Writer1 workshop response

### Task 3: Six NPC Files
**Assignee:** Characterwriter
**Files:** Create 6 files in `Compendium/NPCs/` (60-90 lines each, enriched template)

**NPCs (in priority order):**

1. **Kael Torrn**
   - Role: Message runner (river worker, barge hauler between Ironhollow and Ashcrag)
   - Age: Early 20s
   - Background: Nephew of Dace Torrn (river trader from Millford), seen both systems, hates both
   - Personality: Loyal but inexperienced, could crack under interrogation
   - Relationships: Trusted by Senna and Orrin, knows Dace Torrn, moves between settlements
   - Key secret: Carries messages hidden in cargo manifests, knows every back trail
   - Location: Ironhollow/Ashcrag (travels between), Faction: Highland Workers Coalition
   - Arc: If exposed, either breaks and reveals coalition or becomes martyr

2. **Lira Venn**
   - Role: Message runner (charcoal hauler, independent contractor)
   - Age: Mid-30s
   - Background: Widow of a miner who died in cave-in, bitter and cautious
   - Personality: Won't join openly but facilitates, wants the system to burn
   - Relationships: Supplies both settlements, refuses formal coalition membership, respected by both sides
   - Key secret: Won't fight but will carry messages, has access to cartel supply routes
   - Location: Between Ironhollow and Ashcrag, Faction: None (sympathizer)
   - Arc: Could be forced to choose sides if cartel pressures her

3. **Torvin Marks**
   - Role: Ironhollow lieutenant (veteran miner)
   - Age: Late 40s
   - Background: Survived 25 years in the pits, oldest working miner
   - Personality: Fatalistic, believes strike is 5 years too late, commands respect
   - Relationships: Supports Senna but doubts success, respected by committed 12, can't sway wavering 18
   - Key secret: Secretly believes coalition will fail, staying loyal out of honor not hope
   - Location: Ironhollow, Faction: Highland Workers Coalition
   - Arc: If strike fails, becomes "I told you so"; if succeeds, shocked and inspired

4. **Dessa Kord**
   - Role: Ironhollow lieutenant (boarding house cook)
   - Age: Mid-20s
   - Background: Not a miner, but feeds them, hears everything
   - Personality: Sharp, strategic, thinks three moves ahead, Senna's brain trust
   - Relationships: Keeps mental ledger of who's committed/wavering/informant, advises Senna on tactics
   - Key secret: Suspects Rennic Vale is informant but can't prove it
   - Location: Ironhollow, Faction: Highland Workers Coalition
   - Arc: If Senna is arrested, becomes acting leader (strategic but not charismatic)

5. **Halden Cray**
   - Role: Ashcrag lieutenant (tenant farmer)
   - Age: Late 30s
   - Background: Works Aldric Harth's northern fields
   - Personality: Loud, passionate, inspiring but terrible at operational security, says too much in taverns
   - Relationships: Committed 15 follow him, wavering 25 avoid him (dangerous to be seen with)
   - Key secret: His recklessness is deliberate - believes visibility forces action
   - Location: Ashcrag, Faction: Highland Workers Coalition
   - Arc: If Orrin is arrested, becomes leader (inspiring but reckless, could get everyone killed)

6. **Mira Voss**
   - Role: Ashcrag lieutenant (grain sorter, information source)
   - Age: Early 40s
   - Background: Widow, works the market, reports to Grett Voss
   - Personality: Quiet, invisible, critical - feeds Orrin intel on council meetings and price manipulations
   - Relationships: Works for Grett Voss, sympathizes with Orrin, coalition's eyes
   - Key secret: If exposed, coalition loses information advantage
   - Location: Ashcrag, Faction: Highland Workers Coalition (covert)
   - Arc: If exposed, either flips to become informant or is blacklisted, losing coalition intel

**Source material:** Characterwriter workshop response

### Task 4: Map Updates
**Assignee:** Cartographer
**File:** `data/wylderan/map-data.json`
**Updates:**
1. Add "North Barracks" point landmark at [222, 262] radius 3
2. Add "Timber Yards" point landmark at [295, 325] radius 5
3. Add "Halfway Burn Site" point landmark at calculated midpoint between Ironhollow [222, 262] and Ashcrag [285, 325]
   - Suggested position: [253, 293] (midpoint calculation)
   - Radius: 8 (small clearing)
   - Type: ruin/meeting site

**Source material:** Cartographer analysis file, Writer1 workshop response

### Task 5: Lore Audit
**Assignee:** Lorekeeper
**Scope:** Full consistency audit of all Cycle 5 deliverables
**Verification:**
1. All wikilinks resolve (6 NPCs, 1 landmark, 1 proto-faction, cross-references to existing NPCs)
2. No contradictions with existing vault content
3. NPCRegistry.md updated with 6 new NPCs (location, faction, status)
4. Timeline consistency (5 years ago organizing starts, 2 years ago Senna/Orrin meet)
5. Frontmatter complete and consistent
6. Faction affiliations correct (Highland Workers Coalition vs None for sympathizers)
7. Status fields accurate (all 6 NPCs should be "alive")

**Flag for future:** Forge Council faction file gap (recommend as Cycle 6 implication)

### Task 6: CHANGELOG & Index Updates
**Assignee:** Writer1 (after all content created)
**Files:**
- `vault/CHANGELOG.md` - Add Cycle 5 entry documenting all deliverables
- `vault/index.md` - Update stats (total files, NPC count, faction count)

---

## Deliverables Summary

**New files (9 total):**
- 1 proto-faction file (Highland Workers Coalition)
- 6 NPC files (Kael Torrn, Lira Venn, Torvin Marks, Dessa Kord, Halden Cray, Mira Voss)
- 1 landmark file (Halfway Burn Site)
- 1 map data update

**Modified files:**
- NPCRegistry.md (+6 NPCs)
- CHANGELOG.md (Cycle 5 entry)
- index.md (vault stats update)
- data/wylderan/map-data.json (3 new landmarks)

**Total new content estimate:** ~600-700 lines

**Implications revealed for future cycles:**
- Forge Council faction file (gap identified by lorekeeper)
- Informant NPCs (Rennic Vale, Thom Harrow) could get full files
- Strike event (when/if coalition actually strikes)
- Cartel counter-insurgency response
- Winter stockpile crisis (separate thread from Cycle 4)
- Jorin Velk's claim war (separate thread from Cycle 4)

---

## Phase 4 Execution Order

1. **Writer1:** Create proto-faction file + Halfway Burn Site landmark (PARALLEL, no dependencies)
2. **Characterwriter:** Create 6 NPC files (PARALLEL, no dependencies)
3. **Cartographer:** Update map data (CAN START IMMEDIATELY, no dependencies on above)
4. **Lorekeeper:** Audit all deliverables when complete (SEQUENTIAL, waits for 1-3)
5. **Writer1:** Update CHANGELOG + index after audit passes (SEQUENTIAL, waits for 4)

**Estimated Phase 4 duration:** 10-15 minutes (parallel execution)

---

## Success Criteria

- [ ] Highland Workers Coalition proto-faction file created (60-80 lines)
- [ ] Halfway Burn Site landmark created (50-80 lines)
- [ ] 6 NPC files created (60-90 lines each)
- [ ] Map data updated with 3 new landmarks
- [ ] Lorekeeper audit passes with zero contradictions
- [ ] NPCRegistry updated (+6 NPCs)
- [ ] CHANGELOG updated (Cycle 5 entry)
- [ ] Index updated (vault stats)
- [ ] All wikilinks resolve
- [ ] All frontmatter complete

**Ready to proceed to Phase 4 (Build).**
