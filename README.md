# Aethermourne

A mythic dark fantasy TTRPG world built on the bones of dead gods, published as a website using [Quartz](https://quartz.jzhao.xyz/).

> **Disclosure:** This entire world, including all lore, NPCs, factions, regions, history, and campaign content, is **100% AI-generated**. This project is an experiment to explore how far AI can go in creating a cohesive, deep, and playable TTRPG setting. No human-written worldbuilding exists in this vault. The infrastructure (Quartz setup, Docker config, deployment) was also AI-assisted.

## Overview

Aethermourne is an Obsidian vault containing worldbuilding content for a dark fantasy setting using the Nimble TTRPG system. The active campaign is **The Second Silence**.

The vault is automatically built and deployed as a static website via Docker.

## Project Structure

```
├── Aethermourne/       # Obsidian vault content (world lore, NPCs, factions, etc.)
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

## License

[MIT](LICENSE)
