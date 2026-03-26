#!/bin/bash

# Fast Snapshot Script (uses persistent server)
#
# Takes a screenshot using the persistent snapshot server via HTTP API.
# Much faster than map-snapshot.sh (2-3 seconds vs 15 seconds)
#
# Usage: ./snapshot-fast.sh <filename>

cd "$(dirname "$0")"

if [ -z "$1" ]; then
  echo "Error: filename required"
  echo "Usage: ./snapshot-fast.sh <filename>"
  exit 1
fi

FILENAME="$1"
CONTROL_PORT=3779

# Make HTTP request to snapshot server
RESPONSE=$(curl -s -w "\n%{http_code}" "http://localhost:$CONTROL_PORT/capture?filename=$FILENAME")
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

if [ "$HTTP_CODE" = "200" ]; then
  echo "✓ Snapshot captured: $FILENAME"
  exit 0
elif [ "$HTTP_CODE" = "000" ]; then
  echo "Error: Snapshot server not responding"
  echo "Start it with: nohup node scripts/snapshot-server.mjs > data/snapshot-server.log 2>&1 &"
  exit 1
else
  echo "Error: Capture failed (HTTP $HTTP_CODE)"
  echo "$BODY"
  exit 1
fi
