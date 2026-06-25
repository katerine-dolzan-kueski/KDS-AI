import { cva } from 'class-variance-authority';

/**
 * Container: horizontal row of step indicators.
 * Short: wraps to natural width.
 * Wide: stretches full width so each bar gets flex-1.
 */
export const stepperContainerStyles = cva(
  ['flex flex-row items-center gap-[var(--spacing-x1)]'],
  {
    variants: {
      $size: {
        short: ['w-fit'],
        wide: ['w-full'],
      },
    },
    defaultVariants: {
      $size: 'short',
    },
  },
);

/**
 * Short step indicator.
 * State is passed via data-attributes on the element and mapped through
 * the compound variant pattern below.
 *
 * States:
 *  - inactive:  small dot (6×6), brand/tertiary colour at 50% opacity
 *  - active:    wide pill (24×6), brand colour
 *  - completed: small dot (manual → brand) / wide pill (progress → secondary)
 */
export const shortStepStyles = cva(
  ['h-1.5 rounded-[var(--radius-max)] transition-all duration-300'],
  {
    variants: {
      state: {
        inactive:  ['w-1.5 bg-[var(--color-text-and-icons-tertiary)] opacity-50'],
        active:    ['w-6  bg-[var(--color-text-and-icons-brand)] opacity-100'],
        completed: ['w-1.5 bg-[var(--color-text-and-icons-brand)] opacity-100'],
        'completed-progress': ['w-6 bg-[var(--color-text-and-icons-secondary)] opacity-100'],
      },
    },
    defaultVariants: { state: 'inactive' },
  },
);

/**
 * Wide step indicator (progress + wide only).
 * Each bar is flex-1 and 4px tall.
 * The in-progress bar renders as a track (outer) + fill (inner nested div).
 */
export const wideStepTrackStyles = cva(
  ['flex-1 h-1 rounded-[var(--radius-max)] overflow-hidden transition-all duration-300'],
  {
    variants: {
      state: {
        inactive:    ['bg-[var(--color-text-and-icons-always-white)] opacity-50'],
        active:      ['bg-[var(--color-text-and-icons-always-white)] opacity-50 relative'],
        completed:   ['bg-[var(--color-text-and-icons-always-white)] opacity-100'],
      },
    },
    defaultVariants: { state: 'inactive' },
  },
);

/** Inner fill shown inside the in-progress wide bar track. */
export const wideStepFillStyles =
  'absolute inset-y-0 left-0 w-1/2 bg-[var(--color-text-and-icons-always-white)] rounded-[var(--radius-max)]';
