---
description: Bulk-generate all missing location files (settlements and landmarks) for a region
---

# Expand Region

Expanding: $ARGUMENTS

## Injected context

### World Atlas files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/World Atlas/"`

### Existing settlement files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/World Atlas/Settlements/" 2>/dev/null || echo "(no Settlements folder yet)"`

### Existing landmark files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/World Atlas/Landmarks/" 2>/dev/null || echo "(no Landmarks folder yet)"`

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Existing NPC files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/NPCs/" 2>/dev/null`

## Phase 1: Identify the region

Determine which region the user wants to expand from $ARGUMENTS. If ambiguous, ask.

## Phase 2: Extract all named locations

Read the full region atlas file from `{{VAULT_FOLDER}}/Compendium/World Atlas/`.

Extract every named location mentioned. Categorize each as either:
- **Settlement** (city, town, village, port, outpost, any permanent habitation)
- **Landmark** (geographic feature, ruin, sacred site, natural wonder, hazard zone)

Also search the Campaign Overview, faction files, and NPC files for locations in this region that may not appear in the atlas file.

## Phase 3: Cross-reference existing files

Compare the extracted location list against the existing settlement and landmark files. Identify which locations already have individual files and which are missing.

## Phase 4: Present the batch plan

Present the full list to the user in a table:

| Location | Type | Source File | Status |
|---|---|---|---|
| Example City | Settlement | Region.md, line ~158 | **MISSING** |
| Example Ruin | Landmark | Region.md, line ~95 | **MISSING** |

Include a count: "X settlements and Y landmarks to generate. Proceed?"

Wait for user confirmation before writing any files.

## Phase 5: Generate files

Load the `worldbuilding-templates` skill for the canonical templates.
Load the `obsidian-markdown` skill for formatting rules.

Create the folder structure if it doesn't exist:
- `{{VAULT_FOLDER}}/Compendium/World Atlas/Settlements/`
- `{{VAULT_FOLDER}}/Compendium/World Atlas/Landmarks/`

For each missing location:
1. Re-read the relevant section of the region atlas file
2. Use Grep to find any additional mentions across the vault
3. Consolidate all existing information
4. Generate the file using the appropriate template
5. Write the file using Write

**Critical rules during generation:**
- **Consolidate first, invent second.** Extract and reorganize existing content before adding anything new.
- **New content must be consistent** with the region's established tone and naming conventions.
- **Flag new inventions.** Note anything that is new rather than consolidation.
- **Cross-link aggressively.** Every mention of a known NPC, faction, or location gets a wikilink.
- **Keep settlement files at 80-120 lines.** Keep landmark files at 50-80 lines.

## Phase 6: Update indexes

After generating all files:
1. If any new NPCs were created, use Edit to add them to `{{VAULT_FOLDER}}/NPCRegistry.md`
2. Use Edit to append to `CHANGELOG.md` listing all files created

## Phase 7: Summary

Present a final summary:
- Total files created (settlements + landmarks)
- Any new NPCs introduced
- Any lore decisions made that should be reviewed
- Any contradictions or gaps discovered
- Suggested next steps
