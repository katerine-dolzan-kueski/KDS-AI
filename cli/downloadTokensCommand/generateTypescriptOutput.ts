import { Dictionary } from '../figmaTypes';
import fs from 'fs/promises';
import path from 'node:path';

function fixTokens(rawTokens: Record<string, Dictionary>): any {
  if (typeof rawTokens !== 'object' || rawTokens === null) {
    return rawTokens;
  }

  // if token, replace token with its value
  if (rawTokens.description && rawTokens.type && rawTokens.value !== undefined) {
    return rawTokens.value;
  }

  if (Array.isArray(rawTokens)) {
    return rawTokens.reduce(
      (result, item, index) => ({
        ...result,
        [index]: fixTokens(item),
      }),
      {},
    );
  }

  return Object.keys(rawTokens)
    .sort()
    .reduce(
      (result, key) => ({
        ...result,
        [key]: fixTokens(rawTokens[key] as Record<string, Dictionary>),
      }),
      {},
    );
}

export async function generateTypescriptOutput(
  rawTokens: Record<string, Dictionary>,
  filePath: string,
) {
  const fixedTokens = fixTokens(rawTokens);
  const fileContent = [
    '/* eslint-disable */',
    `export default ${JSON.stringify(fixedTokens, undefined, '  ')} as const;\n`,
  ].join('\n');

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, fileContent);

  return [filePath];
}
