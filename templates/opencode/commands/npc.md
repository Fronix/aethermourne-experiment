---
description: Look up an existing NPC or create a new one
---

# NPC Tool

Request: $ARGUMENTS

## Injected context

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### NPC files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/NPCs/" 2>/dev/null`

### Faction files
!`ls -1 "{{VAULT_FOLDER}}/Compendium/Factions/"`

## Mode detection
Check the NPC Registry above. If "$ARGUMENTS" matches or closely resembles an NPC name in the registry, use **Lookup Mode**. Otherwise, use **Create Mode**.

## Lookup Mode
1. Find the NPC's entry in the registry above, note status, location, faction, last seen
2. Use Grep to search for the NPC name across ALL `.md` files in `{{VAULT_FOLDER}}/Compendium/`, `{{VAULT_FOLDER}}/Sessions/`, and `{{VAULT_FOLDER}}/Players/`
3. Use Glob to find their dedicated `.md` file in `{{VAULT_FOLDER}}/Compendium/NPCs/`, then Read it
4. Compile a full profile: name, status, location, faction, relationships, history, session appearances, plot relevance

## Create Mode
1. Read relevant context, use Grep and Read to examine the location, faction, or situation they'll appear in
2. Check existing NPCs in the registry above to avoid duplication or conflicts
3. Create the NPC with:
   - Name (consistent with region/culture naming conventions)
   - Role and occupation
   - Appearance and personality
   - Motivations and secrets
   - Connections to existing world elements
4. Use Write to save as a new `.md` file in `{{VAULT_FOLDER}}/Compendium/NPCs/`
5. Use Edit to add entry to `{{VAULT_FOLDER}}/NPCRegistry.md`
6. Use Edit to append to `CHANGELOG.md`

## Important
Load the `obsidian-markdown` skill before editing or creating any `.md` files.
