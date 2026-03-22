#!/bin/bash
# Start the AMP watcher in the background
# Usage: ./scripts/start-watcher.sh [--history]
#
# Requires: AMP_REMOTE_URL and AMP_INGEST_TOKEN in ~/.env.amp-watcher
# Example ~/.env.amp-watcher:
#   AMP_REMOTE_URL=https://aethermourne.fronix.io
#   AMP_INGEST_TOKEN=your-secret

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$HOME/.env.amp-watcher"
LOG_FILE="$SCRIPT_DIR/watcher.log"
PID_FILE="$SCRIPT_DIR/watcher.pid"

# Check if already running
if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Watcher already running (PID $(cat "$PID_FILE"))"
  echo "Stop it with: ./scripts/stop-watcher.sh"
  exit 1
fi

# Load env
if [ -f "$ENV_FILE" ]; then
  set -a
  source "$ENV_FILE"
  set +a
else
  echo "Missing $ENV_FILE"
  echo "Create it with:"
  echo "  AMP_REMOTE_URL=https://aethermourne.fronix.io"
  echo "  AMP_INGEST_TOKEN=your-secret"
  exit 1
fi

if [ -z "$AMP_REMOTE_URL" ] || [ -z "$AMP_INGEST_TOKEN" ]; then
  echo "AMP_REMOTE_URL and AMP_INGEST_TOKEN must be set in $ENV_FILE"
  exit 1
fi

# Start in background
nohup node "$SCRIPT_DIR/amp-watcher.mjs" "$@" >> "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

echo "Watcher started (PID $!)"
echo "Logs: tail -f $LOG_FILE"
echo "Stop: ./scripts/stop-watcher.sh"
