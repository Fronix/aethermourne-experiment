---
name: session-template
description: Template structure for The Second Silence session documents. Load this skill when creating or editing session files.
---

## Session Document Template

All session documents for The Second Silence follow this structure. When creating a new session file or editing an existing one, maintain this format.

### File naming convention
`Session N_ Title - YYYY-MM-DD.md` (colons replaced with underscores in filenames)

### File location
Session files go in `Aethermourne/Sessions/`

### YAML Frontmatter (required)

```yaml
---
tags:
  - session
  - campaign/second-silence
  - act/N
type: session
session-number: N
date: YYYY-MM-DD
act: N
---
```

### Document structure

1. **Introduction block**
   - Campaign name: The Second Silence
   - Session number
   - Date
   - Players present
   - Current Act and Region (e.g., Act I — [[The Hollowed Reach]])

2. **Session Description**
   - Brief overview of what this session is about
   - Which campaign threads are being advanced
   - Use `[[wikilinks]]` to reference relevant NPCs, factions, and locations

3. **Opening monologue**
   - Atmospheric read-aloud to start the session
   - Set to "Arrival to Earth" by Steve Jablonsky
   - Always opens with the fixed opener (see recap command for details)

4. **Structure**
   - PC Focus: which character(s) get spotlight time
   - What the DM wants to happen this session
   - Key plot threads being advanced
   - Relevant faction dynamics

5. **Scene prep**
   - Detailed scene-by-scene breakdown
   - NPC notes for each scene (link to `[[NPCRegistry]]` entries)
   - Skill checks and DCs
   - Potential outcomes and branching paths
   - Environmental details drawn from the region's dead god
   - Use callouts for GM-only information:
     ```markdown
     > [!warning]- GM Only
     > Secret information the players shouldn't see.
     ```

6. **"What actually happened"**
   - Left blank during planning
   - Filled post-session with narrative summary from transcript processing
   - Covers: key events, decisions, combat outcomes, RP moments, discoveries

### Obsidian conventions

- Use `[[wikilinks]]` for all cross-references to NPCs, factions, locations, and gods
- Use `> [!info] Title` callouts for in-world lore boxes
- Use `> [!warning]- GM Only` callouts for DM secrets (collapsed by default)
- Use `> [!tip] Title` for GM craft reminders
- Use `> [!quote]` for in-world quotes, prophecies, or inscriptions
- Never use `:::` LegendKeeper directives
