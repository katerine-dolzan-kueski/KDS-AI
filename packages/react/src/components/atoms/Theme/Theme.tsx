import { useMemo } from 'react';
import { ThemeProps } from './Theme.types';
import getTheme from './Theme.utils';
import { themeVariants } from './Theme.styles';

export function Theme({
  children,
  $mode = 'auto',
  $variant = 'contents',
  className = '',
}: ThemeProps) {
  const theme = useMemo(() => getTheme($mode), [$mode]);

  return (
    <div className={themeVariants({ variant: $variant, className })} data-theme={theme}>
      {children}
    </div>
  );
}
