# Stage 1: Build the static site
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

# Copy dependency manifests first for better layer caching
COPY site/package.json site/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the Quartz source
COPY site/ .

# Copy vault content into Quartz's expected content directory
COPY Aethermourne/ content/

# Base URL for sitemap/RSS (e.g. "aethermourne.example.com", no protocol)
ARG BASE_URL=localhost
ENV BASE_URL=${BASE_URL}

# Build the static site
RUN node --no-deprecation ./quartz/bootstrap-cli.mjs build

# Stage 2: Serve with Node relay (static files + AMP live event streaming)
FROM node:22-alpine

WORKDIR /app
COPY server.js .
COPY --from=builder /usr/src/app/public ./public

ENV PORT=80
# AMP_INGEST_TOKEN is set at runtime via Coolify environment variables

EXPOSE 80

CMD ["node", "server.js"]
