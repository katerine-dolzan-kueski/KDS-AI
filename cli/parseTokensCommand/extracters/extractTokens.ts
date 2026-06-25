import kebab from '../../utils/kebab';

export default function extractTokens<Scalar>(
  rawTokens: Record<string, unknown>,
  valueParser: (value: string | number) => Scalar,
) {
  const tokens: Record<string, Scalar> = {};

  function extractNestedTokens(obj: Record<string, unknown>, path: string[]) {
    Object.entries(obj).forEach(([key, value]) => {
      const newPath = [...path, key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        extractNestedTokens(value as Record<string, unknown>, newPath);
      } else if (typeof value === 'string' || typeof value === 'number') {
        tokens[kebab(...newPath)] = valueParser(value);
      }
    });
  }

  extractNestedTokens(rawTokens, []);
  return tokens;
}
