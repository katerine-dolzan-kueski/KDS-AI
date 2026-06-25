# ButtonGroup Component

The ButtonGroup component is a flexible container for arranging multiple buttons with consistent spacing and responsive layouts in the Kueski Design System.

## 🎯 Overview

ButtonGroup follows the **Composition over Configuration** pattern, allowing you to compose any number of Button components as children. This provides maximum flexibility, simplicity, and control over each button's behavior and appearance.

## 📦 Import

```typescript
import { ButtonGroup, Button } from '@kueski-dev/kds/react';
```

## 🎨 Composition Pattern

### Why Composition over Configuration?

The ButtonGroup uses the composition pattern rather than configuration objects, providing:

- ✅ **Flexibility**: Use any number of buttons (not limited to 2)
- ✅ **Simplicity**: No complex configuration objects needed
- ✅ **Full Control**: Direct access to all Button props for each button
- ✅ **Maintainability**: Easier to understand, modify, and extend
- ✅ **Predictability**: Natural React children composition

### Basic Example

```typescript
// ✅ Correct - Composition Pattern
<ButtonGroup>
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save</Button>
</ButtonGroup>

// ❌ Incorrect - Configuration Pattern (legacy, not supported)
<ButtonGroup
  primaryButton={{ children: 'Save', variant: 'primary' }}
  secondaryButton={{ children: 'Cancel' }}
/>
```

## 📐 Layout Orientations

### Responsive (Default)

Automatically adapts based on screen size:

- **Mobile (<640px)**: Vertical stacked layout with full-width buttons
- **Desktop (≥640px)**: Horizontal side-by-side layout with equal-width buttons

```typescript
<ButtonGroup $orientation="responsive">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Confirm</Button>
</ButtonGroup>
```

### Vertical

Always displays buttons stacked vertically with full width. Perfect for mobile-first designs or dialogs.

**Important**: In vertical orientation, buttons are **reversed** so the secondary button appears below the primary button (following UX best practices).

```typescript
<ButtonGroup $orientation="vertical">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Confirm</Button>
</ButtonGroup>
// Visual order: Confirm (top), Cancel (bottom)
```

### Horizontal

Always displays buttons side by side with equal width, regardless of screen size.

```typescript
<ButtonGroup $orientation="horizontal">
  <Button $variant="secondary">Back</Button>
  <Button $variant="primary">Next</Button>
</ButtonGroup>
```

## 🔧 Props

### ButtonGroup Props

| Prop           | Type                                         | Default        | Description                                           |
| -------------- | -------------------------------------------- | -------------- | ----------------------------------------------------- |
| `children`     | `React.ReactNode`                            | **Required**   | Button components to render inside the group          |
| `$orientation` | `'horizontal' \| 'vertical' \| 'responsive'` | `'responsive'` | Layout orientation - affects how buttons are arranged |
| `$fullWidth`   | `boolean`                                    | Auto\*         | Whether buttons should take full width of container   |
| `className`    | `string`                                     | `undefined`    | Additional CSS classes for the container              |

**Auto default behavior**:

- `vertical`: Always `true` (full width forced)
- `responsive`: `true` (full width by default)
- `horizontal`: `false` (auto width by default)

### Core Props Interface

```typescript
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Button components to render inside the group
   * Compose any number of Button components with full control
   */
  children: ReactNode;

  /**
   * Layout orientation - affects how buttons are arranged
   * - 'horizontal': Side by side
   * - 'vertical': Stacked (reversed order)
   * - 'responsive': Horizontal on desktop (sm+), vertical on mobile
   * @default 'responsive'
   */
  $orientation?: 'horizontal' | 'vertical' | 'responsive';

  /**
   * Whether buttons should take full width of container
   * - Vertical: Always true (forced)
   * - Responsive: Default true
   * - Horizontal: Default false
   */
  $fullWidth?: boolean;

  /**
   * Additional CSS classes for the button group container
   */
  className?: string;
}
```

## 🚀 Usage Examples

### Basic Two-Button Group (Default)

```typescript
<ButtonGroup>
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save Changes</Button>
</ButtonGroup>
```

### Three Buttons (Composition Flexibility)

```typescript
<ButtonGroup>
  <Button $variant="ghost-primary">Cancel</Button>
  <Button $variant="secondary">Save Draft</Button>
  <Button $variant="primary">Publish</Button>
</ButtonGroup>
```

### Horizontal Layout

```typescript
<ButtonGroup $orientation="horizontal">
  <Button $variant="secondary">No</Button>
  <Button $variant="primary">Yes</Button>
</ButtonGroup>
```

### Vertical Layout (Mobile-First)

```typescript
<ButtonGroup $orientation="vertical">
  <Button $variant="secondary" $fullWidth>
    Maybe Later
  </Button>
  <Button $variant="primary" $fullWidth>
    Get Started
  </Button>
</ButtonGroup>
```

### With Icons

```typescript
<ButtonGroup>
  <Button $variant="secondary">
    <ChevronLeftIcon />
    Back
  </Button>
  <Button $variant="primary">
    Next
    <ChevronRightIcon />
  </Button>
</ButtonGroup>
```

### Different Button Sizes

```typescript
<ButtonGroup>
  <Button $variant="secondary" $size="lg">
    Cancel
  </Button>
  <Button $variant="primary" $size="lg">
    Confirm
  </Button>
</ButtonGroup>
```

### Multiple Primary Actions

```typescript
<ButtonGroup>
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="success">Save</Button>
  <Button $variant="primary">Save & Continue</Button>
</ButtonGroup>
```

### Destructive Actions

```typescript
<ButtonGroup>
  <Button $variant="secondary">Keep</Button>
  <Button $variant="secondary">Archive</Button>
  <Button $variant="destructive">Delete</Button>
</ButtonGroup>
```

## 🎨 Layout Behavior

### Full Width Behavior

#### Vertical Orientation

```typescript
// ✅ Always full width (forced)
<ButtonGroup $orientation="vertical">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Confirm</Button>
</ButtonGroup>
// Both buttons will be full width regardless of $fullWidth prop
```

#### Responsive Orientation

```typescript
// ✅ Full width on mobile, equal width on desktop (default)
<ButtonGroup $orientation="responsive">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save</Button>
</ButtonGroup>

// ✅ Auto width - buttons match largest button size
<ButtonGroup $orientation="responsive" $fullWidth={false}>
  <Button $variant="secondary">No</Button>
  <Button $variant="primary">Yes</Button>
</ButtonGroup>
```

#### Horizontal Orientation

```typescript
// ✅ Auto width - all buttons match the largest button (default)
<ButtonGroup $orientation="horizontal">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save Changes</Button>
</ButtonGroup>

// ✅ Full width container with equal-width buttons
<ButtonGroup $orientation="horizontal" $fullWidth={true}>
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save</Button>
</ButtonGroup>
```

### Button Order in Vertical Layout

In vertical orientation, the visual order is **reversed** so secondary actions appear below primary actions:

```typescript
// Code order:
<ButtonGroup $orientation="vertical">
  <Button $variant="secondary">Cancel</Button>  // 1. Written first
  <Button $variant="primary">Confirm</Button>   // 2. Written second
</ButtonGroup>

// Visual order (top to bottom):
// 1. Confirm (primary) ← Appears at top
// 2. Cancel (secondary) ← Appears at bottom
```

This follows UX best practices where:

- Primary actions are more prominent (top position)
- Secondary/cancel actions are less prominent (bottom position)

## 🎨 Styling

### Design Tokens

ButtonGroup uses spacing tokens for consistent gaps:

```css
/* Spacing */
--spacing-x3: 0.75rem; /* 12px - default gap between buttons */
```

### Custom Styling

```typescript
// Using className prop
<ButtonGroup className="my-custom-group">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save</Button>
</ButtonGroup>

// Using Tailwind classes
<ButtonGroup className="gap-4 p-4 bg-gray-50 rounded-lg">
  <Button $variant="secondary">Cancel</Button>
  <Button $variant="primary">Save</Button>
</ButtonGroup>
```

### Internal Styles (CVA)

```typescript
// Base styles
'flex gap-3'

// Orientation variants
horizontal: 'flex-row items-center'
vertical: 'flex-col-reverse items-stretch w-full [&>*]:w-full'
responsive: 'flex-col-reverse items-stretch sm:flex-row sm:items-center'

// Full width variants
true: 'w-full [&>*]:w-full sm:[&>*]:flex-1'
false: 'w-auto [&>*]:flex-1'
```

## 📚 Related Documentation

- [Button Component](./button.md) - Individual button documentation
- [Component Standards](../../standards/component-standards.md) - Development standards and composition patterns
- [Design Tokens](../../tokens/design-tokens.md) - Spacing and layout tokens
- [Accessibility Patterns](../../patterns/accessibility-patterns.md) - Accessibility guidelines
- [Testing Guide](../../testing/testing-guide.md) - Testing strategies

## 🔗 Resources

- [Composition vs Configuration Pattern](https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax)
- [WCAG Button Group Guidelines](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value)
- [React Children Composition](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [Flexbox Layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
