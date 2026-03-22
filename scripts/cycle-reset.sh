#!/bin/bash
# Injects /compact then a follow-up message into the agent's own Claude Code session.
# Usage: ./scripts/cycle-reset.sh [session-name] [follow-up message]
# Defaults: session from $AIM_AGENT_NAME, message = "Continue bbqsauce loop. Start Phase 1."

SESSION="${1:-$AIM_AGENT_NAME}"
MESSAGE="${2:-Continue bbqsauce loop. Start Phase 1.}"

if [ -z "$SESSION" ]; then
  echo "Error: No session name. Set AIM_AGENT_NAME or pass as argument."
  exit 1
fi

# Inject /compact as user input
tmux send-keys -t "$SESSION" "/compact" Enter

# Wait for compact to finish — poll tmux pane until we see the input prompt again
# Claude Code shows ">" or the user prompt when ready for input
MAX_WAIT=120
WAITED=0
sleep 5
while [ $WAITED -lt $MAX_WAIT ]; do
  # Capture the last line of the pane
  LAST_LINE=$(tmux capture-pane -t "$SESSION" -p | tail -1)
  # Check if Claude Code is back at the input prompt
  if echo "$LAST_LINE" | grep -qE '^\s*>\s*$|^\s*\$\s*$'; then
    break
  fi
  sleep 5
  WAITED=$((WAITED + 5))
done

# Inject follow-up message to keep the loop going
tmux send-keys -t "$SESSION" "$MESSAGE" Enter
