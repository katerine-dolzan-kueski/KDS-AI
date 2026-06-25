import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HEIGHT_PERCENTAGES } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate target height for drag interactions with preset heights
 * Simplified logic with clear state transitions
 */
export const calculateDragTargetHeight = (
  startHeight: number,
  isDragUp: boolean,
  isDragDown: boolean,
  deltaY: number,
  dragDistance: number,
  minDragThreshold: number,
): number => {
  // Not enough drag distance - stay at current height
  if (dragDistance < minDragThreshold) {
    return startHeight;
  }

  // Determine current state
  const currentState = startHeight < 0.6 ? 'HALF' : startHeight < 0.95 ? 'LARGE' : 'FULL';

  // Handle drag up - expand
  if (isDragUp) {
    switch (currentState) {
      case 'HALF': return HEIGHT_PERCENTAGES.LARGE;
      case 'LARGE': return HEIGHT_PERCENTAGES.FULL;
      case 'FULL': return HEIGHT_PERCENTAGES.FULL; // Already at max
      default: return startHeight;
    }
  }

  // Handle drag down - contract or dismiss
  if (isDragDown) {
    switch (currentState) {
      case 'HALF':
        // Strong drag down from half = dismiss
        if (deltaY > 150) {
          // Don't call handleSmoothDismiss here, let the drag end handle it
          return 0; // Return 0 to indicate dismiss
        }
        return HEIGHT_PERCENTAGES.HALF; // Stay at half
      
      case 'LARGE':
        return HEIGHT_PERCENTAGES.HALF; // Large → Half
      
      case 'FULL':
        return HEIGHT_PERCENTAGES.LARGE; // Full → Large
      
      default:
        return startHeight;
    }
  }

  return startHeight;
};
