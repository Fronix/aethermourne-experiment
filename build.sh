#!/bin/bash
# Build single container with all worlds
echo "Building multi-world gamemaster container..."
echo "Scanning worlds/ directory..."

for world in worlds/*/; do
  world_name=$(basename "$world")
  echo "  - Found: $world_name"
done

docker build -t gamemaster .
echo "✓ Built gamemaster (serves all worlds)"
echo ""
echo "Worlds available at:"
echo "  http://aethermourne.fronix.se/aethermourne/"
echo "  http://aethermourne.fronix.se/newworld/"
