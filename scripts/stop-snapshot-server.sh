#!/bin/bash

# Stop Persistent Snapshot Server

cd "$(dirname "$0")"

STATE_FILE="../.agents/snapshot-server.pid"
CONTROL_PORT=3779

if [ ! -f "$STATE_FILE" ]; then
  echo "Snapshot server not running"
  exit 0
fi

echo "Stopping snapshot server..."

# Try graceful shutdown via HTTP
curl -s -X POST "http://localhost:$CONTROL_PORT/shutdown" > /dev/null 2>&1

# Wait for shutdown
sleep 2

# Force kill if still running
if [ -f "$STATE_FILE" ]; then
  PID=$(cat "$STATE_FILE" | grep -o '"pid":[0-9]*' | cut -d: -f2)
  if kill -0 "$PID" 2>/dev/null; then
    echo "Force killing PID $PID"
    kill -9 "$PID"
  fi
  rm -f "$STATE_FILE"
fi

echo "✓ Snapshot server stopped"
