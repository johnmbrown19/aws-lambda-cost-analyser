#!/usr/bin/env bash
set -euo pipefail

rm -rf dist build
npm ci
npm run build

mkdir -p build
cp package.json build/package.json
cp package-lock.json build/package-lock.json
cp -R dist build/dist

cd build
npm ci --omit=dev
zip -r lambda.zip dist node_modules package.json
