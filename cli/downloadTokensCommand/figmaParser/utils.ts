export function sanitizeArray(array: Array<string | null>): Array<string> {
  const removedEmptyValues = array.filter(Boolean) as Array<string>;
  return [...new Set(removedEmptyValues)];
}

export function capitalize(name: string): string {
  if (!name) return '';

  return name[0].toUpperCase() + name.slice(1);
}
