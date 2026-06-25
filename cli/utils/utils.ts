import { DOMParser } from '@xmldom/xmldom';
import camelCase from 'camelcase';

export function to<Result, E = Error>(promise: Promise<Result>) {
  return promise
    .then((data) => [data, null] as [Result, null])
    .catch((err: E) => [null, err] as [null, E]);
}

export function fixColor(argb: string | number, omitAlphaIfOpaque: boolean = true) {
  const argbString = String(argb);
  const [, a, r, g, b] =
    /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(argbString) || [];
  if (!a || !r || !g || !b) {
    throw new Error(`Invalid color: ${argbString}`);
  }

  if (omitAlphaIfOpaque && a.toUpperCase() === 'FF') {
    return `#${r}${g}${b}`;
  }
  return `#${r}${g}${b}${a}`;
}

// Fast SVG validation - checks essential SVG characteristics
export function isSVG(content: string): boolean {
  if (!content || typeof content !== 'string' || content.trim().length < 10) {
    return false;
  }

  const trimmed = content.trim();

  // Must contain SVG opening tag
  if (!/<svg\s*[^>]*>/i.test(trimmed)) {
    return false;
  }

  // Must have proper structure (opening and closing tags)
  if (!trimmed.includes('</svg>') && !trimmed.includes('/>')) {
    return false;
  }

  // Basic XML structure check - shouldn't start with HTML
  if (
    trimmed.toLowerCase().startsWith('<html') ||
    trimmed.toLowerCase().startsWith('<!doctype html')
  ) {
    return false;
  }

  return true;
}

// Enhanced SVG validation with parsing
export function validateSVG(content: string): void {
  // Basic structure check
  if (!isSVG(content)) {
    throw new Error('Content is not a valid SVG');
  }

  // Security checks
  if (/<script\s*[^>]*>/i.test(content)) {
    throw new Error('SVG contains script elements (security risk)');
  }

  // Try to parse as XML to ensure it's well-formed
  try {
    const parser = new DOMParser({
      errorHandler: {
        warning: () => {},
        error: (err: string) => {
          throw new Error(err);
        },
        fatalError: (err: string) => {
          throw new Error(err);
        },
      },
    });

    // Check for parser errors
    const doc = parser.parseFromString(content, 'image/svg+xml');

    // Verify root element is SVG
    const rootElement = doc.documentElement;
    if (!rootElement || rootElement.tagName.toLowerCase() !== 'svg') {
      throw new Error('Root element is not <svg>');
    }
  } catch (error) {
    throw new Error(
      `Invalid XML structure: ${error instanceof Error ? error.message : 'Parse error'}`,
    );
  }
}

// Validate URL format
export function isValidURL(url: string): boolean {
  if (!url || typeof url !== 'string') return false;

  const regex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

  return regex.test(url.trim());
}

export function cleanComponentName(name: string): string {
  const parts = name.split('/');
  let namePart = parts[parts.length - 1].trim();

  return camelCase(namePart, { pascalCase: true });
}
