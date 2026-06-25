The OfferFooter component provides a comprehensive interface for displaying financial summaries, payment breakdowns, and action controls with built-in data protection and legal compliance features.

## Features
- **Financial Row Display**: Multiple row types for amounts, discounts, interest rates, and savings
- **Dynamic Styling**: Success states, emphasized amounts, and crossed-out values
- **Loading States**: Built-in shimmer effects during data loading
- **Data Protection**: Integrated data protection link with shield icon
- **Legal Compliance**: Built-in legal text with customizable content
- **Elevation Control**: Optional elevated appearance with shadow effects
- **Action Controls**: Flexible children area for buttons and interactive elements

## Usage
```tsx
// example
<OfferFooter
  $rows={[
    { id: 1, type: 'discount', amount: -150.89 },
    { id: 2, type: 'interest', amount: 1150.20 },
    { id: 3, type: 'total', amount: 1750.20 },
    { id: 4, type: 'rate', label: 'Tasa de interés anual', amount: 43 }
  ]}
  $dataProtectionLink="https://example.com/privacy"
  $dataProtectionLinkText="Política de privacidad"
  $legalAmount={5000}
  $legalLink="https://example.com/terms"
>
  <ButtonGroup>
    <Button>Confirmar Pago</Button>
  </ButtonGroup>
</OfferFooter>
```

## Props
| Prop                      | Type                | Description                                           |
|--------------------------|---------------------|-------------------------------------------------------|
| `$rows`                  | `OfferFooterDataRow[]` | Array of financial data rows to display              |
| `$dataProtectionLink`     | `string`            | URL for data protection/privacy policy link          |
| `$dataProtectionLinkText` | `string`            | Custom text for data protection link (default: "Como protegemos tus datos") |
| `$legalAmount`           | `number \| string`   | Amount for legal text (auto-renders Legal component) |
| `$legalLink`             | `string`            | Terms and conditions URL (auto-renders Legal component) |
| `$elevated`              | `boolean`           | Whether to show elevated appearance with shadow       |
| `children`               | `React.ReactNode`   | Action controls (buttons, etc.) rendered at bottom   |
| `className`              | `string`            | Additional CSS classes for the footer container      |

## Row Types

### Amount Row (`OfferFooterDataRowAmount`)
For displaying financial amounts like discounts, interests, and totals:

```tsx
{
  id: string | number;
  type: 'discount' | 'interest' | 'total';
  amount: number | string;
  crossed?: number | string; // Optional crossed-out amount
  loading?: boolean; // Loading state
  success?: boolean;  // Green styling for positive values
  emphatized?: boolean; // Emphasized styling for important amounts
  label?: string; // Custom label (defaults to type-based label)
}
```

**Formatting Behavior**: When `amount` or `crossed` are numbers, they are automatically formatted with locale-specific currency or decimal formatting. When they are strings, they are displayed as-is without any formatting.

### Rate Row (`OfferFooterDataRowRate`)
For displaying percentage rates with labels:

```tsx
{
  id: string | number;
  type: 'rate';
  label: string; // Required label for rate rows
  amount: number | string;              // Percentage value
  crossed?: number | string;            // Optional crossed-out rate
  loading?: boolean;
  success?: boolean;
  emphatized?: boolean;
}
```

**Formatting Behavior**: When `amount` or `crossed` are numbers, they are automatically formatted with a '%' suffix. When they are strings, they are displayed as-is without any formatting.

### Save Row (`OfferFooterDataRowSave`)
For displaying savings messages with custom text:

```tsx
{
  id: string | number;
  type: 'save';
  amount: number | string;
  leading?: string; // Text before amount
  trailing?: string; // Text after amount
  loading?: boolean;
}
```

## Auto-rendered Components

### Legal Section
When both `$legalAmount` and `$legalLink` are provided, the component automatically renders a legal compliance section:

```tsx
<OfferFooter
  $legalAmount={5000}
  $legalLink="https://example.com/terms"
  // ... other props
>
  {/* Legal section auto-rendered */}
</OfferFooter>
```

**Legal text format**: "Al Confirmar, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones."

### Data Protection
When `$dataProtectionLink` is provided, shows a shield icon with privacy link.

## Visual States

### Success State
Use `success: true` for positive financial outcomes:
- Green text color for amounts
- Typically used for discounts, savings, or reduced rates

### Emphasized State
Use `emphatized: true` for important totals:
- Larger, bold typography
- Used for final amounts or key figures

### Loading State
Use `loading: true` to show shimmer effects:
- Replaces content with animated shimmer
- Maintains layout structure during data fetching

### Crossed Out Values
Use `crossed` property to show previous/original amounts:
- Displays strikethrough text
- Shows price reductions or rate improvements

## Building Block Components (Advanced)
For exceptional use cases, individual components can be rendered separately:

### OfferFooter.RowAmount Props
| Prop           | Type                                              | Description                               |
|----------------|---------------------------------------------------|-------------------------------------------|
| `$variant`     | `'discount' \| 'interest' \| 'total' \| 'rate'`   | Visual variant of the amount row          |
| `$label`       | `string`                                          | Label text for the amount                 |
| `$amount`      | `string`                                          | Amount value to display                   |
| `$crossed`     | `string`                                          | Optional crossed-out amount               |
| `$loading`     | `boolean`                                         | Loading state with shimmer effect        |
| `$success`     | `boolean`                                         | Success state with green styling          |
| `$emphatized`  | `boolean`                                         | Emphasized styling for important amounts  |
| `className`    | `string`                                          | Additional CSS classes                    |

### OfferFooter.RowSave Props
| Prop        | Type              | Description                                     |
|-------------|-------------------|-------------------------------------------------|
| `$amount`   | `number \| string` | Amount value to display                        |
| `$leading`  | `string`          | Text before the amount                         |
| `$trailing` | `string`          | Text after the amount                          |
| `$loading`  | `boolean`         | Loading state with shimmer effect             |

### OfferFooter.Legal Props
| Prop       | Type              | Description                                      |
|------------|-------------------|--------------------------------------------------|
| `$amount`  | `number \| string` | Loan amount for default legal text              |
| `$link`    | `string`          | URL for terms and conditions link               |
| `children` | `React.ReactNode` | Custom legal content (overrides default text)   |
| `className`| `string`          | Additional CSS classes                           |

### OfferFooter.DataProtection Props
| Prop        | Type     | Description                                    |
|-------------|----------|------------------------------------------------|
| `$link`     | `string` | URL for data protection/privacy link          |
| `$linkText` | `string` | Custom text for the link (default: "Como protegemos tus datos") |
| `className` | `string` | Additional CSS classes                         |

## Use Cases

### Financial Summary Display
Use the main `OfferFooter` component for loan/payment summaries:
- **Amount Breakdown**: Show discounts, interests, and totals with proper visual hierarchy
- **Rate Information**: Display APR, CAT, and other financial rates with clear labeling
- **Savings Messaging**: Highlight user benefits and savings opportunities
- **Action Controls**: Confirm/cancel buttons for financial transactions

### Data Protection Compliance
Always include `$dataProtectionLink` for financial applications to ensure regulatory compliance and build user trust with transparent privacy practices.

### Loading States
Set individual `loading: true` on specific rows during data updates. The OfferFooter component automatically shows shimmer effects while maintaining layout structure, allowing for progressive data display without disrupting user experience.

### Building Block Components (Advanced)
**⚠️ EXCEPTIONAL USE ONLY**: The components `OfferFooter.RowAmount`, `OfferFooter.RowSave`, `OfferFooter.Legal`, and `OfferFooter.DataProtection` are internally used by `OfferFooter` and should only be used independently in exceptional cases where the standard component doesn't meet requirements. Most use cases should use the main component.

## Important Considerations
**Financial Accuracy**: Ensure all financial amounts are properly formatted and validated before passing to the OfferFooter component. The component displays data as provided without additional formatting or validation.

**Row Order**: The order of rows in the `$rows` array determines the display order. Group related information (discounts, interests, totals) logically for better user comprehension and following standard financial summary patterns.

**Legal Compliance**: Always include appropriate legal text and data protection links when displaying financial information. The OfferFooter component provides built-in legal text that can be customized using the `Legal` component's children prop for specific compliance requirements.
