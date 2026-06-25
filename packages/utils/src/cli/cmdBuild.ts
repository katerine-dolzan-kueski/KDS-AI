import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { CommandModule } from 'yargs';

import { validatePkgJson } from './build';
import { bundler } from './bundler';

type CommandOptions = {
  config: string;
};

const cmdBuildCommand: CommandModule<object, CommandOptions> = {
  builder: (yargs) =>
    yargs.option('config', {
      default: 'vite.config.ts',
      describe: 'Path to the config file',
      type: 'string',
    }),
  command: 'build',
  describe: 'Builds the package for publishing.',
  async handler(argv) {
    const cwd = process.cwd();
    const pkgJsonPath = path.join(cwd, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(pkgJsonPath, { encoding: 'utf8' }));
    validatePkgJson(packageJson);

    const buildDir = path.join(cwd, 'dist');

    console.log(`Selected output directory: "${buildDir}"`);

    await fs.rm(buildDir, { force: true, recursive: true });

    // Determine source directory based on package type
    const sourceDir = path.join(cwd, 'src');

    // Use esbuild for true bundling when creating named files
    const entryPoint = path.join(sourceDir, 'index.ts');

    // Check if entry point exists, try other extensions if not
    let actualEntryPoint = entryPoint;
    try {
      await fs.stat(actualEntryPoint);
    } catch {
      const possibleExtensions = ['.tsx', '.js', '.jsx'];
      for (const ext of possibleExtensions) {
        const candidate = path.join(sourceDir, `index${ext}`);
        try {
          await fs.stat(candidate);
          actualEntryPoint = candidate;
          break;
        } catch (error) {
          console.warn(
            `Warning: Could not find entry point: ${candidate}: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      }
    }

    await bundler(actualEntryPoint, buildDir, argv.config || 'vite.config.ts');
  },
};

export default cmdBuildCommand;
