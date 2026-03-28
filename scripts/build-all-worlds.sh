#!/bin/bash
set -e

# Build all worlds in worlds/ directory for Quartz static site generation
# This script is called during Docker build to automatically discover and build all worlds

# Detect if running in Docker or locally
if [ -d "/usr/src/app" ]; then
  # Running in Docker
  PROJECT_ROOT="/usr/src/app"
  QUARTZ_DIR="/usr/src/app"
else
  # Running locally
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
  QUARTZ_DIR="$PROJECT_ROOT/site"
fi

OUTPUT_BASE="$QUARTZ_DIR/public-multiworld"

echo "==================================="
echo "  Building All Worlds for Quartz"
echo "==================================="
echo ""

# Clean previous builds
rm -rf "$OUTPUT_BASE"
mkdir -p "$OUTPUT_BASE"

# Discover all worlds
if [ ! -d "$PROJECT_ROOT/worlds" ]; then
  echo "Error: worlds/ directory not found"
  exit 1
fi

WORLDS=$(ls -1 "$PROJECT_ROOT/worlds" 2>/dev/null || echo "")

if [ -z "$WORLDS" ]; then
  echo "Error: No worlds found in worlds/ directory"
  exit 1
fi

echo "Discovered worlds:"
for world in $WORLDS; do
  echo "  - $world"
done
echo ""

# Build each world
for world_slug in $WORLDS; do
  echo "Building world: $world_slug"
  echo "-----------------------------------"

  WORLD_DIR="$PROJECT_ROOT/worlds/$world_slug"
  VAULT_DIR="$WORLD_DIR/vault"
  CONFIG_FILE="$WORLD_DIR/world.config.json"

  # Verify world structure
  if [ ! -d "$VAULT_DIR" ]; then
    echo "Warning: Vault not found for $world_slug, skipping"
    continue
  fi

  if [ ! -f "$CONFIG_FILE" ]; then
    echo "Warning: world.config.json not found for $world_slug, skipping"
    continue
  fi

  # Read world config
  WORLD_NAME=$(jq -r '.name' "$CONFIG_FILE")
  BASE_URL=$(jq -r '.buildConfig.baseUrl' "$CONFIG_FILE")

  echo "  Name: $WORLD_NAME"
  echo "  Base URL: $BASE_URL/$world_slug"

  # Clean content directory
  rm -rf "$QUARTZ_DIR/content"
  mkdir -p "$QUARTZ_DIR/content"

  # Copy vault content
  cp -r "$VAULT_DIR/"* "$QUARTZ_DIR/content/"

  # Update quartz.config.ts
  cp "$QUARTZ_DIR/quartz.config.ts.template" "$QUARTZ_DIR/quartz.config.ts" 2>/dev/null || \
    cp "$QUARTZ_DIR/quartz.config.ts" "$QUARTZ_DIR/quartz.config.ts.bak"

  sed -i "s|baseUrl:.*|baseUrl: \"$BASE_URL/$world_slug\",|" "$QUARTZ_DIR/quartz.config.ts"
  sed -i "s|pageTitle:.*|pageTitle: \"$WORLD_NAME\",|" "$QUARTZ_DIR/quartz.config.ts"

  # Build Quartz site (must run from QUARTZ_DIR)
  echo "  Running Quartz build..."
  (cd "$QUARTZ_DIR" && node --no-deprecation ./quartz/bootstrap-cli.mjs build)

  # Move built site to world-specific directory
  mkdir -p "$OUTPUT_BASE/$world_slug"
  mv "$QUARTZ_DIR/public/"* "$OUTPUT_BASE/$world_slug/"

  echo "  ✓ Built $world_slug → public-multiworld/$world_slug/"
  echo ""
done

echo "==================================="
echo "  All Worlds Built Successfully"
echo "==================================="
echo ""
echo "Output directory: $OUTPUT_BASE"
for world in $WORLDS; do
  if [ -d "$OUTPUT_BASE/$world" ]; then
    echo "  - $world/"
  fi
done
