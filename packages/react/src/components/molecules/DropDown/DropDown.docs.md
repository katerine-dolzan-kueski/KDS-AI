The DropDown component currently behaves as a button styled as a dropdown field, suitable for triggering dropdown menus or selection UIs in the Kueski Design System. It does not render a dropdown list by itself.

## Features
- **Customizable Header**: Supports label and secondary label for context and optionality
- **Leading Icon**: Add an icon to the left of the field for visual context
- **Trailing Icon**: Displays an icon on the right (defaults to ChevronBottomIcon) with optional click handler
- **Placeholder and Value**: Shows placeholder when empty, value when selected
- **Helper and Error Text**: Displays contextual help or error messages below the field
- **Disabled State**: Visual and functional support for disabled mode

## Usage
```tsx
// Minimal example
<DropDown
  $placeholder="Select an option"
  $onClick={() => console.log('dropdown clicked')}
/>

// Full configured example
<DropDown
  $label="Payment Method"
  $secondaryLabel="(required)"
  $leadingIcon={<MoneyIcon />}
  $onLeadingClick={() => console.log('leading clicked')}
  $trailingIcon={<AddIcon />}
  $onTrailingClick={() => console.log('trailing clicked')}
  $placeholder="Select payment method"
  $helperText="Choose your preferred payment option"
  $errorText={hasError ? "Please select a valid method" : undefined}
  $disabled={isLoading}
  $onClick={() => console.log('open payment selector')}
/>
```

## Props

| Prop                | Type                      | Description                                                             |
|---------------------|---------------------------|-------------------------------------------------------------------------|
| `className`         | `string`                  | Custom class name for the root element                                  |
| `$disabled`         | `boolean`                 | Disables the field and shows disabled styles                            |
| `$label`            | `string`                  | Main label above the field                                              |
| `$secondaryLabel`   | `string`                  | Optional secondary label (e.g. "(required)")                            |
| `children`          | `ReactNode`               | Content to display when not empty                                       |
| `$leadingIcon`      | `ReactNode`               | Icon to display at the start of the field                               |
| `$onLeadingClick`   | `() => void`              | Click handler for the leading icon                                      |
| `$trailingIcon`     | `ReactNode`               | Icon to display at the end of the field (defaults to ChevronBottomIcon) |
| `$onTrailingClick`  | `() => void`              | Click handler for the trailing icon                                     |
| `$placeholder`      | `string`                  | Placeholder text when no value is selected                              |
| `$isEmpty`          | `boolean`                 | Whether to show placeholder or content                                  |
| `$onClick`          | `() => void`              | Handler for opening the dropdown                                        |
| `$helperText`       | `string`                  | Help or supporting text below the field                                 |
| `$errorText`        | `string \| null \| false` | Error message below the field                                           |

## Use Cases

### Empty State
Use `$isEmpty={true}` to show placeholder text instead `children`. The component will display the `$placeholder` value and apply tertiary text styling to indicate no selection has been made.

### Filled State
Provide content through `children` to show the selected value. This state indicates an active selection and displays the content with primary text styling.

### Interactive Icons
Leading and trailing icons become interactive buttons when their respective click handlers (`$onLeadingClick`, `$onTrailingClick`) are provided. Without handlers, they remain decorative elements. The trailing icon defaults to `<ChevronBottomIcon />` but can be customized by passing a different icon to `$trailingIcon`.

### Default Trailing Icon
When no `$trailingIcon` is specified, the component automatically displays a `<ChevronBottomIcon />` to indicate the dropdown functionality. This can be overridden by explicitly passing a different icon or `null` to hide it.

### Error State
When `$errorText` contains a value (string), the component automatically enters error state with red border styling and displays the error message below the field with an error icon. Note that `$helperText` will not be displayed when `$errorText` is specified.

### Disabled State
Setting `$disabled={true}` prevents all interactions and applies muted styling. The component shows a lock icon instead of the trailing icon to indicate the disabled state.

