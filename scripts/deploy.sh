#!/usr/bin/env bash
# Interactively select a portfolio variant and sync it to S3.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source "$ROOT_DIR/.env"

CURRENT_VERSION_DIR="$ROOT_DIR/versions/v2"

# Keep every variant's data.js in sync with the canonical file before
# discovering/deploying variants.
"$ROOT_DIR/scripts/sync_data.sh"

# Discover available variants (subdirectories of versions/v2 that contain an index.html)
variants=()
for dir in "$CURRENT_VERSION_DIR"/*/; do
    name="$(basename "$dir")"
    if [[ -f "$dir/index.html" ]]; then
        variants+=("$name")
    fi
done

if [[ ${#variants[@]} -eq 0 ]]; then
    echo "No deployable variants found in $CURRENT_VERSION_DIR (expected a subfolder with index.html)." >&2
    exit 1
fi

echo "Available portfolio variants:"
select variant in "${variants[@]}"; do
    if [[ -n "${variant:-}" ]]; then
        break
    fi
    echo "Invalid selection, try again."
done

SOURCE_DIR="$CURRENT_VERSION_DIR/$variant"

echo
echo "Deploying '$variant' ($SOURCE_DIR) to s3://$AWS_BUCKET_NAME"
read -r -p "Proceed? [y/N] " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

aws s3 sync "$SOURCE_DIR" "s3://$AWS_BUCKET_NAME" \
    --region "$AWS_BUCKET_REGION" \
    --delete \
    --exclude ".DS_Store"

echo "Deployed '$variant' to s3://$AWS_BUCKET_NAME"

# S3 content changed, but CloudFront edges keep serving cached responses
# (notably "/") until told otherwise, so invalidate on every deploy.
if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
    echo "Invalidating CloudFront cache ($CLOUDFRONT_DISTRIBUTION_ID)..."
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*" \
        >/dev/null
    echo "Invalidation submitted."
else
    echo "CLOUDFRONT_DISTRIBUTION_ID not set in .env — skipped cache invalidation." >&2
fi
