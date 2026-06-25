# Radio Component

The Radio component is a single radio button that allows users to select one option from a set of mutually exclusive choices in the Kueski Design System. Built with comprehensive accessibility features and full keyboard support.

## 🎯 Overview

The Radio component provides a customizable radio button with multiple interactive states (hover, focus, pressed, disabled) and full accessibility support. It uses transient props (`$` prefix) to prevent React DOM warnings and includes hidden native input for proper form integration.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { Radio, RadioIndicator, RadioLabel } from '@kueski-dev/kds/react';
import type { RadioProps } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { Radio, RadioIndicator, RadioLabel } from '@kueski-dev/kds/react/atoms/Radio';
import type { RadioProps } from '@kueski-dev/kds/react/atoms/Radio';

// Option 3: Direct component import (tree-shaking optimized)
import { Radio, RadioIndicator, RadioLabel } from '@kueski-dev/kds/react/atoms/Radio';
import type { RadioProps } from '@kueski-dev/kds/react/atoms/Radio';
```

## 🎨 Features

- **Interactive States**: Hover, focus, pressed, and disabled with visual feedback
- **Accessibility**: ARIA attributes, keyboard navigation (Enter/Space), screen reader support
- **Form Integration**: Hidden native radio input for form submission
- **Customizable Styling**: Full control via `className` prop
- **Polymorphic Rendering**: Use `$asChild` with Radix UI Slot
- **Transient Props**: `$` prefix prevents React DOM warnings
- **Unified Events**: Supports mouse and keyboard activation
- **State Management**: Controlled or uncontrolled usage

## 📏 Size

Fixed size: **28px × 28px** (w-6 h-6)

## 🔧 Props

### Radio Props

| Prop        | Type                                    | Default     | Description                             |
| ----------- | --------------------------------------- | ----------- | --------------------------------------- |
| `checked`   | `boolean`                               | `false`     | Whether the radio is checked            |
| `disabled`  | `boolean`                               | `false`     | Whether the radio is disabled           |
| `$value`    | `string`                                | `undefined` | Value of the radio button               |
| `$name`     | `string`                                | `undefined` | Name of the radio group                 |
| `className` | `string`                                | `undefined` | Additional CSS classes                  |
| `$asChild`  | `boolean`                               | `false`     | Render as child element (Radix UI Slot) |
| `children`  | `React.ReactNode`                       | `undefined` | Children when using $asChild            |
| `onChange`  | `(checked: boolean) => void`            | `undefined` | Change handler                          |
| `onClick`   | `(event: RadioActivationEvent) => void` | `undefined` | Click handler (mouse + keyboard)        |
| `onFocus`   | `(event: React.FocusEvent) => void`     | `undefined` | Focus handler                           |
| `onBlur`    | `(event: React.FocusEvent) => void`     | `undefined` | Blur handler                            |

### RadioLabel Props

| Prop        | Type              | Default      | Description                   |
| ----------- | ----------------- | ------------ | ----------------------------- |
| `children`  | `React.ReactNode` | **Required** | Label text content            |
| `disabled`  | `boolean`         | `false`      | Whether the label is disabled |
| `className` | `string`          | `undefined`  | Additional CSS classes        |
| `onClick`   | `() => void`      | `undefined`  | Click handler                 |

### Props Interface

```typescript
interface RadioProps {
  disabled?: boolean;
  checked?: boolean;
  $value?: string;
  $name?: string;
  className?: string;
  $asChild?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  onClick?: (event: RadioActivationEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
}

interface RadioLabelProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

// RadioActivationEvent = React.MouseEvent | React.KeyboardEvent
```

## 💻 Usage Examples

### Basic Usage

```typescript
import { Radio, RadioLabel } from '@kueski-dev/kds/react';

function BasicRadio() {
  return (
    <div className="flex items-center space-x-3">
      <Radio $value="option1" $name="group" />
      <RadioLabel>Option 1</RadioLabel>
    </div>
  );
}
```

### With State Management

```typescript
function ControlledRadio() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Radio
          $value="option1"
          $name="options"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
        <RadioLabel>Option 1</RadioLabel>
      </div>
      <div className="flex items-center space-x-3">
        <Radio
          $value="option2"
          $name="options"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
        <RadioLabel>Option 2</RadioLabel>
      </div>
    </div>
  );
}
```

### Disabled States

```typescript
<div className="space-y-3">
  {/* Enabled */}
  <div className="flex items-center space-x-3">
    <Radio $value="enabled" $name="status" />
    <RadioLabel>Enabled option</RadioLabel>
  </div>

  {/* Disabled unchecked */}
  <div className="flex items-center space-x-3">
    <Radio $value="disabled1" $name="status" disabled />
    <RadioLabel disabled>Disabled unchecked</RadioLabel>
  </div>

  {/* Disabled checked */}
  <div className="flex items-center space-x-3">
    <Radio $value="disabled2" $name="status" checked disabled />
    <RadioLabel disabled>Disabled checked</RadioLabel>
  </div>
</div>
```

### Custom Styling

```typescript
<div className="flex items-center space-x-3">
  <Radio
    $value="custom"
    $name="styled"
    className="w-8 h-8 border-4 border-purple-500"
  />
  <RadioLabel className="text-lg font-bold text-purple-600">
    Custom Styled
  </RadioLabel>
</div>
```

### Polymorphic Rendering

```typescript
<Radio $asChild $value="custom" $name="polymorphic">
  <button
    type="button"
    aria-label="Custom radio button"
    className="w-6 h-6 border-2 rounded-full bg-blue-50 hover:bg-blue-100"
  />
</Radio>
```

### Event Handling

```typescript
function EventHandlingRadio() {
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = (event: string) => {
    setEvents(prev => [...prev, event]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Radio
          $value="option1"
          $name="events"
          onChange={() => addEvent('Changed')}
          onClick={() => addEvent('Clicked')}
          onFocus={() => addEvent('Focused')}
          onBlur={() => addEvent('Blurred')}
        />
        <RadioLabel>Interactive Option</RadioLabel>
      </div>
      <div className="p-4 bg-gray-100 rounded">
        <h4 className="font-semibold mb-2">Event Log:</h4>
        {events.map((event, i) => (
          <p key={i} className="text-sm">{event}</p>
        ))}
      </div>
    </div>
  );
}
```

## 🎨 Interactive States

The Radio component supports multiple visual states:

| State        | Description             | Visual Effect                             |
| ------------ | ----------------------- | ----------------------------------------- |
| **Default**  | Normal unselected state | Gray border                               |
| **Hover**    | Mouse hovers over radio | Light overlay (`bg-states-hover`)         |
| **Pressed**  | Mouse pressed down      | Dark subtle overlay (`bg-states-pressed`) |
| **Focused**  | Keyboard focus          | Blue focus ring                           |
| **Inactive** | Disabled state          | Reduced opacity, gray colors              |
| **Checked**  | Selected state          | Blue border with inner dot                |

### State Visual Reference

```text
Default (Unselected):  ○  Gray border
Hover (Unselected):    ◐  Gray border + light overlay
Pressed (Unselected):  ◑  Blue border + dark overlay
Focused (Unselected):  ◎  Blue border + focus ring

Default (Selected):    ◉  Blue border + blue dot
Hover (Selected):      ◉  Blue border + blue dot + light overlay
Pressed (Selected):    ◉  Blue border + blue dot + dark overlay
Focused (Selected):    ◉  Blue border + blue dot + focus ring

Disabled:              ○/◉ Gray, reduced opacity
```

## 🏗️ Technical Implementation

### Component Structure

```tsx
<div role="radio" aria-checked={checked}>
  {/* Hidden native input for form semantics */}
  <input type="radio" className="sr-only" />

  {/* Visual indicator (outer ring) */}
  <div className="radio-indicator">
    {/* Inner dot (when selected) */}
    <div className="radio-dot" />
  </div>
</div>
```

### State Management

The component uses `useMemo` for optimized state calculation:

```typescript
const currentState = React.useMemo(() => {
  if (disabled) return 'inactive';
  if (isPressed) return 'pressed';
  if (isFocused) return 'focused';
  if (isHovered) return 'hover';
  return 'default';
}, [disabled, isPressed, isFocused, isHovered]);
```

### Unified Event Handling

Unified event handling for mouse and keyboard:

```typescript
const handleClick = createUnifiedActivationHandler(handleActivation, disabled);
const handleKeyboardActivation = createKeyboardActivationHandler(handleActivation, disabled);
```

### Performance

- ✅ `useMemo` for state calculation
- ✅ `useCallback` for event handlers
- ✅ CSS transitions instead of JavaScript animations
- ✅ Minimal re-renders with proper dependencies

## 🎨 Styling & Customization

### Design System Tokens

Uses these design system CSS variables:

- `bg-background-primary` - Default background
- `bg-background-brand` - Selected state (blue)
- `border-stroke-secondary` - Default border
- `border-stroke-brand` - Focus/pressed border
- `bg-states-hover` - Hover overlay
- `bg-states-pressed` - Pressed overlay

### Custom Styling Examples

```typescript
// Large radio button
<Radio
  $className="w-8 h-8"
  $value="large"
  $name="size"
/>

// Custom colors
<Radio
  $className="border-purple-500 checked:border-purple-700"
  $value="custom"
  $name="color"
/>

// With container styling
<div className="p-4 bg-blue-50 rounded-lg">
  <Radio $value="styled" $name="container" />
  <RadioLabel $className="ml-3 text-blue-900">Styled Container</RadioLabel>
</div>
```

## 📚 Related Components

- **RadioGroup**: Higher-level component for managing radio groups
- **Checkbox**: For multi-select options
- **Toggle**: For binary on/off states
- **Select**: For dropdown selections

## 🔗 Resources

- [Figma Design Specs](link-to-figma)
- [RadioGroup Documentation](./radio-group.md)
- [Accessibility Guidelines](link-to-a11y-docs)
- [Form Integration Guide](link-to-forms-docs)
