---
description: Develop a specific PC's personal story arc
---

# Player Arc Development

Focus on: $ARGUMENTS

## Injected context

### Active threads
!`cat "{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md"`

### Player files
!`ls -1R "{{VAULT_FOLDER}}/Players/"`

### Current party state
!`cat {{VAULT_FOLDER}}/PartyState.md`

### Recent session files
!`ls -1 "{{VAULT_FOLDER}}/Sessions/" | tail -5`

## Phase 1: Load PC context
Identify the PC named in $ARGUMENTS. Use Glob to find their folder under `{{VAULT_FOLDER}}/Players/`.

Read ALL files in that PC's folder (character sheet, personal threads, journal entries, handouts).

Use Grep to search for the PC name in the last 3-5 session files to find their spotlight moments.

Read any relevant files in `{{VAULT_FOLDER}}/Compendium/`, their faction, connected NPCs, related plotlines.

## Phase 2: Analyze and advise
With full context loaded, help with:
- Where their personal arc currently stands
- Upcoming dramatic moments or turning points
- How their arc intersects with the main campaign
- NPC relationships that could be leveraged for drama
- Unresolved personal threads that need attention
- Suggestions for scenes that develop their character
- Balancing their spotlight time relative to other PCs
- Which region or faction content could be woven into their arc

## Tone
Match the world's established tone. Personal arcs should have real stakes and consequences.
