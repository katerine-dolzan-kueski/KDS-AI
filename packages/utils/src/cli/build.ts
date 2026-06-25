/**
 * Validates the package.json before building.
 * @param {Record<string, any>} packageJson
 * Whether to skip checking for main field in package.json.
 */
export function validatePkgJson(packageJson: { [key: string]: any }) {
  const errors: string[] = [];

  // Allow main, module, and types for backward compatibility when exports are present
  if (packageJson.main && !packageJson.exports) {
    errors.push(
      `Remove the field "main" from "${packageJson.name}" package.json. Add it as "exports["."]" instead.`,
    );
  }

  if (packageJson.module && !packageJson.exports) {
    errors.push(
      `Remove the field "module" from "${packageJson.name}" package.json. Add it as "exports["."]" instead.`,
    );
  }

  if ((packageJson.types || packageJson.typings) && !packageJson.exports) {
    errors.push(
      `Remove the field "types/typings" from "${packageJson.name}" package.json. Add it as "exports["."]" instead.`,
    );
  }

  if (errors.length > 0) {
    const error = new Error(errors.join('\n'));
    throw error;
  }
}
