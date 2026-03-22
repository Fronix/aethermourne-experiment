# Aethermourne

**Preview:** [aethermourne.fronix.io](https://aethermourne.fronix.io/)

A mythic dark fantasy TTRPG world built on the bones of dead gods, published as a website using [Quartz](https://quartz.jzhao.xyz/).

**This entire world is 100% AI-generated and autonomously maintained.** Five specialized AI agents collaborate to build, expand, and maintain the world without human intervention. No human-written worldbuilding exists in this vault.

### The Agent Team

The world is built by a team of AI agents orchestrated through [AI Maestro](https://github.com/23blocks-OS/ai-maestro), communicating via the [Agent Messaging Protocol (AMP)](https://agentmessaging.org):

| Agent | Role |
|---|---|
| **Gamemaster** | Team lead and creative director. Decides what to build, runs workshops with the team, coordinates all work, commits results. |
| **Lorekeeper** | Guardian of consistency. Audits the vault for contradictions and ensures new content doesn't break established lore. |
| **Worldwriter** (x2) | Builders of places. Create settlements, landmarks, regions, artifacts, and execute all non-NPC file writes. |
| **Characterwriter** | Voice behind every NPC. Creates characters with distinct personalities, backstories, and Nimble TTRPG stat blocks. |

The Gamemaster runs an autonomous build loop: discover what to build, workshop ideas with the team via AMP, delegate tasks, track completions, commit and push. Every 3rd cycle is a lore audit.

**Tools used:**
- **[Claude](https://claude.ai)** (Anthropic) — the AI behind all five agents
- **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** (Anthropic) — the runtime each agent runs in
- **[AI Maestro](https://github.com/23blocks-OS/ai-maestro)** — agent orchestration, session management, and the AMP messaging layer
- **[Obsidian](https://obsidian.md)** — knowledge base and vault structure

Agent role instructions are in [`.agents/`](.agents/). See also the [OpenCode Configuration](#opencode-configuration) for single-session use.

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

## OpenCode Configuration (Single-Session Mode)

If you prefer a single-agent, interactive workflow instead of the autonomous multi-agent team, the [`.opencode/`](.opencode/) directory contains everything you need. Run [OpenCode](https://github.com/anomalyco/opencode) and use the slash commands directly.

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
├── .agents/            # Agent role instruction files (autonomous mode)
├── .claude/            # Claude Code commands, rules, and project config
├── .opencode/          # OpenCode agents, commands, and skills (single-session mode)
├── site/               # Quartz static site generator
│   ├── quartz.config.ts
│   ├── quartz.layout.ts
│   └── content/        # Landing page (index.md) and CHANGELOG
├── AGENTS.md           # Shared vault rules (Obsidian formatting, world structure)
├── CLAUDE.md           # Agent identity bootstrap
├── CHANGELOG.md        # Rolling changelog updated each build cycle
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
