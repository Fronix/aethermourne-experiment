---
name: obsidian-markdown
description: Rules for writing and editing Obsidian-native markdown in the Aethermourne vault. Load this skill before creating or editing any .md files.
---

## Obsidian Markdown Editing Rules

When creating or editing `.md` files in this vault, follow these rules to ensure full Obsidian compatibility.

### Cross-References (Wikilinks)

- Use `[[File Name]]` to link to other notes in the vault
- Use `[[File Name|Display Text]]` when the link text should differ from the filename
- Use `[[File Name#Heading]]` to link to a specific heading in another note
- Use `![[File Name]]` to embed another note's content
- When referencing an NPC, faction, location, god, or other entity with its own file or heading, **always create a wikilink**
- For entities in shared files (e.g., individual gods in `The Twelve.md`), link to the heading: `[[The Twelve#Serith]]`
- Use the shortest unambiguous filename — Obsidian resolves across the vault

### Callout Syntax

All callouts use blockquote syntax. Every line inside a callout must start with `> `.

```markdown
> [!info] Title
> Content goes here.
> Every line needs the `> ` prefix.
```

**Callout type reference:**

| Use case | Syntax |
|---|---|
| In-world lore, player-facing | `> [!info] Title` |
| Mechanical or meta notes | `> [!warning] Title` |
| DM-only secrets (collapsed) | `> [!warning]- GM Only` or `> [!warning]- Title` |
| GM craft tips | `> [!tip] Title` |
| In-world quotes, inscriptions | `> [!quote] Title` |
| Stat blocks, encounter setups | `> [!example] Title` |
| Collapsible sections | `> [!note]- Title` |

**Foldable:** `-` after type = collapsed by default. `+` = expanded. No suffix = always open.

### Converting Legacy LK Syntax

When you encounter LegendKeeper `:::` directives in existing files, convert them using this mapping:

| LK Directive | Obsidian Replacement |
|---|---|
| `:::panel-info Title` | `> [!info] Title` |
| `:::panel-info` (no title) | `> [!info]` |
| `:::panel-warning Title` | `> [!warning] Title` |
| `:::panel-warning` (no title) | `> [!warning]` |
| `:::panel-success Title` | `> [!success] Title` |
| `:::panel-error Title` | `> [!danger] Title` |
| `:::secret Title` | `> [!warning]- Title` |
| `:::secret` (no title) | `> [!warning]- GM Only` |
| `:::expand Title` | `> [!note]- Title` |

**Conversion procedure:**
1. Replace the opening `:::directive Title` line with the corresponding `> [!type] Title`
2. Prefix every content line between the opening and closing `:::` with `> `
3. Remove the closing `:::` line entirely (callouts end when the `> ` prefix stops)
4. Preserve all content, formatting, and wikilinks within the callout
5. If the callout content contains blank lines, use `>` (just the angle bracket) for empty lines within the callout

### YAML Frontmatter

Every new file must include YAML frontmatter with at minimum `tags` and `type`. See `instructions.md` for the full schema per content type.

When editing existing files:
- If frontmatter exists, preserve it and add missing properties
- If no frontmatter exists, add it at the top of the file
- Never overwrite existing frontmatter values without user confirmation

### General Rules

- Never create `lk:` frontmatter, `:::` directives, `@[](lk://)` references, `<!-- lk-* -->` comments, or `_lk_meta.json` files
- Preserve existing wikilinks when editing
- Add wikilinks to entities that are mentioned but not yet linked
- Keep markdown clean: use standard headings, bold, italic, lists, and tables
- Use `---` horizontal rules to separate major sections
