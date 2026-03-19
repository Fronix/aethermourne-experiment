---
description: Bulk-enrich thin NPC files and create missing NPC files from registry entries
---

# Enrich NPCs

Scope: $ARGUMENTS

## Injected context

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Existing NPC files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/NPCs/"`

### Faction files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/Factions/"`

### World Atlas files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/World Atlas/"`

### Campaign Overview (for arc roles)
!`cat "{{VAULT_FOLDER}}/Compendium/Campaigns/{{CAMPAIGN_NAME}}/Campaign Overview.md"`

## Phase 1: Determine scope

Parse $ARGUMENTS to determine which NPCs to process:
- **Region name**: Enrich all NPCs in that region
- **Faction name**: Enrich all NPCs in that faction
- **"all"**: Enrich every NPC in the registry
- **Specific NPC name**: Enrich just that one NPC
- **No arguments**: Default to "all"

## Phase 2: Audit current NPC coverage

For each NPC in scope:
1. Check if they have an individual file in `{{VAULT_FOLDER}}/Compendium/NPCs/`
2. If they do, Read it and count lines. Files under 50 lines are "thin" and need enrichment.
3. If they don't, mark them as "missing, needs creation"

Present the audit results and wait for user confirmation before writing.

## Phase 3: Gather context for each NPC

For each NPC to be enriched or created:
1. Read their existing file (if it exists)
2. Grep for their name across ALL `.md` files in `{{VAULT_FOLDER}}/`
3. Read relevant sections of their region's atlas file
4. Read their faction file for organizational context
5. Check the Campaign Overview for their role
6. Check Timeline.md for any historical events involving them

## Phase 4: Enrich or create files

Load the `worldbuilding-templates` skill for the Enriched NPC template.
Load the `obsidian-markdown` skill for formatting rules.

**Critical rules:**
- **Never contradict existing lore.** The source material is the truth.
- **Consolidate, don't duplicate.** Pull richer descriptions from region files into the NPC file.
- **Backstory is inference, not invention.** Flag anything that is pure invention.
- **Relationships must be grounded.** Only list relationships with characters who exist in the vault.
- **Voice samples in roleplay notes.** Every enriched NPC gets at least one sample line of dialogue.
- **Target 60-90 lines.**

## Phase 5: Update registry

After enriching/creating all NPC files:
1. Use Edit to update `{{VAULT_FOLDER}}/NPCRegistry.md`
2. Use Edit to append to `CHANGELOG.md` listing all files modified/created

## Phase 6: Summary

Present a final summary:
- Total files enriched + created
- Any new lore decisions made (flagged for review)
- Any contradictions discovered
- Suggested next step: "Run @lore-audit on [scope] to verify consistency"
