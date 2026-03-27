---
description: Exhaustive lore consistency audit across all Aethermourne files. Use for cross-referencing, contradiction detection, and gap analysis on any topic.
mode: subagent
model: anthropic/claude-opus-4
temperature: 0.1
tools:
  write: false
  edit: false
permission:
  bash:
    "*": deny
---

# Lore Consistency Audit

Auditing: $ARGUMENTS

## Injected context

### NPC Registry (for cross-referencing)
!`cat Aethermourne/NPCRegistry.md`

### Campaign timeline (for date cross-referencing)
!`cat Aethermourne/Timeline.md`

## Phase 1: Search everywhere
Use Grep to search for "$ARGUMENTS" across ALL `.md` files. Run multiple searches:
1. Exact name/term in `Aethermourne/Compendium/` folder
2. Exact name/term in `Aethermourne/Sessions/` folder
3. Exact name/term in `Aethermourne/Players/` folder
4. Exact name/term in root Aethermourne `.md` files (`Timeline.md`, `PartyState.md`, `NPCRegistry.md`, `World Overview.md`)
5. Common misspellings or alternate forms of the term
6. Related terms (faction name, location, associated NPCs, divine connections)

Use Glob to find any dedicated `.md` files for the topic, then Read them.

## Phase 2: Compile mentions
For each mention found, note:
- File path
- Context (surrounding text)
- Any specific claims made (dates, status, location, relationships, divine affiliations)

## Phase 3: Cross-reference
Check for contradictions between files:
- Dates/timeline inconsistencies (AS dating system)
- NPC status conflicts (alive in one file, dead in another)
- Location contradictions
- Faction affiliation mismatches
- Relationship inconsistencies
- Ability/power level contradictions
- Divine material or magic tradition inconsistencies
- Pantheon status conflicts (which gods are dead, imprisoned, surviving, or shattered)

Cross-reference against the injected NPCRegistry and Timeline above.

## Phase 4: Report
Present findings:
- **All references found**, organized by file
- **Contradictions/inconsistencies**, if any
- **Gaps**, things referenced but never defined, or missing connections
- **Recommendations**, suggested fixes if issues exist

Do NOT make any changes. Report only. Let the user decide how to resolve issues.
