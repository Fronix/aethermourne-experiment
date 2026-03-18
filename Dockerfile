# Stage 1: Build the static site
FROM node:22 AS builder

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
RUN npx quartz build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /usr/src/app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
