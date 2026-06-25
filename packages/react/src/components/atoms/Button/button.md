# Button Component

The Button component is a fundamental interactive element in the Kueski Design System, providing consistent styling and behavior across all user interfaces.

## 🎯 Overview

The Button component is built with accessibility in mind and supports multiple variants, sizes, and states. It uses the `asChild` pattern for flexible composition and integrates with Radix UI for enhanced accessibility.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Button } from '@kueski-dev/kds/react';
import type { ButtonProps, ButtonVariant, ButtonSize, ButtonMode } from '@kueski-dev/kds/react';
import { buttonVariants, buttonLinkVariants } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { Button } from '@kueski-dev/kds/react/atoms/Button';
import type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonMode,
} from '@kueski-dev/kds/react/atoms/Button';
import { buttonVariants, buttonLinkVariants } from '@kueski-dev/kds/react/atoms/Button';

// Option 3: Direct component import (tree-shaking optimized)
import { Button, buttonVariants, buttonLinkVariants } from '@kueski-dev/kds/react/atoms/Button';
import type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonMode,
} from '@kueski-dev/kds/react/atoms/Button';
```

## 🎨 Variants

### Primary Variants

| Variant       | Description                | Use Case               |
| ------------- | -------------------------- | ---------------------- |
| `primary`     | Main brand color button    | Primary actions, CTAs  |
| `secondary`   | Secondary action button    | Secondary actions      |
| `destructive` | Danger/destructive actions | Delete, remove actions |
| `success`     | Success state button       | Confirm, save actions  |
| `warning`     | Warning state button       | Caution actions        |
| `upsell`      | Upsell/promotional button  | Premium features       |

### Ghost Variants

| Variant             | Description                   | Use Case                   |
| ------------------- | ----------------------------- | -------------------------- |
| `ghost-primary`     | Transparent with brand color  | Subtle primary actions     |
| `ghost-destructive` | Transparent with danger color | Subtle destructive actions |

### Special Variants

| Variant          | Description                 | Use Case            |
| ---------------- | --------------------------- | ------------------- |
| `translucent`    | Semi-transparent background | Overlays, modals    |
| `opaque-shadow`  | Solid with shadow           | Elevated actions    |
| `opaque-outline` | Solid with outline          | Alternative styling |

## 📏 Sizes

| Size | Height | Padding   | Use Case                 |
| ---- | ------ | --------- | ------------------------ |
| `sm` | 32px   | 8px 12px  | Compact spaces, forms    |
| `md` | 40px   | 12px 16px | Standard buttons (alias) |
| `lg` | 48px   | 16px 24px | Prominent actions        |

## 🎭 Modes

| Mode          | Description               | Use Case                   |
| ------------- | ------------------------- | -------------------------- |
| `default`     | Standard button with text | Most use cases             |
| `icon`        | Icon-only button          | Toolbars, compact spaces   |
| `alternative` | Alternative layout        | Special layouts            |
| `link`        | Text-only link style      | Inline actions, navigation |

## 🔧 Props

## Button Props

### Core Button Properties

| Prop           | Type              | Default     | Description                                                                                                                                              |
| -------------- | ----------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$variant`     | `ButtonVariant`   | `'primary'` | Visual style variant of the button                                                                                                                       |
| `$size`        | `ButtonSize`      | `'default'` | Size of the button: 'sm', 'md', or 'lg'                                                                                                                  |
| `$mode`        | `ButtonMode`      | `'default'` | Button display mode: 'default' (with text), 'icon' (icon only), 'alternative' (for translucent/opaque variants), or 'link' (text-only with brand colors) |
| `disabled`     | `boolean`         | `false`     | Whether the button is disabled                                                                                                                           |
| `$loading`     | `boolean`         | `false`     | Whether the button is in loading state                                                                                                                   |
| `$loadingText` | `string`          | `undefined` | Text to show when loading (falls back to children if not provided)                                                                                       |
| `$loadingIcon` | `React.ReactNode` | `undefined` | Custom loading icon/spinner to display during loading state                                                                                              |
| `$fullWidth`   | `boolean`         | `false`     | Whether button takes full width of container                                                                                                             |
| `$asChild`     | `boolean`         | `false`     | Render as child element using Radix UI Slot                                                                                                              |
| `$as`          | `ElementType`     | `'button'`  | Element type to render (e.g., 'a', 'div')                                                                                                                |
| `className`    | `string`          | `undefined` | Custom CSS class name for additional styling                                                                                                             |
| `children`     | `React.ReactNode` | `undefined` | Button content - can include icons, text, or both                                                                                                        |

### Basic Props

```typescript
interface ButtonProps {
  /** Button content */
  children?: React.ReactNode;
  /** Custom CSS class name */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
```

### Variant Props

```typescript
interface ButtonProps {
  /** Button visual variant */
  $variant?:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'upsell'
    | 'ghost-primary'
    | 'ghost-destructive'
    | 'translucent'
    | 'opaque-shadow'
    | 'opaque-outline';
  /** Button size */
  $size?: 'sm' | 'md' | 'lg';
  /** Button mode */
  $mode?: 'default' | 'icon' | 'alternative';
}
```

### State Props

```typescript
interface ButtonProps {
  /** Show loading state with spinner */
  $loading?: boolean;
  /** Loading text to display when loading is true */
  $loadingText?: string;
  /** Custom loading icon */
  $loadingIcon?: React.ReactNode;
}
```

### Layout Props

```typescript
interface ButtonProps {
  /** Make the button full width */
  $fullWidth?: boolean;
}
```

### Composition Props

```typescript
interface ButtonProps {
  /** Render as a different element when true */
  $asChild?: boolean;
  /** Element type to render when asChild is true */
  $as?: ElementType;
}
```

### Accessibility Props

```typescript
interface ButtonProps {
  /** Accessible label for screen readers */
  'aria-label'?: string;
  /** Accessible description */
  'aria-describedby'?: string;
  /** Pressed state for toggle buttons */
  'aria-pressed'?: boolean;
  /** Expanded state for collapsible buttons */
  'aria-expanded'?: boolean;
}
```

## 🎨 Interactive States

The Button component supports multiple interactive states:

- **Default**: Normal unselected state
- **Hover**: Hover styles via Tailwind classes
- **Focused**: When focused via keyboard navigation
- **Disabled**: When disabled (non-interactive)
- **Loading**: When in loading state with custom loading icon

## 🎭 Button Modes

### Default Mode (with text and icons)

```typescript
<Button $mode="default" $variant="primary">
  <HomeIcon />
  Go Home
</Button>
```

### Icon Mode (icon only, circular)

```typescript
<Button $mode="icon" $variant="ghost-primary" aria-label="Go to home">
  <HomeIcon />
</Button>
```

### Alternative Mode (for overlay/special variants)

```typescript
<Button $mode="alternative" $variant="translucent">
  <HomeIcon />
  Overlay Action
</Button>
```

### Mode Selection Guide

| Mode          | Use When                   | Variants                                         |
| ------------- | -------------------------- | ------------------------------------------------ |
| `default`     | Text with or without icons | All variants                                     |
| `icon`        | Icon-only buttons          | Standard variants only                           |
| `alternative` | Special layouts            | `translucent`, `opaque-shadow`, `opaque-outline` |

## 🧩 Pure Composition Pattern

The Button uses a pure composition pattern where you compose icons and text naturally as children:

```typescript
// ✅ Correct - natural composition
<Button $variant="primary">
  <SaveIcon />
  Save Changes
</Button>

// ❌ Incorrect - don't use special positioning props
<Button $variant="primary" $icon={<SaveIcon />} $text="Save Changes" />
```

## ⏳ Loading States

### Basic Loading (uses children as fallback)

```typescript
<Button $loading={true}>
  Save Changes
</Button>
// Shows: "Save Changes" with spinner
```

### Custom Loading Text

```typescript
<Button $loading={true} $loadingText="Saving...">
  Save Changes
</Button>
// Shows: "Saving..." with spinner
```

### Custom Loading Icon

```typescript
<Button
  $loading={true}
  $loadingText="Processing..."
  $loadingIcon={<CustomSpinner />}
>
  Process
</Button>
```

## 🔄 Polymorphic Rendering

### As Different Element

```typescript
<Button $as="a" href="/profile">
  View Profile
</Button>
```

### As Child Element (using Radix UI Slot)

```typescript
import Link from 'next/link';

<Button $asChild $variant="primary">
  <Link href="/dashboard">
    Go to Dashboard
  </Link>
</Button>
```

## 🚀 Usage Examples

### Basic Usage

```typescript
import { Button } from '@kueski-dev/kds/react';

function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Button $variant="secondary">Secondary</Button>
      <Button $variant="destructive">Delete</Button>
    </div>
  );
}
```

### With Loading State

```typescript
function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await performAction();
    setLoading(false);
  };

  return (
    <Button
      $loading={loading}
      $loadingText="Processing..."
      onClick={handleClick}
    >
      Save Changes
    </Button>
  );
}
```

### Icon Button

```typescript
import { HomeIcon } from '@kueski-dev/kds/react';

function IconButton() {
  return (
    <Button
      $mode="icon"
      $variant="ghost-primary"
      aria-label="Go to home"
    >
      <HomeIcon />
    </Button>
  );
}
```

### Full Width Button

```typescript
function FullWidthButton() {
  return (
    <Button $fullWidth $variant="primary">
      Submit Form
    </Button>
  );
}
```

### With Next.js Link (asChild)

```typescript
import Link from 'next/link';

<Button $asChild $variant="primary">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

> For detailed information about the `asChild` pattern, see the [Component Standards](../../standards/component-standards.md#asChild-pattern) documentation.

### Form Integration

```typescript
function FormButton() {
  return (
    <form>
      <Button type="submit" $variant="primary">
        Submit
      </Button>
      <Button type="reset" $variant="secondary">
        Reset
      </Button>
    </form>
  );
}
```

### Link Mode

The `link` mode displays buttons as text-only elements with brand colors, perfect for inline actions and navigation.

```typescript
import { Button } from '@kueski-dev/kds/react';
import { HomeIcon, ChevronRightIcon } from '@kueski-dev/kds/react';

function LinkButtons() {
  return (
    <div>
      {/* Text-only links */}
      <Button $variant="primary" $mode="link">
        Primary Link
      </Button>
      <Button $variant="destructive" $mode="link">
        Delete Link
      </Button>

      {/* Links with icons (auto-adapts to button style) */}
      <Button $variant="primary" $mode="link">
        <HomeIcon className="w-4 h-4" />
        Home Link
      </Button>
      <Button $variant="destructive" $mode="link">
        <ChevronRightIcon className="w-4 h-4" />
        Delete Link
      </Button>
    </div>
  );
}
```

### Link Mode Behavior

When using `$mode="link"`:

- **Text-only links**: Use `buttonLinkVariants` (text color only, no background, hover, or focus effects)
- **Links with icons**: Automatically adapt to use `buttonVariants` (full button styles) for better visual hierarchy

```typescript
// Text-only link (subtle, inline style)
<Button $variant="primary" $mode="link">
  Learn more
</Button>

// Link with icon (prominent, button style)
<Button $variant="primary" $mode="link">
  <ChevronRightIcon className="w-4 h-4" />
  Learn more
</Button>
```

## 🎨 Styling

### Design Tokens

The Button component uses Kueski design tokens for consistent styling:

```css
/* Colors */
--color-background-brand: #0069f1;
--color-background-danger: #d82938;
--color-background-success: #008246;
--color-text-and-icons-always-white: #ffffff;

/* Spacing */
--spacing-x2: 0.5rem; /* 8px */
--spacing-x3: 0.75rem; /* 12px */
--spacing-x4: 1rem; /* 16px */

/* Typography */
--text-body-1: 1rem; /* 16px */
--text-body-2: 0.875rem; /* 14px */

/* Border Radius */
--radius-x2: 0.5rem; /* 8px */
```

### Custom Styling

```typescript
// Using className prop
<Button className="custom-button-class">
  Custom Button
</Button>

// Using Tailwind classes
<Button className="shadow-lg hover:shadow-xl">
  Elevated Button
</Button>

// Using buttonLinkVariants for link mode
import { buttonLinkVariants } from '@kueski-dev/kds/react';

// Custom link button
<Button
  $mode="link"
  className={buttonLinkVariants({ variant: 'primary' })}
>
  Custom Link
</Button>
```

## ♿ Accessibility

### Keyboard Navigation

- **Enter/Space**: Activates the button
- **Tab**: Focuses the button
- **Escape**: Cancels action (if applicable)

### Screen Reader Support

```typescript
// Provide accessible labels
<Button aria-label="Close dialog">
  <CloseIcon />
</Button>

// Describe the action
<Button aria-describedby="delete-description">
  Delete
</Button>
<div id="delete-description">
  This action cannot be undone
</div>
```

### Loading State Accessibility

```typescript
// Loading state automatically sets aria-busy
<Button $loading={true} $loadingText="Saving...">
  Save
</Button>
// Results in: <button aria-busy="true">Saving...</button>
```

## 🧪 Testing

### Unit Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should show loading state', () => {
    render(<Button $loading={true} $loadingText="Loading...">Save</Button>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<Button>Test Button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📋 Best Practices

1. **Use semantic variants**: Choose variants that match the action importance and context
2. **Select the right mode**:
   - Use `$mode="default"` for buttons with text (with or without icons)
   - Use `$mode="icon"` for icon-only buttons with standard variants
   - Use `$mode="alternative"` for translucent, opaque-shadow, and opaque-outline variants
3. **Provide clear labels**: Always use `aria-label` for icon-only buttons to ensure accessibility
4. **Handle loading states**: Show loading feedback with `$loading`, `$loadingText`, and optionally `$loadingIcon`
5. **Test with keyboard**: Ensure proper keyboard navigation (Enter/Space activation)
6. **Use appropriate sizes**: Match button size to context and importance
7. **Compose naturally**: Use children to compose icons and text directly without special positioning props

## 🔄 Migration Guide

### From Legacy Button

```typescript
// Before (legacy)
<Button variant="primary" size="medium">
  Click me
</Button>

// After (current)
<Button $variant="primary" $size="md">
  Click me
</Button>
```

### Adding asChild Support

```typescript
// Before
<button onClick={handleClick}>
  <a href="/profile">Profile</a>
</button>

// After
<Button $asChild onClick={handleClick}>
  <a href="/profile">Profile</a>
</Button>
```

## 🐛 Troubleshooting

### Common Issues

#### Button not responding to clicks

```typescript
// ❌ Incorrect - missing onClick
<Button>Click me</Button>

// ✅ Correct - with onClick handler
<Button onClick={handleClick}>Click me</Button>
```

#### Loading state not working

```typescript
// ❌ Incorrect - loading without loadingText
<Button $loading={true}>Save</Button>

// ✅ Correct - with loadingText
<Button $loading={true} $loadingText="Saving...">Save</Button>
```

#### asChild not working

```typescript
// ❌ Incorrect - invalid child element
<Button $asChild>
  <span>Invalid</span>
</Button>

// ✅ Correct - valid React element
<Button $asChild>
  <a href="/link">Valid Link</a>
</Button>
```

## 📚 Related Documentation

- [Component Standards](../standards/component-standards.md) - Development standards and composition patterns
- [Design Tokens](../tokens/design-tokens.md) - Color, typography, and spacing tokens
- [Accessibility Patterns](../patterns/accessibility-patterns.md) - Accessibility guidelines
- [Testing Guide](../testing/testing-guide.md) - Testing strategies

## 🔗 Resources

- [Radix UI Slot Documentation](https://www.radix-ui.com/primitives/docs/utilities/slot)
- [WCAG Button Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=412)
- [React Button Patterns](https://react.dev/reference/react-dom/components/button)
