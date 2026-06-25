# Input

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                            |
|-----------|----------------------------------|
| Component | Input                            |
| Package   | `@kueski/react` → `atoms/Input` |
| Status    | Stable                           |
| Version   | 1.0.0                            |

---

### Description

Input is a controlled single-line text field that handles five contextual input types: plain text, phone number (with country code prefix), date, payment card, and CLABE/bank account number. All five types share the same container anatomy — label above, field container with leading and trailing slots, help/error text below — and cycle through the same six visual states.

Use Input for free-text or structured data entry where a dedicated semantic type (phone, date, payment, CLABE) is needed alongside a label and inline validation feedback. For OTP (one-time password) code entry use the dedicated `OtpInput` component; for global site search use `SearchBar`.

---

### Design Tokens

#### Colour tokens — background

| Role                | Token                          | Used by                                       |
|---------------------|--------------------------------|-----------------------------------------------|
| Field default/focus | `--color-background-primary`   | Container bg in all non-read-only states      |
| Read-only field     | `--color-background-tertiary`  | Container bg in read-only state               |

#### Colour tokens — stroke/border

| Role               | Token                      | Used by                                     |
|--------------------|----------------------------|---------------------------------------------|
| Default border     | `--color-stroke-secondary` | Container border in default and filled states|
| Focus border       | `--color-stroke-brand`     | Container border in active and typing states |
| Error border       | `--color-stroke-error`     | Container border in error state              |
| Read-only border   | `--color-stroke-tertiary`  | Container border in read-only state          |

#### Colour tokens — text and icons

| Role                | Token                             | Used by                                       |
|---------------------|-----------------------------------|-----------------------------------------------|
| Label               | `--color-text-and-icons-secondary`| Label text                                    |
| Optional indicator  | `--color-text-and-icons-tertiary` | "(opcional)" suffix in label                 |
| Placeholder text    | `--color-text-and-icons-tertiary` | Placeholder text in field                     |
| Input value         | `--color-text-and-icons-primary`  | Typed value text                              |
| Help text           | `--color-text-and-icons-tertiary` | Helper message below field                    |
| Error text + icon   | `--color-text-and-icons-danger`   | Error message and error icon below field      |
| Character count     | `--color-text-and-icons-tertiary` | Character count right-aligned below field     |
| Leading / trailing icon | `--color-text-and-icons-secondary` | Default icon colour in leading/trailing slots |
| Trailing icon active | `--color-text-and-icons-brand`   | Clear (×) button icon when field is active    |
| Trailing icon locked | `--color-text-and-icons-tertiary` | Lock icon in read-only state                 |

#### Size tokens

| Role             | Token          | Used by                                  |
|------------------|----------------|------------------------------------------|
| Corner radius    | `--radius-x3`  | Field container corners                  |
| Label gap        | `--spacing-x1` | Gap between label row and field container|
| Footer gap       | `--spacing-x1` | Gap between field container and footer   |
| Field padding-x  | `--spacing-x4` | Left and right padding inside container  |
| Field padding-y  | `--spacing-x3` | Top and bottom padding inside container  |
| Icon gap         | `--spacing-x2` | Gap between leading icon and input text  |
| Border width     | `--border-regular` | Field container border weight          |

#### Typography tokens

| Role         | Token                  | Used by               |
|--------------|------------------------|-----------------------|
| Label text   | `typo-meta`            | Label above field     |
| Input text   | `typo-body-1-regular`  | Typed value and placeholder |
| Footer text  | `typo-meta`            | Help text and character count |

---

### Anatomy

```
┌─────────────────────────────────────────────┐
│ Etiqueta (opcional)                          │  ← label row: --color-text-and-icons-secondary
├─────────────────────────────────────────────┤  ← gap: --spacing-x1
│ ┌─────────────────────────────────────────┐ │
│ │ [leadingSlot]  value/placeholder  [×/🔒]│ │  ← field container: --radius-x3, --border-regular
│ └─────────────────────────────────────────┘ │
├─────────────────────────────────────────────┤  ← gap: --spacing-x1
│ Texto de ayuda aquí si es necesario   5/100 │  ← footer row: --color-text-and-icons-tertiary
└─────────────────────────────────────────────┘
```

| Part          | Description                                                                                   |
|---------------|-----------------------------------------------------------------------------------------------|
| Label row     | Static label text. "(opcional)" appended in tertiary colour when `$optional` is true.        |
| Field container | Rounded rectangle with `--border-regular` stroke. Background and border change per state.  |
| Leading slot  | Left-aligned content: icon (text), flag+code (phone), calendar icon (date), logo (payment/clabe). |
| Input text    | Controlled `<input>` element. Placeholder in tertiary colour; value in primary.              |
| Trailing slot | Default icon when filled; clear (×) icon when active/typing; lock icon when read-only.       |
| Footer row    | Left: help text or error message. Right: character count (`value.length / maxLength`).       |

---

### States

| State     | Border token               | Background token                | Trailing slot         | Footer                       |
|-----------|----------------------------|---------------------------------|-----------------------|------------------------------|
| Default   | `--color-stroke-secondary` | `--color-background-primary`    | Custom / default icon | Help text (if provided)      |
| Active    | `--color-stroke-brand`     | `--color-background-primary`    | Clear (×) icon        | Help text (if provided)      |
| Typing    | `--color-stroke-brand`     | `--color-background-primary`    | Clear (×) icon        | Help text + char count       |
| Filled    | `--color-stroke-secondary` | `--color-background-primary`    | Custom / default icon | Help text + char count       |
| Error     | `--color-stroke-error`     | `--color-background-primary`    | Custom / default icon | Error icon + error message   |
| Read-only | `--color-stroke-tertiary`  | `--color-background-tertiary`   | Lock icon             | Help text (if provided)      |

---

### Type reference

| `$type`   | Leading slot default content         | Trailing slot default         | Notes                                    |
|-----------|--------------------------------------|-------------------------------|------------------------------------------|
| `text`    | Optional custom icon via `leadingSlot`| Optional custom icon          | General-purpose text entry               |
| `phone`   | Country flag emoji + country code    | None (active/typing shows ×)  | `countryCode` and `countryFlag` props    |
| `date`    | Calendar icon                        | None (active/typing shows ×)  | Triggers native date picker on mobile    |
| `payment` | Card provider logo (slot)            | Card type icon (trailing slot)| `leadingSlot` required for card logo     |
| `clabe`   | Bank logo (slot)                     | None (active/typing shows ×)  | `leadingSlot` required for bank logo     |

---

### Rules

- Input is always controlled — provide both `value` and `onChange`.
- Always provide a `label`. Omitting it is only acceptable when wrapping with an external `<label>` element that covers the field via `htmlFor`.
- The clear (×) button appears automatically when the field is focused (active/typing). Wire `onClear` to reset the value.
- `$error` and `errorMessage` must be set together — an error border with no message is confusing.
- Read-only and disabled are different: `readOnly` preserves the value visually; `disabled` suppresses interaction entirely and reduces opacity to 40 %.
- `maxLength` caps input and enables the character count footer when `$showCharCount` is true.
- Phone, payment, and CLABE types require the corresponding `leadingSlot` to be provided — they do not render a default leading icon.

---

## WEB — React

### Props

| Prop              | Type                              | Default     | Required | Description                                                           |
|-------------------|-----------------------------------|-------------|----------|-----------------------------------------------------------------------|
| `$type`           | `InputType`                       | `'text'`    | No       | Contextual input type. Affects leading slot default and input mode.   |
| `$error`          | `boolean`                         | `false`     | No       | Switches to error border/message tokens.                             |
| `$optional`       | `boolean`                         | `false`     | No       | Appends "(opcional)" to the label in tertiary colour.                 |
| `$showCharCount`  | `boolean`                         | `false`     | No       | Renders `value.length / maxLength` in the footer right column.        |
| `label`           | `string`                          | —           | No       | Text rendered above the field.                                        |
| `helperText`      | `string`                          | —           | No       | Rendered below field when `$error` is false.                          |
| `errorMessage`    | `string`                          | —           | No       | Rendered below field (with error icon) when `$error` is true.         |
| `leadingSlot`     | `ReactNode`                       | —           | No       | Content for the leading slot. Required for `phone`, `payment`, `clabe`.|
| `trailingSlot`    | `ReactNode`                       | —           | No       | Overrides the default trailing icon. Hidden when active/typing.       |
| `onChange`        | `(value: string) => void`         | —           | No       | Called with the new string value on every keystroke.                  |
| `onClear`         | `() => void`                      | —           | No       | Called when the user taps the clear (×) button.                       |
| `value`           | `string`                          | —           | No       | Controlled value (inherit from `HTMLInputAttributes`).                |
| `placeholder`     | `string`                          | —           | No       | Placeholder text shown when field is empty.                           |
| `maxLength`       | `number`                          | —           | No       | Max characters. Gates `$showCharCount` display.                       |
| `readOnly`        | `boolean`                         | `false`     | No       | Locks the field. Applies read-only state styling.                     |
| `disabled`        | `boolean`                         | `false`     | No       | Disables interaction. Reduces opacity to 40 %.                        |
| `countryCode`     | `string`                          | —           | No       | Country dial code shown in leading slot when `$type='phone'`.         |
| `countryFlag`     | `string`                          | —           | No       | Flag emoji shown in leading slot when `$type='phone'`.                |
| `className`       | `string`                          | —           | No       | Appended to the root element class list.                              |

---

### Type reference

| `$type`   | `inputMode` (native) | Keyboard hint   | Leading slot auto-content           |
|-----------|----------------------|-----------------|-------------------------------------|
| `text`    | `text`               | Standard        | None (uses `leadingSlot` prop)      |
| `phone`   | `tel`                | Numeric dial    | `countryFlag` + `countryCode`       |
| `date`    | `text`               | None            | Calendar icon                       |
| `payment` | `numeric`            | Numeric         | None (uses `leadingSlot` prop)      |
| `clabe`   | `numeric`            | Numeric         | None (uses `leadingSlot` prop)      |

---

### Content Slots

| Slot           | How to use                                                                                     |
|----------------|-----------------------------------------------------------------------------------------------|
| `leadingSlot`  | Pass any `ReactNode`. Typically a 24×24 icon wrapped in `<span className="flex items-center">`. |
| `trailingSlot` | Pass any `ReactNode`. Shown only in default and filled states; hidden during active/typing.    |
| `label`        | String only — rendered as a `<label>` element linked to the input via `htmlFor`.              |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Input
```

**Import**
```typescript
import { Input } from '@kueski/react/atoms/Input';
import type { InputProps, InputType } from '@kueski/react/atoms/Input';
```

**Basic text input — controlled**
```tsx
const [value, setValue] = useState('');

<Input
  label="Correo electrónico"
  placeholder="ejemplo@kueski.com"
  value={value}
  onChange={setValue}
  onClear={() => setValue('')}
/>
```

**Phone number input**
```tsx
<Input
  $type="phone"
  label="Número de celular"
  $optional
  placeholder="33 4160 0809"
  countryFlag="🇲🇽"
  countryCode="+52"
  value={phone}
  onChange={setPhone}
  onClear={() => setPhone('')}
  maxLength={10}
  $showCharCount
  helperText="Introduce tu número a 10 dígitos"
/>
```

**Error state (validation)**
```tsx
<Input
  label="CLABE interbancaria"
  $type="clabe"
  $error
  errorMessage="La CLABE no es válida. Verifica los 18 dígitos."
  value={clabe}
  onChange={setClabe}
  leadingSlot={<BankLogo />}
  maxLength={18}
  $showCharCount
/>
```

**Read-only (summary view)**
```tsx
<Input
  label="Número de tarjeta"
  $type="payment"
  readOnly
  value="•••• •••• •••• 4242"
  leadingSlot={<VisaLogo />}
/>
```

**Disabled**
```tsx
<Input
  label="Fecha de vencimiento"
  $type="date"
  disabled
  placeholder="DD/MM/AAAA"
/>
```

---

## FLUTTER — Dart

### Widget

| Property  | Value                                    |
|-----------|------------------------------------------|
| Widget    | `KdsInput`                               |
| File      | `flutter-poc/lib/kds_input.dart`         |
| Token dep | `KdsTokens` (`flutter-poc/lib/kds_tokens.dart`) |
| Status    | Planned — token foundation is complete   |

---

### Parameters

| Parameter      | Type                          | Default     | Required | Description                                          |
|----------------|-------------------------------|-------------|----------|------------------------------------------------------|
| `type`         | `KdsInputType`                | `.text`     | No       | Contextual type — text, phone, date, payment, clabe. |
| `error`        | `bool`                        | `false`     | No       | Switches to error border and message tokens.         |
| `optional`     | `bool`                        | `false`     | No       | Appends "(opcional)" to the label.                   |
| `showCharCount`| `bool`                        | `false`     | No       | Shows character count footer.                        |
| `label`        | `String?`                     | `null`      | No       | Label text above the field.                          |
| `helperText`   | `String?`                     | `null`      | No       | Footer help text shown when not in error state.      |
| `errorMessage` | `String?`                     | `null`      | No       | Footer error message shown when `error` is true.     |
| `leadingSlot`  | `Widget?`                     | `null`      | No       | Widget for leading slot.                             |
| `trailingSlot` | `Widget?`                     | `null`      | No       | Widget for trailing slot (hidden when focused).      |
| `onChanged`    | `ValueChanged<String>?`       | `null`      | No       | Called on every keystroke.                           |
| `onClear`      | `VoidCallback?`               | `null`      | No       | Called when the clear button is tapped.              |
| `controller`   | `TextEditingController?`      | `null`      | No       | Standard Flutter text controller.                    |
| `readOnly`     | `bool`                        | `false`     | No       | Locks the field; applies read-only styling.          |
| `maxLength`    | `int?`                        | `null`      | No       | Max character count for `$showCharCount`.            |
| `countryCode`  | `String?`                     | `null`      | No       | Dial code for phone type (e.g., `'+52'`).            |
| `countryFlag`  | `String?`                     | `null`      | No       | Flag emoji for phone type (e.g., `'🇲🇽'`).           |

---

### Token contract

| Token (CSS name)                | Dart field                       | Used by                            |
|---------------------------------|----------------------------------|------------------------------------|
| `--color-background-primary`    | `colorBackgroundPrimary`         | Field container background         |
| `--color-background-tertiary`   | colorBackgroundTertiary (pending)| Read-only background               |
| `--color-stroke-secondary`      | `colorStrokeSecondary`           | Default / filled border            |
| `--color-stroke-brand`          | `colorStrokeBrand`               | Active / typing border             |
| `--color-stroke-error`          | `colorStrokeError`               | Error border                       |
| `--color-stroke-tertiary`       | colorStrokeTertiary (pending)    | Read-only border                   |
| `--color-text-and-icons-primary`| `colorTextAndIconsPrimary`       | Input value text                   |
| `--color-text-and-icons-tertiary`| colorTextAndIconsTertiary (pending)| Placeholder, helper, label      |
| `--color-text-and-icons-danger` | colorTextAndIconsDanger (pending) | Error message and icon            |
| `--radius-x3`                   | radiusX3 (pending)               | Container corner radius            |
| `--spacing-x4`                  | `spacingX4`                      | Horizontal field padding           |
| `--spacing-x3`                  | `spacingX3`                      | Vertical field padding             |
| `--spacing-x2`                  | `spacingX2`                      | Gap between icon and text          |
| `--spacing-x1`                  | `spacingX1`                      | Gap between label, field, footer   |
| `--border-regular`              | `borderRegular`                  | Container border width             |

> **Token gap note**: `colorBackgroundTertiary`, `colorStrokeTertiary`, `colorTextAndIconsTertiary`, `colorTextAndIconsDanger`, and `radiusX3` are not yet in `KdsTokens`. Add them when expanding the Flutter token foundation.

---

## Version Log

| Version | Date       | Change                                                                         |
|---------|------------|--------------------------------------------------------------------------------|
| 1.0.0   | 2026-06-22 | Initial KDS spec — 5 types (text/phone/date/payment/clabe) with 6 states each |
