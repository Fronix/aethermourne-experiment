---
description: Exhaustive lore consistency audit across all {{WORLD_NAME}} files. Use for cross-referencing, contradiction detection, and gap analysis on any topic.
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
!`cat {{VAULT_FOLDER}}/NPCRegistry.md`

### Campaign timeline (for date cross-referencing)
!`cat {{VAULT_FOLDER}}/Timeline.md`

## Phase 1: Search everywhere
Use Grep to search for "$ARGUMENTS" across ALL `.md` files. Run multiple searches:
1. Exact name/term in `{{VAULT_FOLDER}}/Compendium/` folder
2. Exact name/term in `{{VAULT_FOLDER}}/Sessions/` folder
3. Exact name/term in `{{VAULT_FOLDER}}/Players/` folder
4. Exact name/term in root {{VAULT_FOLDER}} `.md` files (`Timeline.md`, `PartyState.md`, `NPCRegistry.md`, `World Overview.md`)
5. Common misspellings or alternate forms of the term
6. Related terms (faction name, location, associated NPCs)

Use Glob to find any dedicated `.md` files for the topic, then Read them.

## Phase 2: Compile mentions
For each mention found, note:
- File path
- Context (surrounding text)
- Any specific claims made (dates, status, location, relationships)

## Phase 3: Cross-reference
Check for contradictions between files:
- Dates/timeline inconsistencies
- NPC status conflicts (alive in one file, dead in another)
- Location contradictions
- Faction affiliation mismatches
- Relationship inconsistencies
- Ability/power level contradictions

Cross-reference against the injected NPCRegistry and Timeline above.

## Phase 4: Report
Present findings:
- **All references found**, organized by file
- **Contradictions/inconsistencies**, if any
- **Gaps**, things referenced but never defined, or missing connections
- **Recommendations**, suggested fixes if issues exist

Do NOT make any changes. Report only. Let the user decide how to resolve issues.
