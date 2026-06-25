import { useMediaQuery } from './useMedia';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const sizes: Record<Breakpoint, string> = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem',
};

/**
 * Mirrors Tailwind's breakpoint utilities (e.g., `md:`) via min-width queries.
 */
export function useBreakpoint(size: Breakpoint) {
  const minWidth = sizes[size];

  return useMediaQuery(`(min-width: ${minWidth})`);
}
