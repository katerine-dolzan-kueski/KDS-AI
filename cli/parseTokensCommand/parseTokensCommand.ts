import { CommandModule } from 'yargs';
import { fixColor } from '../../cli/utils/utils';
import rawTokens from './rawTokens';
import writeIndex from './writters/writeIndex';
import writeTokens from './writters/writeTokens';
import writeGradientUtilities from './writters/writeGradientUtilities';
import extractTokens from './extracters/extractTokens';
import resetDirectory from './writters/resetDirectory';
import extractSizingTokens from './extracters/extractSizingTokens';
import extractNumericTokens from './extracters/extractNumericTokens';
import extractGradients from './extracters/extractGradients';

const DIR = 'packages/react/src/styles/tokens';

interface CommandOptions {}

const parseTokensCommand: CommandModule<object, CommandOptions> = {
  builder: (yargs) => yargs,
  command: 'parse-tokens',
  describe: 'Parse tokens from figma to Tailwind CSS',
  handler: async () => {
    resetDirectory(DIR);
    const colors = extractTokens({ ...rawTokens.Colors.Light, Gradients: null }, fixColor);
    const darkColors = extractTokens({ ...rawTokens.Colors.Dark, Gradients: null }, fixColor);
    const radius = extractSizingTokens(rawTokens.Radius, 'rem');
    const spacings = extractSizingTokens(rawTokens.Spacing, 'rem');
    const fontSizes = extractSizingTokens(rawTokens.Typography.FontSize, 'rem');
    const lineHeights = extractSizingTokens(rawTokens.Typography.LineHeight, 'rem');
    const fontWeights = extractNumericTokens(rawTokens.Typography.FontWeight);
    const borderWidths = extractSizingTokens(rawTokens.Stroke, 'px');
    const fontFamilies = extractTokens(rawTokens.Typography.FontFamily, String);
    const letterSpacings = extractSizingTokens(rawTokens.Typography.Letterspacing, 'rem');
    const primitiveColors = extractTokens({ primitive: rawTokens.Primitives.Colors }, fixColor);

    // #region gradients
    const gradients = extractGradients(rawTokens.Colors.Light.Gradients);
    const darkGradients = extractGradients(rawTokens.Colors.Dark.Gradients);

    const gradientColors = extractTokens(gradients, (color) => color);
    const darkGradientColors = extractTokens(darkGradients, (color) => color);
    // #endregion

    const paths = await Promise.all([
      writeTokens(`${DIR}/colors.css`, {
        darkTokens: darkColors,
        tokens: colors,
        type: 'color',
      }),
      writeTokens(`${DIR}/radius.css`, { tokens: radius, type: 'radius' }),
      writeTokens(`${DIR}/spacings.css`, { tokens: spacings, type: 'spacing' }),
      writeTokens(`${DIR}/font-sizes.css`, { tokens: fontSizes, type: 'text' }),
      writeTokens(`${DIR}/line-heights.css`, {
        tokens: lineHeights,
        type: 'leading',
      }),
      writeTokens(`${DIR}/font-weights.css`, {
        tokens: fontWeights,
        type: 'font-weight',
      }),
      writeTokens(`${DIR}/border-widths.css`, {
        tokens: borderWidths,
        type: 'border',
      }),
      writeTokens(`${DIR}/font-families.css`, {
        tokens: fontFamilies,
        type: 'font',
      }),
      writeTokens(`${DIR}/letter-spacings.css`, {
        tokens: letterSpacings,
        type: 'tracking',
      }),
      writeTokens(`${DIR}/primitive-colors.css`, {
        tokens: primitiveColors,
        type: 'color',
      }),
      writeTokens(`${DIR}/gradient-colors.css`, {
        darkTokens: darkGradientColors,
        tokens: gradientColors,
        type: 'color',
      }),
      writeGradientUtilities(`${DIR}/gradients.css`, gradients),
    ]);
    paths.push(await writeIndex(DIR));

    console.log('Created files');

    for (const path of paths) {
      console.log(`- ${path}`);
    }
    console.log('Done! 🎉');
  },
};

export default parseTokensCommand;
