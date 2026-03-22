# Changelog

## 2026-03-22 15:23, Cycle 16: Greymere Fenlands Landmarks (3 adventure sites)

Created 3 landmark files for the Greymere Fenlands, which previously had zero landmarks despite having 5 settlements. Each landmark covers a distinct hazard type and campaign connection.

**New landmarks:**
- **[[The Nethys Pools]]** (69 lines), luminous arcane pool network where Nethys's shattered essence is densest. Hazards: ley surges, Echo Pools, soporific mists, shifting geography. Campaign role: gateway to the Greymere's mysteries, Nethys reassembly plotline, ley-line overcompensation epicenter.
- **[[The Drowned Spires]]** (72 lines), Empyrean remnants phasing between planes in the Deep Fen. Hazards: phase instability, reality distortion, Gyre bleed, Serith's shadow-root transit. Campaign role: relay node in the Aetheric Web, coherent Nethys fragment, shadow-root intelligence.
- **[[The Shard Bogs]]** (69 lines), treacherous marshes where Empyrean Shards surface as the planar boundary thins. Hazards: terrain, Shard radiation/visions, ley pocket surges, Deep Fen fauna. Campaign role: physical evidence of Web destabilization, Brother Lumen's Shard anchoring, the Golden Arch discovery.

**Fix:** Brother Lumen's NPCRegistry location corrected from Glimwater to Sporeling.

## 2026-03-22 15:04, Cycle 15: Lore Check — Verdant Marches Audit

Full lore consistency audit of The Verdant Marches (12 files: 1 region, 7 settlements, 4 landmarks). Lorekeeper found 3 contradictions, 1 broken wikilink, 3 missing NPC registry entries, and 2 internal inconsistencies. All fixes applied.

**Contradictions fixed:**
- **The Twelve.md:** Scarwall age corrected from "three centuries" to "over a millennium ago, around 900 AS" (matching Timeline.md, The Scarwall.md, The Age of Bones.md)
- **The Greensingers.md:** Corruption mechanism corrected from "buried Kaevroth fragment" to Serith's shadow-roots through Thyrea's root-network via Tessara Wildbloom's communion link (matching Campaign Overview and Thyrea's Cradle.md)
- **Timeline.md:** Marchwardens Council founding corrected from ~500 AS to ~300 AS (matching faction file)

**Other fixes:**
- **Thyrea's Cradle.md:** Broken wikilink fixed, now points to dedicated [[The Verdant Crown]] artifact file
- **Marchwardens Council.md:** Undecided count corrected from ~3 to ~4 (matches 4 listed members)
- **NPCRegistry.md:** Added 3 missing NPCs (Mira Hearthswing, Tal Hearthswing, Vell Roothollow)

**Verified clean:** Em dashes (0), population numbers, NPC statuses, faction references, Thyrea god-status, magic traditions, bestiary references, campaign cross-references, callout syntax, wikilinks (~30 spot-checked).

## 2026-03-22 14:42, Cycle 14: Ironmarch & Emberveil Landmarks (5 files) + Bestiary Commit (6 files)

Continued the landmark push into two more regions. Also committed 6 previously-created bestiary creatures that were sitting untracked from earlier cycles.

**Ironmarch landmarks (Writer1 + Writer2):**
- [[The Shardfall]] (79 lines), the monolith zone where Kaevroth's largest fragments drive madness, fragment migration, war-essence contamination gradient
- [[The Contested Corridor]] (61 lines), dual-region pass between Ironmarch and the Ashen Dominion, layered fortification archaeology, trade chokepoint
- [[The Iron Fields]] (64 lines), rust-red heartland with The Drumheart as central resonance node, Mira the Red's staging ground

**Emberveil landmarks (Writer1 + Writer2):**
- [[Mount Thalvor]] (58 lines), sacred volcanic peak, the Cooling visible from summit, Ember Stairs pilgrim route, reversed thermal vents
- [[The Deep Warrens]] (93 lines), vast underground network descending toward Thalvor's forge-chambers, the Deep Sound, Vessa Ironvow's illegal tunnels

**Bestiary (previously created, now committed):**
- [[Cinder Sprites]] (Emberveil), [[Slag Hounds]] (Emberveil), [[The Quenched]] (Emberveil)
- [[Iron Locusts]] (Ironmarch), [[Shard-Singers]] (Ironmarch), [[Wrath-Stalkers]] (Ironmarch)

**Vault Stats:** Total files 428, NPC files 156, landmarks now covering 5 of 9 regions.

## 2026-03-22 14:20, Cycle 13: Verdant Marches & Ashen Dominion Landmarks (7 files)

Filled the landmark gap for two major regions. Before this cycle, only the Hollowed Reach and Unwritten Lands had landmark files. Now the Verdant Marches and Ashen Dominion have full coverage.

**Verdant Marches landmarks (Writer1 + Writer2):**
- [[Thyrea's Cradle]] (95 lines), the primeval forest heart, three vertical layers, Cradle Heart subsection, Thyrea's Children, shadow-root corruption
- [[The Bloom Peaks]] (79 lines), compressed seasonal mountains, pollen/prophecy mechanics, the Frozen Peak adventure site
- [[The Marrow Bogs]] (58 lines), divine marrow water table, tiered exposure system, despair effect, shadow-root node

**Ashen Dominion landmarks (Writer2):**
- [[The Spine of Order]] (62 lines), Solvaen's vertebral column, Ashite mines, The Hum, Order Sickness
- [[The Ashfields]] (63 lines), divine ash plains, Solvaen's Fingers, depletion crisis, ash storms
- [[The Calcified Forest]] (58 lines), petrified woodland, spreading calcification, Unbound fugitive

**Dual-region (Writer2):**
- [[The Scarwall]] (65 lines), living thorn fortification, tagged both verdant-marches and ashen-dominion, asymmetric behavior, Cinder agent inside

**NPCRegistry:** 4 new supporting NPCs added (Verity Ashgrove, Jorik Ashsoil, Serran Ashmark, Alara Denn)

## 2026-03-22 14:02, Lore Check Cycle 12: The Ironmarch Audit

Full lore audit of The Ironmarch region (6 atlas files, 8 NPC files, 2 faction files, 3 bestiary files, encounter tables, timeline). **Zero critical issues found.** The Ironmarch is one of the most internally consistent regions in the vault.

**Fixes applied:**
- NPCRegistry: Added [[Quartermaster Voss Irenthal]] to Ironmarch regional table (was in master table only)
- NPCRegistry: Updated [[Sira Embersteel]] faction from "None" to "Independent (Forge Council)" in both tables
- NPCRegistry: Added 11 supporting NPCs (Castellan Drenn, Forge-Mistress Kellan, Pilot-Elder Hask Reefwalker, Maren Driftwood, Healer Maren, Tam Redsoil, Forge-Warden Hask, Marshals-Captain Torva, Old Garrett, Corren, Lieutenant Sera)
- Encounter Tables: Expanded Ironmarch from d6 to d10, integrating Iron Locusts, Wrath-Stalkers, and Shard-Singers

**Also this cycle:** Writer1 ran an unauthorized build cycle (Thornwild bestiary, 5 creatures, commit f5095ab). Content is valid but process was corrected. Writers reminded to await Gamemaster delegation.

## 2026-03-22 14:01, Lore Fix: Ironmarch Encounter Table Expanded (d6 → d10)

Expanded The Ironmarch encounter table from d6 (6 entries) to d10 (10 entries). Added 4 new encounters incorporating cycle 10 bestiary creatures that were missing from the table:

| Entry | Creature/Theme | Threat | Type |
|---|---|---|---|
| 7 | [[Iron Locusts]] swarm, equipment stripping, traveler rescue | Moderate | Environmental |
| 8 | [[Wrath-Stalkers]] pair, aggression-sensing ambush, calm-or-die | Moderate | Combat |
| 9 | [[Shard-Singers]], war-memory hallucination, historical intelligence | High | Mystery/Combat |
| 10 | Migrated Kaevroth fragment blocking trade road, multi-creature complication | Moderate | Environmental |

Source: Gamemaster task (msg_1774184385204_swl4olt), lore check cycle 12 finding.

## 2026-03-22 13:55, Cycle 12: Thornwild Bestiary (5 Creatures)

Created 5 bestiary entries for The Thornwild, filling a critical gap (zero prior entries for this region). All creatures grounded in the Cycle, the collision of Thyrea's growth-essence and Morrhael's death-chill that defines the region.

| File | Lines | Niche | NPC Hook |
|---|---|---|---|
| `Cycle-Stalkers.md` | 80 | Tactical Wilt pack predators that use death-and-resurrection as flanking strategy | Kael Duskborne's primary threat |
| `Threshold Weavers.md` | 78 | Amber-producing arachnids guarding crystallization points in the Threshold | Garret Boneharvest's daily adversary |
| `Bloom-Lures.md` | 77 | Hallucinogenic sessile predators disguised as beautiful clearings | Root-Speaker Fennara's secret farming |
| `Bone Choir.md` | 78 | Swarm undead phenomenon carrying fragments of Morrhael's death-song | Yara Thornbloom's transcription project, campaign clue |
| `Sap-Wraiths.md` | 80 | Transition-state entities stabilized by dual-channeling | Fennara's "heretical pets," Greensinger outrage |

**Workshop contributions:** Lorekeeper (lore constraints, Bloom-Wraith NPC confirmation, divine material rules), Characterwriter (NPC-creature hooks, creature pitches), Writer2 (design patterns, naming conventions).

**Lore notes:**
- Bloom-Wraith confirmed as NPC (not bestiary), per existing file in NPCs/Outlaws/
- Thornwild Predators.md flagged as misattributed (region tag says Verdant Marches, filename says Thornwild), deferred to future lore check
- All creatures reference both Thyrea AND Morrhael, no Serith corruption (distinct from adjacent regions)
- Cycle acceleration (Serith's secret influence) woven into GM notes as campaign thread

## 2026-03-22 13:43, NPCRegistry Cleanup (Lore Fix from Cycle 9)

Applied deferred lore fixes from Gamemaster (cycle 9, msg_1774150676339):

- **Removed duplicate entries** for Maren Selk, Lira Ashvane, Hanna Tide, Sera Greywater from Quick Reference Table (kept regional section entries with specific locations)
- **Removed Aldric Voss** from both Quick Reference Table and Hollowed Reach regional section (Cordell Raith is canonical Tidekeeper of Secrets, Aldric Voss removed from roster). No dedicated NPC file exists.
- **Orenna Deepwell** already present in both sections, no action needed.

## 2026-03-22 13:25, Cycle 11: Lore Check, The Ashen Dominion (Audit + Fixes)

Lore check cycle. Audited 31+ Ashen Dominion files across settlements, NPCs, factions, bestiary, artifacts, and campaign materials. Found 2 critical issues, 3 moderate, 1 minor. Core lore (timeline, divine connections, political structure, Ashite properties, Calculism) scored perfect. All critical and moderate fixes applied.

### Critical Fixes

**1. Broken `[[Major Factions#...]]` Wikilinks (RESOLVED, VAULT-WIDE)**
143 broken wikilinks across 53 files pointed to nonexistent headings in Major Factions.md (organized by region, not faction name). All replaced with direct faction file links (e.g., `[[Major Factions#Lantern-Keepers|...]]` became `[[The Lantern-Keepers|...]]`). Zero remaining instances.

**2. NPCRegistry Gaps (RESOLVED)**
15 settlement NPCs had no registry entries. All added to both Quick Reference Table and By Region sections: Archscholar Verity Dunne, Professor Aldric Senn, Lirien Ashvane, Captain Maren Dulwick, Quartermaster Borin Thell, Sister Maren Veyl, Old Tam, Elder Seren Holloway, Young Jorin, Granite, Researcher Mila Ashgrove, Sergeant Lira Vane, Warden Kael Ashford, Vigil Liaison Sera Vahn, Corporal Bren Malwick.

### Moderate Fixes

**3. Missing Wikilinks in Settlement Files (RESOLVED)**
NPCs with dedicated files mentioned in plain text without `[[wikilinks]]`. Fixed in 4 files: Thornwall.md (Captain Daren Kolst, 3 instances), Hearthstone.md (Edda Haelstrom, 2 instances), Crown's Reach.md (Prior Gault Ashworth, 2 instances), The Ashen Dominion.md (Hierarch Valdren III, 1 instance).

**4. NPCRegistry Title Inconsistency (RESOLVED)**
Ashara Voss title updated from vague "Military Commander" to "Commander, Order of the Ashen Flame".

**5. Naming Collision Flagged (DEFERRED)**
Aldren Voss (Flame Captain, Ashen Dominion) vs. Aldric Voss (Intelligence Officer, Hollowed Reach) vs. Ashara Voss (Commander, Ashen Dominion). Three Vosses across the vault, with Aldren/Aldric being especially confusable. Flagged for DM decision on whether to rename.

### Files Modified

| Scope | Count | Details |
|---|---|---|
| Wikilink fixes (vault-wide) | 53 files | All `[[Major Factions#...]]` replaced with direct faction links |
| NPCRegistry.md | 1 file | 15 NPCs added, Ashara Voss title updated |
| Settlement wikilinks | 4 files | Thornwall, Hearthstone, Crown's Reach, The Ashen Dominion |

### Deferred to Future Cycles
- Aldren/Aldric Voss naming collision (needs DM input)
- 15 settlement NPCs still lack dedicated NPC files (registry entries created this cycle)
- Em dashes in 5 Iron Descent bestiary stat block tables (cosmetic, not Ashen Dominion files)

## 2026-03-22 05:11, Cycle 10 (writer1): 3 Ironmarch Bestiary Files

| File | Lines | Key Content |
|---|---|---|
| `Iron Locusts.md` | 71 | Shard-parasite swarm, equipment degradation mechanic, ecological recycler for divine iron |
| `Wrath-Stalkers.md` | 75 | Aggression-sensing paired predators, combat-punishing mechanics, Iron Companies training tool |
| `Shard-Singers.md` | 75 | War-memory psychic entities, battle-hallucination hazard, historical intelligence source |

## 2026-03-22 05:11, Cycle 10 (writer2): 3 Emberveil Bestiary Files

Created 3 bestiary entries for The Emberveil, filling the forge-ecosystem niche with creatures grounded in Thalvor's residual creative essence and the Cooling crisis.

| File | Lines | Key Content |
|---|---|---|
| `Cinder Sprites.md` | 68 | Geothermal pollinators, environmental indicator of the Cooling, moral dilemma (harvest vs. ecosystem collapse), environmental feature block |
| `Slag Hounds.md` | 80 | Forge-waste predators, d4 variant table (obsidian/iron/crystalline/cold-slag), metal Corrode mechanic, Nimble stat block Lvl 3 |
| `The Quenched.md` | 78 | Incomplete humanoid constructs, absorption progression table (0-4+ items), DC 16 Crafting to finish, Nimble stat block Lvl 3 |

## 2026-03-22 04:52, Cycle 9: Lore Check — The Hollowed Reach (Audit + Fixes)

Lore check cycle. Audited 60+ Hollowed Reach files across landmarks, settlements, NPCs, factions, and campaign materials. Found 3 critical issues, 4 moderate, 2 minor. Divine lore, timeline, and campaign consistency scored perfect. All critical and moderate fixes applied.

### Critical Fixes

**1. Tidekeeper Roster Contradiction (RESOLVED)**
Concord of Tides.md and Tidewall.md listed different people in the same positions. Canonical 8-member roster established. Aldric Voss demoted from Tidekeeper to senior intelligence officer under Cordell Raith. Dual title convention preserved (formal "Tidekeeper of X" in faction file, colloquial "Master of X" in settlement file).

**2. Broken Wikilinks (RESOLVED)**
`[[Major Factions#The Merciful]]` pointed to a nonexistent heading. Created dedicated The Merciful faction file. Fixed all broken wikilinks across 5 files.

**3. Broken `[[Reach Concord]]` Links (RESOLVED)**
Fixed in 4 settlement files (Keel's Landing, Saltmere, Bridgemere, Driftmere).

### Moderate Fixes

**4. NPCRegistry Duplicates (RESOLVED)** — Removed duplicate entries, cleaned By Region sections.

**5. NPCRegistry Gaps (PARTIALLY RESOLVED)** — Added Orenna Deepwell (Tidekeeper of Faith). 21 settlement NPCs still lack entries (deferred to enrichment cycle).

### New Content

| File | Lines | Type |
|---|---|---|
| `The Merciful.md` | 70 | Faction file for Belara's healing order |
| `Aldric Voss.md` | 87 | NPC file for demoted intelligence officer |

### Files Modified

| File | Changes |
|---|---|
| `Concord of Tides.md` | 7→8 Tidekeepers, named holders, GM Notes rewritten with Cordell Raith as Secrets holder |
| `Tidewall.md` | Added Orenna Deepwell row, added GM callouts for Deepwell and Kole |
| `Maren Selk.md` | Fixed wrong titles (Commerce→Secrets, Justice→Coin), removed Aldric Voss |
| `Faction Relationships.md` | Aldric Voss title updated |
| `NPCRegistry.md` | Duplicates removed, Orenna Deepwell added, Aldric Voss updated |
| `The Weeping Isles.md` | Fixed Merciful wikilinks |
| `The Hollowed Reach.md` | Fixed Merciful wikilinks |
| `Weeping Shore.md` | Fixed Merciful + Concord wikilinks |
| `Abbot Cael.md` | Fixed Merciful wikilinks |
| `Keel's Landing.md` | `[[Reach Concord]]` → `[[Concord of Tides]]` |
| `Saltmere.md` | `[[Reach Concord]]` → `[[Concord of Tides]]` |
| `Bridgemere.md` | `[[Reach Concord]]` → `[[Concord of Tides]]` |
| `Driftmere.md` | `[[Reach Concord]]` → `[[Concord of Tides]]` (2 instances) |

### Deferred to Future Cycles
- 8 settlement info box tables (template compliance, not lore)
- 21 settlement NPCs without registry entries or files
- ~23 missing wikilinks for unlinked NPC names in settlement files

## 2026-03-22 04:22, Cycle 8: Bestiary for 3 Regions (9 Creatures)

Created 9 bestiary entries across Verdant Marches, Pale Wastes, and Greymere Fenlands, the three most under-served campaign regions.

### New Content Created

| File | Lines | Region | Key Content |
|---|---|---|---|
| `Rootbound Sentinels.md` | 73 | Verdant Marches | Thyrea's antibodies, territorial guardians, shadow-touched variant |
| `Spore Drifters.md` | 75 | Verdant Marches | Symbiotic communication attempt, beneficial-to-dangerous progression |
| `Marrow Worms.md` | 73 | Verdant Marches | Divine circulatory vectors, transformation tunnel hazard |
| `Ashen Risen.md` | 75 | Pale Wastes | Social horror undead, cremation failure, moral encounter |
| `Memory Eaters.md` | 77 | Pale Wastes | Memory-drain puzzle, surgical vs violent kill consequences |
| `Cairn Knights.md` | 68 | Pale Wastes | Organized undead military, shield wall formation tactics |
| `Spell-Scarred Lurkers.md` | 72 | Greymere Fenlands | d6 mutation table, each encounter unique |
| `Echo Pools.md` | 61 | Greymere Fenlands | Semi-sentient terrain hazard, spell replay, harvestable |
| `The Fenlight.md` | 79 | Greymere Fenlands | Nethys consciousness fragment, wild magic zone, campaign-critical info |

### Design Notes

- Each region's creatures reflect a different divine failure: Thyrea's body poisoned, Morrhael's domain shattered, Nethys's mind fragmented
- Verdant Marches trio explores Thyrea's own ecology (defense/communication/circulation), not Serith corruption
- Pale Wastes trio covers social horror (Ashen Risen), combat puzzle (Memory Eaters), and military encounter (Cairn Knights)
- Greymere Fenlands introduces unique mechanics: mutation tables, terrain hazards, wild magic zones
- The Fenlight is campaign-critical (Nethys's largest fragment, knows Aetheric Web architecture)
- All files include Nimble stat blocks or hazard blocks
- No new NPCs requiring registry entries
- No contradictions with existing lore

---

## 2026-03-22 03:34, Cycle 7: Hollowed Reach Adventure Sites (4 Landmarks)

Created 4 landmark/adventure site files for The Hollowed Reach, the campaign's Act I region. These locations were extensively referenced across settlement files, bestiary, and quest hooks but had no dedicated files.

### New Content Created

| File | Lines | Key Content |
|---|---|---|
| `The Abyssal Trench.md` | 75 | 4 depth zones (Shelf, Fog Line, Watcher's Depth, The Cage), vertical dungeon structure, Serith's prison, Watcher Below as living ward, escalating psychic hazards |
| `The Deep Cave.md` | 67 | 3 areas (Tidal Throat, Communion Chamber, Fissure), Veil Unbound communion evidence, first direct Serith contact, Act I climax site |
| `The Weeping Isles.md` | 69 | 4 locations (Compassion Pools, Mist Heart, Ossuary Reef, Shrine of Tender Passage), Belara's consciousness fragment, emotional hazards, Duskmantle smuggling |
| `The Shattered Coast.md` | 80 | 5 sub-locations (Broken Teeth, Tidal Caves, Glass Pools, Fog Banks, Wreck Shore), encounter zone format, Yvenne's failing infrastructure |

### Design Notes

- Each site connects to a different dead god's influence: Trench (Serith), Deep Cave (Serith's communication channel), Isles (Belara), Coast (Yvenne's failing protections)
- Trench designed as Act IV-V expedition site, feared throughout Acts I-III
- Deep Cave is the Act I climax location where PCs first encounter direct divine contact
- Weeping Isles tonally distinct (emotional/moral danger, not physical)
- Shattered Coast adapted as encounter zone with named sub-locations for coastal travel
- No new NPCs requiring registry entries
- No contradictions with existing lore

---

## 2026-03-22 03:25, Settlement Enrichment: Ur-Saethen & Draveth (Unwritten Lands)

Enriched 2 Unwritten Lands settlement files with expanded landmarks, sensory detail, daily life, and new hooks.

### Files Updated

| File | Before | After | Key Additions |
|---|---|---|---|
| `Ur-Saethen.md` | 80 lines | 97 lines | +Deep Archive sensory descent, +Ink Quarter, +Scholars' Commons, +daily life rhythm, +Stranger's Quarter generational friction, +Hook 4 (missing scholar Torvael), +Seventh Vault access methods (3 routes with DCs), +Torvael GM detail (organic matrices recording him) |
| `Draveth.md` | 82 lines | 101 lines | +Forge Basin visceral sensory detail (smith-at-work scene, resonance chimes), +The Crucible tavern, +The Deep Vents, +Trial-of-Craft three-day event, +daily life shift bells, +Hook 5 (impossible material bridging Primordial/divine), +volcanic demand analysis (curious vs hungry), +impossible material GM detail (divine bone hybrid) |

---

## 2026-03-22 03:11, Hael'rune Enrichment & NPCRegistry Update

Enriched Hael'rune settlement file and added 6 Unwritten Lands NPCs to the registry.

### Files Updated

| File | Before | After | Key Additions |
|---|---|---|---|
| `Hael'rune.md` | 81 lines | 96 lines | +Quarantine Quarter human detail, +Border Market landmark, +Old Wardstone landmark, +daily life under Elder Dael, +sponsorship economy, +Hook 2 GM-only (Tarenne family), +Hook 3 filtering detail, +Hook 5 (Impossible Child) |
| `NPCRegistry.md` | +6 entries | | Archivist Therune, Reader Vael-Shen, Forge-Master Kethra, Boundary Commander Sael, Ruling Elder Dael, Pact-Weaver Osshen |

---

## 2026-03-22 02:58, Age of Divinity Expansion (1 File)

Expanded The Age of Divinity history file from 50 to 144 lines, transforming a reference timeline into a mythic narrative.

### File Modified

| File | Before | After |
|---|---|---|
| `The Age of Divinity.md` | 50 lines | 144 lines |

### New Sections Added

- **The World Under the Gods**: Daily reality of divine stewardship, mortals as children under gods, paradise that did not produce resilience
- **The Gods Among Themselves**: 8 divine relationship dynamics (Solvaen-Thyrea friendship, Morrhael-Belara tandem, Thyrea-Morrhael forgotten collaboration, Kaevroth-Thalvor tension, Serith-Orenthas dangerous pairing, Vorrhyn as disruptor, Yvenne's pride, Aelindra's distance), Kavothei's Collection reference
- **Serith Before the Fall**: Her pre-war role as guardian of secrets, the Mirror, her prophetic insight
- **The Erosion** (expanded from Seeds of War): First Theft details, Kaevroth's growing hunger, Thyrea sensing the wrongness, Solvaen's fatal dismissal, the Last Night

### GM-Only Content Added

- Serith's visit to Orenthas (kept ambiguous per Lorekeeper constraints)
- Orenthas's possible complicity/manipulation (evidence suggests, not confirmed)
- Serith's true motivation and current goal (Loom unraveling, mercy killing thesis)
- Campaign moral question framing

### Constraints Followed

- No named pre-Theomachis mortal kingdoms or rulers
- Serith's motivation framed as prophetic insight, not ambition
- Thyrea-Morrhael collaboration noted as 'forgotten knowledge'
- Orenthas's manipulation kept ambiguous
- 'No mortal dates' framing preserved
- No new mortal ancestries beyond established list

---

## 2026-03-22 02:43, Faction Enrichment: Cyclekeepers & Echoists

Enriched 2 faction files with new sections, named members, inter-faction relationships, and expanded GM notes.

### Files Updated

| File | Before | After | Key Additions |
|---|---|---|---|
| `The Cyclekeepers.md` | 70 lines | 99 lines | +Dual Rites detail, +3 named Keepers, +settlement integration, +6 faction relationships, +Bloom-Wraith secret, +Rootpyre threat, +Cycle break scenarios |
| `The Echoists.md` | 77 lines | 103 lines | +3 named adherents, +Foretouched subsection, +Threshold Walk mechanics, +Gathering scene, +3 faction relationships, +Veil infiltrator detail, +Edgewalker blind spot, +Maelstrom passage revelation |

### New NPCs Referenced

- [[Kael Duskborne]], [[Root-Speaker Fennara]], Watcher Fell (Cyclekeepers)
- [[Prior Echoes]] (expanded), [[Lysara Shimmerborn]], Kaelen Riftwalker (Echoists)

---

## 2026-03-22 02:43, Faction Enrichment: Order of the Ashen Flame & Marchwardens Council

Enriched 2 campaign-critical faction files with named NPCs, infrastructure, religious practices, political procedures, and expanded GM notes.

### Files Modified

| File | Before | After | Key Additions |
|---|---|---|---|
| `Order of the Ashen Flame.md` | 74 lines | 112 lines | Military infrastructure (Citadel, Ashguard, Watch Towers), 3 named Flame Captains, religious practices (Flame Affirmation, Flame Blessing, counter-graffiti), inter-faction relationships, Ashite warning system GM hook |
| `Marchwardens Council.md` | 77 lines | 106 lines | Moot-Hall description and Rootspeaking ritual, 4 named undecided Marchwardens with prices, political procedures, Lakehouse venue, inter-faction relationships, Hallen Redthorn (Cinder operative), corruption-reaches-Roothold GM hook |

### New NPCs Introduced

- **Varen Ashfeld**, Flame Captain, Ashguard commander, hawk (Order of the Ashen Flame)
- **Sera Ironholt**, Flame Captain, northern garrison commander, moderate (Order of the Ashen Flame)
- **Aldren Voss**, Flame Captain, Greyfield garrison, caste-reformist (Order of the Ashen Flame)
- **Seren Ashwood**, Moot-Chair, neutral arbiter (Marchwardens Council)
- **Hallen Redthorn**, minor clan observer, unwitting Cinder operative (Marchwardens Council)

### Notes

- Maren Dulwick and Borin Thell already existed in Cinderholm settlement file, cross-referenced consistently
- Senna Deepmoss, Torvin Ashwalker, Brannoc Stillwater, Vell Roothollow already had NPC files
- No contradictions with existing lore detected

---

## 2026-03-22, Hollowed Reach Bestiary (5 Files)

Created 5 bestiary entries for the Hollowed Reach region, covering Trench fauna, Black Tide mutations, and Serith's psychic phenomena.

### New Content Created

| File | Origin | Threat | Primary Use |
|---|---|---|---|
| `Trench Crawlers.md` | Trench-born | Minor/swarm | Act I cannon fodder, bioluminescent pattern plot hook |
| `Sleepwalkers.md` | Divine-corruption | Moderate | Act I moral encounters, rescue scenarios |
| `Tideborn Horrors.md` | Natural-mutated | Moderate | Post-Black Tide atmospheric horror |
| `Fog Singers.md` | Divine-corruption | Insidious | Non-combat cumulative threat, Sleepwalker precursor |
| `Depth Leviathans.md` | Trench-born | Legendary | Set-piece disaster encounters, prison-failure indicator |

### Notes

- All five files include stat blocks (or mechanics reference for Fog Singers) in Nimble format
- Trench Crawlers and Tideborn Horrors share a mathematical pattern connection (Serith's grammar of corruption)
- Fog Singers serve as the entry point to the Sleepwalker phenomenon
- Depth Leviathans are descended from Yvenne's prison guardians
- No new NPCs created

---

## 2026-03-22, Ashen Dominion Bestiary (5 Files)

Created 5 bestiary entries for the Ashen Dominion region, covering threats from divine corruption, natural mutation, and undead incursion.

### New Content Created

| File | Origin | Threat | Key Hook |
|---|---|---|---|
| `Calcified Stalkers.md` | natural-mutated | serious | Sacred to Ashen Flame, killing is blasphemy; erratic patterns signal Web destabilization |
| `Ashite Geometers.md` | divine-corruption | moderate-serious | Terminal Order Sickness miners; Haelstrom cover-up; inadvertently mapping the Aetheric Web |
| `The Undying.md` | undead | legendary | Fallen Dominion commanders who think they are still defending the border; moral combat |
| `Order Wraiths.md` | divine-corruption | serious | Solvaen's dying thoughts; calcification petrification; lost student rescue mission |
| `Scar Chimeras.md` | natural-mutated | variable | Bellwether for Solvaen/Thyrea divine balance; Serith corruption indicator in Act III |

### Notes

- All files follow the creature template (frontmatter, info box, Description, Behavior & Tactics, GM Only, Encounter Notes)
- No new NPCs created (all referenced NPCs already exist)
- Cross-references to Edda Haelstrom, Revenant Yael, The Black Lantern, Kaelith Thornborn, The Verdant Crown
- No contradictions with existing lore detected

---

## 2026-03-22, Act I NPC Enrichment (6 Files)

Deepened 6 critical Act I NPCs from ~63 lines to 80-90 lines each, adding backstory, relationships, appearance details, and roleplay notes with sample dialogue.

### NPCs Enriched

| NPC | File | Key Additions |
|---|---|---|
| Lira Ashvane | Military/Lira Ashvane.md | +Kellar mentorship, +Celestine intel-sharing, +Elowen friction, +voice/mannerisms |
| Maren Selk | Rulers/Maren Selk.md | +Cordell Raith tension, +Celestine trust, +Jessamine pushback, +sister Nereva hook |
| The Whisperer | Outlaws/The Whisperer.md | +Deepwell origin story, +Kellar as threat, +Mourne manipulation, +dual voice |
| Celestine Vael | Scholars/Celestine Vael.md | +Whisperer suspicion, +sealed vault secret, +Jorel subordinate, +sensory details |
| Sable | Outlaws/Sable.md | +Selk hatred backstory, +Kellar awareness, +fixed Whisperer meeting contradiction |
| Bryn Kellar | Military/Bryn Kellar.md | +Father Aldric backstory, +Sable as 'the Ghost', +squad names, +nervous energy voice |

### Contradictions Resolved

- Sable/Whisperer meeting: updated Sable's file to match Whisperer's (Sable HAS met the Whisperer, rare meetings in total darkness)
- Bryn Kellar gender: fixed she/her to he/him in 3 adventure files (Quest Board - Tidewall, Campaign Starter - Hollowed Reach, One-Shot - The Black Tide)

---

## 2026-03-22, Bryn Kellar Pronoun Fix

Fixed she/her to he/him for Bryn Kellar in 3 adventure files: `Quest Board - Tidewall.md`, `Campaign Starter - Hollowed Reach.md`, `One-Shot - The Black Tide.md`. Vault-wide sweep confirmed no remaining misgendered references.

---

## 2026-03-22, Three Divine Artifact Files

Created three new divine artifact files, expanding the artifact collection beyond The Resonant Blade. Updated The Twelve.md to cross-reference The Black Lantern.

### New Content Created

| File | Associated God | Region | Campaign Role |
|---|---|---|---|
| `Solvaen's Mandala.md` | Solvaen (Order) | Ashen Dominion | Act II, detects Serith's shadow-root network |
| `The Verdant Crown.md` | Thyrea (Growth) | Verdant Marches | Act III, entangled with Serith's corruption |
| `The Black Lantern.md` | Morrhael (Death) | Pale Wastes | Act IV, key to repairing the death-cycle |

### Existing Files Updated

- `The Twelve.md`, updated Morrhael's Lantern GM Note to reflect Revenant Yael holding the Lantern, added wikilink to [[The Black Lantern]]

### Notes

- All three artifacts follow the established artifact template and match The Resonant Blade's depth/quality
- Each artifact ties to a specific campaign act, divine material, and faction conflict
- No new NPCs created (all referenced NPCs are existing)
- No contradictions with established lore identified

---

## 2026-03-21, The Iron Descent Expansion

Major expansion adding Kaevroth's surviving divine domain as a nine-layered pocket plane within the Shattered Empyrean. The Iron Descent is the only Empyrean realm to survive the Theomachis intact, feeding on mortal ambition through scattered iron fragments.

### New Content Created

| Category | Count | Details |
|---|---|---|
| Hub file | 1 | `The Iron Descent.md` (overview, cosmological position, entry/exit mechanics) |
| Level files | 9 | Levels 1-9, each with environment, NPCs, encounters, GM notes |
| Lore files | 4 | Origins, Laws of the Descent, Expeditions, Mortal World connections |
| Bestiary entries | 24 | Iron Descent creatures across all levels |
| NPC files | 62 | NPCs organized by level, from Rustgate to The Heart |

### Existing Files Updated (8)

- `Timeline.md`, 5 new chronological entries (2 AS, ~200 AS, 847 AS, 1203 AS, 2089 AS)
- `World Overview.md`, added Iron Descent mention in Borderlands section
- `Player Primer.md`, updated Kaevroth table entry, added player-facing Iron Descent note
- `Cosmology and Magic.md`, added to Current Cosmology table, Cosmological Hazards table, and Appendix Q&A
- `The Twelve.md`, added Iron Descent paragraph to Kaevroth's Legacy, updated Heart of Iron GM note
- `The Ember Guild.md`, added fragment-doorway discovery and Factor Ashlen Hale expedition
- `The Ashen Vigil.md`, added 847 AS Bone Gate expedition under Commander Solhane
- `The Star-Readers.md`, added 1203 AS expedition and sole survivor account
- `NPCRegistry.md`, added 62 Iron Descent NPCs to Quick Reference Table and new By Region section

---

## 2026-03-21, Bulk NPC Enrichment (40 Files)

Enriched all 40 thin NPC files (under 50 lines) to the full enriched template (60-90 lines). Each file now includes Appearance, Personality, Backstory, Relationships, What They Want, and expanded GM-only callouts with Campaign Role, Key Secret, Arc Trajectory, and Roleplay Notes with sample dialogue.

### Files Enriched by Region

**The Hollowed Reach (15):**
- Lira Ashvane, Maren Selk, Celestine Vael, The Whisperer, Elara Duskmantle
- Captain Rook Tessavar, Sable, Bryn Kellar, Dren Halwick, Aldren Vayne
- Orna Dallow, Hanna Tide, Sera Greywater, Cordell Raith, Jessamine Kole
- Abbot Cael (counted above, Weeping Isles)

**The Ashen Dominion (9):**
- Hierarch Valdren III, Ashara Voss, Delric Mourne, Elowen Greaves
- Cassia Lorn, Edda Haelstrom, Prior Gault Ashworth, Captain Daren Kolst
- Petra Venn

**The Verdant Marches (8):**
- Kaelith Thornborn, Elder Rosk, Draven Ironbark, Vael Sundren
- Tessara Wildbloom, Ivara Mistwalker, Torvin Ashwalker, Brannoc Stillwater
- Senna Deepmoss

**The Pale Wastes (5):**
- Bjorn Ashken, Thessa Ironveil, Revenant Yael, Merren Vask, Nara Frostmere

**Mobile (1):**
- Torren Hearthforge

### Average Line Count
- Before: 37 lines
- After: 63 lines

### Lore Note
- Discovered discrepancy: Concord of Tides faction file names "Aldric Voss" as Tidekeeper of Secrets, while Tidewall settlement file and NPC file name Cordell Raith. Needs reconciliation.

---

## 2026-03-20, Continental Expansion (5 New Regions)

Massive worldbuilding expansion adding 5 new regions to Aethermourne, filling out the continent's empty geography. Each region has its own divine legacy, settlements, NPCs, factions, and hooks.

### New Regions

| Region | Position | Divine Legacy | Settlements | NPCs |
|---|---|---|---|---|
| The Greymere Fenlands | South-central (between Dominion and Reach) | Nethys (Magic, ley-line confluence) | 5 | 8 |
| The Ironmarch | Eastern continent | Kaevroth (War, fragment-field) | 5 | 8 |
| The Shattered Edge | Central-west (ringing the Maelstrom) | Vorrhyn (Chaos, annihilation wound) | 4 | 6 |
| The Emberveil | South-central highlands | Thalvor (Fire/Craft, deep forge) | 5 | 8 |
| The Thornwild | Northwest (Marches meets Wastes) | Thyrea + Morrhael (life/death collision) | 4 | 6 |

### Files Created (71 total)

#### Region Overviews (5)
- `Aethermourne/Compendium/World Atlas/The Greymere Fenlands/The Greymere Fenlands.md`
- `Aethermourne/Compendium/World Atlas/The Ironmarch/The Ironmarch.md`
- `Aethermourne/Compendium/World Atlas/The Shattered Edge/The Shattered Edge.md`
- `Aethermourne/Compendium/World Atlas/The Emberveil/The Emberveil.md`
- `Aethermourne/Compendium/World Atlas/The Thornwild/The Thornwild.md`

#### Settlements (23)
**The Greymere Fenlands:**
- `Fenholm.md`, `Glimwater.md`, `The Drowning Bridge.md`, `Sporeling.md`, `Ashcreek.md`

**The Ironmarch:**
- `Ironhaven.md`, `The Red Garrison.md`, `Wrathspire.md`, `Duskfield.md`, `Shieldbreak.md`

**The Shattered Edge:**
- `Riftmarket.md`, `Shimmer.md`, `The Last Certainty.md`, `Edgewatch.md`

**The Emberveil:**
- `Crucible.md`, `Hearthdeep.md`, `Cinderfall.md`, `Anvilrest.md`, `Smokewall.md`

**The Thornwild:**
- `Cyclethorn.md`, `Bone Garden.md`, `Ashbloom.md`, `Rootpyre.md`

#### NPCs (36)
**The Greymere Fenlands (8):**
- Maren Duskwater, Wick, Torben Greaves, Old Fenris, Captain Hale Ashmark, Sera Gloomhollow, Brother Lumen, Nettie Bridgeborn

**The Ironmarch (8):**
- Yrsa Bloodhand, Quartermaster Voss Irenthal, Sira Embersteel, Harsk the Quiet, Alder Brightfield, Captain Neve Stormhull, Factor Gellen Ashworth, Mira the Red

**The Shattered Edge (6):**
- Edgewalker Tyrell Vane, Lysara Shimmerborn, Dust-Trader Oren Blackfinger, The Mirror, Warden Kessa Thornwall, Prior Echoes

**The Emberveil (8):**
- Forge-Matriarch Brunhild Ironheart, Delver-Captain Orin Deepstone, Mender Ashara Cinderbloom, Gemwright Polara Facet, Warden Tarn Smokeshield, Apprentice Jyn, Factor Corrin Ashveil, Vessa Ironvow

**The Thornwild (6):**
- Cyclekeeper Yara Thornbloom, Warden Kael Duskborne, Revenant Moss, Root-Speaker Fennara, Garret Boneharvest, The Bloom-Wraith

#### Factions (7)
- `The Confluence Council.md` (Greymere Fenlands)
- `The Iron Companies.md` (Ironmarch)
- `The Quartermasters Circle.md` (Ironmarch)
- `The Accord of Echoes.md` (Shattered Edge)
- `The Echoists.md` (Shattered Edge)
- `The Forge Council.md` (Emberveil)
- `The Cyclekeepers.md` (Thornwild)

### Files Modified (1)
- `Aethermourne/NPCRegistry.md`, added 36 new NPC entries across 5 new region sections, updated naming conventions

## 2026-03-22 02:49 - NPC File Creation (Faction Enrichment)

**Created 5 new NPC files from writer1 faction enrichment:**

- `Aethermourne/Compendium/NPCs/Military/Varen Ashfeld.md` - Flame Captain, Ashguard Commander, hawk advocating preemptive war against Verdant Marches
- `Aethermourne/Compendium/NPCs/Military/Sera Ironholt.md` - Flame Captain, Northern Garrisons Commander, moderate advocating diplomacy to focus on Pale Wastes threat
- `Aethermourne/Compendium/NPCs/Military/Aldren Voss.md` - Flame Captain, Greyfield Commander, sympathetic to Unbound Congregation
- `Aethermourne/Compendium/NPCs/Rulers/Seren Ashwood.md` - Moot-Chair, Marchwardens Council neutral arbiter
- `Aethermourne/Compendium/NPCs/Outlaws/Hallen Redthorn.md` - Minor Clan Observer, unwitting Cinder operative

All NPCs follow enriched template (60-90 lines), preserve vault consistency, use [[wikilinks]].

**Source:** Order of the Ashen Flame.md, Marchwardens Council.md faction enrichment cycle
**Agent:** aethermourne-characterwriter
**Delegated by:** aethermourne-writer1
