import { ComponentWithId, FigmaFileResponse } from '../figmaTypes';
import { cleanComponentName } from '../utils/utils';

/**
 * Extracts all icon components from the Figma document
 */
export function extractIconComponents(figmaFile: FigmaFileResponse): ComponentWithId[] {
  const nodes = figmaFile?.nodes;
  if (!nodes) return [];

  const components: ComponentWithId[] = [];

  for (const nodeData of Object.values(nodes)) {
    const nodeComponents = nodeData?.components;
    if (!nodeComponents) continue;

    for (const [id, component] of Object.entries(nodeComponents)) {
      if (!component.name.includes('/')) continue;

      const cleanName = cleanComponentName(component.name);
      if (!cleanName) continue;

      components.push({
        ...component,
        id,
        componentName: cleanName,
      });
    }
  }

  return components;
}
