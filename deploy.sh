#!/bin/bash
echo "Building site..."
PATH_PREFIX=/land-sharks/ npm run build

echo "Deploying to server..."
rsync -avz --delete dist/ rg@104.237.128.61:/var/www/preview.reservationgenie.com/_site/land-sharks

echo "Deployment complete!"