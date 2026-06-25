# Divider

A divider component for separating content sections with different thickness options.

## Overview

The Divider component provides a simple way to create visual separation between content sections. It supports three thickness options and uses the design system's stroke color tokens.

## Import

```tsx
import { Divider } from '@kueski-dev/kds/react';
```

## Variants

### Thickness

The divider supports three thickness options:

- **sm** (0.5px) - Small divider for subtle separation
- **md** (1px) - Medium divider for standard separation (default)
- **lg** (2px) - Large divider for strong separation

## Props

| Prop         | Type                   | Default | Description                                            |
| ------------ | ---------------------- | ------- | ------------------------------------------------------ |
| `$thickness` | `'sm' \| 'md' \| 'lg'` | `'md'`  | Thickness of the divider (sm: 0.5px, md: 1px, lg: 2px) |
| `className`  | `string`               | -       | Custom CSS class name                                  |

## Usage Examples

### Basic Usage

```tsx
<Divider />
```

### Different Thicknesses

```tsx
<Divider $thickness="sm" />
<Divider $thickness="md" />
<Divider $thickness="lg" />
```

### Custom Width

```tsx
<Divider $thickness="md" className="min-w-[600px]" />
```

### In Context

```tsx
<div>
  <h2>Section 1</h2>
  <p>Content for section 1</p>

  <Divider $thickness="md" />

  <h2>Section 2</h2>
  <p>Content for section 2</p>
</div>
```

## Styling

The divider uses the following design tokens:

- **Color**: `bg-stroke-tertiary-a50`
- **Height**: Based on thickness variant
  - `sm`: 0.5px
  - `md`: 1px
  - `lg`: 2px

### Custom Styling

You can override the default minimum width using the `className` prop:

```tsx
<Divider className="min-w-[200px]" />
<Divider className="min-w-[800px]" />

// Other classes work normally
<Divider className="bg-red-500" />
```

## Accessibility

The divider is a purely visual element and doesn't require specific accessibility attributes. It serves as a visual separator and doesn't interfere with screen readers.

## Related Components

- **Card** - For grouping related content
- **Spacer** - For adding vertical spacing between elements
