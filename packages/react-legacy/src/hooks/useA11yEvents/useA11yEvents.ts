import { KeyboardEvent, MouseEvent, useCallback } from 'react';

export function useA11yEvents<T extends HTMLElement>(callback: (ref: T) => void) {
  const onClick = useCallback((e: MouseEvent<T>) => {
    e.preventDefault();
    e.stopPropagation();
    callback(e.target as T);
  }, [callback]);

  const onKeyUp = useCallback((e: KeyboardEvent<T>) => {
    e.preventDefault();
    e.stopPropagation();
    if ([' ', 'Enter'].includes(e.key)) callback(e.target as T);
  }, [callback]);

  return {
    onClick,
    onKeyUp,
    tabIndex: 0,
  };
}
