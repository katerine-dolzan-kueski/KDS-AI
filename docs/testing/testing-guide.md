# Testing Guide

This document outlines the testing strategy and guidelines for the Kueski Design System.

## 🧪 Testing Philosophy

Our testing approach follows these principles:

- **Comprehensive Coverage**: All components must have unit and integration tests
- **Accessibility First**: Every component must be tested for accessibility compliance
- **Visual Testing**: Components must be tested visually in Storybook
- **Performance Testing**: Critical components must have performance benchmarks
- **User-Centric**: Tests should reflect real user interactions

## 📊 Testing Pyramid

### Unit Tests (70%)

- Component behavior and logic
- Props handling and state management
- Utility functions and hooks
- Type safety and error handling

### Integration Tests (20%)

- Component interactions
- Form submissions
- Event handling
- API integrations

### E2E Tests (10%)

- Complete user workflows
- Cross-browser compatibility
- Performance under load

## 🔧 Testing Tools

### Primary Tools

- **Vitest**: Fast unit testing framework
- **Testing Library**: Component testing utilities
- **Storybook**: Visual testing and documentation
- **Jest DOM**: Custom matchers for DOM testing

### Accessibility Testing

- **jest-axe**: Automated accessibility testing
- **@testing-library/jest-dom**: Accessibility matchers
- **Manual Testing**: Screen reader testing

### Visual Testing

- **Storybook**: Component stories and visual regression
- **Chromatic**: Visual regression testing (optional)
- **Screenshot Testing**: Automated visual comparisons

## 🚀 Getting Started

### Setup

```bash
# Install testing dependencies
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Test Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.d.ts', '**/*.stories.*', '**/*.test.*'],
    },
  },
});
```

### Test Setup

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';
import '@kueski-dev/kds/react/test/setup';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
```

## 📝 Writing Tests

### Component Unit Tests

```typescript
// Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  const defaultProps = {
    children: 'Test Button',
  };

  it('should render with default props', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('should render with custom variant', () => {
    render(<Button {...defaultProps} $variant="destructive" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-background-destructive');
  });

  it('should handle click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button {...defaultProps} onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when loading', () => {
    render(<Button {...defaultProps} $loading={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should show loading text when loading', () => {
    render(
      <Button {...defaultProps} $loading={true} $loadingText="Loading...">
        Submit
      </Button>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
```

### Accessibility Tests

```typescript
// Button.accessibility.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Test Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should be focusable', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  it('should support keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);

    const button = screen.getByRole('button');
    button.focus();
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
  });

  it('should have proper ARIA attributes', () => {
    render(
      <Button $ariaLabel="Custom label" $loading={true}>
        Test Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });
});
```

### Integration Tests

```typescript
// Button.integration.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Integration', () => {
  it('should work with form submission', () => {
    const handleSubmit = vi.fn();
    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should work with keyboard navigation', () => {
    render(
      <div>
        <Button>First Button</Button>
        <Button>Second Button</Button>
      </div>
    );

    const firstButton = screen.getByText('First Button');
    const secondButton = screen.getByText('Second Button');

    firstButton.focus();
    expect(firstButton).toHaveFocus();

    fireEvent.keyDown(firstButton, { key: 'Tab' });
    expect(secondButton).toHaveFocus();
  });

  it('should work with loading state transitions', async () => {
    const { rerender } = render(<Button>Normal</Button>);

    expect(screen.getByText('Normal')).toBeInTheDocument();

    rerender(<Button $loading={true} $loadingText="Loading...">Normal</Button>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Hook Tests

```typescript
// useAccessibility.test.tsx
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAccessibility } from './useAccessibility';

describe('useAccessibility', () => {
  it('should return event handlers and accessibility props', () => {
    const { result } = renderHook(() =>
      useAccessibility({
        loading: false,
        'aria-label': 'Test component',
      }),
    );

    expect(result.current.eventHandlers).toBeDefined();
    expect(result.current.accessibilityProps).toBeDefined();
    expect(result.current.eventHandlers.onKeyDown).toBeInstanceOf(Function);
  });

  it('should handle loading state correctly', () => {
    const { result } = renderHook(() =>
      useAccessibility({
        loading: true,
        loadingText: 'Loading...',
      }),
    );

    expect(result.current.accessibilityProps['aria-busy']).toBe(true);
  });

  it('should call onKeyDown when provided', () => {
    const onKeyDown = vi.fn();
    const { result } = renderHook(() =>
      useAccessibility({
        onKeyDown,
      }),
    );

    act(() => {
      result.current.eventHandlers.onKeyDown({
        key: 'Enter',
        preventDefault: vi.fn(),
      } as any);
    });

    expect(onKeyDown).toHaveBeenCalled();
  });
});
```

## 🎨 Visual Testing

### Storybook Stories

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    $size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    $variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    $loading: true,
    $loadingText: 'Loading...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button $variant="primary">Primary</Button>
      <Button $variant="secondary">Secondary</Button>
      <Button $variant="destructive">Destructive</Button>
    </div>
  ),
};
```

### Visual Regression Testing

```typescript
// Button.visual.test.tsx
import { describe, it } from 'vitest';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Button.stories';

const { Primary, Secondary, Destructive } = composeStories(stories);

describe('Button Visual Tests', () => {
  it('should render primary button correctly', () => {
    const { container } = render(<Primary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render secondary button correctly', () => {
    const { container } = render(<Secondary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render destructive button correctly', () => {
    const { container } = render(<Destructive />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## 📊 Test Coverage

### Coverage Targets

- **Statements**: 90%+
- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 90%+

### Coverage Commands

```bash
# Generate coverage report
pnpm test:coverage

# View coverage report
open coverage/index.html

# Coverage for specific package
pnpm test:coverage --filter=@kueski-dev/kds/react
```

### Coverage Configuration

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.stories.*',
        '**/*.test.*',
        '**/index.ts',
      ],
      thresholds: {
        statements: 90,
        branches: 85,
        functions: 90,
        lines: 90,
      },
    },
  },
});
```

## 🚀 Performance Testing

### Component Performance

```typescript
// Button.performance.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Performance', () => {
  it('should render quickly', () => {
    const start = performance.now();
    render(<Button>Test Button</Button>);
    const end = performance.now();

    expect(end - start).toBeLessThan(10); // Should render in < 10ms
  });

  it('should handle many re-renders efficiently', () => {
    const { rerender } = render(<Button>Test Button</Button>);

    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      rerender(<Button $loading={i % 2 === 0}>Test Button</Button>);
    }
    const end = performance.now();

    expect(end - start).toBeLessThan(100); // Should handle 1000 re-renders in < 100ms
  });
});
```

### Bundle Size Testing

```typescript
// bundle-size.test.ts
import { describe, it, expect } from 'vitest';
import { getBundleSize } from './utils/bundle-size';

describe('Bundle Size', () => {
  it('should have reasonable bundle size', async () => {
    const size = await getBundleSize('@kueski-dev/kds/react');
    expect(size).toBeLessThan(500 * 1024); // < 500KB
  });

  it('should have reasonable gzipped size', async () => {
    const size = await getBundleSize('@kueski-dev/kds/react', { gzip: true });
    expect(size).toBeLessThan(150 * 1024); // < 150KB gzipped
  });
});
```

## 🔍 Debugging Tests

### Debug Commands

```bash
# Run specific test file
pnpm test Button.test.tsx

# Run tests with debug output
pnpm test -- --reporter=verbose

# Run tests in debug mode
pnpm test -- --inspect-brk

# Run tests with coverage for specific file
pnpm test:coverage Button.test.tsx
```

### Common Debugging Techniques

```typescript
// Debug component state
it('should debug component state', () => {
  const { container } = render(<Button $loading={true}>Test</Button>);
  console.log(container.innerHTML); // Debug HTML output
  screen.debug(); // Debug current screen state
});

// Debug accessibility
it('should debug accessibility', async () => {
  const { container } = render(<Button>Test</Button>);
  const results = await axe(container);
  console.log(results); // Debug accessibility violations
});
```

## 📚 Testing Best Practices

### 1. Test Behavior, Not Implementation

```typescript
// ❌ Bad - testing implementation
it('should have correct className', () => {
  render(<Button $variant="primary">Test</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('bg-background-brand');
});

// ✅ Good - testing behavior
it('should render primary variant', () => {
  render(<Button $variant="primary">Test</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
```

### 2. Use Semantic Queries

```typescript
// ❌ Bad - using test-id
screen.getByTestId('button');

// ✅ Good - using semantic queries
screen.getByRole('button');
screen.getByLabelText('Submit form');
screen.getByText('Click me');
```

### 3. Test Accessibility

```typescript
// Always test accessibility
it('should be accessible', async () => {
  const { container } = render(<Button>Test</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 4. Use User Events

```typescript
// Use user-event for realistic interactions
import userEvent from '@testing-library/user-event';

it('should handle click', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Test</Button>);

  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

## 🔗 Resources

- [Testing Library Documentation](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Accessibility Testing](https://www.npmjs.com/package/jest-axe)
- [User Event](https://testing-library.com/docs/user-event/intro)
- [Storybook Testing](https://storybook.js.org/docs/react/writing-tests/introduction)
