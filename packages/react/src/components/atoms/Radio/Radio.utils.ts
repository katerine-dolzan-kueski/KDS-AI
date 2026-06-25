import React from 'react';

/**
 * Union type for interactive events that can trigger radio selection
 */
export type RadioActivationEvent = React.MouseEvent | React.KeyboardEvent;

/**
 * Type guard to check if an event is a keyboard event
 */
export const isKeyboardEvent = (event: RadioActivationEvent): event is React.KeyboardEvent => {
  return 'key' in event;
};

/**
 * Type guard to check if an event is a mouse event
 */
export const isMouseEvent = (event: RadioActivationEvent): event is React.MouseEvent => {
  return 'button' in event;
};

/**
 * Checks if a keyboard event should trigger radio activation
 */
export const isActivationKey = (event: React.KeyboardEvent): boolean => {
  return event.key === 'Enter' || event.key === ' ';
};

/**
 * Creates a keyboard activation handler for radio components
 */
export const createKeyboardActivationHandler = (
  onActivate: (event: RadioActivationEvent) => void,
  disabled: boolean = false,
) => {
  return (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (isActivationKey(event)) {
      event.preventDefault();
      onActivate(event);
    }
  };
};

/**
 * Creates a unified activation handler that works with both mouse and keyboard events
 */
export const createUnifiedActivationHandler = (
  onActivate: (event: RadioActivationEvent) => void,
  disabled: boolean = false,
) => {
  return (event: RadioActivationEvent) => {
    if (disabled) return;
    event.preventDefault();
    onActivate(event);
  };
};
