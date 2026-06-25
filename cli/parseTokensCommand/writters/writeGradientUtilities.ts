import kebab from '../../utils/kebab';
import writeUtilities, { UtilitiesRaw } from './writeUttilities';

function generateGradientStops(gradientName: string, gradientTokens: Record<string, string>) {
  const stops = Object.keys(gradientTokens)
    .map(Number)
    .sort((a, b) => a - b)
    .map((stop) => [stop, kebab(gradientName, stop)] as const);

  if (stops.some(([stop]) => isNaN(stop)))
    throw new Error('Bad definition from Figma: stop must be a number');
  if (stops.length < 2)
    throw new Error('Bad definition from Figma: at least two stops are required');
  if (stops[0][0] !== 0) throw new Error('Bad definition from Figma: first stop must be 0');
  if (stops[stops.length - 1][0] !== 100)
    throw new Error('Bad definition from Figma: last stop must be 100');

  return stops;
}

function generateMirroredGradientStops(
  gradientName: string,
  gradientStops: Record<string, string>,
) {
  const stops = generateGradientStops(gradientName, gradientStops);

  const firstHalf = stops.map(([stop, token]) => [stop / 2, token] as const);
  const [_, ...secondHalf] = firstHalf
    .map(([stop, token]) => [100 - stop, token] as const)
    .reverse();

  return [...firstHalf, ...secondHalf];
}

export default async function writeGradientUtilities(
  path: string,
  gradients: Record<string, Record<string, string>>,
) {
  const utilities = Object.entries(gradients).reduce((result, [gradientName, gradientStops]) => {
    const stops = generateGradientStops(gradientName, gradientStops);
    const gradientLines = stops.map(([stop, token]) => {
      return `\n  var(--color-${token}) ${stop}%`;
    });

    const mirroredStops = generateMirroredGradientStops(gradientName, gradientStops);
    const mirroredGradientLines = mirroredStops.map(([stop, token]) => {
      return `\n  var(--color-${token}) ${stop}%`;
    });

    return {
      ...result,
      [`gradient-${gradientName}`]: {
        '--tw-gradient-stops': `var(--tw-gradient-position, to right),${gradientLines.join(',')}`,
      },
      [`gradient-mirrored-${gradientName}`]: {
        '--tw-gradient-stops': `var(--tw-gradient-position, to right),${mirroredGradientLines.join(',')}`,
      },
    };
  }, {} as UtilitiesRaw);

  return writeUtilities(path, utilities);
}
