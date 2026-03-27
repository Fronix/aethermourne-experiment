---
name: worldbuilding-templates
description: Canonical templates for bulk-generating Aethermourne world content. Load this skill when creating locations, enriching NPCs, building bestiary entries, or writing artifact files.
---

## Worldbuilding Templates

These templates define the canonical structure for each content type in the Aethermourne vault. All bulk-generation commands must follow these templates exactly to maintain vault consistency.

**Before using any template:**
1. Load the `obsidian-markdown` skill for formatting rules
2. Research existing lore via Grep across all `.md` files in `Aethermourne/`
3. Read the relevant region atlas file for context
4. Cross-reference NPCRegistry.md and Timeline.md for consistency

**Global rules for all templates:**
- Never invent lore that contradicts existing files. When in doubt, flag it and ask.
- Always use `[[wikilinks]]` for cross-references to NPCs, factions, locations, gods, and concepts that have their own file or heading
- Link to The Twelve gods via heading: `[[The Twelve#Serith|Serith]]`
- Use the region's established naming conventions (check existing NPCs and locations in the same region)
- Match the vault's tone: mythic dark fantasy, decayed majesty, consequence-driven
- Never use em dashes. Use commas instead.

---

### Template 1: Settlement / City

**File location:** `Aethermourne/Compendium/World Atlas/Settlements/[Settlement Name].md`
**When to use:** Any named city, town, village, or permanent habitation

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
> | **Motto** | *"[motto]"* |
> | **Notable Feature** | [one-line hook] |

---

## Overview

[2-3 paragraphs. What defines this place? What does it look, smell, and feel like?
Ground it in the dead god whose remains shape the region. Connect it to the
broader political and supernatural tensions. End with the tension or question
that makes this place interesting to visit.]

> [!warning]- GM Only
> [Key secrets about this settlement. What's really going on beneath the surface.
> Campaign-relevant hooks. Connection to the overarching Second Silence plot.]

---

## Layout & Landmarks

[3-5 notable locations within the settlement. Each gets a bold name and 1-2
paragraphs. Include at least one that is: a gathering place (tavern, market,
temple), a seat of power, and a place of danger or mystery.]

---

## People & Culture

[1-2 paragraphs on daily life, customs, social structure. What do people here
value? What are they afraid of? How does the dead god's influence shape their
habits and beliefs?]

### Notable Residents

[2-4 NPCs who are based here. For each: name (wikilinked if they have a file),
title/role, and one sentence on what they want. These should connect to existing
NPCs where possible.]

---

## Tensions & Hooks

[Numbered list, 3-5 items. Each is a situation, conflict, or mystery that could
drive a session or side quest. At least one should connect to the main campaign
arc.]

> [!warning]- GM Only
> [Expanded GM notes on one or two of the hooks above. Secrets the players
> would need to discover. Connections to Serith, the Aetheric Web, faction
> politics, or PC personal arcs.]
```

**Depth target:** 80-120 lines. Enough to run a session in this location without consulting the region file.

---

### Template 2: Landmark / Geographic Feature

**File location:** `Aethermourne/Compendium/World Atlas/Landmarks/[Landmark Name].md`
**When to use:** Named geographic features, ruins, natural wonders, supernatural sites

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
> | **Associated God** | [[The Twelve#Name|Name]] |
> | **Current Status** | [accessible / restricted / dangerous / lost] |

---

## Description

[2-3 paragraphs. What is this place? What does it look like, physically and
supernaturally? What is its history? Why does it matter?]

> [!warning]- GM Only
> [True nature of the landmark. Connection to divine remains, the Theomachis,
> or the campaign arc. What happens if the PCs investigate deeply.]

---

## Encounters & Hazards

[What dangers exist here? Environmental hazards, creatures, supernatural
phenomena. Include enough mechanical detail to run an encounter.]

---

## Hooks

[2-3 reasons the PCs might come here. At least one should be discoverable
through normal play (rumors, NPC direction, faction missions).]
```

**Depth target:** 50-80 lines.

---

### Template 3: Enriched NPC

**File location:** `Aethermourne/Compendium/NPCs/[NPC Name].md`
**When to use:** Expanding existing thin NPC stubs or creating new NPCs

The existing NPC files average 33 lines. Enriched files should reach 60-90 lines by adding backstory, relationships, roleplay cues, and arc trajectory. The goal is a file that lets a GM portray this character in any scene without consulting other files.

```markdown
---
tags:
  - npc
  - region/[region-tag]
  - faction/[faction-tag]
  - campaign/second-silence
aliases:
  - [Title + Name]
  - [Surname only]
  - [Other known-as names]
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

[1 paragraph. Physical description, clothing, distinguishing features.
Be specific enough that a GM can describe them on the spot. Include
sensory details: how they move, what they smell like, what their voice
sounds like.]

## Personality

[1 paragraph. Core personality traits, behavioral patterns, emotional
tendencies. What is the first impression they give? What impression
emerges after longer interaction? What do they hide?]

## Backstory

[2-3 paragraphs. Where they came from, how they got to their current
position, what shaped them. Connect to established world events where
possible (the Theomachis aftermath, regional history, faction politics).
Include at least one formative event that explains their current
motivations.]

## Relationships

[Bulleted list, 3-5 entries. Each is a wikilinked name + one sentence
describing the relationship dynamic. Include at least: one ally, one
antagonist or friction point, and one complicated relationship.]

## What They Want

[2-3 sentences. Their conscious goal (what they'd tell you if asked)
and their deeper need (what actually drives them). These should be
in tension where possible.]

> [!warning]- GM Only
> **Campaign Role.** [Which act(s) they appear in, what function they
> serve in the story, how they connect to the main arc.]
>
> **Key Secret.** [The most important thing about this NPC that the
> players do not know. One or two sentences.]
>
> **Arc Trajectory.** [How this NPC changes over the campaign. What
> happens to them if the PCs intervene vs. if they don't.]
>
> **Roleplay Notes.** [Voice, mannerisms, speech patterns, verbal tics.
> Enough for a GM to distinguish this NPC from others in conversation.
> Include a sample line of dialogue that captures their voice.]
```

**Depth target:** 60-90 lines. The file should be self-contained: a GM should be able to run this NPC in any scene using only this file.

**Enrichment process for existing stubs:**
1. Read the existing NPC file
2. Grep for the NPC name across all vault files (region atlas, faction files, campaign overview, timeline)
3. Collect all mentions and details scattered across the vault
4. Merge into the enriched template, preserving all existing information
5. Fill gaps with lore-consistent content, flagging anything that is new invention vs. consolidation
6. Preserve the existing frontmatter, adding missing fields

---

### Template 4: Creature / Bestiary Entry

**File location:** `Aethermourne/Compendium/Bestiary/[Creature Name].md`
**When to use:** Any named creature type, monster, or supernatural entity

```markdown
---
tags:
  - bestiary
  - region/[primary-region-tag]
aliases:
  - [alternate names]
type: bestiary
region: [Primary Region]
origin: [divine-corruption / trench-born / natural-mutated / undead / constructed]
---

# [Creature Name]

> [!info]
> | | |
> |---|---|
> | **Region** | [[Region Name]] |
> | **Origin** | [What created or corrupted this creature] |
> | **Threat Level** | [minor nuisance / serious threat / legendary danger] |
> | **Associated God** | [[The Twelve#Name|Name]] (if applicable) |

---

## Description

[1-2 paragraphs. What does this creature look like? How does it behave?
What is its ecological niche? Ground it in the dead-god ecology of its
region.]

## Behavior & Tactics

[1-2 paragraphs. How does it hunt, defend, or interact? What makes it
dangerous? What are its weaknesses? Include enough for a GM to run a
combat encounter.]

> [!warning]- GM Only
> [True origin or nature of the creature. Connection to the campaign arc
> if any. What it means that these creatures are appearing / changing /
> increasing in number.]

## Encounter Notes

> [!example] Sample Encounter
> [Brief encounter setup: where the PCs find it, what triggers it,
> environmental factors. Include a suggested difficulty or Nimble
> stat reference if applicable.]
```

**Depth target:** 40-60 lines.

---

### Template 5: Artifact / Relic

**File location:** `Aethermourne/Compendium/Artifacts/[Artifact Name].md`
**When to use:** Divine artifacts, campaign-significant items, relics of the Theomachis

```markdown
---
tags:
  - lore
  - artifact
aliases:
  - [alternate names]
type: lore
category: artifact
origin: [divine / mortal-crafted / theomachis-remnant]
---

# [Artifact Name]

> [!info]
> | | |
> |---|---|
> | **Origin** | [Who created it and when] |
> | **Associated God** | [[The Twelve#Name|Name]] |
> | **Current Location** | [Known / lost / contested] |
> | **Material** | [Divine material if applicable, linked to [[Cosmology and Magic]]] |

---

## Description

[1-2 paragraphs. Physical appearance, sensory qualities, how it feels
to be near it. Divine artifacts should evoke the personality of the god
who created or is connected to them.]

## History

[1-2 paragraphs. How it was created, who has held it, what it has done.
Connect to established timeline events.]

## Properties

[What does it do? Be specific enough for gameplay but leave room for
mystery. Include known properties and rumored properties.]

> [!warning]- GM Only
> [True capabilities. Campaign role. What happens when it interacts with
> other artifacts or divine materials. Consequences of use.]
```

**Depth target:** 40-60 lines.

---

## Bulk Generation Checklist

After generating any batch of files, verify:

1. **No contradictions** with existing vault content (especially dates, NPC statuses, faction affiliations, god statuses from [[The Twelve]])
2. **All wikilinks resolve** to existing files or files being created in the same batch
3. **Frontmatter is complete** with correct tags, type, region, and aliases
4. **NPCRegistry.md updated** if any new NPCs were created or existing entries need location/status changes
5. **Tone is consistent**, mythic dark fantasy, not generic fantasy. Everything beautiful is also haunted.
6. **No em dashes** anywhere in the output
