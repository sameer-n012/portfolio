#!/usr/bin/env bash
# Copies the canonical assets/data.js, assets/resume.pdf, and
# assets/images/ into each variant, so every variant stays identical to
# the source. Each variant needs its own copy (rather than a shared
# reference) because each is deployed to S3 as a self-contained static site.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
V2_DIR="$ROOT_DIR/versions/v2"
CANONICAL_DIR="$ROOT_DIR/assets"
CANONICAL_DATA="$CANONICAL_DIR/data.js"
CANONICAL_RESUME="$CANONICAL_DIR/resume.pdf"
CANONICAL_IMAGES="$CANONICAL_DIR/images"

if [[ ! -f "$CANONICAL_DATA" ]]; then
    echo "Canonical data file not found at $CANONICAL_DATA" >&2
    exit 1
fi

for dir in "$V2_DIR"/*/; do
    name="$(basename "$dir")"

    if [[ -d "$dir/js" ]]; then
        cp "$CANONICAL_DATA" "$dir/js/data.js"
        echo "Synced data.js -> $name"
    fi

    if [[ -d "$dir/assets" ]]; then
        if [[ -f "$CANONICAL_RESUME" ]]; then
            cp "$CANONICAL_RESUME" "$dir/assets/resume.pdf"
            echo "Synced resume.pdf -> $name"
        fi

        if [[ -d "$CANONICAL_IMAGES" ]]; then
            mkdir -p "$dir/assets/images"
            rsync -a --delete "$CANONICAL_IMAGES/" "$dir/assets/images/"
            echo "Synced images/ -> $name"
        fi
    fi
done
