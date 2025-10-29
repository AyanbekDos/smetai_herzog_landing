#!/usr/bin/env bash

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ">>> Switching to repository directory: ${REPO_DIR}"
cd "$REPO_DIR"

echo ">>> Updating git working tree"
git fetch --prune origin
git checkout main
git pull --ff-only origin main

echo ">>> Installing dependencies"
npm install --production=false

echo ">>> Building project"
npm run build

echo ">>> Restarting application with pm2"
if pm2 describe smetai > /dev/null 2>&1; then
  pm2 restart smetai
else
  if pm2 describe npm > /dev/null 2>&1; then
    pm2 delete npm
  fi
  pm2 start npm --name smetai -- start
fi

echo ">>> Saving pm2 process list"
pm2 save

echo ">>> Deployment completed successfully"
