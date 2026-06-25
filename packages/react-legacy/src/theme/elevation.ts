/* eslint-disable sort-keys-fix/sort-keys-fix */
import { elevation as ELEVATION } from '../foundation';

export const elevation = {
  buttonNormal: ELEVATION.normal.md,
  buttonHover: ELEVATION.normal.lg,
  buttonTabBar: ELEVATION.inverted.lg,
  card: ELEVATION.normal.base,
} as const;
