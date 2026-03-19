---
description: Create or expand world content for Aethermourne (single topic)
---

# World-Building Assistant

Build: $ARGUMENTS

## Routing check

Before starting, check if $ARGUMENTS maps to a bulk command:
- If the user wants to generate all locations for a region -> suggest `/expand-region [region]` instead
- If the user wants to enrich or bulk-create NPCs -> suggest `/enrich-npcs [scope]` instead
- If the request is for a single, specific topic (a new faction, a new location, a piece of cultural lore, etc.) -> continue with this command

## Injected context

### Compendium folder structure
!`find Aethermourne/Compendium -type d | head -40`

### NPC Registry
!`cat Aethermourne/NPCRegistry.md`

### Faction files
!`ls -1 "Aethermourne/Compendium/Factions/"`

### World Atlas folders
!`ls -1R "Aethermourne/Compendium/World Atlas/"`

### Pantheon
!`ls -1 "Aethermourne/Compendium/Pantheon/"`

## Phase 1: Research existing lore
Before creating anything, use Grep to search for related lore across all `.md` files in `Aethermourne/`. Search for:
- The name or concept from $ARGUMENTS
- Related locations, factions, NPCs
- Naming conventions in the relevant region/faction
- Connections to The Twelve, divine remains, magic traditions

Read any relevant files found. Check for potential contradictions.

## Phase 2: Propose content
Present the proposed content to the user before writing. Include:
- How it fits into existing world structure
- Connections to established lore (divine remains, the Theomachis, faction dynamics)
- Any potential contradictions flagged

Draw on the established world tone: mythic dark fantasy, consequence-driven. A world of decayed majesty built on the bones of gods.

## Phase 3: Create files

Load the `worldbuilding-templates` skill to determine the correct template for the content type being created. Then load the `obsidian-markdown` skill for formatting rules.

- Use Write to add new `.md` files in the appropriate `Aethermourne/Compendium/` subfolder (match the folder hierarchy above)
- If new NPCs were created, use Edit to add entries to `Aethermourne/NPCRegistry.md`
- Use Edit to append to `CHANGELOG.md` with all files created/modified

When in doubt about established lore, ask rather than assume.
