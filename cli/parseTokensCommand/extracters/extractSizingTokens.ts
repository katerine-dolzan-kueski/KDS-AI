import extractTokens from './extractTokens';

export default function extractSizingTokens(
  tokens: Record<string, number>,
  unit: 'px' | 'rem' | '%',
) {
  const factor = unit === 'rem' ? 16 : 1;

  return extractTokens(tokens, (value) => {
    if (typeof value !== 'number') {
      throw new Error(`Invalid value: ${value}`);
    }
    return `${value / factor}${unit}`;
  });
}
