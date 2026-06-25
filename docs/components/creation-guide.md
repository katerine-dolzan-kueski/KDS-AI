# Component Creation Guide

This guide will walk you through creating new components for the Kueski Design System.

## 📁 Component Structure

Each component follows a standardized structure:

```text
components/
├── atoms/                    # Atomic components (Button, Input, etc.)
│   └── button/
│       ├── Button.tsx        # Main component
│       ├── Button.types.ts   # Type definitions
│       ├── Button.styles.ts  # Styles with CVA
│       ├── Button.test.tsx   # Unit tests
│       ├── Button.stories.tsx # Storybook stories
│       ├── Button.integration.test.tsx # Integration tests
│       └── index.ts          # Component exports
├── molecules/                # Molecular components
├── organisms/                # Organism components
└── patterns/                 # UI patterns
```

## 🎯 Component Categories

### Atoms

Basic building blocks that can't be broken down further:

- Button, Input, Icon, Badge, Chip
- Simple, single-purpose components
- No complex state management

### Molecules

Simple combinations of atoms:

- SearchBox, FormField, Card, Alert
- Composed of 2-3 atoms
- May have simple state

### Organisms

Complex UI components:

- Header, Sidebar, Modal, Table
- Composed of multiple molecules and atoms
- May have complex state and logic

### Patterns

Reusable UI patterns and layouts:

- PageLayout, FormLayout, GridLayout
- Higher-level compositions
- May include business logic

## 🚀 Step-by-Step Component Creation

### Step 1: Define Types (`Component.types.ts`)

```typescript
import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button.styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Custom CSS class name */
  $className?: string;
  /** Button size variant */
  $size?: ButtonSize;
  /** Show loading state with spinner */
  $loading?: boolean;
  /** Loading text to display when loading is true */
  $loadingText?: string;
  /** Make the button full width */
  $fullWidth?: boolean;
  /** Accessibility label for screen readers */
  $ariaLabel?: string;
  /** Render as a different element when true */
  $asChild?: boolean;
  /** Element type to render when asChild is true */
  $as?: ElementType;
  /** Button visual variant */
  $loadingIcon?: React.ReactNode;
  /** Type icon variant */
  $mode?: ButtonMode;
}

export type ButtonVariant =
  | 'primary'
  | 'warning'
  | 'destructive'
  | 'success'
  | 'upsell'
  | 'secondary'
  | 'ghost-primary'
  | 'ghost-destructive'
  | 'translucent'
  | 'opaque-shadow'
  | 'opaque-outline';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'default';
export type ButtonMode = 'default' | 'icon' | 'alternative' | null;
```

**Guidelines for Component Props:**

All custom component props must use the `$` prefix to avoid collisions with native HTML element props:

```typescript
interface ButtonProps {
  $className?: string; // ✅ Correct - $ prefix
  $loading?: boolean; // ✅ Correct - $ prefix
  $loadingText?: string; // ✅ Correct - $ prefix
  $tooltip?: string; // ✅ Correct - $ prefix
  $leftIcon?: React.ReactNode; // ✅ Correct - $ prefix
  $rightIcon?: React.ReactNode; // ✅ Correct - $ prefix
  $fullWidth?: boolean; // ✅ Correct - $ prefix
  $ariaLabel?: string; // ✅ Correct - $ prefix

  // ❌ Incorrect - no prefix (can collide with native props)
  loading?: boolean;
  loadingText?: string;
  tooltip?: string;
}
```

**Benefits of the `$` prefix:**

- **Avoids collisions**: Native props like `title`, `disabled`, `onClick` don't interfere
- **Clarity**: Easily distinguish between component props and native props
- **Type Safety**: TypeScript can better validate component-specific props
- **Consistency**: Uniform pattern across all design system components

### Step 2: Define Styles (`Component.styles.ts`)

```typescript
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  '...', // base component styles
  {
    variants: {
      $variant: {
        foo: '...', // foo variant styles
        bar: '...', // bar variant styles
      },
      $size: {
        sm: '...', // sm size styles
        md: '...', // md size styles
        lg: '...', // lg size styles
      },
    },
    defaultVariants: {
      $variant: 'foo',
    },
  }
;)
```

### Step 3: Create the Component (`Component.tsx`)

```typescript
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';
import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';
import { useAccessibility } from '../../../hooks/useAccessibility';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      $className,
      $variant,
      $size,
      $mode,
      $loading = false,
      $loadingText,
      $fullWidth = false,
      $asChild = false,
      $as,
      $loadingIcon,
      children,
      disabled,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Use unified accessibility hook for keyboard and aria handling
    const { eventHandlers, accessibilityProps } = useAccessibility<HTMLButtonElement>({
      action: () => {
        if (ref && typeof ref !== 'function') {
          // Simulate a click when Enter/Space is pressed
          ref.current?.click();
        }
      },
      onKeyDown,
      'aria-label': props['aria-label'],
      loading: $loading,
      loadingText: $loadingText,
      children: children,
      busy: $loading,
    });

    // Handle click events (mouse and keyboard activation)
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
      },
      [onClick],
    );

    // Prepare common props
    const commonProps = {
      className: cn(buttonVariants({ $variant, $size, $mode, $className }), $fullWidth && '!w-full'),
      ref,
      disabled: $loading || disabled,
      onClick: handleClick,
      type: 'button' as const,
      ...eventHandlers,
      ...accessibilityProps,
      ...props,
    };

    // Render as child (polymorphic)
    if ($asChild) {
      return <Slot {...commonProps}>{children}</Slot>;
    }

    // Render as specific element
    if ($as) {
      const Element = $as as React.ElementType;
      return <Element {...commonProps}>{children}</Element>;
    }

    // Render loading state
    if ($loading) {
      return (
        <button {...commonProps}>
          {$loadingIcon || <SpinnerIcon className="animate-spin" />}
          {$loadingText && <span>{$loadingText}</span>}
        </button>
      );
    }

    // Render normal button
    return <button {...commonProps}>{children}</button>;
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
```

### Step 4: Create Tests (`Component.test.tsx`)

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

// Mock the accessibility hooks
vi.mock('../../../hooks/useAccessibility', () => ({
  useAccessibility: vi.fn((options) => {
    const ariaLabel = (() => {
      if (options.loading && options.loadingText) return options.loadingText;
      if (options['aria-label']) return options['aria-label'];
      if (typeof options.children === 'string') return options.children;
      return undefined;
    })();

    const ariaBusy = options.loading || options.busy;

    return {
      eventHandlers: {
        onKeyDown: vi.fn((event) => {
          if (options.onKeyDown) {
            options.onKeyDown(event);
          }
        }),
      },
      accessibilityProps: {
        'aria-label': ariaLabel,
        'aria-busy': ariaBusy || undefined,
      },
    };
  }),
}));

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

  it('should render with custom size', () => {
    render(<Button {...defaultProps} $size="lg" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-12');
  });

  it('should render loading state', () => {
    render(<Button {...defaultProps} $loading={true} $loadingText="Loading..." />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveTextContent('Loading...');
  });

  it('should be disabled when loading', () => {
    render(<Button {...defaultProps} $loading={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should render as child when $asChild is true', () => {
    render(
      <Button $asChild={true}>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link Button');
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button {...defaultProps} onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle keyboard events', () => {
    const handleKeyDown = vi.fn();
    render(<Button {...defaultProps} onKeyDown={handleKeyDown} />);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should render with full width when $fullWidth is true', () => {
    render(<Button {...defaultProps} $fullWidth={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('!w-full');
  });

  it('should render with custom className', () => {
    render(<Button {...defaultProps} $className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
});
```

### Step 5: Create Stories (`Component.stories.tsx`)

```typescript
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
      options: [
        'primary',
        'warning',
        'destructive',
        'success',
        'upsell',
        'secondary',
        'ghost-primary',
        'ghost-destructive',
        'translucent',
        'opaque-shadow',
        'opaque-outline',
      ],
    },
    $size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'default'],
    },
    $mode: {
      control: 'select',
      options: ['default', 'icon', 'alternative'],
    },
    $loading: {
      control: 'boolean',
    },
    $fullWidth: {
      control: 'boolean',
    },
    $asChild: {
      control: 'boolean',
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

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    $variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    $variant: 'destructive',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    $loading: true,
    $loadingText: 'Loading...',
  },
};

export const Icon: Story = {
  args: {
    children: '➕',
    $mode: 'icon',
    $variant: 'primary',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    $fullWidth: true,
  },
};

export const AsChild: Story = {
  args: {
    $asChild: true,
    children: <a href="/test">Link Button</a>,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button $variant="primary">Primary</Button>
      <Button $variant="secondary">Secondary</Button>
      <Button $variant="destructive">Destructive</Button>
      <Button $variant="warning">Warning</Button>
      <Button $variant="success">Success</Button>
      <Button $variant="upsell">Upsell</Button>
      <Button $variant="ghost-primary">Ghost Primary</Button>
      <Button $variant="ghost-destructive">Ghost Destructive</Button>
      <Button $variant="translucent">Translucent</Button>
      <Button $variant="opaque-shadow">Opaque Shadow</Button>
      <Button $variant="opaque-outline">Opaque Outline</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button $size="sm">Small</Button>
      <Button $size="md">Medium</Button>
      <Button $size="lg">Large</Button>
    </div>
  ),
};
```

### Step 6: Create Integration Tests (`Component.integration.test.tsx`)

```typescript
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

### Step 7: Create Index File (`index.ts`)

```typescript
// Main component export
export { Button } from './Button';

// Type exports
export type { ButtonProps, ButtonVariant, ButtonSize, ButtonMode } from './Button.types';

// Style exports
export { buttonVariants } from './Button.styles';

// Utility exports (useful for extending or composing)
export { useAccessibility } from '../../../hooks/useAccessibility';
export { useKeyboardEvent } from '../../../hooks/useKeyboardEvent';
```

## 🎯 Component Standards

### Naming Conventions

- **Component files**: PascalCase (`Button.tsx`)
- **Type files**: PascalCase with `.types.ts` suffix (`Button.types.ts`)
- **Style files**: PascalCase with `.styles.ts` suffix (`Button.styles.ts`)
- **Test files**: PascalCase with `.test.tsx` suffix (`Button.test.tsx`)
- **Story files**: PascalCase with `.stories.tsx` suffix (`Button.stories.tsx`)

### File Organization

- One component per directory
- All related files in the same directory
- Clear separation of concerns
- Consistent file naming

### Type Safety

- All props must be typed
- Use `$` prefix for custom props
- Extend appropriate HTML element types
- Use `VariantProps` for CVA variants

### Accessibility

- Use semantic HTML elements
- Implement keyboard navigation
- Provide proper ARIA attributes
- Test with screen readers

### Testing

- Unit tests for all functionality
- Integration tests for complex interactions
- Storybook stories for visual testing
- Accessibility testing

## 📚 Next Steps

After creating your component:

1. [Read Development Standards](../standards/)
2. [Learn about Design Tokens](../tokens/)
3. [Set up Build Process](../build/)
4. [Test in Other Projects](../usage/)

## 🎯 Component Composition

For advanced component composition patterns, including the `asChild` pattern for flexible rendering, see the [Component Standards](../standards/component-standards.md#component-composition-patterns) documentation.
