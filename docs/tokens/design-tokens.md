# Design Tokens

This document describes the design token system used in the Kueski Design System.

## 🎨 Token Categories

The design system uses a comprehensive token system organized into categories:

- **Color Tokens**: Brand colors, semantic colors, and neutral palettes
- **Typography Tokens**: Font families, sizes, weights, and line heights
- **Spacing Tokens**: Consistent spacing scale
- **Border Radius Tokens**: Unified border radius values
- **Shadow Tokens**: Elevation and depth system
- **Animation Tokens**: Transition and animation values

## 🎨 Color Tokens

### Brand Colors

```css
--color-background-brand
--color-background-brand-subtle
--color-text-and-icons-brand
--color-text-and-icons-brand-a50
--color-text-and-icons-brand-on-invert
--color-text-and-icons-brand-on-subtle
```

### Semantic Colors

```css
--color-background-success
--color-background-success-subtle
--color-text-and-icons-success
--color-text-and-icons-success-on-invert
--color-text-and-icons-success-on-subtle
--color-background-warning
--color-background-warning-subtle
--color-text-and-icons-warning
--color-text-and-icons-warning-on-invert
--color-text-and-icons-warning-on-subtle
--color-background-danger
--color-background-danger-subtle
--color-text-and-icons-danger
--color-text-and-icons-danger-on-invert
--color-text-and-icons-danger-on-subtle
--color-background-upsell
--color-background-upsell-subtle
--color-text-and-icons-upsell
--color-text-and-icons-upsell-on-subtle
```

### Neutral Colors

```css
--color-background-primary
--color-background-secondary
--color-background-secondary-cool
--color-background-secondary-neutral
--color-background-secondary-warm
--color-background-tertiary
--color-background-tertiary-cool
--color-background-tertiary-neutral
--color-background-tertiary-warm
--color-text-and-icons-primary
--color-text-and-icons-primary-a50
--color-text-and-icons-secondary
--color-text-and-icons-secondary-a50
--color-text-and-icons-tertiary
--color-text-and-icons-tertiary-a50
--color-text-and-icons-always-white
--color-text-and-icons-always-white-a50
```

### State Colors

```css
--color-states-hover
--color-states-pressed
--color-states-disabled
--color-stroke-primary
--color-stroke-primary-a50
--color-stroke-secondary
--color-stroke-secondary-a50
--color-stroke-tertiary
--color-stroke-tertiary-a50
--color-stroke-brand
--color-stroke-success
--color-stroke-warning
--color-stroke-error
--color-stroke-upsell
```

## 📝 Typography Tokens

### Font Families

```css
--font-family-primary
--font-family-secondary
--font-family-mono
```

### Font Sizes

```css
--text-mini
--text-meta
--text-body-2
--text-body-1
--text-headline-3
--text-headline-2
--text-headline-1
--text-amount
```

### Font Weights

```css
--font-weight-light
--font-weight-normal
--font-weight-medium
--font-weight-semibold
--font-weight-bold
--font-weight-extrabold
--font-weight-black
```

### Line Heights

```css
--line-height-none
--line-height-tight
--line-height-snug
--line-height-normal
--line-height-relaxed
--line-height-loose
```

## 📏 Spacing Tokens

### Spacing Scale

```css
--spacing-none
--spacing-quarter
--spacing-half
--spacing-x1
--spacing-x2
--spacing-x3
--spacing-x4
--spacing-x5
--spacing-x6
--spacing-x7
--spacing-x8
```

### Negative Spacing

```css
--spacing-minus-1
--spacing-minus-2
--spacing-minus-3
--spacing-minus-4
```

## 🔲 Border Radius Tokens

### Border Radius Scale

```css
--radius-none
--radius-x1
--radius-x2
--radius-x3
--radius-x4
--radius-x5
--radius-x6
--radius-max
```

### Component Border Radius

```css
--radius-button
--radius-input
--radius-card
--radius-modal
--radius-badge
```

## 🌟 Shadow Tokens

### Elevation System

```css
--shadow-none
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
--shadow-2xl
```

### Component Shadows

```css
--shadow-button
--shadow-card
--shadow-modal
--shadow-tooltip
```

## ⚡ Animation Tokens

### Transition Durations

```css
--duration-75
--duration-100
--duration-150
--duration-200
--duration-300
--duration-500
--duration-700
--duration-1000
```

### Transition Easing

```css
--ease-linear
--ease-in
--ease-out
--ease-in-out
--ease-bounce
```

### Animation Keyframes

```css
/* Animation Keyframes */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
```

## 🎯 Usage in Components

### Tailwind CSS Classes

```typescript
// Using design tokens in Tailwind classes
<button className="bg-background-brand text-text-white px-4 py-2 rounded-radius-md">
  Click me
</button>
```

### CSS Custom Properties

```css
/* Using design tokens in CSS */
.button {
  background-color: var(--color-background-brand);
  color: var(--color-text-white);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-200) var(--ease-in-out);
}
```

### CVA Variants

```typescript
import { cva } from 'class-variance-authority';

export const buttonVariants = cva('inline-flex items-center justify-center', {
  variants: {
    $variant: {
      primary: 'bg-background-brand text-text-white',
      secondary: 'bg-background-secondary text-text-primary',
    },
    $size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
});
```

## 🔄 Token Updates

### Adding New Tokens

1. Add the token to the appropriate CSS file in `packages/react/src/styles/tokens/`
2. Update the TypeScript types in `packages/react/src/styles/types/`
3. Add documentation to this file
4. Update component styles that use the token
5. Test the changes across all components

### Modifying Existing Tokens

1. Update the token value in the CSS file
2. Verify the change doesn't break existing components
3. Update documentation
4. Test the changes across all components
5. Consider the impact on existing projects

### Deprecating Tokens

1. Mark the token as deprecated in documentation
2. Add a warning comment in the CSS file
3. Provide migration guidance
4. Remove the token in the next major version

## 📊 Token Organization

### File Structure

```text
packages/react/src/styles/tokens/
├── colors.css           # Color tokens
├── typography.css       # Typography tokens
├── spacing.css          # Spacing tokens
├── border-radius.css    # Border radius tokens
├── shadows.css          # Shadow tokens
├── animations.css       # Animation tokens
└── index.css           # All token imports
```

## 🧪 Testing Tokens

### Visual Testing

```typescript
// Test token values in Storybook
export const TokenShowcase: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="bg-background-brand text-text-white p-4">
        Brand Color
      </div>
      <div className="bg-background-secondary text-text-primary p-4">
        Secondary Color
      </div>
    </div>
  ),
};
```

### Unit Testing

```typescript
// Test token values in components
describe('Button Tokens', () => {
  it('should use correct brand color', () => {
    render(<Button $variant="primary">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-background-brand');
  });
});
```

## 📚 Resources

- [Design Tokens W3C Specification](https://design-tokens.github.io/community-group/format/)
- [Tailwind CSS Custom Properties](https://tailwindcss.com/docs/customizing-colors#using-css-custom-properties)

## 🛠️ Token Generation

The design tokens are automatically generated from Figma using the Kueski Design System CLI. This ensures consistency between design and code.

### CLI Commands

```bash
# Download tokens from Figma
pnpm run cli download-tokens --figma-token YOUR_TOKEN

# Parse tokens and generate CSS
pnpm run cli parse-tokens

# Complete workflow
pnpm run cli download-tokens && pnpm run cli parse-tokens
```

### Generated Files

The CLI generates the following files in `packages/react/src/styles/tokens/`:

- `colors.css` - Color tokens
- `spacings.css` - Spacing tokens
- `font-sizes.css` - Typography tokens
- `radius.css` - Border radius tokens
- `gradients.css` - Gradient tokens
- `index.css` - Main token file

For more information, see the [CLI Guide](../tools/cli-guide.md).

## 🔗 Resources

- [CLI Guide](../tools/cli-guide.md) - How to use the design system CLI
- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Class Variance Authority](https://cva.style/)
- [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178946/Figma-Tokens)
