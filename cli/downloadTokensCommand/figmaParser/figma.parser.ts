import {
  Dictionary,
  Meta,
  RGBAColor,
  Variable,
  VariableAlias,
  VariableCollectionMode,
} from '../../figmaTypes';
import {
  isRGBA,
  isValue,
  isVariableAlias,
  rgbaToHex,
  sanitizeName,
  spacesToCapitalCase,
  splitSlashes,
  stripCollectionName,
  stripModeName,
  toParseableValue,
} from './figma.mappers';
import { capitalize, sanitizeArray } from './utils';

function unfoldNameAndAppend(
  dictionary: Dictionary,
  variableName: string,
  variableValue: string | number | Dictionary | undefined | null,
): Dictionary {
  const layers = variableName.split('/');
  let currentLayer: Dictionary = dictionary;

  while (layers.length) {
    const nextLayer = layers.shift();

    if (typeof nextLayer !== 'string') {
      throw new Error(`Invalid variable name layer: ${nextLayer}`);
    }

    if (!layers.length) {
      if (currentLayer[nextLayer]) throw new Error(`Attempting to override ${variableName}`);
      currentLayer[nextLayer] = variableValue;
    } else {
      currentLayer[nextLayer] = currentLayer[nextLayer] || {};

      if (isValue(currentLayer[nextLayer])) {
        const currentValue = currentLayer[nextLayer] as {
          DefaultValue?: string | number | Dictionary | null | undefined;
          description?: string;
          type?: string;
          value?: string | number | Dictionary | null | undefined;
        };
        currentValue.DefaultValue = { ...currentValue };

        delete currentValue.description;
        delete currentValue.type;
        delete currentValue.value;
      }
    }

    currentLayer = currentLayer[nextLayer] as Dictionary;
  }

  return dictionary;
}

function parseVariableName(rawName: string): string {
  const [root, ...restNames] = rawName.split('/');
  const last = restNames.pop();
  const sanitizedLast = splitSlashes(last);
  const sanitizedRest = restNames.join('/').replace(/\s/g, '/').split('/').map(sanitizeName);
  const sanitizedRoot = sanitizeName(spacesToCapitalCase(root));
  const sanitizedName = sanitizeArray([sanitizedRoot, ...sanitizedRest, ...sanitizedLast]);
  const noNumberAtBeginning = sanitizedName.map((name, i, collection) => {
    if (!name) return name;

    const timesSyntax = name.match(/^(Minus)?(\d+)x$/);

    if (timesSyntax) {
      return `${timesSyntax[1] || ''}X${timesSyntax[2] || ''}`;
    }
    if (name.match(/^\d+/)) {
      const parent = collection[i - 1] || 'x';
      const parentFirstLetter = parent[0];

      return `${parentFirstLetter}${name}`;
    }

    return name;
  });

  return noNumberAtBeginning.join('/');
}

function findVariableValueForMode(
  variableCollection: Record<string, Variable>,
  variableId: string,
  modeId: string,
  originalName: string | null = null,
): [string, string | number | null] {
  const variable = variableCollection[variableId];

  if (!variable || variable.deletedButReferenced) return ['Unknown', null];

  const { valuesByMode, name } = variable;
  const preSelectedName =
    originalName && originalName.length > 1 ? originalName : name || 'Unknown';
  const variableName = parseVariableName(preSelectedName);
  const fallbackModeID =
    Object.keys(valuesByMode).length > 0 ? Object.keys(valuesByMode)[0] : undefined;
  const value =
    valuesByMode[modeId] || (fallbackModeID ? valuesByMode[fallbackModeID] : null) || null;

  if (isRGBA(value)) return [variableName, rgbaToHex(value as RGBAColor)];
  if (!isVariableAlias(value)) {
    const parseable = toParseableValue(variable, value);
    return [variableName, parseable ? (parseable.value as string | number) : null];
  }

  return findVariableValueForMode(
    variableCollection,
    (value as VariableAlias).id,
    modeId,
    variableName,
  );
}

function generateModeEntries(
  collectionModes: VariableCollectionMode[],
  variables: string[],
  variableCollection: Record<string, Variable>,
  parentName: string,
): [string, Dictionary][] {
  const modesEntries: [string, Dictionary][] = collectionModes.map((mode) => {
    const { modeId, name: modeName } = mode;
    const modeVariables = variables.reduce((dictionary: Dictionary, variableId: string) => {
      const [variableName, variableValue] = findVariableValueForMode(
        variableCollection,
        variableId,
        modeId,
      );

      if (variableValue === null) return dictionary;
      const nonDuplicatedCollection = variableName.replace(new RegExp(`^${parentName}/`), '');

      return unfoldNameAndAppend(dictionary, nonDuplicatedCollection, variableValue);
    }, {} as Dictionary);

    return [stripModeName(modeName), modeVariables];
  });

  switch (modesEntries.length) {
    case 0:
      return [];
    case 1:
      return [['', modesEntries[0][1]]];
    default:
      return modesEntries;
  }
}

export function parseFigma({
  variableCollections: collections,
  variables,
}: Meta): Record<string, Dictionary> {
  const response: Record<string, Dictionary> = {};

  Object.values(collections).forEach((collection) => {
    const { name: collectionName, modes: collectionModes, variableIds } = collection;
    const name = capitalize(stripCollectionName(collectionName));
    const modes = generateModeEntries(collectionModes, variableIds, variables, name);

    modes.forEach(([modeName, modeContents]) => {
      const finalModeContents: Dictionary = modeContents;

      const contentWithCollection: Dictionary = modeName
        ? {
            collectionWithModes: true,
            [modeName]: finalModeContents,
          }
        : finalModeContents;

      response[name] = {
        ...(response[name] || {}),
        ...contentWithCollection,
      };
    });
  });

  return response;
}
