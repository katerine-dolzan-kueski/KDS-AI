import fs from 'node:fs/promises';

interface WriteTokensConfig {
  type:
    | 'color'
    | 'spacing'
    | 'border-radius'
    | 'radius'
    | 'font' // FontFamily
    | 'font-weight'
    | 'text' // FontSize
    | 'leading' // LineHeight
    | 'tracking' // Letterspacing
    | 'border';
  tokens: Record<string, string | number>;
  darkTokens?: Record<string, string | number>;
}

export default async function writeTokens(
  path: string,
  { tokens, type, darkTokens }: WriteTokensConfig,
) {
  let css = '';

  css += '@theme {\n';

  for (const [name, value] of Object.entries(tokens)) {
    css += `  --${type}-${name}: ${value};\n`;
  }
  css += '}\n';

  if (darkTokens) {
    css += `\n[data-theme='dark'] {\n`;

    for (const [name, value] of Object.entries(darkTokens)) {
      css += `  --${type}-${name}: ${value};\n`;
    }
    css += '}\n';
  }

  await fs.writeFile(path, css, 'utf8');

  return path;
}
