#!/bin/bash
# Nudge script - sends CTRL+C to an agent's tmux session to unstick them
# Usage: ./scripts/nudge-agent.sh wylderan-lorekeeper

AGENT_NAME="$1"

if [ -z "$AGENT_NAME" ]; then
    echo "Usage: ./scripts/nudge-agent.sh <agent-name>"
    echo "Example: ./scripts/nudge-agent.sh wylderan-lorekeeper"
    exit 1
fi

# Check if tmux session exists
if ! tmux has-session -t "$AGENT_NAME" 2>/dev/null; then
    echo "Error: No tmux session found for $AGENT_NAME"
    exit 1
fi

echo "Sending CTRL+C to $AGENT_NAME to unstick..."
tmux send-keys -t "$AGENT_NAME:0" C-c

echo "Nudge sent. Agent should be ready for new input."
