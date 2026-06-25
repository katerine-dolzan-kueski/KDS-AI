/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Mock react/jsx-runtime for React 16 compatibility
vi.mock('react/jsx-runtime', () => ({
  jsx: React.createElement,
  jsxs: React.createElement,
  Fragment: React.Fragment,
}));

// Mock react-dom/client for React 16 compatibility
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
    unmount: vi.fn(),
  })),
}));

// Mock the specific import that's causing issues
vi.mock('@radix-ui/react-slot', () => ({
  Slot: ({ children, ...props }: any) => React.createElement('div', props, children),
  createSlot: () => {
    return ({ children, ...props }: any) => React.createElement('div', props, children);
  },
}));

// Mock userEvent for React 16 compatibility
const mockUserEventHelpers = {
  click: async (element: HTMLElement) => {
    // Trigger both mouse events
    element.focus();
    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    element.dispatchEvent(mouseDownEvent);
    element.dispatchEvent(mouseUpEvent);
    element.dispatchEvent(clickEvent);
  },
  type: async (element: HTMLElement, text: string) => {
    element.focus();

    // Handle special keys like {Enter}, {Space}, etc.
    let keyValue = text;
    let codeValue = text;

    if (text === '{Enter}') {
      keyValue = 'Enter';
      codeValue = 'Enter';
    } else if (text === '{Space}') {
      keyValue = ' ';
      codeValue = 'Space';
    } else if (text === '{Escape}') {
      keyValue = 'Escape';
      codeValue = 'Escape';
    } else if (text === ' ') {
      keyValue = ' ';
      codeValue = 'Space';
    }

    // For input elements, update the value property and trigger React updates
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      const input = element as HTMLInputElement | HTMLTextAreaElement;
      const currentValue = input.value || '';
      const newValue = currentValue + text;

      // Set the value property directly
      input.value = newValue;

      // Create input event that will trigger React's onChange handler
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set;

      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(input, newValue);
      }

      // Trigger input event - React listens to this for onChange
      const inputEvent = new Event('input', { bubbles: true, cancelable: true }) as any;
      inputEvent.simulated = true;
      inputEvent.target = input;
      input.dispatchEvent(inputEvent);

      // Also trigger change event for good measure
      const changeEvent = new Event('change', { bubbles: true, cancelable: true }) as any;
      changeEvent.target = input;
      input.dispatchEvent(changeEvent);
    }

    const events = [
      new KeyboardEvent('keydown', { bubbles: true, key: keyValue, code: codeValue }),
      new KeyboardEvent('keypress', { bubbles: true, key: keyValue, code: codeValue }),
      new KeyboardEvent('keyup', { bubbles: true, key: keyValue, code: codeValue }),
    ];
    events.forEach((event) => element.dispatchEvent(event));

    // For Enter/Space on buttons, also trigger click
    if ((keyValue === 'Enter' || keyValue === ' ') && element.tagName === 'BUTTON') {
      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
      element.dispatchEvent(clickEvent);
    }
  },
  keyboard: async (key: string) => {
    // Handle keyboard events on the document or window
    const target = document.activeElement || document.body;
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      key: key === '{Escape}' ? 'Escape' : key,
      code: key === '{Escape}' ? 'Escape' : key,
    });
    target.dispatchEvent(event);
  },
  tab: async (options?: { shift?: boolean }) => {
    // Simulate tab navigation - focus the next focusable element
    const focusableElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        'input, select, textarea, button, [tabindex]:not([tabindex="-1"])',
      ),
    );

    const currentIndex = focusableElements.findIndex((el) => el === document.activeElement);

    if (options?.shift) {
      // Shift+Tab: go backwards
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      focusableElements[prevIndex].focus();
    } else {
      // Tab: go forwards
      const nextIndex = currentIndex + 1;
      if (nextIndex < focusableElements.length) {
        focusableElements[nextIndex].focus();
      } else if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  },
  pointer: async (options: { target: HTMLElement; keys?: string }) => {
    // Simulate pointer events (mousedown, mouseup, click)
    const { target } = options;

    // Focus the target first
    target.focus();

    // Simulate pointer down
    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    target.dispatchEvent(mouseDownEvent);

    // Use PointerEvent for pointer events (more accurate simulation)
    const pointerEventInit: PointerEventInit = {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      buttons: 1,
    };

    const pointerDownEvent = new PointerEvent('pointerdown', pointerEventInit);
    target.dispatchEvent(pointerDownEvent);

    // Simulate pointer move for drag events
    const pointerMoveEvent = new PointerEvent('pointermove', { ...pointerEventInit, buttons: 1 });
    target.dispatchEvent(pointerMoveEvent);

    // Simulate pointer up and click
    const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const pointerUpEvent = new PointerEvent('pointerup', { ...pointerEventInit, buttons: 0 });

    target.dispatchEvent(mouseUpEvent);
    target.dispatchEvent(pointerUpEvent);
    target.dispatchEvent(clickEvent);
  },
};

vi.mock('@testing-library/user-event', () => ({
  default: {
    ...mockUserEventHelpers,
    setup: () => mockUserEventHelpers,
  },
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {
    // Mock constructor
  }
  // eslint-disable-next-line class-methods-use-this
  disconnect() {
    // Mock disconnect
  }
  // eslint-disable-next-line class-methods-use-this
  observe() {
    // Mock observe
  }
  // eslint-disable-next-line class-methods-use-this
  unobserve() {
    // Mock unobserve
  }
} as any;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {
    // Mock constructor
  }
  // eslint-disable-next-line class-methods-use-this
  disconnect() {
    // Mock disconnect
  }
  // eslint-disable-next-line class-methods-use-this
  observe() {
    // Mock observe
  }
  // eslint-disable-next-line class-methods-use-this
  unobserve() {
    // Mock unobserve
  }
} as any;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
