import { KDSFontSize, KDSFontHeading } from '../../theme/font';
import { toMultiple } from '../../hocs/withResponsive/withResponsive.utils';
import { HeadingStylesProps } from './Header.models';

type HeadingSize = `${KDSFontHeading}/${KDSFontSize}`;

export const headingMap: Record<HeadingSize, keyof JSX.IntrinsicElements> = {
  'Display/Large': 'h1',
  'Display/Medium': 'h2',
  'Display/Small': 'h3',
  'Headline/Large': 'h2',
  'Headline/Medium': 'h3',
  'Headline/Small': 'h4',
  'Title/Large': 'h3',
  'Title/Medium': 'h4',
  'Title/Small': 'h5',
};

export const extractHeading = ({ as, $format }: HeadingStylesProps) => {
  if (as) return as;
  if (!$format) return 'h3';

  return toMultiple($format) // Normalize to array
    .flatMap(header => header.split(':')) // Split responsive prefixes
    .filter(header => header.includes('/')) // Exclude responsive prefixes
    .map(header => { // Map to the correct heading tag
      const [type, size] = header.split('/');
      return headingMap[`${type}/${size}` as HeadingSize];
    })
    .filter(Boolean) // Remove `undefined` values
    .sort() // Sort largest to smallest
    .shift() ?? 'p'; // Choose largest heading in the list, 'p' by default
};
