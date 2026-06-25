import { useCallback, useEffect } from 'react';

/**
 * Hook to handle escape key press
 */
export const useEscapeKey = (onEscape: () => void, enabled: boolean = true) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (enabled && event.key === 'Escape') {
        onEscape();
      }
    },
    [onEscape, enabled],
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, enabled]);
};
