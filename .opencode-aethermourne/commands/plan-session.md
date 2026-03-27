---
description: Plan a new session for The Second Silence
---

# Session Planning

Plan session $ARGUMENTS for The Second Silence.

## Injected context

### Current party state
!`cat Aethermourne/PartyState.md`

### Active threads
!`cat "Aethermourne/Sessions/Ongoing Threads.md"`

### Recent session files
!`ls -1 "Aethermourne/Sessions/" | tail -5`

### PC folders
!`ls -1 "Aethermourne/Players/"`

### Campaign overview
!`cat "Aethermourne/Compendium/Campaigns/The Second Silence/Campaign Overview.md"`

## Phase 1: Read context
You already have PartyState, Ongoing Threads, and the Campaign Overview above. Now:
1. Use Glob to find the last 3 session files in `Aethermourne/Sessions/`, then Read each one
2. Read all files in each PC's `Aethermourne/Players/<PC name>/` folder, especially personal threads

## Phase 2: Ask the user
If $ARGUMENTS did not include these details, ask:
1. Any specific plot threads you want to advance?
2. Which PC(s) should get spotlight time?
3. Any scenes or moments you already have in mind?
4. Desired tone/pacing? (combat-heavy, RP-heavy, investigation, mixed)
5. Which act/region is the session set in?

Check which PCs have had spotlight recently and suggest rotating focus.

## Phase 3: Produce session document
Load the `session-template` skill for the canonical document structure, then follow the existing template format from previous sessions.

## Phase 4: Save
Save the session plan as a new `.md` file in `Aethermourne/Sessions/` using Write.
Append entry to `CHANGELOG.md` using Edit.

## Important
Load the `obsidian-markdown` skill before editing any existing `.md` files.
