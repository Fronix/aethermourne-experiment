---
description: Bulk-generate all missing location files (settlements and landmarks) for a region
---

# Expand Region

Expanding: $ARGUMENTS

## Injected context

### World Atlas files
!`ls -1 "Aethermourne/Compendium/World Atlas/"`

### Existing settlement files
!`ls -1 "Aethermourne/Compendium/World Atlas/Settlements/" 2>/dev/null || echo "(no Settlements folder yet)"`

### Existing landmark files
!`ls -1 "Aethermourne/Compendium/World Atlas/Landmarks/" 2>/dev/null || echo "(no Landmarks folder yet)"`

### NPC Registry
!`cat Aethermourne/NPCRegistry.md`

### Existing NPC files
!`ls -1 "Aethermourne/Compendium/NPCs/" 2>/dev/null`

## Phase 1: Identify the region

Determine which region the user wants to expand from $ARGUMENTS. Valid regions:
- The Hollowed Reach
- The Ashen Dominion
- The Pale Wastes
- The Verdant Marches

If $ARGUMENTS names a specific region, use it. If $ARGUMENTS is "all", process all four regions sequentially. If ambiguous, ask.

## Phase 2: Extract all named locations

Read the full region atlas file from `Aethermourne/Compendium/World Atlas/[Region Name].md`.

Extract every named location mentioned in the file. Categorize each as either:
- **Settlement** (city, town, village, port, outpost, any permanent habitation)
- **Landmark** (geographic feature, ruin, sacred site, natural wonder, hazard zone)

Also search the Campaign Overview, faction files, and NPC files for locations in this region that may not appear in the atlas file:
- Use Grep to search for the region name across `Aethermourne/Compendium/Campaigns/`
- Use Grep to search for the region name across `Aethermourne/Compendium/Factions/`

## Phase 3: Cross-reference existing files

Compare the extracted location list against the existing settlement and landmark files listed above. Identify which locations already have individual files and which are missing.

## Phase 4: Present the batch plan

Present the full list to the user in a table:

| Location | Type | Source File | Status |
|---|---|---|---|
| Tidewall | Settlement | The Hollowed Reach.md, line ~158 | **MISSING** |
| The Abyssal Trench | Landmark | The Hollowed Reach.md, line ~95 | **MISSING** |
| ... | ... | ... | ... |

Include a count: "X settlements and Y landmarks to generate. Proceed?"

Wait for user confirmation before writing any files.

## Phase 5: Generate files

Load the `worldbuilding-templates` skill for the canonical templates.
Load the `obsidian-markdown` skill for formatting rules.

Create the folder structure if it doesn't exist:
- `Aethermourne/Compendium/World Atlas/Settlements/`
- `Aethermourne/Compendium/World Atlas/Landmarks/`

For each missing location:

1. Re-read the relevant section of the region atlas file to extract all existing detail
2. Use Grep to find any additional mentions across the vault (faction files, NPC files, campaign overview, history files, cosmology)
3. Consolidate all existing information
4. Generate the file using the appropriate template (Settlement or Landmark)
5. Write the file using Write

**Critical rules during generation:**
- **Consolidate first, invent second.** Most locations already have substantial descriptions in the region atlas. Extract and reorganize that content before adding anything new.
- **New content must be consistent** with the region's dead god, magic tradition, naming conventions, and established tone.
- **Flag new inventions.** If you invent a new NPC, landmark detail, or plot hook that doesn't exist anywhere in the vault, note it in a comment at the end of the file or mention it in the summary.
- **Cross-link aggressively.** Every mention of a known NPC, faction, god, or location gets a wikilink.
- **Keep settlement files at 80-120 lines.** Keep landmark files at 50-80 lines. Do not pad with filler.
- **No em dashes.** Use commas instead.

## Phase 6: Update indexes

After generating all files:
1. If any new NPCs were created (as notable residents), use Edit to add them to `Aethermourne/NPCRegistry.md`
2. Use Edit to append to `CHANGELOG.md` listing all files created

## Phase 7: Summary

Present a final summary:
- Total files created (settlements + landmarks)
- Any new NPCs introduced
- Any lore decisions made that should be reviewed
- Any contradictions or gaps discovered during generation
- Suggested next steps (e.g., "Run @lore-audit on [Region] to verify consistency")
