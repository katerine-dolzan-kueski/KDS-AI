import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import downloadTokensCommand from './downloadTokensCommand';
import parseTokensCommand from './parseTokensCommand';
import downloadIconsCommand from './parseIconsCommand/downloadIconsCommand';
import { validateFiles } from './utils/validateTypescriptDeclarations';

yargs(hideBin(process.argv))
  .strict()
  .help(true)
  .version(false)
  .command(downloadTokensCommand)
  .command(parseTokensCommand)
  .command(downloadIconsCommand)
  .command(validateFiles)
  .parse();
