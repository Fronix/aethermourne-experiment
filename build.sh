#!/bin/bash
# Build single container with all worlds (auto-discovers from worlds/ directory)
echo "Building multi-world gamemaster container..."
echo ""
echo "Scanning worlds/ directory..."

if [ ! -d "worlds" ]; then
  echo "Error: worlds/ directory not found"
  exit 1
fi

WORLDS=$(ls -1 worlds/ 2>/dev/null || echo "")

if [ -z "$WORLDS" ]; then
  echo "Error: No worlds found in worlds/ directory"
  exit 1
fi

echo "Worlds to build:"
for world in $WORLDS; do
  echo "  - $world"
done
echo ""

docker build -t gamemaster .

echo ""
echo "✓ Built gamemaster (serves all worlds)"
echo ""
echo "Worlds available at:"
for world in $WORLDS; do
  echo "  http://aethermourne.fronix.se/$world/"
done
echo ""
echo "Landing page: http://aethermourne.fronix.se/"
