#!/bin/bash
set -e

echo ""
echo "==================================="
echo "  TTRPG World Setup"
echo "  Powered by OpenCode + Claude"
echo "==================================="
echo ""

# --- Gather info ---

read -p "World name (e.g. Aethermourne): " WORLD_NAME
if [ -z "$WORLD_NAME" ]; then
  echo "Error: World name is required."
  exit 1
fi

read -p "Campaign name (e.g. The Second Silence): " CAMPAIGN_NAME
if [ -z "$CAMPAIGN_NAME" ]; then
  echo "Error: Campaign name is required."
  exit 1
fi

read -p "Vault folder name (default: $WORLD_NAME): " VAULT_FOLDER
VAULT_FOLDER="${VAULT_FOLDER:-$WORLD_NAME}"

echo ""
echo "Describe the tone of your world in 1-2 sentences."
echo "Example: Mythic dark fantasy. Decayed majesty. A world built on the bones of dead gods."
read -p "Tone: " TONE
if [ -z "$TONE" ]; then
  TONE="Dark fantasy. A world of ancient powers, moral complexity, and hard-won heroism."
fi

# Slugify campaign name for tags (lowercase, spaces to hyphens)
CAMPAIGN_SLUG=$(echo "$CAMPAIGN_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')

echo ""
echo "---"
echo "  World:    $WORLD_NAME"
echo "  Campaign: $CAMPAIGN_NAME"
echo "  Vault:    $VAULT_FOLDER/"
echo "  Tone:     $TONE"
echo "---"
echo ""
read -p "Proceed? (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
  echo "Aborted."
  exit 0
fi

# --- Check for conflicts ---

if [ -d "$VAULT_FOLDER" ]; then
  echo ""
  echo "Warning: $VAULT_FOLDER/ already exists. Vault folder creation will be skipped."
  echo "OpenCode files will still be generated."
  read -p "Continue? (y/n): " CONFIRM2
  if [ "$CONFIRM2" != "y" ] && [ "$CONFIRM2" != "Y" ]; then
    echo "Aborted."
    exit 0
  fi
  SKIP_VAULT=true
else
  SKIP_VAULT=false
fi

# --- Create vault folder structure ---

if [ "$SKIP_VAULT" = false ]; then
  echo ""
  echo "Creating vault structure..."
  mkdir -p "$VAULT_FOLDER"
  mkdir -p "$VAULT_FOLDER/Compendium/Campaigns/$CAMPAIGN_NAME"
  mkdir -p "$VAULT_FOLDER/Compendium/Factions"
  mkdir -p "$VAULT_FOLDER/Compendium/History"
  mkdir -p "$VAULT_FOLDER/Compendium/NPCs"
  mkdir -p "$VAULT_FOLDER/Compendium/Pantheon"
  mkdir -p "$VAULT_FOLDER/Compendium/World Atlas"
  mkdir -p "$VAULT_FOLDER/Sessions"
  mkdir -p "$VAULT_FOLDER/Players"

  # Create starter files
  cat > "$VAULT_FOLDER/World Overview.md" << MDEOF
---
tags:
  - lore
aliases:
  - World Overview
  - $WORLD_NAME
type: overview
---

# World Overview, $WORLD_NAME

*Your world concept goes here.*
MDEOF

  cat > "$VAULT_FOLDER/Timeline.md" << MDEOF
---
tags:
  - lore
aliases:
  - Timeline
  - History
type: lore
category: timeline
---

# Timeline of $WORLD_NAME

*Add your world's chronological history here.*
MDEOF

  cat > "$VAULT_FOLDER/NPCRegistry.md" << MDEOF
---
tags:
  - lore
aliases:
  - NPC Registry
type: overview
---

# NPC Registry

Master index of all named NPCs in $WORLD_NAME.

## Master Table

| NPC | Role | Region | Faction | Status |
|-----|------|--------|---------|--------|
| | | | | |
MDEOF

  cat > "$VAULT_FOLDER/PartyState.md" << MDEOF
---
tags:
  - campaign/$CAMPAIGN_SLUG
type: campaign
---

# Party State

Current state of the adventuring party in $CAMPAIGN_NAME.

## Location
*Where the party currently is.*

## Party Members
*List PCs here.*

## Inventory
*Notable items.*

## Allies & Enemies
*Key relationships.*
MDEOF

  cat > "$VAULT_FOLDER/Player Primer.md" << MDEOF
---
tags:
  - lore
aliases:
  - Player Primer
  - Player Guide
type: overview
---

# Player Primer: The World of $WORLD_NAME

*A player-facing introduction to your world.*
MDEOF

  cat > "$VAULT_FOLDER/Sessions/Ongoing Threads.md" << MDEOF
---
tags:
  - campaign/$CAMPAIGN_SLUG
type: campaign
---

# Ongoing Threads

Active plot threads for $CAMPAIGN_NAME.

## Active

*No threads yet.*

## Resolved

*No resolved threads yet.*
MDEOF

  cat > "$VAULT_FOLDER/Compendium/Campaigns/$CAMPAIGN_NAME/Campaign Overview.md" << MDEOF
---
tags:
  - campaign/$CAMPAIGN_SLUG
type: campaign
---

# $CAMPAIGN_NAME

*Your campaign overview goes here. Describe the central conflict, the arc structure, and the key factions and NPCs involved.*
MDEOF

  echo "  Created vault structure in $VAULT_FOLDER/"
fi

# --- Generate .opencode files from templates ---

echo "Generating OpenCode configuration..."

if [ -d ".opencode/agents" ] || [ -d ".opencode/commands" ] || [ -d ".opencode/skills" ]; then
  echo ""
  echo "Warning: .opencode/ already has content."
  read -p "Overwrite agents, commands, and skills? (y/n): " CONFIRM3
  if [ "$CONFIRM3" != "y" ] && [ "$CONFIRM3" != "Y" ]; then
    echo "Skipping OpenCode generation."
    echo ""
    echo "Done! Your vault is ready at $VAULT_FOLDER/"
    exit 0
  fi
fi

mkdir -p .opencode/agents
mkdir -p .opencode/commands
mkdir -p .opencode/skills/obsidian-markdown
mkdir -p .opencode/skills/session-template
mkdir -p .opencode/skills/worldbuilding-templates

# Copy and replace placeholders
find templates/opencode -type f -name "*.md" | while read -r template; do
  # Compute relative path within templates/opencode/
  rel_path="${template#templates/opencode/}"
  dest=".opencode/$rel_path"

  mkdir -p "$(dirname "$dest")"

  sed \
    -e "s|{{WORLD_NAME}}|$WORLD_NAME|g" \
    -e "s|{{CAMPAIGN_NAME}}|$CAMPAIGN_NAME|g" \
    -e "s|{{CAMPAIGN_SLUG}}|$CAMPAIGN_SLUG|g" \
    -e "s|{{VAULT_FOLDER}}|$VAULT_FOLDER|g" \
    -e "s|{{TONE}}|$TONE|g" \
    "$template" > "$dest"
done

echo "  Generated OpenCode agents, commands, and skills in .opencode/"

# --- Update Quartz config ---

if [ -f "site/quartz.config.ts" ]; then
  echo "Updating Quartz site title..."
  sed -i "s|pageTitle: \".*\"|pageTitle: \"$WORLD_NAME\"|" site/quartz.config.ts
  echo "  Updated site/quartz.config.ts"
fi

# --- Update Dockerfile ---

if [ -f "Dockerfile" ]; then
  echo "Updating Dockerfile vault folder..."
  sed -i "s|COPY Aethermourne/ content/|COPY $VAULT_FOLDER/ content/|" Dockerfile
  echo "  Updated Dockerfile"
fi

# --- Update .dockerignore ---

if [ -f ".dockerignore" ]; then
  if ! grep -q "$VAULT_FOLDER" .dockerignore 2>/dev/null; then
    echo "  .dockerignore looks fine (no changes needed)"
  fi
fi

# --- Summary ---

echo ""
echo "==================================="
echo "  Setup complete!"
echo "==================================="
echo ""
echo "Your world is ready:"
echo "  Vault:     $VAULT_FOLDER/"
echo "  OpenCode:  .opencode/"
echo "  Website:   site/ (Quartz)"
echo ""
echo "Next steps:"
echo "  1. Open this folder in Obsidian"
echo "  2. Start worldbuilding with OpenCode:"
echo "     opencode"
echo "     /worldbuild [your first topic]"
echo "  3. Preview locally:"
echo "     cd site && cp -r ../$VAULT_FOLDER/* content/ && npx quartz build --serve"
echo ""
