import { FigmaError, FigmaFileResponse, FigmaImagesResponse } from '../figmaTypes';
import { isValidURL, to } from '../utils/utils';
import { FIGMA_API_URL, SVG_FORMAT } from '../constants';

export interface FigmaApiOptions {
  figmaToken: string;
  figmaDocumentId: string;
  figmaNodesId: string;
}

export interface GetSvgUrlsByIdsOptions {
  figmaToken: string;
  figmaDocumentId: string;
  scale?: number;
}

/**
 * Main function to get the complete Figma document
 * Following best practices from the Medium article
 */
export async function getFileByNodesId({
  figmaToken,
  figmaDocumentId,
  figmaNodesId,
}: FigmaApiOptions): Promise<FigmaFileResponse> {
  const url = `${FIGMA_API_URL}/files/${figmaDocumentId}/nodes?ids=${figmaNodesId}`;

  console.log(`Fetching Figma document: ${figmaDocumentId}`);

  const [response, responseError] = await to(
    fetch(url, {
      headers: {
        'X-Figma-Token': figmaToken,
        'Content-Type': 'application/json',
      },
    }),
  );

  if (responseError) {
    throw new Error(`Error fetching Figma document: ${responseError.message}`);
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Figma API error (${response.status}): ${response.statusText} - ${errorText}`);
  }

  const [data, dataError] = await to<FigmaFileResponse, FigmaError>(response.json());

  if (dataError) {
    throw new Error(`Error parsing Figma response: ${dataError.err}`);
  }

  console.log('Successfully fetched document');

  return data;
}

/**
 * Gets SVG export URLs from Figma
 */
export async function getSvgUrlsByIds(
  componentIds: string[],
  options: GetSvgUrlsByIdsOptions,
): Promise<Record<string, string>> {
  const { figmaToken, figmaDocumentId, scale = 1 } = options;

  // Build URL with export parameters
  const baseUrl = `${FIGMA_API_URL}/images/${figmaDocumentId}`;
  const params = new URLSearchParams({
    format: SVG_FORMAT,
    ids: componentIds.join(','),
    scale: scale.toString(),
  });

  console.log(`Requesting SVG URLs for ${componentIds.length} icons...`);

  const [response, responseError] = await to(
    fetch(`${baseUrl}?${params.toString()}`, {
      headers: {
        'X-Figma-Token': figmaToken,
      },
    }),
  );

  if (responseError) {
    throw new Error(`Error requesting SVG URLs: ${responseError.message}`);
  }

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  const [data, dataError] = await to<FigmaImagesResponse, FigmaError>(response.json());

  if (dataError) {
    throw new Error(`Error parsing SVG URLs response: ${dataError.message}`);
  }

  if (data.err) {
    throw new Error(`Figma API returned error: ${data.err}`);
  }

  console.log(`Got ${Object.keys(data.images).length} SVG URLs`);

  return data.images;
}

/**
 * Downloads SVG content from URL and validates it
 * Returns the SVG content as string if valid, throws error if not
 *
 * @param url - URL to download SVG from
 * @returns Promise<string> - SVG content as string
 * @throws Error if URL is invalid, download fails, or content is not valid SVG
 */
export async function downloadSvgContent(url: string): Promise<string> {
  // Validate URL
  if (!url || !isValidURL(url)) {
    throw new Error(`Invalid URL provided: ${url}`);
  }

  // Setup fetch options
  const fetchOptions: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'image/svg+xml, text/xml, application/xml, */*',
      'User-Agent': 'SVG-Downloader/1.0',
    },
  };

  try {
    // Download content
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText} for URL: ${url}`);
    }

    return await response.text();
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw existing errors with context
      throw new Error(`Failed to download SVG from ${url}: ${error.message}`);
    }

    throw new Error(`Unknown error downloading SVG from ${url}`);
  }
}
