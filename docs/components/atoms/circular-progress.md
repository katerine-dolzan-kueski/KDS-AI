# CircularProgress Component

The CircularProgress component is an animated circular loading indicator in the Kueski Design System, providing visual feedback during loading states with precise design system integration.

## 🎯 Overview

The CircularProgress component uses CSS conic gradients with exact color stops from Figma, ensuring pixel-perfect consistency across all platforms. It leverages design system color tokens and automatically adapts to theme changes.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { CircularProgress } from '@kueski-dev/kds/react';
import type {
  CircularProgressProps,
  CircularProgressVariant,
  CircularProgressSize,
} from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { CircularProgress } from '@kueski-dev/kds/react/atoms/CircularProgress';
import type {
  CircularProgressProps,
  CircularProgressVariant,
  CircularProgressSize,
} from '@kueski-dev/kds/react/atoms/CircularProgress';

// Option 3: Direct component import (tree-shaking optimized)
import { CircularProgress } from '@kueski-dev/kds/react/atoms/CircularProgress';
import type {
  CircularProgressProps,
  CircularProgressVariant,
  CircularProgressSize,
} from '@kueski-dev/kds/react/atoms/CircularProgress';
```

## 🎨 Variants

| Variant    | Description            | Use Case                          |
| ---------- | ---------------------- | --------------------------------- |
| `default`  | Blue gradient spinner  | Light backgrounds, standard UI    |
| `inverted` | White gradient spinner | Dark backgrounds, inverted themes |

## 📏 Sizes

| Size | Dimensions | Use Case                          |
| ---- | ---------- | --------------------------------- |
| `xs` | 12px       | Extra compact spaces, inline text |
| `sm` | 16px       | Compact UI, small buttons         |
| `md` | 32px       | Standard loading states (default) |
| `lg` | 40px       | Prominent loading indicators      |
| `xl` | 48px       | Full-screen or hero loading       |

## 🔧 Props

### Core Properties

| Prop        | Type                                           | Default     | Description                             |
| ----------- | ---------------------------------------------- | ----------- | --------------------------------------- |
| `$variant`  | `'default'` \| `'inverted'`                    | `'default'` | Gradient color variant                  |
| `$size`     | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | `'md'`      | Size of the circular progress indicator |
| `$speed`    | `number`                                       | `1`         | Animation speed in seconds (0.5 - 3)    |
| `$visible`  | `boolean`                                      | `true`      | Whether the component is visible        |
| `$show`     | `boolean`                                      | `true`      | Whether to render the component         |
| `className` | `string`                                       | `undefined` | Additional CSS classes                  |

### Props Interface

```typescript
interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant */
  $size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Gradient variant */
  $variant?: 'default' | 'inverted';
  /** Animation speed in seconds */
  $speed?: number;
  /** Visibility state */
  $visible?: boolean;
  /** Show/hide state */
  $show?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Accessible label */
  $ariaLabel?: string;
}
```

## 💻 Usage Examples

### Basic Usage

```typescript
import { CircularProgress } from '@kueski-dev/kds/react';

function LoadingExample() {
  return <CircularProgress />;
}
```

### With Custom Size and Speed

```typescript
<CircularProgress
  $size="lg"
  $speed={1.5}
  $ariaLabel="Processing your request"
/>
```

### Inverted Variant for Dark Backgrounds

```typescript
<div className="bg-background-invert-primary p-8">
  <CircularProgress $variant="inverted" $size="lg" />
</div>
```

### All Sizes

```typescript
<div className="flex items-center space-x-8">
  <CircularProgress $size="xs" />
  <CircularProgress $size="sm" />
  <CircularProgress $size="md" />
  <CircularProgress $size="lg" />
  <CircularProgress $size="xl" />
</div>
```

### Different Speeds

```typescript
<div className="flex items-center space-x-8">
  <CircularProgress $speed={2} />    {/* Slow */}
  <CircularProgress $speed={1} />    {/* Normal */}
  <CircularProgress $speed={0.5} />  {/* Fast */}
</div>
```

### Conditional Loading

```typescript
function DataLoader() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <CircularProgress $ariaLabel="Loading data..." />}
      {!loading && <div>Data loaded!</div>}
    </div>
  );
}
```

## 🎨 Design System Integration

### Color Tokens

The component uses CSS variables from the design system that automatically adapt to theme changes:

#### Default Variant (Blue)

- `--color-spinner-blue-100` - Light blue (start of gradient)
- `--color-spinner-blue-200` - Medium blue (middle)
- `--color-spinner-blue-300` - Bright blue (end of gradient)

#### Inverted Variant (White)

- `--color-spinner-white-100` - Transparent white (start)
- `--color-spinner-white-200` - Semi-transparent white (middle)
- `--color-spinner-white-300` - Solid white (end)

### Gradient Implementation

The component uses CSS `conic-gradient` with exact stops from Figma:

```css
conic-gradient(
  from 90deg,
  var(--color-spinner-blue-300) 17.6463deg,
  var(--color-spinner-blue-100) 17.7859deg,
  var(--color-spinner-blue-100) 109.486deg,
  transparent 109.5deg
)
```

### Theme Adaptation

The color variables respond to the `[data-theme="dark"]` attribute:

```typescript
// Light background
<CircularProgress $variant="default" />

// Dark background
<CircularProgress $variant="inverted" />
```

## ♿ Accessibility

### ARIA Attributes

The component includes proper accessibility features:

```typescript
<div
  role="status"
  aria-label="Loading..."
>
  <svg aria-hidden="true">
    {/* SVG content */}
  </svg>
</div>
```

### Accessibility Best Practices

```typescript
// ✅ Good: Descriptive label
<CircularProgress $ariaLabel="Loading your transactions" />

// ✅ Good: Context-specific label
<CircularProgress $ariaLabel="Processing payment" />

// ❌ Avoid: Generic or missing labels
<CircularProgress /> // Uses default "Loading..." which may not be specific enough
```

## 🎭 Animation

### Animation Properties

- **Type**: Infinite rotation
- **Duration**: Configurable via `$speed` prop (0.5s - 3s)
- **Easing**: Linear
- **Direction**: Clockwise

### Speed Guidelines

| Speed  | Duration | Use Case                      |
| ------ | -------- | ----------------------------- |
| Fast   | 0.5s     | Quick actions, button clicks  |
| Normal | 1.0s     | Standard loading states       |
| Slow   | 2.0s     | Long processes, data fetching |

### Custom Speed

```typescript
// Quick action (0.5 seconds)
<CircularProgress $speed={0.5} />

// Normal (1 second, default)
<CircularProgress $speed={1} />

// Long process (2 seconds)
<CircularProgress $speed={2} />
```

## 🏗️ Technical Implementation

### SVG Structure

The component uses SVG with `foreignObject` to render CSS gradients:

```typescript
<svg viewBox="0 0 32 32" className="animate-spin">
  <defs>
    <clipPath id="unique-id">
      <path d="..." /> {/* Arc path */}
      <circle cx="13.27" cy="2.27" r="2" /> {/* Rounded start cap */}
      <circle cx="16" cy="28" r="2" />      {/* Rounded end cap */}
    </clipPath>
  </defs>
  <g clipPath="url(#unique-id)">
    <foreignObject>
      <div style={{ background: 'conic-gradient(...)' }} />
    </foreignObject>
  </g>
</svg>
```

### Rounded Caps

The component includes circles at both ends of the arc to create smooth, rounded caps similar to `stroke-linecap="round"`:

- Start cap: `<circle cx="13.27" cy="2.27" r="2" />`
- End cap: `<circle cx="16" cy="28" r="2" />`

### Performance

- **Optimized**: Uses CSS animations instead of JavaScript
- **GPU Accelerated**: `transform: rotate()` triggers GPU acceleration
- **No Re-renders**: Animation runs independently of React render cycles
- **Small Bundle**: Minimal JavaScript, mostly CSS

## 🎨 Styling & Customization

### Custom Class Names

```typescript
<CircularProgress
  $className="my-custom-spinner"
/>
```

### Inline Container Styling

```typescript
<div className="flex justify-center items-center h-screen">
  <CircularProgress $size="xl" />
</div>
```

### With Overlay

```typescript
<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <CircularProgress $variant="inverted" $size="xl" />
</div>
```

## 📚 Related Components

- **Button**: Can integrate CircularProgress in loading state
- **Skeleton**: Alternative loading pattern
- **Spinner**: Legacy spinner component (use CircularProgress instead)

## 🔗 Resources

- [Figma Design Specs](link-to-figma)
- [Accessibility Guidelines](link-to-a11y-docs)
- [Animation Best Practices](link-to-animation-docs)
- [Design Tokens](link-to-tokens-docs)
