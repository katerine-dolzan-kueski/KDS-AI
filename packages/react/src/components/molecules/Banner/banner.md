# Banner Component

The Banner component is a flexible notification system in the Kueski Design System, providing contextual messaging with multiple variants, optional actions, and dismissible functionality.

## 🎯 Overview

The Banner component is built with accessibility in mind and supports multiple variants for different types of notifications. It uses a composition pattern similar to Radix UI for flexible content structure and integrates seamlessly with the design system's color tokens and typography.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Banner } from '@kueski-dev/kds/react';
import type { BannerRootProps, BannerVariant } from '@kueski-dev/kds/react';
import { bannerVariants } from '@kueski-dev/kds/react';

// Option 2: From molecules category
import { Banner } from '@kueski-dev/kds/react/molecules';
import type { BannerRootProps, BannerVariant } from '@kueski-dev/kds/react/molecules';
import { bannerVariants } from '@kueski-dev/kds/react/molecules';
```

## 🎨 Variants

The Banner component supports five semantic variants, each with appropriate colors and icons:

| Variant       | Description            | Use Case              | Color Theme    |
| ------------- | ---------------------- | --------------------- | -------------- |
| `information` | Informational messages | General notifications | Brand blue     |
| `success`     | Success confirmations  | Completed actions     | Success green  |
| `warning`     | Warning messages       | Caution notifications | Warning yellow |
| `error`       | Error messages         | Failed actions        | Error red      |
| `upsell`      | Promotional content    | Premium features      | Upsell purple  |

## 🔧 Component Props Reference

### Banner (Root) Props

| Prop           | Type            | Default         | Description                                                    |
| -------------- | --------------- | --------------- | -------------------------------------------------------------- |
| `$variant`     | `BannerVariant` | `'information'` | The visual variant of the banner                               |
| `$outline`     | `boolean`       | `false`         | Whether to show the outline border                             |
| `$alternative` | `boolean`       | `false`         | Alternative mode with dark background and inverted text colors |
| `onClose`      | `() => void`    | `undefined`     | Callback fired when the close button is clicked                |
| `className`    | `string`        | `undefined`     | Custom CSS class name for additional styling                   |

### Banner.Icon Props

| Prop        | Type        | Default     | Description                                                             |
| ----------- | ----------- | ----------- | ----------------------------------------------------------------------- |
| `className` | `string`    | `undefined` | Custom CSS class name for additional styling                            |
| `children`  | `ReactNode` | `undefined` | Custom icon content - when provided, overrides the default variant icon |

### Banner.Content Props

| Prop        | Type     | Default     | Description                                  |
| ----------- | -------- | ----------- | -------------------------------------------- |
| `className` | `string` | `undefined` | Custom CSS class name for additional styling |

### Banner.Title Props

| Prop        | Type     | Default     | Description                                  |
| ----------- | -------- | ----------- | -------------------------------------------- |
| `className` | `string` | `undefined` | Custom CSS class name for additional styling |

### Banner.Body Props

| Prop        | Type     | Default     | Description                                  |
| ----------- | -------- | ----------- | -------------------------------------------- |
| `className` | `string` | `undefined` | Custom CSS class name for additional styling |

### Banner.Close Props

| Prop        | Type     | Default     | Description                                  |
| ----------- | -------- | ----------- | -------------------------------------------- |
| `className` | `string` | `undefined` | Custom CSS class name for additional styling |

### Basic Banner

```tsx
import { Banner } from '@kueski-dev/kds/react';

// $variant = information | success | warning | error | upsell
<Banner $variant="information" onClose={() => console.log('Closed')}>
  <Banner.Icon />
  <Banner.Content>
    <Banner.Title>Information</Banner.Title>
    <Banner.Body>This is an informational message for the user.</Banner.Body>
    <ButtonGroup $orientation="horizontal" className={'pt-3 gap-3 w-full'}>
      <Button $variant="primary">Primary action</Button>
      <Button $variant="primary" $mode="link">
        Secondary action
      </Button>
    </ButtonGroup>
  </Banner.Content>
  <Banner.Close />
</Banner>;
```

## 🎨 Styling

### Custom Styling

You can customize the Banner appearance using the `className` prop:

```tsx
<Banner
  $variant="information"
  className="custom-banner-class"
  onClose={() => console.log('Closed')}
>
  {/* Banner content */}
</Banner>
```

### Outline Variant

The Banner supports an outline variant that adds a colored border:

```tsx
<Banner $variant="information" $outline={true}>
  {/* Banner content */}
</Banner>
```

### Alternative Mode

The Banner supports an alternative mode with dark background and inverted text colors, perfect for dark themes or toast-like notifications:

```tsx
<Banner $variant="information" $alternative={true}>
  <Banner.Icon />
  <Banner.Content>
    <Banner.Title>Information</Banner.Title>
    <Banner.Body>This is an alternative banner with dark styling.</Banner.Body>
    <ButtonGroup $orientation="horizontal" className="pt-3 gap-3 w-full">
      <Button $variant="primary" $mode="link" $size="sm">
        Primary action
      </Button>
      <Button $variant="primary" $mode="link" $size="sm">
        Secondary action
      </Button>
    </ButtonGroup>
  </Banner.Content>
  <Banner.Close />
</Banner>
```

**Alternative Mode Features:**

- **Background**: `bg-background-invert-primary` (dark background)
- **Text**: `text-text-and-icons-invert-primary` (light text)
- **Icons**: Preserve original colors (brand, success, warning, error)
- **Close icon**: `stroke-invert` (light close icon)
- **Buttons**: Recommended to use `$mode="link"` for better contrast

### Custom Icons

The Banner supports custom icons by passing children to the `Banner.Icon` component:

```tsx
<Banner $variant="information" $alternative onClose={handleClose}>
  <Banner.Icon>
    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
      <span className="text-white text-xs font-bold">!</span>
    </div>
  </Banner.Icon>
  <Banner.Content>
    <Banner.Title>Custom Icon</Banner.Title>
    <Banner.Body>This banner uses a custom icon instead of the default variant icon.</Banner.Body>
  </Banner.Content>
  <Banner.Close />
</Banner>
```

**Custom Icon Guidelines:**

- **Size**: Use `w-5 h-5` (20px) to match the default icon size
- **Styling**: Apply appropriate colors and styling for your custom icon
- **Accessibility**: Ensure your custom icon is accessible and has proper contrast
- **Fallback**: If no children are provided, the default variant icon will be used

## 🔄 State Management

### Dismissible Behavior

The Banner automatically shows a close button when the `onClose` prop is provided:

```tsx
// Shows close button
<Banner onClose={() => setVisible(false)}>
  {/* Content */}
</Banner>

// No close button
<Banner>
  {/* Content */}
</Banner>
```
