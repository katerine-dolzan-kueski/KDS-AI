# Radix UI & shadcn/ui Integration

This document explains how the Kueski Design System integrates with Radix UI primitives and shadcn/ui patterns.

## 🎯 Integration Strategy

The design system uses a **hybrid approach** that combines:

- **Radix UI Primitives**: For complex, accessible components
- **shadcn/ui Patterns**: For component composition and styling
- **Custom Components**: For Kueski-specific patterns and simple components

## 🔧 Radix UI Integration

### Available Primitives

The design system currently uses these Radix UI primitives:

```typescript
// Dialog/Modal components
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

// Dropdown/Menu components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@radix-ui/react-dropdown-menu';

// Select components
import { Select, SelectTrigger, SelectContent, SelectItem } from '@radix-ui/react-select';

// Tooltip components
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

// Popover components
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';

// Slot for polymorphic components
import { Slot } from '@radix-ui/react-slot';
```

### Usage Patterns

#### Pattern 1: Simple Radix UI Integration

```typescript
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '@kueski-dev/kds/react';

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button $variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Modal Title</DialogTitle>
        {/* Modal content */}
      </DialogContent>
    </Dialog>
  );
};
```

#### Pattern 2: Custom Styled Radix Components

```typescript
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { cn } from '@kueski-dev/kds/react';

export const StyledModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button $variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className={cn(
        'bg-background-surface',
        'border-border-subtle',
        'rounded-radius-lg',
        'shadow-elevation-high'
      )}>
        <DialogTitle className="text-text-primary text-heading-md">
          Modal Title
        </DialogTitle>
        {/* Modal content */}
      </DialogContent>
    </Dialog>
  );
};
```

## 🎨 shadcn/ui Patterns

### Component Composition

The design system follows shadcn/ui patterns for component composition:

```typescript
// Using Slot for polymorphic components
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@kueski-dev/kds/react';

interface ButtonProps {
  $asChild?: boolean;
  $className?: string;
  children: React.ReactNode;
}

export const Button = ({ $asChild = false, $className, children, ...props }: ButtonProps) => {
  const Comp = $asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center',
        'rounded-radius-md px-4 py-2',
        'transition-colors',
        $className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
```

### Variant Management with CVA

Following shadcn/ui patterns, we use Class Variance Authority (CVA) for variant management:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@kueski-dev/kds/react';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-radius-md font-medium transition-colors',
  {
    variants: {
      $variant: {
        primary: 'bg-background-brand text-text-white hover:bg-background-brand-hover',
        secondary: 'bg-background-secondary text-text-primary hover:bg-background-secondary-hover',
        destructive: 'bg-background-destructive text-text-white hover:bg-background-destructive-hover',
      },
      $size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-8 text-lg',
      },
    },
    defaultVariants: {
      $variant: 'primary',
      $size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  $asChild?: boolean;
}

export const Button = ({ $className, $variant, $size, $asChild = false, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ $variant, $size, $className }))}
      {...props}
    />
  );
};
```

## 🔄 Hybrid Component Patterns

### Custom Hooks + Radix UI

For components that need both custom logic and Radix UI primitives:

```typescript
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';
import { useAccessibility } from '@kueski-dev/kds/react/hooks';
import { Button } from '@kueski-dev/kds/react';

export const AccessibleModal = () => {
  const { eventHandlers, accessibilityProps } = useAccessibility<HTMLDivElement>({
    // Custom accessibility logic
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button $variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent {...eventHandlers} {...accessibilityProps}>
        {/* Modal content with custom accessibility */}
      </DialogContent>
    </Dialog>
  );
};
```

### Styled Radix Components

Creating styled versions of Radix components:

```typescript
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { cn } from '@kueski-dev/kds/react';

const StyledDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ className, children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    className={cn(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background-surface p-6 shadow-elevation-high duration-200 sm:rounded-radius-lg',
      className
    )}
    {...props}
  >
    {children}
  </DialogContent>
));

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button $variant="primary">Open Modal</Button>
      </DialogTrigger>
      <StyledDialogContent>
        <DialogTitle>Modal Title</DialogTitle>
        {/* Modal content */}
      </StyledDialogContent>
    </Dialog>
  );
};
```

## 📦 Package Dependencies

### Required Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

## 🎯 Best Practices

### 1. Always Use `asChild` for Triggers

```typescript
// ✅ Correct
<DialogTrigger asChild>
  <Button $variant="primary">Open</Button>
</DialogTrigger>

// ❌ Incorrect
<DialogTrigger>
  <Button $variant="primary">Open</Button>
</DialogTrigger>
```

### 2. Compose with Custom Components

```typescript
// ✅ Correct - Use our Button component
<DialogTrigger asChild>
  <Button $variant="primary" $loading={isLoading}>
    {isLoading ? 'Loading...' : 'Open Modal'}
  </Button>
</DialogTrigger>
```

### 3. Style with Design Tokens

```typescript
// ✅ Correct - Use design tokens
<DialogContent className={cn(
  'bg-background-surface',
  'border-border-subtle',
  'rounded-radius-lg',
  'shadow-elevation-high'
)}>
```

### 4. Maintain Accessibility

```typescript
// ✅ Correct - Preserve Radix UI accessibility
<Dialog>
  <DialogTrigger asChild>
    <Button $variant="primary">Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Modal Title</DialogTitle>
    {/* Content */}
  </DialogContent>
</Dialog>
```

## 🔗 Resources

- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Class Variance Authority](https://cva.style/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Accessibility Patterns](./accessibility-patterns.md)
