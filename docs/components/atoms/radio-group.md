# RadioGroup Component

The RadioGroup component is a higher-level wrapper that manages a group of radio buttons, ensuring only one option can be selected at a time. Built for ease of use with automatic state management and accessibility.

## 🎯 Overview

RadioGroup simplifies the management of multiple radio options by handling selection state, mutual exclusivity, and providing a clean API. It's the recommended way to create radio button groups in the Kueski Design System.

## 📦 Import

```typescript
// Option 1: From main package (recommended)
import { RadioGroup, RadioGroupOption } from '@kueski-dev/kds/react';
import type { RadioGroupProps, RadioGroupOptionProps } from '@kueski-dev/kds/react';

// Option 2: From atoms category
import { RadioGroup, RadioGroupOption } from '@kueski-dev/kds/react/atoms/RadioGroup';
import type {
  RadioGroupProps,
  RadioGroupOptionProps,
} from '@kueski-dev/kds/react/atoms/RadioGroup';

// Option 3: Direct component import (tree-shaking optimized)
import { RadioGroup, RadioGroupOption } from '@kueski-dev/kds/react/atoms/RadioGroup';
import type {
  RadioGroupProps,
  RadioGroupOptionProps,
} from '@kueski-dev/kds/react/atoms/RadioGroup';
```

## 🎨 Features

- **Automatic State Management**: Handles selection state internally
- **Mutual Exclusivity**: Only one option selected at a time
- **Flexible Layouts**: Horizontal or vertical orientation
- **Individual Disabled Options**: Disable specific options
- **Group-Level Disabled**: Disable entire group
- **Custom Styling**: Full control via className props
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Form Integration**: Works with form libraries
- **Transient Props**: `$` prefix prevents DOM warnings

## 📏 Orientations

| Orientation  | Layout             | Use Case                                  |
| ------------ | ------------------ | ----------------------------------------- |
| `vertical`   | Stacked vertically | Default, most forms (3+ options)          |
| `horizontal` | Side by side       | Short lists (2-4 options), compact spaces |

## 🔧 Props

### RadioGroup Props

| Prop             | Type                           | Default      | Description                          |
| ---------------- | ------------------------------ | ------------ | ------------------------------------ |
| `$value`         | `string`                       | `undefined`  | Currently selected value             |
| `$onValueChange` | `(value: string) => void`      | `undefined`  | Callback when selection changes      |
| `$name`          | `string`                       | `undefined`  | Name attribute for radio group       |
| `disabled`       | `boolean`                      | `false`      | Disable entire group                 |
| `$orientation`   | `'horizontal'` \| `'vertical'` | `'vertical'` | Layout orientation                   |
| `className`      | `string`                       | `undefined`  | Additional CSS classes for container |
| `children`       | `React.ReactNode`              | **Required** | RadioGroupOption components          |

### RadioGroupOption Props

| Prop              | Type      | Default      | Description                                 |
| ----------------- | --------- | ------------ | ------------------------------------------- |
| `$value`          | `string`  | **Required** | Value of this option                        |
| `$label`          | `string`  | **Required** | Label text for this option                  |
| `disabled`        | `boolean` | `false`      | Disable this specific option                |
| `className`       | `string`  | `undefined`  | Additional CSS classes for option container |
| `$radioClassName` | `string`  | `undefined`  | Additional CSS classes for radio button     |
| `$labelClassName` | `string`  | `undefined`  | Additional CSS classes for label text       |

### Props Interface

```typescript
interface RadioGroupProps {
  $value?: string;
  $onValueChange?: (value: string) => void;
  $name?: string;
  disabled?: boolean;
  $orientation?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
}

interface RadioGroupOptionProps {
  $value: string;
  $label: string;
  disabled?: boolean;
  className?: string;
  $radioClassName?: string;
  $labelClassName?: string;
}
```

## 💻 Usage Examples

### Basic Usage

```typescript
import { RadioGroup, RadioGroupOption } from '@kueski-dev/kds/react';

function BasicRadioGroup() {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup $value={value} $onValueChange={setValue}>
      <RadioGroupOption $value="option1" $label="Option 1" />
      <RadioGroupOption $value="option2" $label="Option 2" />
      <RadioGroupOption $value="option3" $label="Option 3" />
    </RadioGroup>
  );
}
```

### Horizontal Orientation

```typescript
<RadioGroup
  $value={value}
  $onValueChange={setValue}
  $orientation="horizontal"
>
  <RadioGroupOption $value="small" $label="Small" />
  <RadioGroupOption $value="medium" $label="Medium" />
  <RadioGroupOption $value="large" $label="Large" />
</RadioGroup>
```

### With Name Attribute

```typescript
<RadioGroup
  $value={value}
  $onValueChange={setValue}
  $name="payment-method"
>
  <RadioGroupOption $value="credit-card" $label="Credit Card" />
  <RadioGroupOption $value="debit-card" $label="Debit Card" />
  <RadioGroupOption $value="paypal" $label="PayPal" />
</RadioGroup>
```

### Disabled Group

```typescript
<RadioGroup
  $value="option1"
  $onValueChange={setValue}
  disabled
>
  <RadioGroupOption $value="option1" $label="Option 1" />
  <RadioGroupOption $value="option2" $label="Option 2" />
  <RadioGroupOption $value="option3" $label="Option 3" />
</RadioGroup>
```

### Individual Disabled Options

```typescript
<RadioGroup $value={value} $onValueChange={setValue}>
  <RadioGroupOption $value="available" $label="Available Option" />
  <RadioGroupOption $value="disabled1" $label="Disabled Option" disabled />
  <RadioGroupOption $value="another" $label="Another Available" />
  <RadioGroupOption $value="disabled2" $label="Also Disabled" disabled />
</RadioGroup>
```

### Custom Container Styling

```typescript
<RadioGroup
  $value={value}
  $onValueChange={setValue}
  className="space-y-6 p-6 bg-gray-50 rounded-lg border border-gray-200"
>
  <RadioGroupOption $value="option1" $label="Option 1" />
  <RadioGroupOption $value="option2" $label="Option 2" />
</RadioGroup>
```

### Custom Option Styling

```typescript
<RadioGroup $value={value} $onValueChange={setValue}>
  <RadioGroupOption
    $value="premium"
    $label="Premium Plan"
    className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
  />
  <RadioGroupOption
    $value="basic"
    $label="Basic Plan"
    className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
  />
</RadioGroup>
```

### With Custom Radio and Label Styles

```typescript
<RadioGroup $value={value} $onValueChange={setValue}>
  <RadioGroupOption
    $value="custom"
    $label="Custom Styled"
    $radioClassName="w-8 h-8 border-4"
    $labelClassName="text-lg font-bold text-purple-600"
  />
</RadioGroup>
```

## 🎨 Layout Examples

### Vertical (Default)

```typescript
<RadioGroup $value={value} $onValueChange={setValue}>
  <RadioGroupOption $value="opt1" $label="Option 1" />
  <RadioGroupOption $value="opt2" $label="Option 2" />
  <RadioGroupOption $value="opt3" $label="Option 3" />
</RadioGroup>
```

**Result**: Options stacked vertically with `space-y-3` gap

### Horizontal

```typescript
<RadioGroup
  $value={value}
  $onValueChange={setValue}
  $orientation="horizontal"
>
  <RadioGroupOption $value="opt1" $label="Option 1" />
  <RadioGroupOption $value="opt2" $label="Option 2" />
  <RadioGroupOption $value="opt3" $label="Option 3" />
</RadioGroup>
```

**Result**: Options displayed in a row with equal width and `gap-3`

## 🏗️ Technical Implementation

### Component Structure

```tsx
<div className={orientation === 'horizontal' ? 'flex gap-3' : 'space-y-3'}>
  {/* Each option */}
  <div className="flex items-center space-x-3">
    <Radio
      $checked={value === optionValue}
      $disabled={disabled || optionDisabled}
      $name={name}
      $value={optionValue}
      onChange={() => onValueChange(optionValue)}
    />
    <RadioLabel $disabled={disabled || optionDisabled}>{label}</RadioLabel>
  </div>
</div>
```

### State Management

RadioGroup manages selection state internally:

```typescript
const [selectedValue, setSelectedValue] = useState(initialValue);

const handleChange = (newValue: string) => {
  setSelectedValue(newValue);
  onValueChange?.(newValue);
};
```

### Mutual Exclusivity

When one option is selected, others are automatically deselected:

```typescript
<Radio
  $checked={value === optionValue}  // Only true for selected option
  onChange={() => onValueChange(optionValue)}  // Updates group state
/>
```

## 🎨 Styling & Customization

### Design System Integration

Uses these spacing and layout tokens:

- `space-y-3` - Vertical gap between options (12px)
- `gap-3` - Horizontal gap between options (12px)
- `space-x-3` - Gap between radio and label (12px)

### Container Customization

```typescript
// Background and padding
<RadioGroup
  className="p-6 bg-blue-50 rounded-lg"
  $value={value}
  $onValueChange={setValue}
>
  ...
</RadioGroup>

// With border
<RadioGroup
  className="border-2 border-blue-200 rounded-xl p-8"
  $value={value}
  $onValueChange={setValue}
>
  ...
</RadioGroup>
```

### Option Customization

```typescript
// Card-like options
<RadioGroupOption
  $value="premium"
  $label="Premium Plan - $29/mo"
  className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
/>

// With icons or badges
<RadioGroupOption
  $value="recommended"
  $label="Recommended Plan"
  className="relative p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
/>
```

## 📚 Related Components

- **Radio**: Individual radio button component
- **RadioLabel**: Label component for radio buttons
- **Checkbox**: For multi-select options
- **Select**: For dropdown selections with many options
- **Toggle**: For binary on/off states

## 🔗 Resources

- [Figma Design Specs](link-to-figma)
- [Radio Documentation](./radio.md)
- [Form Integration Guide](link-to-forms)
- [Accessibility Guidelines](link-to-a11y)
