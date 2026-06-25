/* eslint-disable sort-keys-fix/sort-keys-fix */
import { radius as RADIUS } from '../foundation';

export const radius = {
  none: RADIUS[0],
  xs: RADIUS[1],
  sm: RADIUS[2],
  md: RADIUS[3],
  lg: RADIUS[4],
  xl: RADIUS[5],
  full: RADIUS[6],
} as const;
