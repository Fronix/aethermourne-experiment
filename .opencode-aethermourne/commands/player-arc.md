---
description: Develop a specific PC's personal story arc
---

# Player Arc Development

Focus on: $ARGUMENTS

## Injected context

### Active threads
!`cat "Aethermourne/Sessions/Ongoing Threads.md"`

### Player files
!`ls -1R "Aethermourne/Players/"`

### Current party state
!`cat Aethermourne/PartyState.md`

### Recent session files
!`ls -1 "Aethermourne/Sessions/" | tail -5`

## Phase 1: Load PC context
Identify the PC named in $ARGUMENTS. Use Glob to find their folder under `Aethermourne/Players/`.

Read ALL files in that PC's folder (character sheet, personal threads, journal entries, handouts).

Use Grep to search for the PC name in the last 3-5 session files to find their spotlight moments.

Read any relevant files in `Aethermourne/Compendium/`, their faction, connected NPCs, related plotlines. Use Grep to find these.

## Phase 2: Analyze and advise
With full context loaded, help with:
- Where their personal arc currently stands
- Upcoming dramatic moments or turning points
- How their arc intersects with the main campaign (Serith's influence, the Aetheric Web, the divine decay, the Second Silence)
- NPC relationships that could be leveraged for drama
- Unresolved personal threads that need attention
- Suggestions for scenes that develop their character
- Balancing their spotlight time relative to other PCs
- Which region or faction content could be woven into their arc

## Tone
Maintain the campaign's mythic dark fantasy tone. Personal arcs should have real stakes and consequences. In Aethermourne, heroism is hard-won and leaves marks.
