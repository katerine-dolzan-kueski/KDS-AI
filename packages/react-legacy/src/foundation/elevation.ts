/* eslint-disable sort-keys-fix/sort-keys-fix */
export const elevation = {
  normal: {
    base: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0px 2px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    lg: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    xxl: '0px 25px 50px rgba(0, 0, 0, 0.25)',
    inner: 'inset 2px 2px 2px rgba(11, 11, 13, 0.1)',
  },
  inverted: {
    base: '0px -1px 2px rgba(0, 0, 0, 0.06), 0px -1px 3px rgba(0, 0, 0, 0.1)',
    md: '0px -2px 7px rgba(0, 0, 0, 0.04), 0px -4px 6px rgba(0, 0, 0, 0.05)',
    lg: '0px -10px 15px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0px -20px 25px rgba(0, 0, 0, 0.1), 0px -10px 10px rgba(0, 0, 0, 0.04)',
    xxl: '0px -25px 50px rgba(0, 0, 0, 0.25)',
    inner: 'inset -2px -2px 2px rgba(11, 11, 13, 0.1)',
  },
} as const;
