The AmountInput component provides a specialized input field for handling monetary amounts with built-in formatting, validation, and feedback in a chip or a custom configurable message.

## Features
- **Automatic Formatting**: Displays numbers with Mexican locale formatting (e.g., "5,400")
- **Number-Only Input**: Prevents non-numeric input and handles paste operations intelligently
- **Length Limitation**: Configurable maximum length (default: 5 digits, supports up to 99,999)
- **Smart Validation**: Built-in min/max validation with contextual chip messages
- **Locked State**: Visual lock indicator with disabled functionality
- **Mode-Specific Messages**: Different validation messages for loan vs payment contexts
- **Focus Management**: Edit button appears only when input is not focused and not locked

## Usage
```tsx
// Basic example
<AmountInput
  $min={500}
  $max={15000}
  $mode="loan"
  $onChange={(value) => console.log(value)}
/>

// Full configured example
<AmountInput
  $value={5000}
  $placeholder={1000}
  $label="Custom message for the chip"
  $error="Custom error message"
  $locked={false}
  $min={500}
  $max={15000}
  $mode="loan"
  $maxLength={5}
  $editText="Modificar"
  $onChange={(value, isValid) => console.log('Amount changed:', value, 'Valid:', isValid)}
/>
```

## Props
| `Prop`         | `Type`                                              | Description                                          |
|----------------|-----------------------------------------------------|------------------------------------------------------|
| `className`    | `string`                                            | Custom class name for the root element               |
| `$value`       | `number \| null`                                    | Current numeric value of the input                   |
| `$placeholder?`| `number`                                            | Placeholder number (will be formatted automatically) |
| `$label?`      | `string`                                            | **⚠️ EXCEPTIONAL USE**: Custom message that **overrides** all automatic validation. Use only for hotfixes or exceptional business logic changes |
| `$error?`      | `string`                                            | **⚠️ EXCEPTIONAL USE**: Custom error message that **completely disables** all automatic validation. Use only for hotfixes or exceptional business logic changes |
| `$locked?`     | `boolean`                                           | Disables input and shows lock icon                   |
| `$min`         | `number`                                            | Minimum allowed value (required for validation)      |
| `$max`         | `number`                                            | Maximum allowed value (required for validation)      |
| `$mode`        | `'loan' \| 'payment'`                               | Context mode for default validation messages         |
| `$maxLength?`  | `number`                                            | Maximum number of digits allowed (default: 5)        |
| `$editText?`   | `string`                                            | Text displayed in the edit button (default: "Editar") |
| `$onChange`    | `(value: number \| null, isValid: boolean) => void` | Callback fired when the value changes. **isValid** indicates if the value passes internal validation (min/max bounds) |

## Use Cases

### Basic Amount Input (Recommended)
Use with just `$min`, `$max`, and `$mode` for standard amount collection. The component automatically handles all validation logic and displays contextual messages based on the specified range and business context.

### ⚠️ Custom Override Messages (EXCEPTIONAL USE ONLY)
**Important**: Using `$label` or `$error` completely disables the built-in validation logic and business rules.

- **`$label`**: Overrides ALL automatic messages and forces the chip to display your custom message with default styling. The component will no longer show min/max validation or contextual business messages.

- **`$error`**: Completely disables ALL automatic validation and forces the chip to show your custom error message with error styling. Use only for exceptional cases or hotfixes.

**When to use**: Only for emergency hotfixes when business logic needs to change rapidly, or exceptional cases where the built-in validation doesn't meet specific requirements. For most use cases, the automatic validation should cover all business needs.

### Locked State
Set `$locked={true}` to disable the input and display a lock icon, useful for pre-filled amounts that shouldn't be modified by the user.

### Different Contexts
Use `$mode="loan"` for loan amount inputs or `$mode="payment"` for payment amounts. This affects the automatic validation messages displayed in the chip component.

### Length Control
Adjust `$maxLength` to control how many digits users can input. Default is 5 digits (supporting up to 99,999), but can be customized based on your use case.
