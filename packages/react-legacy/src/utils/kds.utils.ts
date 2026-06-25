export const splitCamelCase = (camel: string) => camel
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .split(' ');

export const splitNumber = (camel: string) => camel
  .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
  .split(' ');

export const extractVariable = (varString: string) => varString.match(/\((--(\w|-)*)\)/)?.[1] ?? null;

export const getVariableValue = (variable: string) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const groupByTokenName = (
  tokenDiccionary: Record<string, unknown>,
  numberOnly = false,
) => Object
  .entries(tokenDiccionary)
  .reduce((result, [name, value]) => {
    const names = numberOnly ? splitNumber(name) : splitCamelCase(name);
    const groupName = names.shift() ?? 'other';
    const itemName = names.join('') ?? groupName;
    const prevGroup = result[groupName] ?? {};
    return {
      ...result,
      [groupName]: {
        ...prevGroup,
        [itemName]: value,
      },
    };
  }, {} as Record<string, Record<string, unknown>>);

export const tokenMessage = (token?: string) => `${token ? `

\`${token}\` tokens with responsive prefixes are allowed.` : ''}

Use \`cntr\`/\`cmd\` + \`click\` to select or unselect multiple options.
`;

export const getLabelColors = (selected: string) => (selected.includes(':')
  ? ['textDisabled', `${selected.split(':').shift()}:success`]
  : 'success');
