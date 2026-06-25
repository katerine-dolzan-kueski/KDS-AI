import { ComponentWithId } from '../figmaTypes';
import { validateSVG } from '../utils/utils';
import { downloadSvgContent, getSvgUrlsByIds } from './figmaApi';
import { generateIconComponent } from './componentGenerator';

export interface ExportSVGsAsReactCodeOptions {
  figmaToken: string;
  figmaDocumentId: string;
  scale?: number;
  batchSize: number;
  componentPrefix?: string;
  componentSuffix?: string;
}

export interface ReactComponentsResult {
  id: string;
  name: string;
  content: string;
  fileName: string;
}

/**
 * Downloads SVG content for a single component
 */
async function downloadAndProcessComponent(
  component: ComponentWithId,
  svgUrl: string,
  componentPrefix: string,
  componentSuffix: string,
): Promise<ReactComponentsResult | null> {
  try {
    const svgContent = await downloadSvgContent(svgUrl);
    validateSVG(svgContent);

    const componentName = `${componentPrefix}${component.componentName}${componentSuffix}`;
    const componentCode = generateIconComponent(componentName, svgContent);

    return {
      id: component.id,
      name: componentName,
      content: componentCode,
      fileName: `${componentName}.tsx`,
    };
  } catch (error) {
    console.error(`Error processing component ${component.name}:`, error);
    return null;
  }
}

/**
 * Processes a batch of components in parallel
 */
async function processBatch(
  batch: ComponentWithId[],
  svgUrls: Record<string, string>,
  componentPrefix: string,
  componentSuffix: string,
): Promise<{ results: ReactComponentsResult[]; successCount: number; errorCount: number }> {
  const results: ReactComponentsResult[] = [];
  let successCount = 0;
  let errorCount = 0;

  // Process all components in the batch in parallel
  const promises = batch.map(async (component) => {
    const svgUrl = svgUrls[component.id];

    if (!svgUrl) {
      console.warn(`No SVG URL for component: ${component.name}`);
      return null;
    }

    return downloadAndProcessComponent(component, svgUrl, componentPrefix, componentSuffix);
  });

  // Wait for all promises to resolve
  const batchResults = await Promise.allSettled(promises);

  // Process results
  batchResults.forEach((result, index) => {
    if (result.status === 'fulfilled' && result.value) {
      results.push(result.value);
      successCount += 1;
    } else {
      errorCount += 1;
    }
  });

  return { results, successCount, errorCount };
}

/**
 * Exports SVGs to React components for a list of components
 */
export async function exportSVGsAsReactCode(
  components: ComponentWithId[],
  options: ExportSVGsAsReactCodeOptions,
): Promise<ReactComponentsResult[]> {
  const {
    figmaToken = '',
    figmaDocumentId = '',
    scale = 1,
    batchSize = 50,
    componentPrefix = '',
    componentSuffix = 'Icon',
  } = options;

  if (components.length === 0) {
    console.warn('No components to export');
    return [];
  }

  console.log(`Exporting ${components.length} components in batches of ${batchSize}...`);
  const allResults: ReactComponentsResult[] = [];
  let totalSuccessCount = 0;
  let totalErrorCount = 0;

  // Process components in batches
  for (let i = 0; i < components.length; i += batchSize) {
    const batch = components.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(components.length / batchSize);

    console.log(`Processing batch ${batchNumber}/${totalBatches} (${batch.length} components)...`);

    // Step 1: Get SVG URLs for this batch
    const componentIds = batch.map((component) => component.id);
    const svgUrls = await getSvgUrlsByIds(componentIds, {
      figmaDocumentId,
      figmaToken,
      scale,
    });

    // Step 2: Process all components in the batch in parallel
    const { results, successCount, errorCount } = await processBatch(
      batch,
      svgUrls,
      componentPrefix,
      componentSuffix,
    );

    allResults.push(...results);
    totalSuccessCount += successCount;
    totalErrorCount += errorCount;

    console.log(`Batch ${batchNumber} completed: ${successCount} success, ${errorCount} errors`);
  }

  console.log(
    `Successfully exported ${totalSuccessCount} components (${totalErrorCount} errors) in ${Math.ceil(components.length / batchSize)} batches`,
  );

  return allResults;
}
