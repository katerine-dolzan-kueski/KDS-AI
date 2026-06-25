import kebab from '../../utils/kebab';
import fs from 'node:fs/promises';

export interface UtilitiesRaw {
  [utilityName: string]: {
    [cssRule: string]: string | number;
  };
}

export default async function writeUtilities(path: string, utilitiesRaw: UtilitiesRaw) {
  const css = Object.entries(utilitiesRaw)
    .map(([key, rules]) => {
      const formattedRules = Object.entries(rules)
        .map(([rule, value]) => {
          const formattedValue = String(value).replace(/\n/g, '\n  ');

          return `  ${rule}: ${formattedValue};`;
        })
        .join('\n');

      return `@utility ${kebab(key)} {\n${formattedRules}\n}\n`;
    })
    .join('\n');

  await fs.writeFile(path, css, 'utf8');
  return path;
}
