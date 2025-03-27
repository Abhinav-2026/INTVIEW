#!/bin/bash

set -x 
set -e

# Check if nvm is available
if command -v nvm &> /dev/null; then
    # Use Node.js 18 or higher
    nvm use 18 || nvm use stable
fi

npm run build

# Remove any .env file that may be present in the ./ path if it exists
if [ -f "./.env" ]; then
    rm ./.env
fi

# export INITIAL_OVERRIDE_TIMER=1000
# # Execute the TypeScript file y_beta_env.ts with the ./ folder path as a parameter
# node ./y_beta_env.ts ./ "hireko" "beta" || { echo "Error: Failed to execute y_beta_env.ts"; exit 1; }


# Run the application
npm run dev