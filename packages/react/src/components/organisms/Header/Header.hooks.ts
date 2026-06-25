import { useState, useEffect, RefObject } from 'react';

// #region Global threshold on scroll (in rem)
const PADDING_REDUCTION = {
  main: 1.5,      // p-x5 → py-x2
  title: 1,       // py-x4 → py-x2
  secondary: 0    // py-x2 → py-x2
} as const;

const ICON_REDUCTION = {
  main: 1,        // 3rem → 2rem = 1rem
  title: 0,       // 2rem → 2rem = 0rem
  secondary: 0    // 2rem → 2rem = 0rem
} as const;

const SAFETY_MARGIN = 0.5;
// #endregion

type HeaderVariant = 'main' | 'title' | 'secondary';

interface UseScrollThresholdOptions {
  anchor?: RefObject<HTMLElement> | string;
  forceScrolled?: boolean;
  variant: HeaderVariant;
}

export function useIsScrolled({
  anchor,
  forceScrolled,
  variant,
}: UseScrollThresholdOptions): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof forceScrolled === 'boolean') {
      setIsScrolled(forceScrolled);
      return;
    }

    const anchorElement = typeof anchor === 'string'
      ? document.querySelector(anchor)
      : anchor?.current;
    if (!anchorElement) return;

    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    const reduction = 
      PADDING_REDUCTION[variant] +
      ICON_REDUCTION[variant];
    
    const activateThreshold = reduction > 0
      ? (reduction + SAFETY_MARGIN) * rem
      : SAFETY_MARGIN * rem;

    const handleScroll = () => {
      const scrollTop = anchorElement.scrollTop;
      setIsScrolled(currentScrolled => {
        if (currentScrolled) {
          // Currently scrolled: only deactivate if below lower threshold
          return scrollTop > 0;
        } 
        // Currently not scrolled: only activate if above higher threshold
        return scrollTop >= activateThreshold;
      });
    };

    anchorElement.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      anchorElement?.removeEventListener('scroll', handleScroll);
    };
  }, [anchor, forceScrolled, variant]);

  // Use forceScrolled if specified, otherwise use detected scroll state
  return typeof forceScrolled === 'boolean' ? forceScrolled : isScrolled;
}
