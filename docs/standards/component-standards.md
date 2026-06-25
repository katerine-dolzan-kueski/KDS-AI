# Component Standards

This document outlines the standards and guidelines for creating components in the Kueski Design System.

## 🎯 Core Principles

### 1. Consistency

All components must follow the same patterns, naming conventions, and structure.

### 2. Accessibility

Every component must be accessible by default, following WCAG 2.1 AA guidelines.

### 3. Type Safety

All components must be fully typed with TypeScript for better developer experience.

### 4. Performance

Components should be optimized for performance with minimal bundle impact.

### 5. Maintainability

Code should be clean, well-documented, and easy to maintain.

## 📝 Naming Conventions

### File Naming

```text
ComponentName.tsx          # Main component file
ComponentName.types.ts     # Type definitions
ComponentName.styles.ts    # Style definitions with CVA
ComponentName.test.tsx     # Unit tests
ComponentName.stories.tsx  # Storybook stories
ComponentName.integration.test.tsx # Integration tests
index.ts                   # Exports
```

### Component Naming

- **PascalCase** for component names and directories: `Button`, `Input`, `Modal`, `Button/`, `RadioGroup/`
- **camelCase** for props: `$isLoading`, `$fullWidth`, `$ariaLabel`
- **kebab-case** for CSS classes: `button-primary`, `input-disabled`

### Prop Naming

All custom component props must use the `$` prefix to avoid collisions with native HTML attributes and maintain consistency across all components.

> For detailed information about the `$` prefix convention, benefits, and examples, see the [Component Creation Guide](../components/creation-guide.md).

## 🏗️ Component Structure

### Required Files

Every component must have these files:

1. **`ComponentName.tsx`** - Main component implementation
2. **`ComponentName.types.ts`** - TypeScript type definitions
3. **`ComponentName.styles.ts`** - Style definitions with CVA
4. **`ComponentName.test.tsx`** - Unit tests
5. **`ComponentName.stories.tsx`** - Storybook stories
6. **`index.ts`** - Exports

### Optional Files

- **`ComponentName.integration.test.tsx`** - Integration tests
- **`ComponentName.utils.tsx`** - Component utilities
- **`ComponentName.utils.test.tsx`** - Utility tests

### Directory Structure

```text
components/
├── atoms/
│   └── button/
│       ├── Button.tsx
│       ├── Button.types.ts
│       ├── Button.styles.ts
│       ├── Button.test.tsx
│       ├── Button.stories.tsx
│       ├── Button.integration.test.tsx
│       └── index.ts
├── molecules/
├── organisms/
└── patterns/
```

## 🎨 Styling Standards

### Class Variance Authority (CVA)

All components must use Class Variance Authority (CVA) for type-safe variant management.

```typescript
import { cva } from 'class-variance-authority';

export const componentVariants = cva('base-classes', {
  variants: {
    $variant: {
      /* variant styles */
    },
    $size: {
      /* size styles */
    },
  },
  defaultVariants: {
    $variant: 'default',
    $size: 'md',
  },
});
```

> For detailed information about CVA patterns, compound variants, and advanced usage, see the [Radix & Shadcn documentation](../architecture/radix-shadcn.md#styling-with-cva).

### Design Token Usage

All components must use design tokens instead of hardcoded values for colors, spacing, typography, and other design properties. This ensures consistency across the design system.

> For the complete list of available design tokens and their usage, see the [Design Tokens documentation](../tokens/design-tokens.md).

### Responsive Design

Use Tailwind CSS responsive prefixes:

```typescript
'typo-body-2 md:typo-body-1 lg:typo-headline-3';
'p-x4 md:p-x6 lg:p-x8';
'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
```

## 🎯 Component Composition Patterns

### asChild Pattern

All components that need flexible composition should support the `asChild` pattern using Radix UI Slot. This allows components to render as different HTML elements while maintaining their styling and behavior.

```typescript
import { Slot } from '@radix-ui/react-slot';

interface ComponentProps {
  $asChild?: boolean;
  // ... other props
}

export const Component = ({ $asChild = false, ...props }: ComponentProps) => {
  const Comp = $asChild ? Slot : 'div';

  return <Comp {...props}>{children}</Comp>;
};
```

> For detailed information about the `asChild` pattern, implementation guidelines, and use cases, see the [Radix & Shadcn documentation](../architecture/radix-shadcn.md).

## 🔧 TypeScript Standards

### Interface Definition

```typescript
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Custom CSS class name */
  $className?: string;
  /** Button size variant */
  $size?: ButtonSize;
  /** Show loading state */
  $loading?: boolean;
  /** Loading text to display */
  $loadingText?: string;
  /** Make button full width */
  $fullWidth?: boolean;
}
```

### Type Exports

```typescript
export type ButtonVariant = 'primary' | 'secondary' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonMode = 'default' | 'icon' | 'alternative';
```

### Generic Types

Use generic types for polymorphic components:

```typescript
interface ButtonProps<T extends ElementType = 'button'> {
  $as?: T;
  $asChild?: boolean;
}
```

## ♿ Accessibility Standards

### ARIA Attributes

```typescript
interface ButtonProps {
  /** Accessibility label for screen readers */
  $ariaLabel?: string;
  /** Whether the button is busy/loading */
  $ariaBusy?: boolean;
  /** Describes the button's purpose */
  $ariaDescribedBy?: string;
}
```

### Keyboard Navigation

All interactive components must support keyboard navigation:

```typescript
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};
```

### Focus Management

```typescript
const buttonRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (isOpen && buttonRef.current) {
    buttonRef.current.focus();
  }
}, [isOpen]);
```

### Screen Reader Support

```typescript
<button
  aria-label={$ariaLabel || children}
  aria-busy={$loading}
  aria-describedby={$ariaDescribedBy}
>
  {children}
</button>
```

## 🧪 Testing Standards

### Unit Tests

Every component must have comprehensive unit tests:

```typescript
describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Integration Tests

Test component interactions:

```typescript
describe('Button Integration', () => {
  it('should work with form submission', () => {
    const handleSubmit = vi.fn();
    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
```

### Accessibility Tests

```typescript
describe('Button Accessibility', () => {
  it('should be focusable', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  it('should support keyboard navigation', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    // Test keyboard interaction
  });
});
```

## 📚 Documentation Standards

### JSDoc Comments

````typescript
/**
 * Button component for user interactions
 *
 * @example
 * ```tsx
 * <Button $variant="primary" $size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({ ... }) => {
  // Component implementation
};
````

### Prop Documentation

```typescript
interface ButtonProps {
  /** Custom CSS class name */
  $className?: string;
  /** Button size variant */
  $size?: ButtonSize;
  /** Show loading state with spinner */
  $loading?: boolean;
  /** Loading text to display when loading is true */
  $loadingText?: string;
}
```

### Storybook Stories

```typescript
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
```

## 🚀 Performance Standards

### Bundle Size

- Keep component bundle size minimal
- Use tree shaking friendly exports
- Avoid unnecessary dependencies

### Rendering Performance

```typescript
// Use React.memo for expensive components
export const Button = React.memo<ButtonProps>(({ ... }) => {
  // Component implementation
});

// Use useCallback for event handlers
const handleClick = useCallback((event: React.MouseEvent) => {
  onClick?.(event);
}, [onClick]);
```

### Lazy Loading

```typescript
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Use Suspense for loading states
<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

## 🔄 State Management

### Local State

```typescript
const [isOpen, setIsOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
```

### Controlled vs Uncontrolled

```typescript
interface InputProps {
  /** Controlled value */
  value?: string;
  /** Default value for uncontrolled */
  defaultValue?: string;
  /** Change handler */
  onChange?: (value: string) => void;
}
```

### State Updates

```typescript
// Use functional updates for state that depends on previous state
setCount((prevCount) => prevCount + 1);

// Use useCallback for state setters passed as props
const handleToggle = useCallback(() => {
  setIsOpen((prev) => !prev);
}, []);
```

## 📦 Export Standards

### Main Exports

```typescript
// Component export
export { Button } from './Button';

// Type exports
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';

// Style exports
export { buttonVariants } from './Button.styles';
```

### Utility Exports

```typescript
// Utility exports
export { useAccessibility } from '../../../hooks/useAccessibility';
export { useKeyboardEvent } from '../../../hooks/useKeyboardEvent';
```

### Re-exports

```typescript
// Re-export from main index
export { Button } from './components/atoms/button';
export type { ButtonProps } from './components/atoms/button';
```

## 🎯 Quality Checklist

Before submitting a component, ensure:

- [ ] All required files are present
- [ ] TypeScript types are complete and accurate
- [ ] Component follows naming conventions
- [ ] All props use `$` prefix
- [ ] CVA is used for variant management
- [ ] Design tokens are used instead of hardcoded values
- [ ] Accessibility requirements are met
- [ ] Unit tests cover all functionality
- [ ] Integration tests cover complex interactions
- [ ] Storybook stories demonstrate all variants
- [ ] JSDoc comments are present
- [ ] Performance is optimized
- [ ] Bundle size is minimal
- [ ] Code follows linting rules
- [ ] All tests pass

## 📚 Resources

### General Development

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)

### Design System Documentation

- [Radix & Shadcn Architecture](../architecture/radix-shadcn.md) - Component composition patterns, CVA styling, and asChild implementation
