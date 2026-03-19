---
description: Process a session transcript into narrative summary and update all tracking files
---

# Process Session Transcript

Processing transcript for session $ARGUMENTS.

## Injected context

### NPC Registry (for cross-referencing names)
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Current ongoing threads
!`cat "{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md"`

### Current party state
!`cat {{VAULT_FOLDER}}/PartyState.md`

### Session files (find the right one)
!`ls -1 "{{VAULT_FOLDER}}/Sessions/"`

## Phase 1: Read transcript
The user will provide or paste the transcript (auto-transcribed, expect errors). Read it carefully, infer transcription errors from context for names, places, and abilities. Use Grep to cross-reference NPC names against the NPCRegistry above.

## Phase 2: Write "What actually happened"
Find the session file for session $ARGUMENTS in the listing above. Use Read to open it, then use Edit to add a narrative summary under the "What actually happened" heading. Cover: key events, decisions, combat outcomes, RP moments, discoveries.

## Phase 3: Update tracking files (in order)
1. **`{{VAULT_FOLDER}}/Timeline.md`**, use Edit to add key events under the correct session heading
2. **`{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md`**, use Edit to mark threads that advanced, resolved, or became newly active
3. **Compendium files**, use Grep to find affected NPC/faction/location `.md` files in `{{VAULT_FOLDER}}/Compendium/`, then Edit them
4. **Player files**, use Grep to find affected files in `{{VAULT_FOLDER}}/Players/`, then Edit
5. **`{{VAULT_FOLDER}}/NPCRegistry.md`**, use Edit for NPCs who changed status, location, or were newly introduced
6. **`{{VAULT_FOLDER}}/PartyState.md`**, use Edit for items gained/lost, new allies/enemies, location changes

## Phase 4: CHANGELOG
Append to `CHANGELOG.md` listing every file modified with a brief description of each change.

## Important
- Flag any potential lore contradictions discovered
- Note loose threads or unresolved moments for future session planning
- Load the `obsidian-markdown` skill before editing any existing `.md` files
