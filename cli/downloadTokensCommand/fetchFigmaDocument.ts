import { to } from '../../cli/utils/utils';
import { FigmaOkResponse, GetLocalVariablesResponse } from '../figmaTypes';

const FIGMA_API = 'https://api.figma.com/v1/files';

interface FetchFigmaDocumentOptions {
  figmaToken: string;
  figmaDocumentId: string;
}

export async function fetchFigmaDocument({
  figmaDocumentId,
  figmaToken,
}: FetchFigmaDocumentOptions): Promise<FigmaOkResponse> {
  const headers: Record<string, string> = {
    'X-Figma-Token': figmaToken,
  };

  const [response, responseError] = await to(
    fetch(`${FIGMA_API}/${figmaDocumentId}/variables/local`, {
      headers,
    }),
  );

  if (responseError)
    throw new Error(`Error on fetch document from Figma: ${responseError.message}`);

  if (response.status !== 200)
    throw new Error(`Error on fetch document from Figma: ${response.statusText}`);

  const [parsed, parsedError] = await to<GetLocalVariablesResponse>(response.json());
  if (parsedError) throw new Error(`Error on parse response from Figma: ${parsedError.message}`);

  return parsed as FigmaOkResponse;
}
