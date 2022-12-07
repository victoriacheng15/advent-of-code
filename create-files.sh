#!/bin/bash

# Get the current year
year=$(date +"%Y")

# Create a folder named "year"
mkdir $year

# Change the current directory to the newly-created "year" folder
cd $year

# Iterate over the numbers 1 to 25
for i in {1..25}; do
  # Create a folder named dayXX, where XX is the current value of $i
  mkdir day$(printf "%02d" $i)

  # Change the current directory to the newly-created folder
  cd day$(printf "%02d" $i)

  # Create a file named puzzle.js in the current directory
  touch puzzle.js

  echo "const fs = require(\"fs/promise\");" >> puzzle.js
  echo "const path = require(\"path\");" >> puzzle.js
  echo "function part1() {}" >> puzzle.js
  echo "function part2() {}" >> puzzle.js

  # Create a file named input.txt in the current directory
  touch input.txt

  # Return to the parent directory
  cd ..
done

# Return to the parent directory
cd ..



