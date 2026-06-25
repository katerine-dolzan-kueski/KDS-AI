import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { extractViewBox, processSvgForIcon } from './svgProcessor';

export interface ComponentGenerationOptions {
  outputDir: string;
  generateIndex?: boolean;
  runPrettier?: boolean;
  batchSize?: number;
}

/**
 * Generates React component code for an icon
 */
export function generateIconComponent(componentName: string, svgContent: string): string {
  // Process the SVG for icons
  const processedSvg = processSvgForIcon(svgContent);

  // Extract the inner content of the SVG (without the <svg> tag)
  const svgInnerContent = processedSvg
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  // Extract attributes from the original SVG to use as defaults
  const defaultViewBox = extractViewBox(processedSvg);

  const componentCode = `import React from 'react';

interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  $width?: number;
  $height?: number;
  $className?: string;
  $fill?: string;
}

export const ${componentName} = ({
  $width = 24,
  $height = 24,
  $className,
  $fill = 'currentColor',
  ...props
}: ${componentName}Props) => (
  <svg
    width={$width}
    height={$height}
    className={$className}
    fill={$fill}
    viewBox="${defaultViewBox}"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${svgInnerContent}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;

  return componentCode;
}

/**
 * Generates the index.ts file with all exports
 */
function generateIndexFile(componentNames: string[]): string {
  const exports = componentNames.map((name) => `export { ${name} } from './${name}';`).join('\n');

  return `${exports}\n`;
}

/**
 * Creates a directory if it doesn't exist
 */
function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Executes prettier format on the given file paths
 */
function executePrettierFormat(filePaths: string[], context: string): boolean {
  try {
    const command = `pnpm exec prettier --write ${filePaths.join(' ')}`;

    execSync(command, {
      stdio: 'pipe',
      cwd: process.cwd(),
      maxBuffer: 1024 * 1024 * 5, // 5MB buffer
    });

    return true;
  } catch (error) {
    console.warn(
      `⚠️ ${context} formatting failed:`,
      error instanceof Error ? error.message : error,
    );
    return false;
  }
}

/**
 * Generates all React components from the exported SVGs
 */
export async function writeReactComponents(
  componentFiles: Array<{ name: string; fileName: string; content: string }>,
  options: ComponentGenerationOptions,
): Promise<void> {
  let errorCount = 0;
  let successCount = 0;
  const { outputDir, generateIndex = true, runPrettier = true, batchSize = 20 } = options;

  if (componentFiles.length === 0) {
    console.warn('No component files to write');
    return;
  }

  // Ensure the output directory exists
  ensureDirectoryExists(outputDir);

  // Process files in batches of batchSize to avoid file table overflow
  const batches = [];
  for (let i = 0; i < componentFiles.length; i += batchSize) {
    batches.push(componentFiles.slice(i, i + batchSize));
  }

  console.log(`Processing ${componentFiles.length} files in ${batches.length} batches...`);

  // Process each batch: write files and format immediately
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];

    // Write files in this batch
    batch.forEach(({ fileName, content }) => {
      try {
        const filePath = path.join(outputDir, fileName);
        fs.writeFileSync(filePath, content, 'utf8');
        successCount += 1;
      } catch (error) {
        console.error(`Error writing component file ${fileName}:`, error);
        errorCount += 1;
      }
    });

    // Format this batch immediately after writing
    const filePaths = batch.map(({ fileName }) => `"${path.join(outputDir, fileName)}"`);
    const formatted = executePrettierFormat(filePaths, `Batch ${i + 1}`);

    if (formatted) {
      console.log(
        `✓ Batch ${i + 1}/${batches.length} written and formatted (${batch.length} files)`,
      );
    } else {
      console.log(
        `✓ Batch ${i + 1}/${batches.length} written but not formatted (${batch.length} files)`,
      );
    }
  }

  // Step 3: Generate index file if requested
  if (generateIndex && componentFiles.length > 0) {
    console.log('Step 3: Generating index file...');
    const indexContent = generateIndexFile(componentFiles.map(({ name }) => name));
    const indexPath = path.join(outputDir, 'index.ts');
    fs.writeFileSync(indexPath, indexContent, 'utf8');

    console.log('✓ Generated index.ts file');
  }

  // Step 4: Format index file if requested
  if (runPrettier && componentFiles.length > 0) {
    console.log('Step 4: Formatting index file...');
    const indexPath = path.join(outputDir, 'index.ts');
    const formatted = executePrettierFormat([`"${indexPath}"`], 'Index file');

    if (formatted) {
      console.log('✓ Index file formatted');
    }
  }

  console.log(`Written ${successCount} React components in ${outputDir}`);

  if (errorCount > 0) {
    console.warn(`${errorCount} components failed to write`);
  }
}
