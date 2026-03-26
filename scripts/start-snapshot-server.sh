#!/bin/bash

# Start Persistent Snapshot Server
#
# Starts the snapshot server in the background for fast map captures.
# Used by Cartographer infinite mode.

cd "$(dirname "$0")"

STATE_FILE="../.agents/snapshot-server.pid"

# Check if already running
if [ -f "$STATE_FILE" ]; then
  PID=$(cat "$STATE_FILE" | grep -o '"pid":[0-9]*' | cut -d: -f2)
  if kill -0 "$PID" 2>/dev/null; then
    echo "Snapshot server already running (PID: $PID)"
    exit 0
  else
    echo "Cleaning up stale PID file"
    rm -f "$STATE_FILE"
  fi
fi

# Start server in background
echo "Starting snapshot server..."
nohup node snapshot-server.mjs > ../data/snapshot-server.log 2>&1 &

# Wait for startup
sleep 3

# Verify it started
if [ -f "$STATE_FILE" ]; then
  PID=$(cat "$STATE_FILE" | grep -o '"pid":[0-9]*' | cut -d: -f2)
  if kill -0 "$PID" 2>/dev/null; then
    echo "✓ Snapshot server started (PID: $PID)"
    echo "  Map server: http://localhost:3778"
    echo "  Control API: http://localhost:3779"
    exit 0
  fi
fi

echo "✗ Failed to start snapshot server"
echo "Check logs: data/snapshot-server.log"
exit 1
