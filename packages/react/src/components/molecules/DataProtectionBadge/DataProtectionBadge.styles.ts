import { cva } from 'class-variance-authority';

// ── Root (shared by both <a> and <button> renderings) ────────────────────────

export const rootStyles = cva([
  'inline-flex items-center justify-center',
  'gap-[var(--spacing-x1)]',
  'cursor-pointer',
  'bg-transparent',
  'border-0 p-0',
]);

// ── Icon ─────────────────────────────────────────────────────────────────────

export const iconStyles = cva([
  'shrink-0',
  'size-4',
  'text-[var(--color-text-and-icons-secondary)]',
]);

// ── Label ─────────────────────────────────────────────────────────────────────

export const labelStyles = cva([
  'typo-body-2',
  'text-[var(--color-text-and-icons-secondary)]',
  'underline',
  'underline-offset-2',
]);
