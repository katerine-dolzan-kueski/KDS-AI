# Toast Component

The Toast component provides temporary notifications that appear on screen for brief periods. Built with `react-hot-toast` and styled using the Banner component with alternative mode, it delivers consistent, accessible toast notifications across the application.

## 🎯 Overview

The Toast component leverages the power of `react-hot-toast` for functionality and uses the Banner component for visual presentation. This combination provides a robust, accessible, and flexible notification system that integrates seamlessly with the Kueski Design System's design tokens and component architecture.

### Key Features

- **Powered by react-hot-toast**: Reliable toast library with built-in animations and state management
- **Styled with Banner**: Uses Banner component with `$alternative={true}` for consistent visual design
- **Multiple Instances**: Support for multiple independent toaster instances via `toasterId`
- **Automatic Dismissal**: Configurable auto-close duration
- **Accessible**: Built with accessibility in mind, inheriting ARIA attributes from Banner
- **Flexible API**: Component-based API with `useToast` hook for programmatic control

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Toast, useToast } from '@kueski-dev/kds/react';
import type { ToastProps, ToastVariant } from '@kueski-dev/kds/react';

// Option 2: From molecules category
import { Toast, useToast } from '@kueski-dev/kds/react/molecules';
import type { ToastProps, ToastVariant } from '@kueski-dev/kds/react/molecules';
```

## 🏗️ Architecture

### Component Composition

The Toast component is built on top of two foundational systems:

1. **react-hot-toast** (`Toaster`, `ToastBar`): Handles toast state management, positioning, animations, and lifecycles
2. **Banner component** (`$alternative={true}`): Provides the visual presentation with design system tokens

```
Toast (React Hot Toast)
  └── Toaster (react-hot-toast)
      └── ToastBar (react-hot-toast)
          └── Banner ($alternative=true)
              ├── Banner.Icon
              ├── Banner.Content
              │   ├── Banner.Body
              │   └── Optional: ButtonGroup + Buttons
              └── Banner.Close
```

### Core Components

| Component       | Based On                       | Purpose                                                   |
| --------------- | ------------------------------ | --------------------------------------------------------- |
| `Toast` (Root)  | `Toaster` from react-hot-toast | Main toast provider and configuration                     |
| `Toast.Icon`    | `Banner.Icon`                  | Displays variant-specific icon                            |
| `Toast.Content` | `Banner.Content`               | Content container                                         |
| `Toast.Body`    | `Banner.Body`                  | Main message content                                      |
| `Toast.Close`   | `Banner.Close`                 | Dismiss button (only rendered when `onClose` is provided) |

## 🎨 Variants

The Toast component supports four semantic variants, each with distinct colors and icons:

| Variant       | Description            | Use Case              | Icon                  |
| ------------- | ---------------------- | --------------------- | --------------------- |
| `information` | Informational messages | General notifications | InfoCircleFilledIcon  |
| `success`     | Success confirmations  | Completed actions     | CheckmarkCircleFilled |
| `warning`     | Warning messages       | Caution notifications | WarningFilledIcon     |
| `error`       | Error messages         | Failed actions        | ErrorCircleFilledIcon |

## 🔧 Component Props Reference

### Toast (Root) Props

| Prop            | Type            | Default           | Description                                                       |
| --------------- | --------------- | ----------------- | ----------------------------------------------------------------- |
| `$variant`      | `ToastVariant`  | `'information'`   | The visual variant of the toast                                   |
| `$duration`     | `number`        | `5000`            | Duration in milliseconds before auto-close (0 = no auto-close)    |
| `$showPosition` | `ToastPosition` | `'bottom-right'`  | Position where the toast appears (top/bottom + left/center/right) |
| `$hidePosition` | `ToastPosition` | `'bottom-center'` | Position where the toast hides (for animations)                   |
| `$reverseOrder` | `boolean`       | `false`           | Whether to reverse the order of toast stacking                    |
| `$gap`          | `number`        | `8`               | Gap in pixels between each toast                                  |
| `$toasterId`    | `string`        | `'default'`       | Unique identifier for multiple toaster instances                  |
| `onClose`       | `(id) => void`  | `undefined`       | Callback fired when a toast is dismissed                          |
| `className`     | `string`        | `undefined`       | Custom CSS class name for additional styling                      |

**Note**: `Toast` also extends all props from `BannerProps` except `$variant` and `onClose` since these are handled by Toast internally.

### Toast Sub-Components Props

All sub-components (`Toast.Icon`, `Toast.Content`, `Toast.Body`, `Toast.Close`) have the same props as their Banner counterparts. Refer to [Banner documentation](/docs/kueski-design-system-molecules-banner--docs) for details.

### useToast Hook Return Value

The `useToast` hook returns an object with the following methods:

| Method             | Parameters                       | Return Type | Description                                     |
| ------------------ | -------------------------------- | ----------- | ----------------------------------------------- |
| `showToast`        | `options?: UseToastProps`        | `string`    | Shows a custom toast with configuration options |
| `dismissToast`     | `id: string, toasterId?: string` | `void`      | Dismisses a specific toast by its ID            |
| `dismissAllToasts` | None                             | `void`      | Dismisses all toasts                            |
| `removeToast`      | `id: string, toasterId?: string` | `void`      | Removes a specific toast by its ID              |
| `removeAllToasts`  | None                             | `void`      | Removes all toasts                              |

### UseToastProps

The `options` parameter for `showToast` accepts:

| Property      | Type            | Description                                            |
| ------------- | --------------- | ------------------------------------------------------ |
| `id`          | `string`        | Unique identifier for the toast                        |
| `duration`    | `number`        | Duration in milliseconds before auto-close             |
| `position`    | `ToastPosition` | Position of the toast (top/bottom + left/center/right) |
| `toasterId`   | `string`        | Identifier for the toaster instance                    |
| `removeDelay` | `number`        | Delay in milliseconds before removing the toast        |

### Return Types

```typescript
const useToast = () => {
  return {
    /** Custom toast with full control */
    showToast: (options?: UseToastProps) => string,

    /** Dismiss a specific toast by id */
    dismissToast: (id: string, toasterId?: string) => void,

    /** Dismiss all toasts */
    dismissAllToasts: () => void,

    /** Remove a specific toast by id toast or toasterId instance */
    removeToast: (id: string, toasterId?: string) => void,

    /** Remove all toasts */
    removeAllToasts: () => void,
  };
};
```

## 🚀 Usage Examples

### Basic Toast with useToast Hook

```tsx
import { useToast } from '@kueski-dev/kds/react';

function MyComponent() {
  const { showToast, dismissToast } = useToast();

  const handleSuccess = () => {
    const toastId = showToast();

    console.log('toastId', toastId);
  };

  return (
    <div>
      <button onClick={handleSuccess}>Save</button>
      <Toast onClose={(toastId) => dismissToast(toastId)}>
        <Toast.Icon />
        <Toast.Content>
          <Toast.Body>Complete this task to continue</Toast.Body>
          <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
            <Button $variant="invert-primary" $size="sm" $mode="link" className="justify-start">
              Primary action
            </Button>
          </ButtonGroup>
        </Toast.Content>
        <Toast.Close />
      </Toast>
    </div>
  );
}
```

### Multiple Toaster Instances

```tsx
import { Toast, useToast } from '@kueski-dev/kds/react';

function MultipleInstancesExample() {
  const { showToast } = useToast();

  return (
    <div>
      {/* Primary toaster (bottom-right) */}
      <Toast
        $toasterId="primary"
        $showPosition="bottom-right"
        onClose={(id) => console.log('Primary toast dismissed:', id)}
      >
        <Toast.Icon />
        <Toast.Content>
          <Toast.Body>Primary toast message</Toast.Body>
        </Toast.Content>
        <Toast.Close />
      </Toast>

      {/* Secondary toaster (top-center) */}
      <Toast
        $toasterId="secondary"
        $showPosition="top-center"
        onClose={(id) => console.log('Secondary toast dismissed:', id)}
      >
        <Toast.Icon />
        <Toast.Content>
          <Toast.Body>Secondary toast message</Toast.Body>
        </Toast.Content>
        <Toast.Close />
      </Toast>

      <button onClick={() => showToast({ toasterId: 'primary' })}>Show in Primary</button>
      <button onClick={() => showToast({ toasterId: 'secondary' })}>Show in Secondary</button>
    </div>
  );
}
```

## 🎨 Positioning

The Toast component supports multiple positioning options:

### Available Positions

| Position        | Description                         |
| --------------- | ----------------------------------- |
| `top-left`      | Top-left corner                     |
| `top-center`    | Top center                          |
| `top-right`     | Top-right corner (default for hide) |
| `bottom-left`   | Bottom-left corner                  |
| `bottom-center` | Bottom center (default for show)    |
| `bottom-right`  | Bottom-right corner                 |

### Position Configuration

```tsx
<Toast
  $showPosition="bottom-right" // Where toasts appear
  $hidePosition="bottom-center" // Animation exit point
/>
```

## 🎨 Styling

### Custom Styling

```tsx
// Using className prop
<Toast className="custom-toast-class">
  <Toast.Icon />
  <Toast.Content>
    <Toast.Body>Custom styled toast</Toast.Body>
  </Toast.Content>
</Toast>

// Using Tailwind classes for positioning
<div className="fixed bottom-0 right-0 p-4">
  <Toast>...</Toast>
</div>
```

## 📚 Related Documentation

- [Banner Component](./banner.md) - Visual foundation of Toast
- [Button Component](../../atoms/Button/button.md) - Used in toasts with CTA buttons
- [ButtonGroup Component](../../atoms/ButtonGroup/ButtonGroup.md) - Groups buttons in toasts
- [Icons](../../atoms/Icons/index.ts) - Toast variant icons
- [react-hot-toast Documentation](https://react-hot-toast.com/) - Underlying library
- [Component Standards](../../standards/component-standards.md) - KDS development standards

## 🔗 Resources

- [react-hot-toast Examples](https://react-hot-toast.com/examples)
- [Banner Component Docs](./banner.md)
- [Kueski Design Tokens](../../styles/tokens/)
- [Accessibility Patterns](../../patterns/accessibility-patterns.md)
