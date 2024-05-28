#!/bin/bash

# Check if a filename argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

# Extract the base filename without extension
filename="${1%.*}"

# Compile the TypeScript file
tsc "$1"

# Check if compilation was successful
if [ $? -eq 0 ]; then
  # Run the resulting JavaScript file with Node.js
  node "${filename}.js"

  # Remove the JavaScript file
  rm "${filename}.js"
else
  echo "TypeScript compilation failed."
  exit 1
fi
