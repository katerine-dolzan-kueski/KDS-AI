import fs from 'node:fs/promises';

export default async function writeIndex(at: string) {
  const files = await fs.readdir(at);
  const css = files
    .filter((file) => file.endsWith('.css') && file !== 'index.css')
    .map((file) => `@import './${file}';`)
    .join('\n');

  const indexPath = `${at}/index.css`;
  await fs.writeFile(indexPath, `${css}\n`, 'utf8');

  return indexPath;
}
