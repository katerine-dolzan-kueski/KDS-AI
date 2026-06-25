# BottomSheet Component

The BottomSheet component is a flexible modal bottom sheet with intuitive drag-to-resize functionality, smooth animations, and mobile-optimized interactions. It provides a modern alternative to traditional modals with enhanced user experience using the Compound Component Pattern.

## 🎯 Overview

The BottomSheet component is built with accessibility in mind and supports multiple variants, sizes, and behaviors. It features drag-to-resize functionality, smooth animations, and mobile-optimized interactions with Safari-specific fixes. The component uses the Compound Component Pattern for better API design and includes centralized constants for configuration.

## 📦 Import

```typescript
// Option 1: From main package (recommended) - Compound Component Pattern
import { BottomSheet } from '@kueski-dev/kds/react';
import type { BottomSheetProps } from '@kueski-dev/kds/react';

// Option 2: From atoms category - Compound Component Pattern
import { BottomSheet } from '@kueski-dev/kds/react/atoms';
import type { BottomSheetProps } from '@kueski-dev/kds/react/atoms';
```

## 🎨 Variants

### Modal Variants

| Variant    | Description                  | Use Case               | Overlay | Body Scroll  |
| ---------- | ---------------------------- | ---------------------- | ------- | ------------ |
| `modal`    | Has overlay/scrim backdrop   | Primary modal behavior | ✅ Yes  | ❌ Prevented |
| `standard` | No overlay, coexists with UI | Secondary actions      | ❌ No   | ✅ Allowed   |

### Size Variants

| Size         | Height | Use Case             | Drag Behavior            | Notes                           |
| ------------ | ------ | -------------------- | ------------------------ | ------------------------------- |
| `half`       | 50vh   | Quick actions, forms | Can resize to large/full | Default size when not specified |
| `large`      | 90vh   | Detailed content     | Can resize to half/full  | Good for detailed content       |
| `auto`       | 90vh   | Dynamic content      | Can resize to half/full  | Height adjusts to content       |
| `fullscreen` | 100vh  | Full screen content  | Can resize to large/half | Use `$fullScreen` prop instead  |

### Full Screen Mode

The BottomSheet supports a dedicated full screen mode using the `$fullScreen` prop:

| Prop          | Type      | Default  | Description                                   |
| ------------- | --------- | -------- | --------------------------------------------- |
| `$fullScreen` | `boolean` | `false`  | When true, takes full viewport height (100vh) |
| `$size`       | `string`  | `'half'` | Size when `$fullScreen` is false (optional)   |

**Behavior:**

- When `$fullScreen={true}`: Ignores `$size` and uses 100vh height
- When `$fullScreen={false}`: Uses `$size` value or defaults to `'half'`
- When neither is specified: Defaults to `'half'` size

### Variant Behavior Details

#### Modal Variant (`$variant="modal"`)

- **Overlay**: Dark backdrop that can be clicked to dismiss
- **Body Scroll**: Automatically prevented when open
- **Z-index**: High z-index (9999) to appear above all content
- **Use Case**: Primary actions, forms, important content

#### Standard Variant (`$variant="standard"`)

- **Overlay**: No backdrop, coexists with main UI
- **Body Scroll**: Automatically allowed, doesn't interfere with page scrolling
- **Z-index**: Lower z-index, doesn't block other content
- **Use Case**: Secondary actions, supplementary content, tooltips

### Body Scroll Behavior

The body scroll prevention is now automatically handled based on the `$variant` prop:

- **Modal variant**: Body scroll is automatically prevented to ensure the modal takes full focus
- **Standard variant**: Body scroll is automatically allowed to coexist with the main UI
- **No manual configuration needed**: The behavior is determined by the variant choice

## 🔧 Props

### Core BottomSheet Properties

| Prop                  | Type                          | Default     | Description                                                                                      |
| --------------------- | ----------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `$open`               | `boolean`                     | `false`     | Whether the bottom sheet is open                                                                 |
| `$onOpenChange`       | `function`                    | `undefined` | Callback when the bottom sheet should open/close                                                 |
| `$variant`            | `'modal' \| 'standard'`       | `'modal'`   | Visual style variant: 'modal' has overlay, 'standard' coexists with UI                           |
| `$size`               | `'half' \| 'large' \| 'auto'` | `'half'`    | Size of the bottom sheet (optional, defaults to 'half' if not provided and $fullScreen is false) |
| `$fullScreen`         | `boolean`                     | `false`     | Whether the bottom sheet should take full screen height (100vh)                                  |
| `$dismissible`        | `boolean`                     | `true`      | Whether the bottom sheet can be dismissed by clicking outside                                    |
| `$showDragHandle`     | `boolean`                     | `true`      | Whether to show the drag handle at the top of the sheet                                          |
| `$enableDragToResize` | `boolean`                     | `true`      | Whether drag-to-resize functionality is enabled                                                  |
| `$closeOnEscape`      | `boolean`                     | `true`      | Whether to close on escape key press                                                             |
| `className`           | `string`                      | `undefined` | Custom CSS class name for the main container                                                     |
| `$overlay`            | `{ className?: string }`      | `undefined` | Custom overlay configuration with optional className                                             |
| `children`            | `ReactNode`                   | `undefined` | Bottom sheet content (should use BottomSheet.Content)                                            |

### Complete Props Interface

```typescript
interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the bottom sheet is open */
  $open?: boolean;
  /** Callback when the bottom sheet should open/close */
  $onOpenChange?: (open: boolean) => void;
  /** Custom CSS class name for the main container */
  className?: string;
  /** Whether the bottom sheet can be dismissed by clicking outside */
  $dismissible?: boolean;
  /** Whether to show the drag handle at the top of the sheet */
  $showDragHandle?: boolean;
  /** Whether to close on escape key press */
  $closeOnEscape?: boolean;
  /** Bottom sheet variant */
  $variant?: 'modal' | 'standard';
  /** Bottom sheet size (optional, defaults to 'half' if not provided and $fullScreen is false) */
  $size?: 'half' | 'large' | 'auto';
  /** Whether the bottom sheet should take full screen height (100vh) */
  $fullScreen?: boolean;
  /** Enable drag to resize functionality */
  $enableDragToResize?: boolean;
  /** Children content (should use BottomSheet.Content) */
  children?: ReactNode;
  /** Custom overlay configuration */
  $overlay?: {
    className?: string;
  };
}
```

### Sub-component Props

```typescript
// BottomSheet.Content props
interface BottomSheetContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom CSS class name */
  $className?: string;
  /** Content children */
  children?: ReactNode;
}
```

## 🎭 Component Structure

The BottomSheet component uses the **Compound Component Pattern** with specialized sub-components:

### Compound Component Pattern

The BottomSheet uses the Compound Component Pattern, where sub-components are accessed as properties of the main component:

```typescript
// ✅ Correct usage - Compound Component Pattern
<BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
  <BottomSheet.Content $className="space-y-4 px-6 py-4">
    {/* content */}
  </BottomSheet.Content>
</BottomSheet>
```

### BottomSheet.Content

```typescript
interface BottomSheetContentProps {
  /** Custom CSS class name */
  $className?: string;
  /** Content children */
  children?: React.ReactNode;
}
```

## 🚀 Usage Examples

### Basic Usage

```typescript
import { BottomSheet } from '@kueski-dev/kds/react';
import { Button } from '@kueski-dev/kds/react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Bottom Sheet</Button>

      <BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
        <BottomSheet.Content $className="space-y-4 px-6 py-4">
          <h3>Bottom Sheet Title</h3>
          <p>This is the content area.</p>
        </BottomSheet.Content>
      </BottomSheet>
    </div>
  );
}
```

### With Drag Functionality

```typescript
function DragBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet
      $open={isOpen}
      $onOpenChange={setIsOpen}
      $enableDragToResize={true}
      $showDragHandle={true}
    >
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Draggable Bottom Sheet</h3>
        <p>Try dragging the handle to resize!</p>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

### Standard Variant (No Overlay)

```typescript
function StandardBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet
      $open={isOpen}
      $onOpenChange={setIsOpen}
      $variant="standard"
      $size="half"
    >
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Standard Bottom Sheet</h3>
        <p>This variant doesn't have an overlay.</p>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

### Full Screen Bottom Sheet (New)

```typescript
function FullScreenBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet
      $open={isOpen}
      $onOpenChange={setIsOpen}
      $fullScreen={true}
      $enableDragToResize={true}
    >
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Full Screen Bottom Sheet</h3>
        <p>This takes up the full viewport height (100vh) with no rounded corners.</p>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

### Default Size Behavior

```typescript
function DefaultSizeBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet
      $open={isOpen}
      $onOpenChange={setIsOpen}
      // No $size or $fullScreen specified - defaults to 'half'
    >
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Default Size Bottom Sheet</h3>
        <p>This uses the default 'half' size when no size is specified.</p>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

### Size vs FullScreen Examples

```typescript
// Using specific size
<BottomSheet $size="large" $open={isOpen} $onOpenChange={setIsOpen}>
  {/* Content */}
</BottomSheet>

// Using full screen mode
<BottomSheet $fullScreen={true} $open={isOpen} $onOpenChange={setIsOpen}>
  {/* Content */}
</BottomSheet>

// Default behavior (half size)
<BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
  {/* Content */}
</BottomSheet>
```

### Content Only (No Footer)

```typescript
function ContentOnlyBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Content Only</h3>
        <p>This bottom sheet has no footer.</p>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

### With Scrollable Content

```typescript
function ScrollableBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
      <BottomSheet.Content $className="space-y-4 px-6 py-4">
        <h3>Scrollable Content</h3>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="p-4 bg-gray-100 rounded-lg mb-4">
            <h4>Content Block {i + 1}</h4>
            <p>This is scrollable content that exceeds the available height.</p>
          </div>
        ))}
      </BottomSheet.Content>
    </BottomSheet>
  );
}
```

## 🎨 Drag Interactions

The BottomSheet component supports intuitive drag interactions with smooth CSS animations:

### Drag Behavior

| From Size    | Drag Up   | Drag Down        | Click Handle |
| ------------ | --------- | ---------------- | ------------ |
| `half`       | → `large` | → `dismiss`      | → `large`    |
| `large`      | → `full`  | → `half`         | → `full`     |
| `fullscreen` | → `full`  | → `large`/`half` | → `half`     |

### Size vs FullScreen Behavior

| Configuration        | Result                           | Notes                       |
| -------------------- | -------------------------------- | --------------------------- |
| `$fullScreen={true}` | 100vh height, no rounded corners | Ignores `$size` prop        |
| `$size="large"`      | 90vh height, rounded corners     | When `$fullScreen` is false |
| `$size="half"`       | 50vh height, rounded corners     | When `$fullScreen` is false |
| No props specified   | 50vh height, rounded corners     | Defaults to `'half'` size   |

### Custom Styling

```typescript
// Using $className prop on BottomSheet.Content
<BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
  <BottomSheet.Content $className="space-y-4 px-6 py-4 bg-gradient-to-b from-blue-50 to-white">
    <h3>Custom Styled Content</h3>
    <p>This content has custom padding and background.</p>
  </BottomSheet.Content>
</BottomSheet>

// Using Tailwind classes with $className
<BottomSheet $open={isOpen} $onOpenChange={setIsOpen}>
  <BottomSheet.Content $className="space-y-6 px-8 py-6 shadow-inner">
    <h3>Enhanced Styling</h3>
    <p>Custom spacing and shadow effects.</p>
  </BottomSheet.Content>
</BottomSheet>
```

## 🔄 Migration Guide

### From `$size="full"` to `$fullScreen={true}`

The `$size="full"` option has been replaced with the dedicated `$fullScreen` prop for better API clarity:

```typescript
// ❌ Old way (deprecated)
<BottomSheet $size="full" $open={isOpen} $onOpenChange={setIsOpen}>
  {/* Content */}
</BottomSheet>

// ✅ New way (recommended)
<BottomSheet $fullScreen={true} $open={isOpen} $onOpenChange={setIsOpen}>
  {/* Content */}
</BottomSheet>
```

### Size Prop Changes

The `$size` prop is now optional and has a cleaner API:

```typescript
// ✅ All valid configurations
<BottomSheet $size="half" $open={isOpen} $onOpenChange={setIsOpen} />
<BottomSheet $size="large" $open={isOpen} $onOpenChange={setIsOpen} />
<BottomSheet $size="auto" $open={isOpen} $onOpenChange={setIsOpen} />
<BottomSheet $fullScreen={true} $open={isOpen} $onOpenChange={setIsOpen} />
<BottomSheet $open={isOpen} $onOpenChange={setIsOpen} /> {/* Defaults to 'half' */}
```

### Body Scroll Behavior Changes

The `$preventBodyScroll` prop has been removed and is now automatically handled:

```typescript
// ❌ Old way (deprecated)
<BottomSheet $preventBodyScroll={true} $variant="modal" />
<BottomSheet $preventBodyScroll={false} $variant="standard" />

// ✅ New way (automatic)
<BottomSheet $variant="modal" />    // Body scroll automatically prevented
<BottomSheet $variant="standard" /> // Body scroll automatically allowed
```

### Benefits of the New API

- **Clearer intent**: `$fullScreen={true}` is more explicit than `$size="full"`
- **Better TypeScript**: Optional `$size` with clear defaults
- **Consistent behavior**: Full screen mode always uses 100vh with no rounded corners
- **Automatic scroll handling**: Body scroll prevention is determined by variant
- **Simplified API**: Fewer props to configure, more intuitive behavior
- **Backward compatible**: Existing `$size` values continue to work

## 📚 Related Documentation

- [Component Standards](../standards/component-standards.md) - Development standards and composition patterns
- [Design Tokens](../tokens/design-tokens.md) - Color, typography, and spacing tokens
- [Accessibility Patterns](../patterns/accessibility-patterns.md) - Accessibility guidelines
- [Testing Guide](../testing/testing-guide.md) - Testing strategies

## 🔗 Resources

- [Radix UI Portal Documentation](https://www.radix-ui.com/primitives/docs/components/portal) - Portal implementation
