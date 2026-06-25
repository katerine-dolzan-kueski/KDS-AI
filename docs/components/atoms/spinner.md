# Spinner Component

The Spinner component is a comprehensive loading indicator that combines a circular progress spinner with contextual messaging in the Kueski Design System. It provides visual feedback with informative text during loading states.

## 🎯 Overview

The Spinner component enhances the user experience during loading states by combining an animated circular progress indicator with customizable title and subtitle text. It uses the CircularProgress component internally and provides a complete, branded loading experience.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Spinner } from '@kueski-dev/kds/react';
import type { SpinnerProps, SpinnerSize } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { Spinner } from '@kueski-dev/kds/react/atoms/Spinner';
import type { SpinnerProps, SpinnerSize } from '@kueski-dev/kds/react/atoms/Spinner';

// Option 3: Direct component import (tree-shaking optimized)
import { Spinner } from '@kueski-dev/kds/react/atoms/Spinner';
import type { SpinnerProps, SpinnerSize } from '@kueski-dev/kds/react/atoms/Spinner';
```

## 🎨 Features

- **Contextual Messaging**: Displays title and subtitle to inform users about the loading process
- **Circular Progress Integration**: Uses CircularProgress for consistent branding
- **Multiple Sizes**: Three size options (sm, md, lg) for different contexts
- **Customizable Text**: Full control over messaging content
- **Custom Styling**: Separate styling for title and subtitle
- **Accessibility**: Built with proper ARIA labels and semantic markup
- **Flexible Speed**: Configurable animation speed
- **Responsive Design**: Works across different screen sizes

## 📏 Sizes

| Size | Spinner Size | Use Case                       |
| ---- | ------------ | ------------------------------ |
| `sm` | 24px         | Compact spaces, inline loading |
| `md` | 32px         | Standard loading states        |
| `lg` | 40px         | Prominent loading indicators   |

## 🔧 Props

### Core Properties

| Prop                 | Type                       | Default                                | Description                             |
| -------------------- | -------------------------- | -------------------------------------- | --------------------------------------- |
| `$title`             | `string`                   | `'Preparando tu solicitud'`            | Main title text below spinner           |
| `$subtitle`          | `string`                   | `'Sin papeleos eternos, ¡lo juramos!'` | Subtitle text below title               |
| `$size`              | `'sm'` \| `'md'` \| `'lg'` | `'md'`                                 | Size of the circular progress indicator |
| `$speed`             | `number`                   | `1`                                    | Animation speed in seconds (0.5 - 3)    |
| `$visible`           | `boolean`                  | `true`                                 | Whether the component is visible        |
| `className`          | `string`                   | `undefined`                            | Additional CSS classes for container    |
| `$titleClassName`    | `string`                   | `undefined`                            | Additional CSS classes for title        |
| `$subtitleClassName` | `string`                   | `undefined`                            | Additional CSS classes for subtitle     |
| `aria-label`         | `string`                   | `undefined`                            | Accessibility label for screen readers  |

### Props Interface

```typescript
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text to display */
  $title?: string;
  /** Subtitle text to display */
  $subtitle?: string;
  /** Size of the spinner */
  $size?: 'sm' | 'md' | 'lg';
  /** Animation speed in seconds */
  $speed?: number;
  /** Whether the spinner is visible */
  $visible?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom class name for title */
  $titleClassName?: string;
  /** Custom class name for subtitle */
  $subtitleClassName?: string;
}
```

## 💻 Usage Examples

### Basic Usage

```typescript
import { Spinner } from '@kueski-dev/kds/react';

function LoadingScreen() {
  return <Spinner />;
}
```

### Custom Messaging

```typescript
<Spinner
  $title="Procesando tu solicitud"
  $subtitle="Esto puede tomar unos momentos"
/>
```

### With Custom Size and Speed

```typescript
<Spinner
  $title="Cargando datos"
  $subtitle="Por favor espera..."
  $size="lg"
  $speed={1.5}
/>
```

### Different Speeds

```typescript
<div className="space-y-8">
  <Spinner $speed={2} />      {/* Slow */}
  <Spinner $speed={1} />      {/* Normal */}
  <Spinner $speed={0.5} />    {/* Fast */}
</div>
```

### Custom Text Variants

```typescript
// Form Submission
<Spinner
  $title="Enviando formulario"
  $subtitle="No cierres esta ventana"
/>

// Payment Processing
<Spinner
  $title="Procesando pago"
  $subtitle="Verificando tu información"
/>

// Data Loading
<Spinner
  $title="Cargando información"
  $subtitle="Obteniendo tus datos"
/>
```

### Custom Styling

```typescript
<Spinner
  $title="Custom Title"
  $subtitle="Custom subtitle"
  $titleClassName="text-text-and-icons-brand font-bold text-xl"
  $subtitleClassName="!text-text-and-icons-brand italic"
/>
```

### Conditional Display

```typescript
function SubmitForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading ? (
        <Spinner
          $title="Enviando datos"
          $subtitle="Por favor espera"
        />
      ) : (
        <button onClick={() => setIsLoading(true)}>
          Submit
        </button>
      )}
    </div>
  );
}
```

## 🎨 Design System Integration

### Component Structure

The Spinner uses the CircularProgress component internally:

```tsx
<div role="status">
  <CircularProgress $size={size} $speed={speed} $variant="default" />
  <div>
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
</div>
```

### Typography Classes

- **Title**: Uses `typo-headline-2` design system token
- **Subtitle**: Uses `typo-body-1` with `text-text-and-icons-secondary` color

### Layout

- Vertical flex layout with center alignment
- Gap of 1 unit between spinner and text
- Max width of 240px for text content
- Centered text alignment

## ♿ Accessibility

### ARIA Attributes

The component includes proper accessibility features:

```typescript
<div role="status" aria-label="Loading...">
  <CircularProgress aria-hidden="true" />
  <div>
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
</div>
```

### Screen Reader Support

- Uses `role="status"` for live region announcements
- Customizable `aria-label` for context-specific descriptions
- Semantic HTML with proper heading hierarchy (`h3` for title, `p` for subtitle)
- CircularProgress marked as `aria-hidden` to avoid redundant announcements

### Accessibility Best Practices

```typescript
// ✅ Good: Descriptive text
<Spinner
  $title="Procesando tu solicitud"
  $subtitle="Verificando información"
  aria-label="Processing your application"
/>

// ✅ Good: Context-specific messaging
<Spinner
  $title="Enviando pago"
  $subtitle="No cierres esta ventana"
  aria-label="Processing payment"
/>

// ❌ Avoid: Generic or unclear text
<Spinner $title="Cargando" $subtitle="Espera" />
```

## 🎭 Animation

### Animation Properties

The animation is controlled by the internal CircularProgress component:

- **Type**: Infinite rotation
- **Duration**: Configurable via `$speed` prop (0.5s - 3s)
- **Easing**: Linear
- **Direction**: Clockwise

### Speed Guidelines

| Speed  | Duration | Use Case                             |
| ------ | -------- | ------------------------------------ |
| Fast   | 0.5s     | Quick actions, form submissions      |
| Normal | 1.0s     | Standard loading states (default)    |
| Slow   | 2.0s     | Long processes, data synchronization |

### Custom Speed Examples

```typescript
// Quick action (0.5 seconds)
<Spinner
  $speed={0.5}
  $title="Guardando"
  $subtitle="Casi listo"
/>

// Normal (1 second, default)
<Spinner
  $speed={1}
  $title="Procesando"
  $subtitle="Un momento por favor"
/>

// Long process (2 seconds)
<Spinner
  $speed={2}
  $title="Sincronizando datos"
  $subtitle="Esto puede tomar unos minutos"
/>
```

## 🏗️ Technical Implementation

### Component Structure

```tsx
<div className="flex flex-col items-center gap-4" role="status">
  {/* Circular Progress */}
  <CircularProgress $size={size} $speed={speed} />

  {/* Text Content */}
  <div className="flex flex-col items-center gap-1">
    <div className="max-w-[240px]">
      <h3 className="typo-headline-2">{title}</h3>
    </div>
    <p className="typo-body-1 text-text-and-icons-secondary">{subtitle}</p>
  </div>
</div>
```

### Internal Dependencies

- **CircularProgress**: Provides the animated spinner
- **Design System Tokens**: Uses typography and color tokens
- **Tailwind CSS**: For layout and utility classes

### Performance

- **Optimized**: Uses CSS animations (no JavaScript)
- **GPU Accelerated**: Via CircularProgress rotation
- **No Re-renders**: Animation runs independently
- **Lightweight**: Minimal bundle impact

## 🎨 Styling & Customization

### Container Customization

```typescript
<Spinner
  className="bg-background-secondary p-8 rounded-lg shadow-lg"
  $title="Custom Container"
  $subtitle="With background and padding"
/>
```

### Title Customization

```typescript
<Spinner
  $titleClassName="text-text-and-icons-brand font-bold text-2xl"
  $title="Custom Title Style"
  $subtitle="Default subtitle style"
/>
```

### Subtitle Customization

```typescript
<Spinner
  $title="Default title style"
  $subtitle="Custom subtitle style"
  $subtitleClassName="!text-text-and-icons-brand italic text-sm"
/>
```

### Complete Custom Styling

```typescript
<Spinner
  className="bg-gradient-to-b from-background-primary to-background-secondary p-12 rounded-2xl"
  $titleClassName="text-text-and-icons-danger font-extrabold text-3xl"
  $subtitleClassName="!text-text-and-icons-danger-light text-lg"
  $title="Fully Customized"
  $subtitle="With all styling options"
  $size="lg"
  $speed={1.2}
/>
```

## 📚 Related Components

- **CircularProgress**: Used internally for the spinner animation
- **Button**: Can integrate Spinner in loading state
- **Modal**: Often used together for blocking operations
- **Skeleton**: Alternative loading pattern for content

## 🔗 Resources

- [Figma Design Specs](link-to-figma)
- [CircularProgress Documentation](./circular-progress.md)
- [Accessibility Guidelines](link-to-a11y-docs)
- [Animation Best Practices](link-to-animation-docs)
- [Design Tokens](link-to-tokens-docs)
