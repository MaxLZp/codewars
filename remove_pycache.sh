#!/bin/bash

# Target directory (default to current directory if no argument is passed)
TARGET_DIR="${1:-.}"

echo "Searching and removing __pycache__ directories in: $TARGET_DIR"

# Locate directories named __pycache__ and remove them along with their contents
find "$TARGET_DIR" -type d -name "__pycache__" -exec rm -rf {} +

echo "Cleanup complete!"