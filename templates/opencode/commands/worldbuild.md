---
description: Create or expand world content (single topic)
---

# World-Building Assistant

Build: $ARGUMENTS

## Routing check

Before starting, check if $ARGUMENTS maps to a bulk command:
- If the user wants to generate all locations for a region -> suggest `/expand-region [region]` instead
- If the user wants to enrich or bulk-create NPCs -> suggest `/enrich-npcs [scope]` instead
- If the request is for a single, specific topic -> continue with this command

## Injected context

### Compendium folder structure
!`find {{VAULT_FOLDER}}/Compendium -type d | head -40`

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Faction files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/Factions/"`

### World Atlas folders
!`ls -1R "{{VAULT_FOLDER}}/Compendium/World Atlas/"`

## Phase 1: Research existing lore
Before creating anything, use Grep to search for related lore across all `.md` files in `{{VAULT_FOLDER}}/`. Search for:
- The name or concept from $ARGUMENTS
- Related locations, factions, NPCs
- Naming conventions in the relevant region/faction

Read any relevant files found. Check for potential contradictions.

## Phase 2: Propose content
Present the proposed content to the user before writing. Include:
- How it fits into existing world structure
- Connections to established lore
- Any potential contradictions flagged

## Phase 3: Create files

Load the `worldbuilding-templates` skill to determine the correct template. Then load the `obsidian-markdown` skill for formatting rules.

- Use Write to add new `.md` files in the appropriate `{{VAULT_FOLDER}}/Compendium/` subfolder
- If new NPCs were created, use Edit to add entries to `{{VAULT_FOLDER}}/NPCRegistry.md`
- Use Edit to append to `CHANGELOG.md` with all files created/modified

When in doubt about established lore, ask rather than assume.
