---
name: obsidian-markdown
description: Rules for writing and editing Obsidian-native markdown in the vault. Load this skill before creating or editing any .md files.
---

## Obsidian Markdown Editing Rules

When creating or editing `.md` files in this vault, follow these rules to ensure full Obsidian compatibility.

### Cross-References (Wikilinks)

- Use `[[File Name]]` to link to other notes in the vault
- Use `[[File Name|Display Text]]` when the link text should differ from the filename
- Use `[[File Name#Heading]]` to link to a specific heading in another note
- Use `![[File Name]]` to embed another note's content
- When referencing an NPC, faction, location, or other entity with its own file or heading, **always create a wikilink**
- Use the shortest unambiguous filename, Obsidian resolves across the vault

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

### YAML Frontmatter

Every new file must include YAML frontmatter with at minimum `tags` and `type`.

When editing existing files:
- If frontmatter exists, preserve it and add missing properties
- If no frontmatter exists, add it at the top of the file
- Never overwrite existing frontmatter values without user confirmation

### General Rules

- Preserve existing wikilinks when editing
- Add wikilinks to entities that are mentioned but not yet linked
- Keep markdown clean: use standard headings, bold, italic, lists, and tables
- Use `---` horizontal rules to separate major sections
