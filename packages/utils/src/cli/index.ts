import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import cmdBuild from './cmdBuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to find package.json in the current working directory or fall back to utils package
let pkgJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(pkgJsonPath)) {
  pkgJsonPath = path.join(__dirname, '../../../package.json');
}

const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));

yargs()
  .scriptName('kds-utils')
  .usage('$0 <command> [args]')
  .command(cmdBuild)
  .demandCommand(1, 'You need at least one command before moving on')
  .strict()
  .help()
  .version(pkgJson.version)
  .parse(hideBin(process.argv));
