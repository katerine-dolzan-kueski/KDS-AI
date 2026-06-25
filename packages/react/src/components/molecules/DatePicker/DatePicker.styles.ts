import { ClassNames } from 'react-day-picker';
import { cn } from '../../../lib/utils';

const cell = cn('min-w-11 h-11');
const chevronButton = cn('w-12 h-12 grid place-items-center cursor-pointer');

export const datePickerClassNames: Partial<ClassNames> = {
  month: cn('flex'),
  months: cn('relative'),
  month_caption: cn('absolute top-4 typo-body-1-emphasized'),
  month_grid: cn('flex-1'),
  weekday: cn(cell, 'text-text-and-icons-tertiary typo-body-2-emphasized'),
  nav: cn('flex justify-end items-center gap-1 h-14 border-b border-stroke-tertiary-a50'),
  button_previous: chevronButton,
  button_next: chevronButton,
  day: cn(cell, 'text-center typo-body-1 text-text-and-icons-primary transition-colors'),
  day_button: cn('w-10 h-10 rounded-full bg-(--circle-bg) cursor-[var(--day-cursor,pointer)]'),
  selected: cn('[--circle-bg:var(--color-background-brand)]! text-text-and-icons-always-white!'),
  today: cn('[--circle-bg:var(--color-background-tertiary-cool)]'),
  disabled: cn('text-text-and-icons-tertiary-a50! [--day-cursor:default]'),
};
