---
description: Generate a current world-state briefing for the DM
---

# Campaign Recap

## Injected context

### Current party state
!`cat Aethermourne/PartyState.md`

### Active threads
!`cat "Aethermourne/Sessions/Ongoing Threads.md"`

### Campaign timeline
!`cat Aethermourne/Timeline.md`

### NPC Registry
!`cat Aethermourne/NPCRegistry.md`

### Recent session files
!`ls -1 "Aethermourne/Sessions/" | tail -3`

### DM-specified session
$ARGUMENTS

## Instructions
If the DM specified a session number above, use that session as the target. Otherwise, use the most recent session from the listing.

### Finding the transcript
The monologue is based on the **transcript file**, not the session prep file. Look inside the target session's folder in `Aethermourne/Sessions/` for a file named `Transcript - *.md`, or identify the file containing `[H:MM:SS]` timestamped dialogue. **If no transcript is found, stop and ask the DM to provide it before continuing.**

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
- **Campaign arc progress**, Serith's influence, Aetheric Web stability, Black Tide activity, faction tensions

---

### Output 2: Opening Monologue
Generate the session opening monologue the DM reads aloud to "Arrival to Earth" by Steve Jablonsky. Follow this structure:

**Fixed opener (always include verbatim):**
> "Each age is but a chapter in a tale without end."
>
> "And so the world turns once more beneath bruised skies, its foundations groaning with the weight of dead divinity. The bones of heaven hold up the earth, and in the silence where prayers once echoed, something stirs. Aethermourne endures — as it always has — not because the gods willed it, but because the living refuse to let go."

**Session-specific narrative recap:**
A flowing narrative recap of **only the single previous session**, based on the transcript file, not the GM prep file. Do not reach further back; each monologue covers one session only to avoid repetition. Study the existing monologues in previous session files for style, match the DM's voice.

Creative rules:
- Mythic dark fantasy tone, omniscient narrator, poetic but not overwrought
- Make the PCs look awesome or hilariously stupid depending on what happened, this is meant to hype the players
- Never start with "Previously on...", this is flowing narrative, not a TV intro
- Condense everything: distill conversations, encounters, and events into punchy, digestible narrative beats. No long dialogues or blow-by-blow combat
- Humor is welcome when it fits naturally (funny consequences, PC mishaps)
- Highlight key decisions, dramatic turns, combat highlights, NPC encounters
- Max reading time ~5 minutes when read aloud, but shorter is perfectly fine
- **No spoilers**: Never reveal secrets the PCs haven't discovered or information they never obtained in-game. This is strictly what the PCs experienced
- **Accuracy is critical**: Only reference events, NPCs, locations, and names that actually exist in the session files and compendium. Never invent details. If a name doesn't match a known NPC or player, include it as-is or flag it for the DM

**Closing hook:** End with "Let us begin." or a date/scene-setting line using the AS (After Silence) calendar (e.g., "It is the morning of the 14th day of Ashfall, in the year 2203 After Silence. Let us begin.").

---

Present both outputs to the DM for review. Do not write any files until the DM explicitly approves.

## Important
Load the `obsidian-markdown` skill before editing any existing `.md` files.
