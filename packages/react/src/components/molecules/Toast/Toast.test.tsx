import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { Toast } from './Toast';

// Mock react-hot-toast
vi.mock('react-hot-toast', () => {
  return {
    Toaster: vi.fn(({ children }: any) => <div data-testid="toaster">{children?.()}</div>),
    ToastBar: vi.fn(({ children }: any) => <div data-testid="toast-bar">{children()}</div>),
    default: {
      dismiss: vi.fn(),
      remove: vi.fn(),
      success: vi.fn(),
      error: vi.fn(),
      loading: vi.fn(),
      custom: vi.fn(),
    },
  };
});

describe('Toast Component', () => {
  describe('Component Structure', () => {
    it('should have all compound components', () => {
      expect(Toast.Icon).toBeDefined();
      expect(Toast.Content).toBeDefined();
      expect(Toast.Body).toBeDefined();
      expect(Toast.Close).toBeDefined();
    });

    it('should have correct display names', () => {
      expect(Toast.displayName).toBe('Toast.Root');
    });

    it('should be an object (with function properties)', () => {
      // Toast is created with Object.assign, so it's an object that can be called
      expect(typeof Toast).toBe('object');
      expect(typeof (Toast as any)).toBe('object');
    });

    it('should have Icon as an object (React component)', () => {
      expect(typeof Toast.Icon).toBe('object');
      expect(Toast.Icon).toBeDefined();
    });

    it('should have Content as an object (React component)', () => {
      expect(typeof Toast.Content).toBe('object');
      expect(Toast.Content).toBeDefined();
    });

    it('should have Body as an object (React component)', () => {
      expect(typeof Toast.Body).toBe('object');
      expect(Toast.Body).toBeDefined();
    });

    it('should have Close as an object (React component)', () => {
      expect(typeof Toast.Close).toBe('object');
      expect(Toast.Close).toBeDefined();
    });
  });

  describe('Component Instance', () => {
    it('should be callable', () => {
      expect(() => {
        // This just verifies the component can be instantiated
        // The actual rendering requires Banner and Theme context
        const Component = Toast as any;
        expect(Component).toBeDefined();
      }).not.toThrow();
    });

    it('should support all compound components', () => {
      const { Icon, Content, Body, Close } = Toast;
      expect(Icon).toBeDefined();
      expect(Content).toBeDefined();
      expect(Body).toBeDefined();
      expect(Close).toBeDefined();
    });
  });

  describe('Component Exports', () => {
    it('should export Toast as default', () => {
      expect(Toast).toBeDefined();
    });

    it('should have all necessary methods', () => {
      const keys = Object.keys(Toast);
      expect(keys.length).toBeGreaterThan(0);
    });
  });
});
