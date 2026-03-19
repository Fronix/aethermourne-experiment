---
description: Post-session checklist to update all tracking files
---

# After-Session Update

Updating tracking files after session $ARGUMENTS.

## Injected context

### Current party state (before this session's updates)
!`cat {{VAULT_FOLDER}}/PartyState.md`

### Current ongoing threads
!`cat "{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md"`

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Recent session files
!`ls -1 "{{VAULT_FOLDER}}/Sessions/" | tail -3`

## Phase 1: Present current state
Briefly summarize the current state from the injected files above so the user can see what needs updating.

## Phase 2: Ask the user
1. Did any NPCs change status (alive/dead/missing/relocated)?
2. Did the party gain or lose any notable items?
3. Did any quests advance, complete, or fail?
4. Were any new locations discovered?
5. Any new allies, enemies, or debts?
6. Any changes to faction relationships?
7. Anything the transcript might have missed?
8. Where did the session end? (location, situation)

## Phase 3: Update all tracking files
Based on the user's answers, use Edit to update:
1. **`{{VAULT_FOLDER}}/NPCRegistry.md`**, status changes, new NPCs, last-seen session
2. **`{{VAULT_FOLDER}}/PartyState.md`**, items, allies, enemies, debts, current location
3. **`{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md`**, thread progress
4. **`{{VAULT_FOLDER}}/Timeline.md`**, key events from this session
5. Affected `.md` files in **`{{VAULT_FOLDER}}/Compendium/`**, use Grep to find NPC/faction/location files, then Edit
6. Affected `.md` files in **`{{VAULT_FOLDER}}/Players/`**, use Grep to find relevant PC files, then Edit

## Phase 4: CHANGELOG
Use Edit to append to `CHANGELOG.md` listing every file modified.

## Note
If a transcript was already processed with `/process-transcript`, this command focuses on catching anything the transcript missed and handling DM-only knowledge updates.

## Important
Load the `obsidian-markdown` skill before editing any existing `.md` files.
