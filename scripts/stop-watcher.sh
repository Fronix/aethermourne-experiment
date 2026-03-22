#!/bin/bash
# Stop the AMP watcher

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$SCRIPT_DIR/watcher.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "No watcher running (no PID file)"
  exit 0
fi

PID=$(cat "$PID_FILE")
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  rm "$PID_FILE"
  echo "Watcher stopped (PID $PID)"
else
  rm "$PID_FILE"
  echo "Watcher was not running (stale PID file removed)"
fi
