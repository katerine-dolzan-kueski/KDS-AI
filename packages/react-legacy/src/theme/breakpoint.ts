/* eslint-disable sort-keys-fix/sort-keys-fix */
import { breakpoint as BREAKPOINT } from '../foundation';

export const breakpoint = {
  tablet: `only screen and (min-width: ${BREAKPOINT.sm[0]}px)`,
  bigTablet: `only screen and (min-width: ${BREAKPOINT.md[0]}px)`,
  laptop: `only screen and (min-width: ${BREAKPOINT.lg[0]}px)`,
  desktop: `only screen and (min-width: ${BREAKPOINT.xl[0]}px)`,
  onlyPhone: `only screen and (max-width: ${BREAKPOINT.xs[1]}px)`,
  onlyTablet: `only screen and (min-width: ${BREAKPOINT.sm[0]}px) and (max-width: ${BREAKPOINT.md[1]}px)`,
  onlySmallTablet: `only screen and (min-width: ${BREAKPOINT.sm[0]}px) and (max-width: ${BREAKPOINT.sm[1]}px)`,
  onlyBigTablet: `only screen and (min-width: ${BREAKPOINT.md[0]}px) and (max-width: ${BREAKPOINT.md[1]}px)`,
  onlyLaptop: `only screen and (min-width: ${BREAKPOINT.lg[0]}px) and (max-width: ${BREAKPOINT.lg[1]}px)`,
} as const;

export type KDSBreakpoint = keyof typeof breakpoint;
export type KDSResponsive<T extends string> = `${KDSBreakpoint}:${T}` | T;
export type KDSResponsiveProp<T extends string> = KDSResponsive<T>[] | KDSResponsive<T>
