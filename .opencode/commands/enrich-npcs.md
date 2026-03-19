---
description: Bulk-enrich thin NPC files and create missing NPC files from registry entries
---

# Enrich NPCs

Scope: $ARGUMENTS

## Injected context

### NPC Registry
!`cat Aethermourne/NPCRegistry.md`

### Existing NPC files
!`ls -1 "Aethermourne/Compendium/NPCs/"`

### Faction files
!`ls -1 "Aethermourne/Compendium/Factions/"`

### World Atlas files
!`ls -1 "Aethermourne/Compendium/World Atlas/"`

### Campaign Overview (for arc roles)
!`cat "Aethermourne/Compendium/Campaigns/The Second Silence/Campaign Overview.md"`

## Phase 1: Determine scope

Parse $ARGUMENTS to determine which NPCs to process:
- **Region name** (e.g., "Hollowed Reach"): Enrich all NPCs in that region
- **Faction name** (e.g., "Lantern-Keepers"): Enrich all NPCs in that faction
- **"all"**: Enrich every NPC in the registry
- **Specific NPC name**: Enrich just that one NPC
- **No arguments**: Default to "all"

## Phase 2: Audit current NPC coverage

For each NPC in scope:

1. Check if they have an individual file in `Aethermourne/Compendium/NPCs/`
2. If they do, Read it and count lines. Files under 50 lines are "thin" and need enrichment.
3. If they don't, mark them as "missing, needs creation"

Also check for NPCs mentioned in region atlas files and the Campaign Overview who are NOT in the registry. These are "unregistered" NPCs that need both a registry entry and a file.

Present the audit results:

| NPC | File Status | Lines | Action Needed |
|---|---|---|---|
| Lira Ashvane | Exists | 33 | **ENRICH** (under 50 lines) |
| Maren Selk | Missing | - | **CREATE** |
| Abbot Cael | Missing | - | **CREATE** |
| Delric Mourne | Exists | 35 | **ENRICH** (under 50 lines) |
| ... | ... | ... | ... |

Include counts: "X files to enrich, Y files to create. Proceed?"

Wait for user confirmation before writing.

## Phase 3: Gather context for each NPC

For each NPC to be enriched or created, gather ALL existing information:

1. **Read their existing file** (if it exists)
2. **Grep for their name** (and aliases) across ALL `.md` files in `Aethermourne/`
3. **Read the relevant sections** of their region's atlas file (this often contains richer descriptions than the NPC file itself)
4. **Read their faction file** for organizational context
5. **Check the Campaign Overview** for their role in the campaign arc
6. **Check Timeline.md** for any historical events involving them
7. **Check Cosmology and Magic.md** if they have divine or magical connections

Compile a "source dossier" for each NPC before writing.

## Phase 4: Enrich or create files

Load the `worldbuilding-templates` skill for the Enriched NPC template.
Load the `obsidian-markdown` skill for formatting rules.

For each NPC:

### If enriching an existing file:
1. Preserve ALL existing content (frontmatter, info table, description, GM notes)
2. Restructure into the enriched template format
3. Expand the description into separate Appearance and Personality sections
4. Add Backstory section from vault-wide context
5. Add Relationships section from cross-references
6. Add "What They Want" section
7. Expand GM Notes with Campaign Role, Key Secret, Arc Trajectory, and Roleplay Notes
8. Use Edit to modify the existing file (preserve the file path)

### If creating a new file:
1. Build the full enriched template from the source dossier
2. Use Write to create a new file in `Aethermourne/Compendium/NPCs/[NPC Name].md`

**Critical rules:**
- **Never contradict existing lore.** The source dossier is the truth. Everything you add must be consistent with it.
- **Consolidate, don't duplicate.** The region atlas files often have richer NPC descriptions than the NPC files. Pull that content into the NPC file, don't rewrite it differently.
- **Backstory is inference, not invention.** You can infer reasonable backstory from established facts (e.g., if an NPC leads a faction, they presumably rose through its ranks). Flag anything that is pure invention.
- **Relationships must be grounded.** Only list relationships with characters who exist in the vault. Don't invent family members or mentors unless the source material implies them.
- **Voice samples in roleplay notes.** Every enriched NPC gets at least one sample line of dialogue that captures how they speak. Base this on any dialogue or described speech patterns in the source material.
- **Target 60-90 lines.** This is the sweet spot: comprehensive enough to run the NPC cold, concise enough to scan quickly during a session.
- **No em dashes.** Use commas instead.

## Phase 5: Update registry

After enriching/creating all NPC files:
1. Use Edit to update `Aethermourne/NPCRegistry.md`:
   - Add entries for any newly created NPCs
   - Update any entries where location, status, or faction changed during enrichment
   - Ensure every NPC in scope has a wikilink to their individual file
2. Use Edit to append to `CHANGELOG.md` listing all files modified/created

## Phase 6: Summary

Present a final summary:
- Total files enriched + created
- Average line count before and after enrichment
- Any new lore decisions made (flagged for review)
- Any contradictions discovered during the process
- NPCs that may need additional context (e.g., "Abbot Cael is mentioned but has very little source material, his backstory section is mostly inferred")
- Suggested next step: "Run @lore-audit on [scope] to verify consistency"
