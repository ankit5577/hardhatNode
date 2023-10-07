#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Check if PORT is set in .env; if not, use a default port
CUSTOM_PORT=${PORT:-2222}

# Start the Hardhat node with the custom port
npx hardhat node --port $CUSTOM_PORT
