# Card Component

The Card component is a flexible container used to group related content and actions in the Kueski Design System. It provides a structured layout with consistent styling and responsive behavior.

## 🎯 Overview

The Card component is designed to organize information in a visually distinct way. It's a simple container that accepts any content as children, providing consistent styling and responsive behavior across different variants and sizes.

The component serves as both:

- A standalone container for displaying content with consistent styling
- A base component used by other components (like Banner) that need a styled container

It provides rounded corners, transitions, and responsive behavior while keeping the content structure flexible.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Card } from '@kueski-dev/kds/react';
import type { CardProps, CardVariant, CardSize } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { Card } from '@kueski-dev/kds/react/atoms/Card';
import type { CardProps, CardVariant, CardSize } from '@kueski-dev/kds/react/atoms/Card';

// Option 3: Direct component import (tree-shaking optimized)
import { Card } from '@kueski-dev/kds/react/atoms/Card';
import type { CardProps, CardVariant, CardSize } from '@kueski-dev/kds/react/atoms/Card';
```

## 🎨 Variants

| Variant     | Description                      | Use Case                                        |
| ----------- | -------------------------------- | ----------------------------------------------- |
| `primary`   | Main card style with border      | Primary content, main cards                     |
| `secondary` | Subtle card style without border | Secondary content, subtle cards                 |
| `base`      | Minimal card with no styling     | As base container for other components (Banner) |

## 📏 Sizes

| Size   | Description                         | Use Case                          |
| ------ | ----------------------------------- | --------------------------------- |
| `sm`   | Small card (120px min-height)       | Compact spaces, sidebars          |
| `md`   | Medium card (160px min-height)      | Standard content                  |
| `lg`   | Large card (200px min-height)       | Detailed content, dashboards      |
| `auto` | Responsive card (adapts to content) | Flexible layouts, dynamic content |

## 🔧 Props

### Core Card Properties

| Prop        | Type          | Default     | Description                                   |
| ----------- | ------------- | ----------- | --------------------------------------------- |
| `$variant`  | `CardVariant` | `'primary'` | Visual style variant of the card              |
| `$size`     | `CardSize`    | `'auto'`    | Size of the card: 'sm', 'md', 'lg', or 'auto' |
| `className` | `string`      | `undefined` | Custom CSS class name for additional styling  |
| `children`  | `ReactNode`   | `undefined` | Card content - any React content              |

### Basic Props

```typescript
interface CardProps {
  /** Card content - any React content */
  children: ReactNode;
  /** Card variant - primary or secondary */
  $variant?: CardVariant;
  /** Card size - small, medium, large, or auto (responsive) */
  $size?: CardSize;
  /** Additional CSS classes for the card */
  className?: string;
  /** Additional props for the card container */
  [key: string]: any;
}
```

### Variant Props

```typescript
interface CardProps {
  /** Card visual variant */
  $variant?: 'primary' | 'secondary' | 'base';
  /** Card size */
  $size?: 'sm' | 'md' | 'lg' | 'auto';
}
```

## 🧩 Content Structure

The Card component accepts any React content as children. You can structure your content using standard HTML elements and CSS classes for proper spacing and layout.

### Note on Usage

The Card component is designed to be:

- A flexible container for any React content
- Used as a base by other components (like Banner) that need a styled container
- Customizable through props and className for additional styling

When used by other components (like `Banner`), the `base` variant is typically used to provide the container structure without additional styling.

## 🚀 Usage Examples

### Basic Usage

```typescript
import { Card } from '@kueski-dev/kds/react';

function MyComponent() {
  return (
    <Card $variant="primary" $size="auto">
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <h3 className="typo-headline-3">Card Title</h3>
        </div>
        <div className="mb-x4">
          <p className="typo-body-1">This is the card content.</p>
        </div>
        <div className="flex justify-end">
          <Button>Action</Button>
        </div>
      </div>
    </Card>
  );
}
```

### Secondary Variant

```typescript
function SecondaryCard() {
  return (
    <Card $variant="secondary" $size="auto">
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <h3 className="typo-headline-3">Payment Summary</h3>
        </div>
        <div>
          <p className="typo-body-1">
            Due date: 28 feb 2025<br />
            Loan amount: $1,400.00<br />
            Total interest: $410.20<br />
            Total to pay: $1,810.20
          </p>
        </div>
      </div>
    </Card>
  );
}
```

### Different Sizes

```typescript
function SizeExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card $variant="primary" $size="sm">
        <div className="p-x4">
          <div className="mb-x2">
            <h3 className="typo-headline-3">Small Card</h3>
          </div>
          <div>
            <p className="typo-body-1">Brief information here.</p>
          </div>
        </div>
      </Card>

      <Card $variant="primary" $size="md">
        <div className="p-x5">
          <div className="mb-x2">
            <h3 className="typo-headline-3">Medium Card</h3>
          </div>
          <div>
            <p className="typo-body-1">Standard content with medium spacing.</p>
          </div>
        </div>
      </Card>

      <Card $variant="primary" $size="lg">
        <div className="p-x6">
          <div className="mb-x2">
            <h3 className="typo-headline-3">Large Card</h3>
          </div>
          <div>
            <p className="typo-body-1">Detailed content with more space.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

### Responsive Auto Size

```typescript
function ResponsiveCard() {
  return (
    <Card $variant="primary" $size="auto">
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <h3 className="typo-headline-3">Responsive Card</h3>
        </div>
        <div>
          <p className="typo-body-1">
            This card adapts to its content size automatically and is fully responsive.
            It will adjust its padding and layout based on screen size.
          </p>
        </div>
      </div>
    </Card>
  );
}
```

### With Actions

```typescript
function CardWithActions() {
  return (
    <Card $variant="primary" $size="auto">
      <div className="p-x4 sm:p-x5 md:p-x6">
        <div className="mb-x3">
          <h3 className="typo-headline-3">Multiple Actions</h3>
        </div>
        <div className="mb-x4">
          <p className="typo-body-1">
            This card shows how to organize multiple action buttons in a card footer.
          </p>
        </div>
        <div className="flex gap-x2">
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="secondary" size="sm">Edit</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      </div>
    </Card>
  );
}
```

### Base Variant (Minimal Styling)

The `base` variant provides minimal styling and is useful as a base container for other components:

```typescript
function MinimalCard() {
  return (
    <Card $variant="base" $size="auto">
      <div className="p-x4">
        <div className="mb-x3">
          <h3 className="typo-headline-3">Minimal Card</h3>
        </div>
        <div>
          <p className="typo-body-1">
            This card uses the base variant with minimal styling.
            It's useful when you need a rounded container without borders or shadows.
          </p>
        </div>
      </div>
    </Card>
  );
}
```

### Semantic Structure

The Card component uses semantic HTML structure:

```typescript
// Card renders as a div container
<Card>
  <div className="p-x4 sm:p-x5 md:p-x6">
    <div className="mb-x3">
      <h3 className="typo-headline-3">Header</h3>
    </div>
    <div className="mb-x4">
      <p className="typo-body-1">Main content area</p>
    </div>
    <div className="flex justify-end">
      <Button>Action</Button>
    </div>
  </div>
</Card>
```

## 📚 Related Documentation

- [Component Standards](../standards/component-standards.md) - Development standards and composition patterns
- [Design Tokens](../tokens/design-tokens.md) - Color, typography, and spacing tokens
- [Accessibility Patterns](../patterns/accessibility-patterns.md) - Accessibility guidelines
- [Testing Guide](../testing/testing-guide.md) - Testing strategies

## 🔗 Resources

- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [WCAG Card Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=412)
