import { theme } from '../theme';
import type {
  KDSFont,
  KDSFontFamily,
  KDSFontSize,
  KDSFontTuple,
  KDSFontType,
  KDSFontWeight,
} from '../theme/font';
import { css } from 'styled-components';

const { font, breakpoint } = theme;

/**
 * Generate all responsive alternatives for a diccionary
 *
 * @param options Dicctionary
 * @returns An array of all breakpoint-prefixed variants
 */
export function getAllResponsiveOptions(options: Record<string, string>) {
  const allOptions = Object.keys(options);
  const allResponsiveOptions = allOptions
    .flatMap(option => Object.keys(breakpoint).map(bp => `${bp}:${option}`));
  return [...allOptions, ...allResponsiveOptions];
}

export const getAllFontTokens = () => {
  const family = ['Numbers', 'Text'];
  const type = ['Body', 'Label', 'Display', 'Headline', 'Title'];
  const size = ['Large', 'Medium', 'Small'];
  const weight = ['Bold', 'Semi Bold', 'Medium', 'Regular', 'Light', 'Extra Light', 'Thin'];

  return family.flatMap(
    famEl => type.flatMap(
      typeEl => size.flatMap(
        sizeEl => weight.map(
          weightEl => `Typography/${famEl}/${typeEl}/${sizeEl}/${weightEl}` as KDSFont,
        ),
      ),
    ),
  );
};

/**
 * Generates CSS for a specific font token
 *
 * @param family Numbers | Text
 * @param type Text | Numbers | Display | Headline | Title
 * @param size Large | Medium | Small
 * @param weight Bold | Regular | Thin
 * @returns styled-components themed CSS string
 */
export const Typhography = (
  family: KDSFontFamily,
  type: KDSFontType,
  size: KDSFontSize,
  weight: KDSFontWeight,
) => {
  const fontType = font[family][type];
  const fontWeight = font.weight;
  const fontSize = fontType.size[size];

  return css`
    font: ${fontWeight[weight]} ${fontSize.fontSize} / ${fontType.lineHeight} ${font.face[family]};
    letter-spacing: ${fontSize.tracking};
  `.join('');
};

/**
 * Splits a Font Design Token into a tuple. Will parse incomplete tokens assigning default values
 * when needed:
 *
 * examples:
 *
 * // Returns ['Numbers', 'Label', 'Large', 'Regular']
 * fontTokenToTuple('Typography/Numbers/Label/Large/Regular');
 *
 * // Returns ['Text', 'Label', 'Large', 'Regular']
 * fontTokenToTuple('Label/Large/Regular');
 *
 * @param token KDSFont token
 * @returns Token split in a tuple: [KDSFontFamily, KDSFontType, KDSFontSize, KDSFontWeight]
 */
export const fontTokenToTuple = (token: KDSFont) => {
  const [weight = 'Regular', size = 'Medium', type = 'Body', family = 'Text'] = token
    .replace('Typography/', '') // Remove optional `Typography/` prefix
    .split('/') // Split into an array
    .reverse(); // Reverse to start assigning default values from right to left

  return [family, type, size, weight] as KDSFontTuple;
};

/**
 * Parse any valid Font Design Token into CSS, ready to use in styled components
 *
 * @param token KDSFont token, example: Typography/Numbers/Label/Large/Regular
 * @returns styled-components themed CSS string
 */
export const parseTypography = (token: KDSFont) => Typhography(...fontTokenToTuple(token));
