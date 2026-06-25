import React from 'react';
import { useKeyboardEvent, KeyboardEventOptions } from './useKeyboardEvent';

export interface AccessibilityOptions<T = Element> extends Omit<KeyboardEventOptions, 'onKeyDown'> {
  /** Explicit aria-label */
  'aria-label'?: string;
  /** Loading state */
  loading?: boolean;
  /** Loading text to display when loading is true */
  loadingText?: string;
  /** Button content/children */
  children?: React.ReactNode;
  /** Whether the element is busy/loading */
  busy?: boolean;
  /** Custom key handler */
  onKeyDown?: (event: React.KeyboardEvent<T>) => void;
}

export interface AccessibilityReturn {
  /** Event handlers to spread onto the element */
  eventHandlers: {
    onKeyDown: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
  };
  /** Accessibility attributes to spread onto the element */
  accessibilityProps: {
    'aria-label'?: string;
    'aria-busy'?: boolean;
  };
}

/**
 * Unified accessibility hook that combines keyboard handling and aria-label logic
 * Provides consistent accessibility patterns across interactive components
 */
export function useAccessibility<T = Element>(
  options: AccessibilityOptions<T> = {},
): AccessibilityReturn {
  const {
    'aria-label': explicitAriaLabel,
    loading = false,
    loadingText,
    children,
    busy = false,
    onKeyDown,
    ...keyboardOptions
  } = options;

  // Get keyboard event handlers
  const { eventHandlers: baseEventHandlers } = useKeyboardEvent(keyboardOptions);

  // Create combined event handler
  const eventHandlers = React.useMemo(
    () => ({
      ...baseEventHandlers,
      onKeyDown: (event: React.KeyboardEvent) => {
        baseEventHandlers.onKeyDown(event);
        onKeyDown?.(event as React.KeyboardEvent<T>);
      },
    }),
    [baseEventHandlers, onKeyDown],
  );

  // Determine the appropriate aria-label
  const ariaLabel = React.useMemo(() => {
    // Priority: loading text (when loading) > explicit aria-label > text children
    if (loading && loadingText) return loadingText;
    if (explicitAriaLabel) return explicitAriaLabel;
    if (typeof children === 'string') return children;
    return undefined;
  }, [loading, loadingText, explicitAriaLabel, children]);

  // Determine aria-busy state
  const ariaBusy = React.useMemo(() => {
    return loading || busy;
  }, [loading, busy]);

  return {
    eventHandlers,
    accessibilityProps: {
      'aria-label': ariaLabel,
      'aria-busy': ariaBusy || undefined,
    },
  };
}
