---
name: worldbuilding-templates
description: Canonical templates for bulk-generating world content. Load this skill when creating locations, enriching NPCs, building bestiary entries, or writing artifact files.
---

## Worldbuilding Templates

These templates define the canonical structure for each content type in the vault. All bulk-generation commands must follow these templates exactly to maintain vault consistency.

**Before using any template:**
1. Load the `obsidian-markdown` skill for formatting rules
2. Research existing lore via Grep across all `.md` files in `{{VAULT_FOLDER}}/`
3. Read the relevant region atlas file for context
4. Cross-reference NPCRegistry.md and Timeline.md for consistency

**Global rules for all templates:**
- Never invent lore that contradicts existing files. When in doubt, flag it and ask.
- Always use `[[wikilinks]]` for cross-references
- Use the region's established naming conventions
- Match the vault's established tone

---

### Template 1: Settlement / City

**File location:** `{{VAULT_FOLDER}}/Compendium/World Atlas/Settlements/[Settlement Name].md`

```markdown
---
tags:
  - location
  - region/[region-tag]
aliases:
  - [Short name or common name]
type: location
region: [Region Name]
parent-location: [Region Name]
---

# [Settlement Name]

> [!info]
> | | |
> |---|---|
> | **Region** | [[Region Name]] |
> | **Population** | [approximate] |
> | **Government** | [type and current leader with wikilink] |
> | **Economy** | [primary industries] |
> | **Notable Feature** | [one-line hook] |

---

## Overview

[2-3 paragraphs. What defines this place? What does it look, smell, and feel like?]

> [!warning]- GM Only
> [Key secrets about this settlement. Campaign-relevant hooks.]

---

## Layout & Landmarks

[3-5 notable locations within the settlement.]

---

## People & Culture

[1-2 paragraphs on daily life, customs, social structure.]

### Notable Residents

[2-4 NPCs who are based here.]

---

## Tensions & Hooks

[Numbered list, 3-5 items. Situations, conflicts, or mysteries that could drive a session.]

> [!warning]- GM Only
> [Expanded GM notes on hooks above.]
```

**Depth target:** 80-120 lines.

---

### Template 2: Landmark / Geographic Feature

**File location:** `{{VAULT_FOLDER}}/Compendium/World Atlas/Landmarks/[Landmark Name].md`

```markdown
---
tags:
  - location
  - region/[region-tag]
aliases:
  - [alternate names]
type: location
region: [Region Name]
parent-location: [Region Name or parent settlement]
---

# [Landmark Name]

> [!info]
> | | |
> |---|---|
> | **Region** | [[Region Name]] |
> | **Type** | [ruin / natural feature / sacred site / hazard zone / etc.] |
> | **Current Status** | [accessible / restricted / dangerous / lost] |

---

## Description

[2-3 paragraphs. What is this place? What does it look like?]

> [!warning]- GM Only
> [True nature of the landmark. Campaign connections.]

---

## Encounters & Hazards

[What dangers exist here?]

---

## Hooks

[2-3 reasons the PCs might come here.]
```

**Depth target:** 50-80 lines.

---

### Template 3: Enriched NPC

**File location:** `{{VAULT_FOLDER}}/Compendium/NPCs/[NPC Name].md`

```markdown
---
tags:
  - npc
  - region/[region-tag]
  - faction/[faction-tag]
aliases:
  - [Title + Name]
  - [Surname only]
type: npc
region: [Region Name]
faction: [Faction Name]
status: [alive/dead/missing/unknown/imprisoned]
---

# [Title] [Full Name]

|||
|---|---|
| **Title** | [Role/rank] of [[Faction]] |
| **Location** | [[Region#Settlement|Settlement]], [[Region]] |
| **Faction** | [[Faction Name]] |
| **Status** | [Status] |

---

## Appearance

[1 paragraph. Physical description, distinguishing features, voice.]

## Personality

[1 paragraph. Core traits, behavioral patterns, what they hide.]

## Backstory

[2-3 paragraphs. How they got to their current position.]

## Relationships

[Bulleted list, 3-5 entries. Wikilinked names + relationship dynamic.]

## What They Want

[2-3 sentences. Conscious goal vs. deeper need.]

> [!warning]- GM Only
> **Campaign Role.** [Function in the story.]
>
> **Key Secret.** [Most important hidden fact.]
>
> **Arc Trajectory.** [How they change over the campaign.]
>
> **Roleplay Notes.** [Voice, mannerisms, sample dialogue.]
```

**Depth target:** 60-90 lines.

---

### Template 4: Creature / Bestiary Entry

**File location:** `{{VAULT_FOLDER}}/Compendium/Bestiary/[Creature Name].md`

```markdown
---
tags:
  - bestiary
  - region/[primary-region-tag]
aliases:
  - [alternate names]
type: bestiary
region: [Primary Region]
---

# [Creature Name]

> [!info]
> | | |
> |---|---|
> | **Region** | [[Region Name]] |
> | **Origin** | [What created or corrupted this creature] |
> | **Threat Level** | [minor nuisance / serious threat / legendary danger] |

---

## Description

[1-2 paragraphs. Appearance, behavior, ecological niche.]

## Behavior & Tactics

[1-2 paragraphs. How it hunts, defends, interacts. Weaknesses.]

> [!warning]- GM Only
> [True origin. Campaign connections.]

## Encounter Notes

> [!example] Sample Encounter
> [Brief encounter setup with suggested difficulty.]
```

**Depth target:** 40-60 lines.

---

### Template 5: Artifact / Relic

**File location:** `{{VAULT_FOLDER}}/Compendium/Artifacts/[Artifact Name].md`

```markdown
---
tags:
  - lore
  - artifact
aliases:
  - [alternate names]
type: lore
category: artifact
---

# [Artifact Name]

> [!info]
> | | |
> |---|---|
> | **Origin** | [Who created it and when] |
> | **Current Location** | [Known / lost / contested] |

---

## Description

[1-2 paragraphs. Physical appearance, sensory qualities.]

## History

[1-2 paragraphs. How it was created, who has held it.]

## Properties

[What does it do? Known and rumored properties.]

> [!warning]- GM Only
> [True capabilities. Campaign role. Consequences of use.]
```

**Depth target:** 40-60 lines.

---

## Bulk Generation Checklist

After generating any batch of files, verify:

1. **No contradictions** with existing vault content
2. **All wikilinks resolve** to existing files or files being created in the same batch
3. **Frontmatter is complete** with correct tags, type, region, and aliases
4. **NPCRegistry.md updated** if any new NPCs were created
5. **Tone is consistent** with the world's established style
