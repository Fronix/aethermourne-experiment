---
description: Plan a new session for {{CAMPAIGN_NAME}}
---

# Session Planning

Plan session $ARGUMENTS for {{CAMPAIGN_NAME}}.

## Injected context

### Current party state
!`cat {{VAULT_FOLDER}}/PartyState.md`

### Active threads
!`cat "{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md"`

### Recent session files
!`ls -1 "{{VAULT_FOLDER}}/Sessions/" | tail -5`

### PC folders
!`ls -1 "{{VAULT_FOLDER}}/Players/"`

### Campaign overview
!`cat "{{VAULT_FOLDER}}/Compendium/Campaigns/{{CAMPAIGN_NAME}}/Campaign Overview.md"`

## Phase 1: Read context
You already have PartyState, Ongoing Threads, and the Campaign Overview above. Now:
1. Use Glob to find the last 3 session files in `{{VAULT_FOLDER}}/Sessions/`, then Read each one
2. Read all files in each PC's `{{VAULT_FOLDER}}/Players/<PC name>/` folder

## Phase 2: Ask the user
If $ARGUMENTS did not include these details, ask:
1. Any specific plot threads you want to advance?
2. Which PC(s) should get spotlight time?
3. Any scenes or moments you already have in mind?
4. Desired tone/pacing? (combat-heavy, RP-heavy, investigation, mixed)
5. Which region is the session set in?

Check which PCs have had spotlight recently and suggest rotating focus.

## Phase 3: Produce session document
Load the `session-template` skill for the canonical document structure, then follow the existing template format from previous sessions.

## Phase 4: Save
Save the session plan as a new `.md` file in `{{VAULT_FOLDER}}/Sessions/` using Write.
Append entry to `CHANGELOG.md` using Edit.

## Important
Load the `obsidian-markdown` skill before editing any existing `.md` files.
