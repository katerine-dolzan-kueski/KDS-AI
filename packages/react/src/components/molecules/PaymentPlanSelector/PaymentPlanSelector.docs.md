The PaymentPlanSelector component provides a comprehensive interface for displaying and selecting payment plan options with individual payment items and an overall plan management interface.

## Features
- **Payment Plan Management**: Complete interface for displaying and managing payment plans
- **Plan Header**: Shows plan summary with change plan functionality
- **Payment Grid**: Responsive grid layout of all payment items
- **Loading States**: Built-in shimmer effects during data loading
- **Interactive Selection**: Individual payment selection with unified callbacks

## Usage
```tsx
// Standard usage
<PaymentPlanSelector
  $plan={3}
  $items={[
    { quincena: 1, amount: 482.00, date: '28 feb 2025' },
    { quincena: 2, amount: 482.00, date: '15 mar 2025' },
    { quincena: 3, amount: 482.00, date: '31 mar 2025' },
  ]}
  $onSelect={(item) => console.log('Selected:', item)}
  $onChangePlan={() => console.log('Change plan clicked')}
/>

// Full configured example
<PaymentPlanSelector
  $plan={4}
  $items={paymentItems}
  $loading={isLoading}
  $planHeaderLabel="Payment Schedule:"
  $planCountLabel={(plan) => `${plan} payments`}
  $changeButtonLabel="Modify Plan"
  $onSelect={(item) => handlePaymentSelection(item)}
  $onChangePlan={() => openPlanEditor()}
/>
```

## Props
| Prop                | Type                                           | Description                                         |
|---------------------|------------------------------------------------|-----------------------------------------------------|
| `$items`            | `PaymentPlanSelectorItemData[]`                | Array of payment plan items to display              |
| `$onSelect`         | `(item: PaymentPlanSelectorItemData) => void`  | Callback fired when any payment item is selected    |
| `$onChangePlan`     | `() => void`                                   | Callback fired when "Cambiar" button is clicked     |
| `$loading`          | `boolean`                                      | Shows loading state for all items in the plan       |
| `$plan`             | `number`                                       | Number of payments in the plan (used for loading)   |
| `$planHeaderLabel`  | `string`                                       | Header text before plan count |
| `$planCountLabel`   | `(plan: number) => string`                     | Function to format plan count text |
| `$changeButtonLabel`| `string`                                       | Text for the change plan button |

## Building Block Components (Advanced)
For exceptional use cases, individual components can be rendered separately:

### PaymentPlanSelector.Item Props
| Prop             | Type                           | Description                                        |
|------------------|--------------------------------|----------------------------------------------------|
| `className`      | `string`                       | Custom class name for the root element             |
| `$loading`       | `boolean`                      | Shows shimmer loading state instead of content     |
| `$quincena`      | `number`                       | Payment period number (e.g., 1, 2, 3)              |
| `$amount`        | `number`                       | Payment amount (automatically formatted as MXN)    |
| `$date`          | `string`                       | Payment due date                                   |
| `$onSelect`      | `() => void`                   | Callback fired when the payment item is clicked    |
| `$quincenaLabel` | `(quincena: number) => string` | Function to format quincena label                  |
| `children`       | `React.ReactNode`              | Custom content to replace default payment info. When provided, standard props (`$quincena`, `$amount`, `$date`, etc.) are ignored |

### PaymentPlanSelector.Header Props
| Prop                 | Type         | Description                                           |
|----------------------|--------------|-------------------------------------------------------|
| `$planHeaderLabel`   | `string`     | Label for the plan header (default: "Plan de pagos:") |
| `$planCountText`     | `string`     | Text showing the plan count                           |
| `$changeButtonLabel` | `string`     | Label for the change button (default: "Cambiar")      |
| `$onChangePlan`      | `() => void` | Callback when change plan button is clicked           |

### PaymentPlanSelector.Chip Props
| Prop        | Type              | Description                          |
|-------------|-------------------|--------------------------------------|
| `children`  | `React.ReactNode` | The text content to display in the chip |
| `className` | `string`          | Additional CSS classes               |


## Use Cases

### Complete Payment Plan Display
Use the main `PaymentPlanSelector` component for standard payment plan interfaces:
- **Plan Header**: Shows "Plan de pagos: X quincenas" with change plan button
- **Payment Grid**: Responsive grid of all payment items
- **Unified Selection**: Single callback handles all item selections
- **Integrated Management**: Built-in plan modification controls

### Loading States
Set `$loading={true}` to show shimmer effects while payment data is being fetched. The component automatically generates placeholder items based on the `$plan` number. During loading state, all payment items are non-interactive and the `$onSelect` callback will not be triggered.

### Building Block Components (Advanced)
**⚠️ EXCEPTIONAL USE ONLY**: The components `PaymentPlanSelector.Item`, `PaymentPlanSelector.Header`, and `PaymentPlanSelector.Chip` are internally used by `PaymentPlanSelector` and should only be used independently in exceptional cases where the standard component doesn't meet requirements. Most use cases should use the main component.

## Important Considerations
**Developer Responsibility**: The `$plan` prop and the length of the `$items` array are independent values that can diverge from each other. It is the developer's responsibility to ensure these values are used correctly:

- **During normal state**: `$items.length` should typically match `$plan` for consistent UI display
- **During loading state**: `$plan` determines how many placeholder items are generated, regardless of `$items` content
- **Mismatched values**: The component will not validate or enforce consistency between these props
