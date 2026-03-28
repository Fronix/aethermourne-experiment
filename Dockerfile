# Stage 1: Build all Quartz sites (auto-discovers worlds)
FROM node:22-alpine AS quartz-builder

RUN corepack enable && corepack prepare pnpm@latest --activate

# Install jq for JSON parsing
RUN apk add --no-cache jq bash

WORKDIR /usr/src/app

# Copy dependency manifests first for better layer caching
COPY site/package.json site/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the Quartz source
COPY site/ .

# Copy all worlds and build script
COPY worlds/ /usr/src/app/worlds/
COPY scripts/build-all-worlds.sh /usr/src/app/scripts/

# Build all discovered worlds
RUN bash /usr/src/app/scripts/build-all-worlds.sh

# Stage 2: Runtime - Multi-world server
FROM node:22-alpine

WORKDIR /app

COPY server.js .
COPY landing.html .

# Copy all built worlds from the builder
COPY --from=quartz-builder /usr/src/app/public-multiworld/. ./public/

# Copy map viewer (shared across worlds)
COPY map/ ./public/map/

# Copy all world data directories
COPY data/ ./data/

# Copy worlds directory for config reading
COPY worlds/ ./worlds/

ENV PORT=80
# AMP_INGEST_TOKEN is set at runtime via Coolify environment variables

EXPOSE 80

CMD ["node", "server.js"]
