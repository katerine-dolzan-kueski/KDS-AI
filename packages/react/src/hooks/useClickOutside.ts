import { useEffect } from 'react';

/**
 * Hook to handle click outside
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void,
  enabled: boolean = true,
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onClickOutside, enabled]);
};
