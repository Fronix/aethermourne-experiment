---
description: Generate a current world-state briefing for the DM
---

# Campaign Recap

## Injected context

### Current party state
!`cat {{VAULT_FOLDER}}/PartyState.md`

### Active threads
!`cat "{{VAULT_FOLDER}}/Sessions/Ongoing Threads.md"`

### Campaign timeline
!`cat {{VAULT_FOLDER}}/Timeline.md`

### NPC Registry
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Recent session files
!`ls -1 "{{VAULT_FOLDER}}/Sessions/" | tail -3`

### DM-specified session
$ARGUMENTS

## Instructions
If the DM specified a session number above, use that session as the target. Otherwise, use the most recent session from the listing.

### Finding the transcript
The monologue is based on the **transcript file**, not the session prep file. Look inside the target session's folder in `{{VAULT_FOLDER}}/Sessions/` for a file named `Transcript - *.md`, or identify the file containing timestamped dialogue. **If no transcript is found, stop and ask the DM to provide it before continuing.**

### Gathering context
- Read the transcript file for the target session (this is the primary source for the monologue)
- Read the session prep files and "What actually happened" sections from the last 2-3 sessions for the DM briefing
- Read existing opening monologues from previous session files for style reference

Cross-reference events against the session recaps to ensure factual accuracy. Then produce **two outputs**:

---

### Output 1: DM Briefing
A concise, actionable briefing covering:
- **Where the party is**, current location and situation
- **What just happened**, summary of the last 1-2 sessions
- **Active threats**, immediate dangers and looming forces
- **Unresolved threads**, open plot hooks and personal arcs
- **Key NPCs in play**, who's relevant right now and their current status
- **Upcoming hooks**, what's likely to happen next based on active threads

---

### Output 2: Opening Monologue
Generate a session opening monologue the DM reads aloud. Follow this structure:

**Session-specific narrative recap:**
A flowing narrative recap of **only the single previous session**, based on the transcript file, not the GM prep file. Do not reach further back; each monologue covers one session only to avoid repetition. Study the existing monologues in previous session files for style, match the DM's voice.

Creative rules:
- Match the world's tone
- Make the PCs look awesome or hilariously stupid depending on what happened
- Never start with "Previously on...", this is flowing narrative, not a TV intro
- Condense everything: distill conversations, encounters, and events into punchy, digestible narrative beats
- Humor is welcome when it fits naturally
- Highlight key decisions, dramatic turns, combat highlights, NPC encounters
- Max reading time ~5 minutes when read aloud
- **No spoilers**: Never reveal secrets the PCs haven't discovered
- **Accuracy is critical**: Only reference events, NPCs, locations, and names that actually exist in the session files and compendium

---

Present both outputs to the DM for review. Do not write any files until the DM explicitly approves.

## Important
Load the `obsidian-markdown` skill before editing any existing `.md` files.
