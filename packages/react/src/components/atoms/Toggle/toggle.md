# Toggle Component

The Toggle component is a fundamental interactive element in the Kueski Design System, providing a switch control for enabling or disabling a single setting or feature with immediate effect.

## 🎯 Overview

The Toggle component is built with accessibility in mind and supports multiple variants and states. It uses Radix UI Switch primitive for enhanced accessibility and keyboard navigation, with smooth animations and visual feedback.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Toggle } from '@kueski-dev/kds/react';
import type { ToggleProps } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { Toggle } from '@kueski-dev/kds/react/atoms';
import type { ToggleProps } from '@kueski-dev/kds/react/atoms';
```

## 🎨 Design

The Toggle component has a fixed design with consistent styling across all instances:

- **Width**: 40px (w-10)
- **Height**: 24px (h-6)
- **Thumb Size**: 16px (w-4 h-4) normal, 20px (w-5 h-5) when active
- **Border**: 2px solid with secondary stroke color
- **Border Radius**: Fully rounded (9999px)

## 🔧 Props

### Core Toggle Properties

| Prop              | Type       | Default     | Description                                  |
| ----------------- | ---------- | ----------- | -------------------------------------------- |
| `$checked`        | `boolean`  | `false`     | Whether the toggle is checked                |
| `onCheckedChange` | `function` | `undefined` | Callback fired when the toggle state changes |
| `$disabled`       | `boolean`  | `false`     | Whether the toggle is disabled               |
| `className`       | `string`   | `undefined` | Custom CSS class name for additional styling |

### Basic Props

```typescript
interface ToggleProps {
  /** Whether the toggle is checked */
  $checked?: boolean;
  /** Callback fired when the toggle state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Whether the toggle is disabled */
  $disabled?: boolean;
  /** Custom CSS class name */
  className?: string;
}
```

## 🎨 Interactive States

The Toggle component supports multiple interactive states:

- **Default**: Normal unselected state with tertiary background
- **Hover**: Hover styles with subtle background change (`bg-states-hover`)
- **Focused**: When focused via keyboard navigation with blue ring (`ring-stroke-brand`)
- **Active**: When pressed/clicked with thumb size increase (20px) and pressed background
- **Checked**: Selected state with brand color background and white thumb
- **Disabled**: When disabled (non-interactive) with reduced opacity and transparent text

## 🚀 Usage Examples

### Basic Usage

```typescript
import { Toggle } from '@kueski-dev/kds/react';
import { useState } from 'react';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Toggle
        $checked={enabled}
        onCheckedChange={setEnabled}
        aria-label="Enable notifications"
      />
    </div>
  );
}
```

### With Labels

```typescript
function ToggleWithLabel() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Toggle
        $checked={darkMode}
        onCheckedChange={setDarkMode}
        aria-label="Enable dark mode"
      />
      <label htmlFor="dark-mode" className="text-sm">
        Dark mode
      </label>
    </div>
  );
}
```

### Multiple Toggles

```typescript
function MultipleToggles() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex gap-4">
      <Toggle
        $checked={notifications}
        onCheckedChange={setNotifications}
        aria-label="Enable notifications"
      />
      <Toggle
        $checked={darkMode}
        onCheckedChange={setDarkMode}
        aria-label="Enable dark mode"
      />
    </div>
  );
}
```

### Disabled State

```typescript
function DisabledToggles() {
  return (
    <div className="flex gap-4">
      <Toggle
        $checked={false}
        $disabled
        aria-label="Disabled unchecked"
      />
      <Toggle
        $checked={true}
        $disabled
        aria-label="Disabled checked"
      />
    </div>
  );
}
```

### Custom Styling

```typescript
// Using className prop
<Toggle
  className="custom-toggle-class"
  $checked={enabled}
  onCheckedChange={setEnabled}
/>

// Using Tailwind classes
<Toggle
  className="shadow-lg hover:shadow-xl"
  $checked={enabled}
  onCheckedChange={setEnabled}
/>
```

## 📚 Related Documentation

- [Component Standards](../standards/component-standards.md) - Development standards and composition patterns
- [Design Tokens](../tokens/design-tokens.md) - Color, typography, and spacing tokens
- [Accessibility Patterns](../patterns/accessibility-patterns.md) - Accessibility guidelines
- [Testing Guide](../testing/testing-guide.md) - Testing strategies

## 🔗 Resources

- [Radix UI Switch Documentation](https://www.radix-ui.com/primitives/docs/components/switch)
- [WCAG Switch Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=412)
- [React Switch Patterns](https://react.dev/reference/react-dom/components/input#checkbox)
