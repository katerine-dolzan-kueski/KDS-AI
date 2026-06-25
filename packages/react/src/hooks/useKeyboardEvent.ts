import React from 'react';

export interface KeyboardEventOptions {
  /** Action to perform when Enter or Space is pressed */
  action?: () => void;
  /** Custom key handler */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /** Whether the element should be focusable */
  focusable?: boolean;
  /** Custom keys to trigger the action (defaults to ['Enter', ' ']) */
  triggerKeys?: string[];
}

export interface KeyboardEventReturn {
  /** Event handlers to spread onto the element */
  eventHandlers: {
    onKeyDown: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
  };
}

/**
 * Generic hook for keyboard event handling
 * Provides consistent keyboard interaction patterns across components
 */
export function useKeyboardEvent(options: KeyboardEventOptions = {}): KeyboardEventReturn {
  const { action, onKeyDown, focusable = true, triggerKeys = ['Enter', ' '] } = options;

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      // Check if the pressed key should trigger the action
      if (triggerKeys.includes(event.key) && action) {
        event.preventDefault();
        action();
        return;
      }

      // Call custom key handler if provided
      onKeyDown?.(event);
    },
    [action, onKeyDown, triggerKeys],
  );

  return {
    eventHandlers: {
      onKeyDown: handleKeyDown,
      tabIndex: focusable ? 0 : undefined,
    },
  };
}
