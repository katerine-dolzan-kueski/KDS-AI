import kebab from '../../utils/kebab';

export default function extractNumericTokens(tokens: Record<string, string | number>) {
  return Object.entries(tokens).reduce(
    (numericTokens, [key, value]) => {
      const parsedValue =
        typeof value === 'string' ? parseInt(value.replace(/\D/g, ''), 10) : value;

      if (Number.isNaN(parsedValue)) {
        throw new Error(`Invalid numeric value "${value}" for token "${key}"`);
      }

      return Object.assign(numericTokens, {
        [kebab(key)]: parsedValue,
      });
    },
    {} satisfies Record<string, number>,
  );
}
