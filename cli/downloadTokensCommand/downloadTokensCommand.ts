import path from 'node:path';
import { CommandModule } from 'yargs';
import { parseFigma } from './figmaParser/figma.parser';
import { fetchFigmaDocument } from './fetchFigmaDocument';
import { generateTypescriptOutput } from './generateTypescriptOutput';

type CommandOptions = {
  figmaToken: string | undefined;
  figmaDocumentId: string;
  output: string;
};

const downloadTokensCommand: CommandModule<object, CommandOptions> = {
  builder: (yargs) =>
    yargs
      .option('figmaToken', {
        default: process.env.FIGMA_TOKEN,
        describe: 'Figma token to fetch data',
        type: 'string',
      })
      .option('figmaDocumentId', {
        demandOption: true,
        describe: 'Figma document id to fetch data',
        type: 'string',
      })
      .option('output', {
        demandOption: true,
        describe: 'Output path of typescript file',
        type: 'string',
      })
      .check((argv) => {
        if (!argv.output.endsWith('.ts')) throw new Error('Output file must have a .ts extension');

        if (!argv.figmaToken) {
          throw new Error(
            'Figma token not provided. Please provide it via --figmaToken option or FIGMA_TOKEN environment variable.',
          );
        }

        return true;
      }),
  command: 'download-tokens',
  describe: 'Download tokens from figma',
  handler: async (argv) => {
    const figmaDocument = await fetchFigmaDocument({
      figmaDocumentId: argv.figmaDocumentId,
      figmaToken: argv.figmaToken as string,
    });
    const tokens = parseFigma(figmaDocument.meta);
    const outputPath = path.resolve(argv.output);
    const files = await generateTypescriptOutput(tokens, outputPath);
    files.forEach((file) => console.log(`- ${file}`));

    console.log('Done! 🎉');
  },
};

export default downloadTokensCommand;
