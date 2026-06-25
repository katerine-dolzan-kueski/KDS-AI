import { breakpoint } from './breakpoint';
import { color } from './color';
import { elevation } from './elevation';
import { font } from './font';
import { radius } from './radius';
import { spacing } from './spacing';

export const theme = {
  breakpoint,
  color,
  elevation,
  font,
  radius,
  spacing,
} as const;

export type AuroraTheme = typeof theme;
