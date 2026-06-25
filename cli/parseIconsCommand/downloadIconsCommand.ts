import { CommandModule } from 'yargs';
import { extractIconComponents } from './componentExtractor';
import { writeReactComponents } from './componentGenerator';
import { getFileByNodesId } from './figmaApi';
import { exportSVGsAsReactCode } from './svgExporter';

type CommandOptions = {
  figmaToken: string | undefined;
  figmaDocumentId: string | undefined;
  figmaNodesId: string | undefined;
  maxIcons?: number | undefined;
  generateComponents?: boolean | undefined;
  batchSize?: number | undefined;
};

const DIR = 'packages/react/src/components/atoms/icons';

/**
 * Enhanced command to download icons from Figma
 * Based on best practices from Medium article
 */
const downloadIconsCommand: CommandModule<object, CommandOptions> = {
  builder: (yargs) =>
    yargs
      .option('figmaToken', {
        default: process.env.FIGMA_TOKEN,
        describe: 'Figma token to fetch data',
        type: 'string',
      })
      .option('figmaDocumentId', {
        describe: 'Figma document id to fetch icons (required for Figma download)',
        type: 'string',
      })
      .option('figmaNodesId', {
        default: '',
        describe: 'Figma node ids (comma-separated)',
        type: 'string',
      })
      .option('maxIcons', {
        describe: 'Maximum number of icons to process (for testing)',
        type: 'number',
      })
      .option('batchSize', {
        default: 50,
        describe: 'Number of components to process in each batch',
        type: 'number',
      })
      .check((argv) => {
        // If we're processing local SVGs, we don't need Figma token or documentId
        if (!argv.figmaToken) {
          throw new Error(
            'Figma token not provided. Please provide it via --figmaToken option or FIGMA_TOKEN environment variable, or use --processLocalSvgs to process local SVG files.',
          );
        }

        if (!argv.figmaDocumentId) {
          throw new Error(
            'Figma document ID is required when downloading from Figma. Please provide it via --figmaDocumentId option, or use --processLocalSvgs to process local SVG files.',
          );
        }

        if (!argv.figmaNodesId) {
          throw new Error(
            'Figma node IDs are required when downloading from Figma. Please provide them via --figmaNodesId option.',
          );
        }

        return true;
      }),
  command: 'download-icons',
  describe: 'Download icons from Figma document and generate React components',
  handler: async (argv) => {
    try {
      // Step 1: Get Figma document
      console.log('Fetching Figma document...');

      const figmaDocument = await getFileByNodesId({
        figmaDocumentId: argv.figmaDocumentId!,
        figmaToken: argv.figmaToken!,
        figmaNodesId: argv.figmaNodesId!,
      });

      // Step 2: Extract icon components
      console.log('Extracting icon components...');

      let iconComponents = extractIconComponents(figmaDocument);

      // Limit quantity if specified (useful for testing)
      if (argv.maxIcons && argv.maxIcons > 0) {
        iconComponents = iconComponents.slice(0, argv.maxIcons);
        console.log(`Limited to ${argv.maxIcons} icons for testing`);
      }

      if (iconComponents.length === 0) {
        console.warn('No icon components found in the document');
        return;
      }

      console.log(`Processing ${iconComponents.length} icon components`);

      // Step 3: Export SVGs from Figma
      console.log('Exporting SVGs from Figma...');

      const batchSize = argv.batchSize || 50;
      const iconsReactComponents = await exportSVGsAsReactCode(iconComponents, {
        figmaDocumentId: argv.figmaDocumentId!,
        figmaToken: argv.figmaToken!,
        scale: 1,
        batchSize,
      });

      if (iconsReactComponents.length === 0) {
        console.warn('No React components were successfully');
        return;
      }

      console.log(`Successfully exported ${iconsReactComponents.length}`);

      // Step 4: Generate React components
      console.log(' Writing components to disk and formatting...');
      await writeReactComponents(iconsReactComponents, {
        generateIndex: true,
        outputDir: DIR,
        runPrettier: true,
      });

      console.log('Done! Icon generation completed successfully! 🎉');
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
      process.exit(1);
    }
  },
};

export default downloadIconsCommand;
