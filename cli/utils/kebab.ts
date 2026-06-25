export default function kebab(...segments: Array<string | number>) {
  return segments
    .map((str) => {
      let result = String(str);

      // 1. Remove or replace special symbols like %, @, #, etc.
      result = result.replace(/[^a-zA-Z0-9\s-]/g, '');

      // 2. Separate lowercase letter followed by uppercase letter and then lowercase letters
      //    (e.g., "PurpleStrong" -> "purple-strong")
      result = result.replace(/([a-z])([A-Z][a-z])/g, '$1-$2');

      // 3. Separate lowercase letter followed by an uppercase letter that is part of an acronym/code
      //    (e.g., "TertiaryA50" -> "tertiary-a50")
      result = result.replace(/([a-z])([A-Z][A-Z0-9]*)/g, '$1-$2');

      // 4. Separate a lowercase letter from a number (e.g., "Primary50" -> "primary-50")
      result = result.replace(/([a-z])(\d+)/g, '$1-$2');

      // 5. Separate a number from an uppercase letter (e.g., "Primary1Focus" -> "primary-1-focus")
      result = result.replace(/(\d)([A-Z])/g, '$1-$2');

      return result.toLowerCase();
    })
    .filter(Boolean)
    .join('-');
}
