export const concatTestId = (...strings: (string | undefined)[]) => {
  if (!strings[0]) return undefined;

  return [...strings].filter(Boolean).join('-');
};
