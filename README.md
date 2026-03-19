# Aethermourne

**Preview:** [aethermourne.fronix.io](https://aethermourne.fronix.io/)

A mythic dark fantasy TTRPG world built on the bones of dead gods, published as a website using [Quartz](https://quartz.jzhao.xyz/).

**This entire world, including all lore, NPCs, factions, regions, history, and campaign content, is 100% AI-generated.** This project is an experiment to explore how far AI can go in creating a cohesive, deep, and playable TTRPG setting. No human-written worldbuilding exists in this vault.

**Tools used:**
- **[Claude](https://claude.ai)** (Anthropic) — All worldbuilding content, lore, and narrative design
- **[OpenCode](https://github.com/anomalyco/opencode)** (Anthropic) — Infrastructure setup, Quartz configuration, Docker pipeline, deployment, and site customization
- **[Obsidian](https://obsidian.md)** — Knowledge base and vault structure

The AI agents, slash commands, and skills that drive the worldbuilding workflow are all included in the [`.opencode/`](.opencode/) directory. See the [OpenCode Configuration](#opencode-configuration) section below for details.

## Overview

Aethermourne is an Obsidian vault containing worldbuilding content for a dark fantasy setting using the Nimble TTRPG system. The active campaign is **The Second Silence**.

The vault is automatically built and deployed as a static website via Docker.

---

## Create Your Own World

Want to use this setup for your own TTRPG world? Fork the repo, then run the setup script:

```bash
git clone https://github.com/Fronix/aethermourne-experiment.git my-world
cd my-world
./setup.sh
```

The script will ask you for:
- **World name** (e.g. "Eldoria")
- **Campaign name** (e.g. "The Shattered Crown")
- **Tone** (a 1-2 sentence description of your world's vibe)

It then generates:
- A full Obsidian vault folder structure with starter files
- All OpenCode agents, commands, and skills configured for your world
- Updated Quartz config and Dockerfile

From there, fire up [OpenCode](https://github.com/anomalyco/opencode) and start building:

```bash
opencode
/worldbuild [your first topic]
```

---

## OpenCode Configuration

The [`.opencode/`](.opencode/) directory contains the full AI-driven worldbuilding workflow. Everything here is used by [OpenCode](https://github.com/anomalyco/opencode) to power the content creation process.

### Agents

| Agent | Description |
|---|---|
| [`gm.md`](.opencode/agents/gm.md) | Primary GM assistant for lore lookup, GM craft advice, and command routing |
| [`lore-audit.md`](.opencode/agents/lore-audit.md) | Exhaustive lore consistency auditor for cross-referencing and contradiction detection |

### Slash Commands

| Command | Description |
|---|---|
| [`/worldbuild`](.opencode/commands/worldbuild.md) | Create or expand world content (single topic) |
| [`/expand-region`](.opencode/commands/expand-region.md) | Bulk-generate all missing location files for a region |
| [`/enrich-npcs`](.opencode/commands/enrich-npcs.md) | Bulk-enrich thin NPC files with backstory, relationships, and roleplay cues |
| [`/npc`](.opencode/commands/npc.md) | Look up an existing NPC or create a new one |
| [`/plan-session`](.opencode/commands/plan-session.md) | Plan a new session for The Second Silence |
| [`/process-transcript`](.opencode/commands/process-transcript.md) | Process a session transcript into narrative summary and update tracking files |
| [`/after-session`](.opencode/commands/after-session.md) | Post-session checklist to update all tracking files |
| [`/recap`](.opencode/commands/recap.md) | Generate a current world-state briefing and opening monologue |
| [`/player-arc`](.opencode/commands/player-arc.md) | Develop a PC's personal story arc |

### Skills

| Skill | Description |
|---|---|
| [`obsidian-markdown`](.opencode/skills/obsidian-markdown/SKILL.md) | Formatting rules for Obsidian-native markdown (wikilinks, callouts, frontmatter) |
| [`session-template`](.opencode/skills/session-template/SKILL.md) | Template structure for session documents |
| [`worldbuilding-templates`](.opencode/skills/worldbuilding-templates/SKILL.md) | Canonical templates for settlements, landmarks, NPCs, creatures, and artifacts |

---

## Project Structure

```
├── Aethermourne/       # Obsidian vault content (world lore, NPCs, factions, etc.)
├── .opencode/          # AI agents, commands, and skills for OpenCode
├── site/               # Quartz static site generator
│   ├── quartz.config.ts
│   ├── quartz.layout.ts
│   └── content/        # Landing page (index.md)
├── Dockerfile          # Multi-stage build (Node + Nginx)
├── nginx.conf          # Nginx config for serving the static site
└── .dockerignore
```

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v22+
- [pnpm](https://pnpm.io/)

### Setup

```bash
cd site
pnpm install
```

### Preview locally

Copy the vault content into the Quartz content directory and start the dev server:

```bash
cp -r ../Aethermourne/* content/
npx quartz build --serve
```

Then open `http://localhost:8080`.

## Docker

### Build

```bash
docker build -t aethermourne .
```

### Run

```bash
docker run -p 8080:80 aethermourne
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | Domain for sitemaps and RSS (no protocol, no trailing slash) | `localhost` |

Pass it as a build arg:

```bash
docker build --build-arg BASE_URL=aethermourne.example.com -t aethermourne .
```

## Deployment (Coolify)

1. Point Coolify at this repository
2. Build pack: **Dockerfile**
3. Ports Exposes: **80**
4. Set the `BASE_URL` build argument to your domain
5. Configure a webhook for auto-deploy on push
