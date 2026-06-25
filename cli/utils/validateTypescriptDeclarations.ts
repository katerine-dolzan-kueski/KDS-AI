import fs from 'fs';
import path from 'path';
import { CommandModule } from 'yargs';

/**
 * Recursively find all .d.ts files in packages/[package]/build directories
 */
function findDeclarationFiles(dir: string): string[] {
  const files: string[] = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...findDeclarationFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Validates if there are no missing exports from TS files that would
 * result in an import from a local file.
 */
function validateDeclarationFiles(): void {
  const packagesDir = 'packages';
  const allDeclarationFiles: string[] = [];

  if (!fs.existsSync(packagesDir)) {
    console.log('No packages directory found.');
    return;
  }

  // Find all package directories
  const packageDirs = fs
    .readdirSync(packagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(packagesDir, dirent.name, 'build'));

  // Collect all declaration files from build directories
  for (const buildDir of packageDirs) {
    allDeclarationFiles.push(...findDeclarationFiles(buildDir));
  }

  const invalidFiles = allDeclarationFiles.filter((file: string) => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /import\(["']packages\//gm;
    return regex.test(content);
  });

  if (invalidFiles.length > 0) {
    console.error('Found invalid imports in the following files:');
    invalidFiles.forEach((file: string) => console.error(file));
    process.exit(1);
  }

  console.log('Found no invalid import statements in built declaration files.');
}

export const validateFiles: CommandModule = {
  command: 'validate-declarations',
  describe: 'Validate TypeScript declaration files for invalid imports',
  handler: () => {
    validateDeclarationFiles();
  },
};
