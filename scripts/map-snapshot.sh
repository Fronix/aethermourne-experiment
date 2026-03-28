#!/bin/bash

# Map Snapshot Wrapper Script
#
# Usage: ./map-snapshot.sh [filename]
#
# Takes a screenshot of the rendered map for visual verification.
# Used by the Cartographer agent to verify map-data.json accuracy.

cd "$(dirname "$0")"

# Check if dependencies are installed
if [ ! -d "node_modules/playwright" ]; then
  echo "Installing dependencies..."
  npm install
  npx playwright install chromium
fi

# Set WORLD_NAME if not already set (defaults to aethermourne for backward compatibility)
export WORLD_NAME="${WORLD_NAME:-aethermourne}"

# Run the snapshot script
node map-snapshot.mjs "$@"
