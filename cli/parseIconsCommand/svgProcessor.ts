/**
 * Utilities for processing and validating SVG content
 */

/**
 * Validates that the SVG content is valid
 */
export function validateSvgContent(svgContent: string): boolean {
  if (!svgContent || typeof svgContent !== 'string') {
    return false;
  }

  // Verify that it contains basic SVG tags
  const hasSvgTag = svgContent.includes('<svg') && svgContent.includes('</svg>');
  if (!hasSvgTag) {
    return false;
  }

  // Verify that it's not empty (no content inside the SVG)
  const svgContentCleaned = svgContent.replace(/\s+/g, ' ').trim();
  if (svgContentCleaned.length < 20) {
    // Very small SVG is probably empty
    return false;
  }

  return true;
}

/**
 * Processes SVG content to optimize it for use as an icon
 */
export function processSvgForIcon(svgContent: string): string {
  if (!validateSvgContent(svgContent)) {
    throw new Error('Invalid SVG content');
  }

  let processedSvg = svgContent;

  // Clean unnecessary attributes for icons
  processedSvg = processedSvg
    // Remove XML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove excessive whitespace
    .replace(/\s+/g, ' ')
    .trim()
    // Remove fixed size attributes so they can be controlled by props
    .replace(/\s*width="[^"]*"/gi, '')
    .replace(/\s*height="[^"]*"/gi, '')
    // Ensure it has currentColor so it can be styled
    .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
    .replace(/stroke="[^"]*"/gi, 'stroke="currentColor"');

  // If it doesn't have viewBox, try to add it based on the original SVG
  if (!processedSvg.includes('viewBox')) {
    // Look for original dimensions in the SVG to create viewBox
    const widthMatch = svgContent.match(/width="(\d+)"/i);
    const heightMatch = svgContent.match(/height="(\d+)"/i);

    if (widthMatch && heightMatch) {
      const width = widthMatch[1];
      const height = heightMatch[1];
      processedSvg = processedSvg.replace('<svg', `<svg viewBox="0 0 ${width} ${height}"`);
    } else {
      // Default viewBox if dimensions cannot be determined
      processedSvg = processedSvg.replace('<svg', '<svg viewBox="0 0 24 24"');
    }
  }

  // Normalize SVG attributes for React compatibility
  processedSvg = normalizeSvgForReact(processedSvg);

  return processedSvg;
}

/**
 * Extracts the viewBox from an SVG
 */
export function extractViewBox(svgContent: string): string {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/i);
  return viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
}

/**
 * Normalizes SVG content for React components
 */
export function normalizeSvgForReact(svgContent: string): string {
  return (
    svgContent
      // Convert attributes to camelCase for React
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/stroke-dasharray/g, 'strokeDasharray')
      .replace(/stroke-dashoffset/g, 'strokeDashoffset')
      // Remove XML namespace that can cause problems in React
      .replace(/\s*xmlns[^=]*="[^"]*"/g, '')
  );
}
