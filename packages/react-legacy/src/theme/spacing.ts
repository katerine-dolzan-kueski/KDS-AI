import { spacing as SPACING, layout as LAYOUT } from '../foundation';

export const spacing = {
  layout01: LAYOUT[1], // 1rem (16px)
  layout02: LAYOUT[2], // 1.5rem (24px)
  layout03: LAYOUT[3], // 2rem (32px)
  layout04: LAYOUT[4], // 3rem (48px)
  layout05: LAYOUT[5], // 4rem (64px)
  layout06: LAYOUT[6], // 6rem (96px)
  layout07: LAYOUT[7], // 10rem (160px)
  spacing01: SPACING[1], // 0.125rem (2px)
  spacing02: SPACING[2], // 0.25rem (4px)
  spacing03: SPACING[3], // 0.5rem (8px)
  spacing04: SPACING[4], // 0.75rem (12px)
  spacing05: SPACING[5], // 1rem (16px)
  spacing06: SPACING[6], // 1.5rem (24px)
  spacing07: SPACING[7], // 2rem (32px)
  spacing08: SPACING[8], // 2.5rem (40px)
  spacing09: SPACING[9], // 3rem (48px)
} as const;

export type KDSSpacing = keyof typeof spacing;
