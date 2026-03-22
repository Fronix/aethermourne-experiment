# Aethermourne — Global Rules

This vault is an **Obsidian vault** for the world of **Aethermourne**, a mythic dark fantasy TTRPG setting using the **Nimble TTRPG** system. The active campaign is **The Second Silence**.

All world content lives under `Aethermourne/`.

---

## Obsidian Markdown Rules

### Formatting rules (CRITICAL)
- **NEVER** use the em dash symbol. Replace all em dashes with commas. Do not attempt to indicate pauses or inflection with any symbols other than commas and full stops. Em dashes should never appear in output for any reason.

### Internal Links (Wikilinks)

**Always use `[[wikilinks]]` for cross-referencing other notes in the vault.** This is the single most important formatting rule.

- Basic link: `[[Major Factions]]`
- Link with display text: `[[Major Factions|the factions of Aethermourne]]`
- Link to a heading: `[[The Twelve#Solvaen]]`
- Link to a heading with display text: `[[The Twelve#Solvaen|Solvaen, God of Order]]`
- Embed another note inline: `![[World Overview]]`
- Embed a specific section: `![[The Twelve#Serith]]`

**Rules:**
- Never use bare markdown links `[text](path)` for internal vault references
- Use the shortest unambiguous filename, Obsidian resolves by filename across the vault
- When mentioning an NPC, faction, location, god, or any entity that has its own file, **always** link to it
- When mentioning an entity that appears in a shared file (e.g., a god in `The Twelve.md`), link to the heading: `[[The Twelve#Morrhael]]`

### Callouts

Obsidian uses blockquote-based callout syntax. Every line of callout content must be prefixed with `> `.

| Purpose | Syntax |
|---|---|
| In-world lore, player-facing info | `> [!info] Title` |
| Important mechanical or meta notes | `> [!warning] Title` |
| DM-secret content (collapsed) | `> [!warning]- GM Only` |
| Helpful GM craft tips | `> [!tip] Title` |
| In-world quotes, prophecies, inscriptions | `> [!quote] Title` |
| Example stat blocks, encounter setups | `> [!example] Title` |
| Generic collapsible sections | `> [!note]- Title` |

**Foldable callouts:** Add `-` after the type to make it collapsed by default, `+` to make it expanded by default. No suffix means always open.

```markdown
> [!warning]- GM Only
> Serith's influence has already reached the Ashen Dominion's inner council.
> The Cinders are not what they appear to be.
```

**Nested callouts** use additional `>` levels:
```markdown
> [!info] Outer callout
> > [!warning] Nested callout
> > Content here.
```

### Tags

Use tags for categorization and filtering. Tags go in YAML frontmatter (preferred) or inline with `#tag`.

**Tag hierarchy:**

| Category | Tags |
|---|---|
| Content type | `#npc`, `#faction`, `#location`, `#lore`, `#session`, `#campaign` |
| Region | `#region/ashen-dominion`, `#region/hollowed-reach`, `#region/verdant-marches`, `#region/pale-wastes` |
| Pantheon | `#pantheon/dead`, `#pantheon/surviving`, `#pantheon/imprisoned`, `#pantheon/shattered` |
| Campaign | `#campaign/second-silence` |
| Status | `#status/active`, `#status/resolved`, `#status/dormant` |
| Act | `#act/1`, `#act/2`, `#act/3`, `#act/4`, `#act/5` |

### YAML Frontmatter (Properties)

Every file should have YAML frontmatter at the top. The schema depends on content type:

**NPC:**
```yaml
---
tags:
  - npc
  - region/hollowed-reach
  - faction/lantern-keepers
aliases:
  - Ashvane
type: npc
region: The Hollowed Reach
faction: Lantern-Keepers
status: alive
---
```

**Faction:**
```yaml
---
tags:
  - faction
  - region/ashen-dominion
aliases: []
type: faction
region: The Ashen Dominion
---
```

**Location:**
```yaml
---
tags:
  - location
  - region/hollowed-reach
aliases: []
type: location
region: The Hollowed Reach
parent-location: The Hollowed Reach
---
```

**Session:**
```yaml
---
tags:
  - session
  - campaign/second-silence
  - act/1
type: session
session-number: 1
date: 2026-03-18
act: 1
---
```

**Lore/Article:**
```yaml
---
tags:
  - lore
aliases: []
type: lore
category: cosmology
---
```

**Rules:**
- `tags` is always a list (use `-` prefix per tag)
- `aliases` provides alternate names for Obsidian's link resolution
- `type` is always one of: `npc`, `faction`, `location`, `session`, `campaign`, `lore`, `overview`
- `status` for NPCs: `alive`, `dead`, `missing`, `unknown`, `imprisoned`
- Keep frontmatter concise, only include properties that are relevant

---

## Forbidden Patterns

These are **LegendKeeper** artifacts and must **never** be used or created:

- `:::panel-*`, `:::secret`, `:::expand`, `:::layout`, `:::col-*`, use Obsidian callouts instead
- `@[Name](lk://id)`, use `[[Name]]` wikilinks instead
- `<!-- lk-* -->` HTML comments, do not create these
- `lk:` YAML frontmatter, do not create these
- `_lk_meta.json` files, do not create these

If you encounter any of these in existing files while editing, **convert them** to their Obsidian equivalents using the `obsidian-markdown` skill's conversion table.

---

## World Structure

```
Aethermourne/
├── World Overview.md          # Core world concept, themes, tone
├── Player Primer.md           # Player-facing world guide
├── Timeline.md                # Chronological history (AS dating)
├── NPCRegistry.md             # Master NPC index
├── PartyState.md              # Current party status (created when campaign starts)
├── Sessions/                  # Session logs and planning
│   └── Ongoing Threads.md    # Active plot threads
├── Players/                   # PC files (created when campaign starts)
└── Compendium/
    ├── Cosmology and Magic.md # Magic traditions, divine materials, planar structure
    ├── Campaigns/
    │   └── The Second Silence/
    │       └── Campaign Overview.md
    ├── Factions/
    │   └── Major Factions.md
    ├── History/               # World history articles
    ├── NPCs/                  # Individual NPC detail files
    ├── Pantheon/
    │   └── The Twelve.md
    └── World Atlas/
        ├── The Ashen Dominion.md
        ├── The Hollowed Reach.md
        ├── The Pale Wastes.md
        └── The Verdant Marches.md
```

## Tone

Mythic dark fantasy. Decayed majesty. A world built on the bones of dead gods where everything beautiful is also haunted. Heroes exist but heroism is hard-won and leaves marks. Consequence-driven, morally complex, awe and unease in equal measure.

---

## GM Design Principles

### The Three Clue Rule

For any conclusion you want the players to reach, always include **at least three clues** pointing to it. This applies to mysteries, plot-critical revelations, hidden connections, and any situation where the players need to figure something out.

**Why three?** Players will miss clues. They'll misinterpret them, overlook them, or go in an unexpected direction. Three clues means that even if they miss two, they still have a path forward. If they find all three, the conclusion feels earned and well-supported.

**When generating content, apply this rule to:**
- Session plans: any mystery, investigation, or plot gate must have 3+ independent clues
- NPC designs: if an NPC holds a secret, there should be 3+ ways the players could discover it
- Location descriptions: if a place contains something important, embed clues in the environment, NPCs present, and discoverable objects or documents
- Plot threads: if a thread requires a specific revelation to advance, seed that revelation across 3+ sources (people, places, evidence)

**Clue diversity matters.** The three clues should come through different channels: one might be found through investigation, another through social interaction, and a third through environmental observation. Don't cluster all clues in the same method of discovery.

**Corollary: permissive clue-finding.** If the players come up with a reasonable approach that wasn't pre-planned, it should still work. Clues are not locked to specific skill checks or exact actions. Reward creative thinking by letting novel approaches reveal existing clues.

---

## Worker Agent Idle Protocol

**This applies to all agents except `aethermourne-gamemaster`.** The Gamemaster is the only agent that runs cycles or initiates work autonomously.

**You are task-driven, not self-directed.** You act when the Gamemaster assigns you work via AMP. You do not act otherwise.

**After `/compact` or `cycle-reset.sh`:** check `amp-inbox.sh`. If there are tasks from the Gamemaster, execute them. If not, **stop and wait.** Do nothing until the Gamemaster sends you a task.

**You must never:**
- Start, continue, or initiate a bbqsauce cycle or any autonomous loop
- Begin work without an explicit AMP task from the Gamemaster
- Interpret your role description as a standing order to produce output
