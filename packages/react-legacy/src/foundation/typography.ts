/* eslint-disable sort-keys-fix/sort-keys-fix */
export const font = {
  family: {
    primary: '\'Inter\', Helvetica, Arial, sans-serif',
    secondary: '\'Roboto Mono\', SF Mono, monospace',
  },
  size: {
    xxxxs: '0.6875rem',
    xxxs: '0.75rem',
    xxs: '0.875rem',
    xs: '1rem',
    sm: '1.25rem',
    base: '1.375rem',
    lg: '1.5rem',
    xl: '1.75rem',
    xxl: '2rem',
    xxxl: '2.25rem',
    xxxxl: '2.8125rem',
    xxxxxl: '3.5rem',
  },
  weight: {
    thin: '100',
    extralight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  tracking: {
    tightest: '-0.4px',
    tighter: '-0.25px',
    tight: '-0.15px',
    tighty: '-0.10px',
    normal: '0',
    widey: '0.10px',
    wide: '0.15px',
    wider: '0.25px',
    widest: '0.40px',
  },
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.3',
    normal: '1.4',
    relaxed: '1.5',
    loose: '2',
  },
} as const;

export type KDSFoundationFont = typeof font;
