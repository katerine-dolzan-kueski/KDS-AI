import kebab from '../../utils/kebab';
import { fixColor } from '../../utils/utils';

type GradientLeaf = Record<string, string>;

type GradientsRaw = {
  [collection: string]: GradientsRaw | GradientLeaf;
};

function isLeaf(obj: unknown): obj is GradientLeaf {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.keys(obj).every((k) => k.toLowerCase().startsWith('interval'))
  );
}

function extractGradient(tokens: GradientLeaf): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [name, value] of Object.entries(tokens)) {
    const match = name.match(/\d+/);
    const key = match ? match[0] : kebab(name);

    result[key] = fixColor(value, false);
  }

  return result;
}

export default function extractGradients(
  gradientsRaw: GradientsRaw,
  prefix: string = '',
): Record<string, Record<string, string>> {
  const gradients: Record<string, Record<string, string>> = {};

  for (const [name, items] of Object.entries(gradientsRaw)) {
    const key = kebab(prefix, name);

    if (isLeaf(items)) {
      gradients[key] = extractGradient(items);
    } else {
      Object.assign(gradients, extractGradients(items, key));
    }
  }

  return gradients;
}
