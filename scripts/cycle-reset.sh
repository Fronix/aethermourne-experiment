#!/bin/bash
# Injects /compact then a follow-up message into the agent's own Claude Code session.
# Runs entirely in the background so the calling Bash tool returns immediately,
# allowing Claude Code to process the injected /compact.
#
# Usage: ./scripts/cycle-reset.sh [session-name] [follow-up message]
# Defaults: session from $AIM_AGENT_NAME, message = "Continue bbqsauce loop. Start Phase 1."

SESSION="${1:-$AIM_AGENT_NAME}"
MESSAGE="${2:-Continue bbqsauce loop. Start Phase 1.}"

if [ -z "$SESSION" ]; then
  echo "Error: No session name. Set AIM_AGENT_NAME or pass as argument."
  exit 1
fi

# Run everything in the background so the Bash tool returns immediately
(
  # Small delay to let the current response finish
  sleep 3

  # Cancel any in-progress generation, clear the input line, then inject /compact
  tmux send-keys -t "$SESSION" C-c
  sleep 1
  tmux send-keys -t "$SESSION" C-u
  sleep 0.5
  tmux send-keys -t "$SESSION" "/compact" Enter

  # Wait for compact to finish — poll tmux pane until we see the input prompt again
  MAX_WAIT=120
  WAITED=0
  sleep 10
  while [ $WAITED -lt $MAX_WAIT ]; do
    LAST_LINE=$(tmux capture-pane -t "$SESSION" -p | tail -1)
    if echo "$LAST_LINE" | grep -qE '^\s*>\s*$|^\s*\$\s*$'; then
      break
    fi
    sleep 5
    WAITED=$((WAITED + 5))
  done

  # Clear input line, then inject follow-up message to keep the loop going
  tmux send-keys -t "$SESSION" C-u
  sleep 0.5
  tmux send-keys -t "$SESSION" "$MESSAGE" Enter
) &

echo "Cycle reset scheduled in background for session: $SESSION"
