import { useEffect, useState } from 'react';

export const useBottomSheet = ($isOpen: boolean, animationDuration: number) => {
  const [mounted, setMounted] = useState(false);
  const [animatedOpen, setAnimatedOpen] = useState(false);

  useEffect(() => {
    if ($isOpen) {
      setMounted(true);
      const timeoutId = setTimeout(() => {
        setAnimatedOpen(true);
      }, 10);
      return () => clearTimeout(timeoutId);
    }
    setAnimatedOpen(false);
    const timeoutId = setTimeout(() => {
      setMounted(false);
    }, animationDuration);
    return () => clearTimeout(timeoutId);

  }, [$isOpen, animationDuration]);

  return { mounted, animatedOpen };
};
