#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Recursively remove a directory or file
 */
function removeRecursive(target) {
  try {
    const stats = fs.statSync(target);

    if (stats.isDirectory()) {
      const files = fs.readdirSync(target);
      for (const file of files) {
        removeRecursive(path.join(target, file));
      }
      fs.rmdirSync(target);
    } else {
      fs.unlinkSync(target);
    }
  } catch (error) {
    // Ignore errors if file/directory doesn't exist
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node clean.js <path1> [path2] ...');
  process.exit(1);
}

// Process each path
for (const target of args) {
  console.log(`Cleaning: ${target}`);
  removeRecursive(target);
}

console.log('Clean completed successfully');
