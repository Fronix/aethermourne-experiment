# Stage 1a: Build Aethermourne Quartz site
FROM node:22-alpine AS quartz-aethermourne

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

# Copy dependency manifests first for better layer caching
COPY site/package.json site/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the Quartz source
COPY site/ .

# Copy entire vault (includes CHANGELOG.md, no separate copy needed)
COPY worlds/aethermourne/vault/ content/

# Set baseUrl with /aethermourne prefix
RUN sed -i 's|baseUrl:.*|baseUrl: "aethermourne.fronix.se/aethermourne",|' quartz.config.ts
RUN sed -i 's|pageTitle:.*|pageTitle: "Aethermourne",|' quartz.config.ts

# Build the static site
RUN node --no-deprecation ./quartz/bootstrap-cli.mjs build

# Stage 2: Runtime - Multi-world server
# Note: When you create a new world, add a new build stage above and copy it below
FROM node:22-alpine

WORKDIR /app

COPY server.js .

# Copy all world builds to separate directories
COPY --from=quartz-aethermourne /usr/src/app/public ./public/aethermourne

# Copy map viewer (shared across worlds)
COPY map/ ./public/map/

# Copy all world data
COPY data/aethermourne/ ./data/aethermourne/

# Copy worlds directory for config reading
COPY worlds/ ./worlds/

ENV PORT=80
# AMP_INGEST_TOKEN is set at runtime via Coolify environment variables

EXPOSE 80

CMD ["node", "server.js"]
