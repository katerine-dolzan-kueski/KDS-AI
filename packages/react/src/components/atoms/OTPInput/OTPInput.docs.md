# OTPInput

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                                      |
|-----------|--------------------------------------------|
| Component | OTPInput                                   |
| Package   | `@kueski/react` → `atoms/OTPInput`        |
| Status    | Stable                                     |
| Version   | 1.0.0                                      |

### Description

OTPInput renders a labelled row of individual digit boxes for entering a one-time password or verification code. Each box accepts exactly one character; the cursor advances automatically on entry and retreats on deletion. A footer area below the boxes carries optional helper text, an error message, and a resend-code control (typically a countdown timer or a tappable link).

OTPInput is **not** a generic PIN entry or a payment card field — use `Input $type="payment"` for card numbers and `Input $type="clabe"` for CLABE strings. OTPInput is purpose-built for short time-limited codes (4–8 digits) delivered out-of-band (SMS, WhatsApp, email).

### Design Tokens

#### Colour tokens — background

| Token                              | Used for                          |
|------------------------------------|-----------------------------------|
| `--color-background-primary`       | Box background (all active states) |
| `--color-background-tertiary`      | Box background in read-only state |

#### Colour tokens — text and icons

| Token                                 | Used for                          |
|---------------------------------------|-----------------------------------|
| `--color-text-and-icons-primary`      | Digit value (active / filled)     |
| `--color-text-and-icons-secondary`    | Label text, helper text           |
| `--color-text-and-icons-tertiary`     | Digit value in read-only, resend countdown |
| `--color-text-and-icons-brand`        | Blinking cursor                   |
| `--color-text-and-icons-danger`       | Error message text                |

#### Colour tokens — stroke

| Token                          | Used for                                      |
|--------------------------------|-----------------------------------------------|
| `--color-stroke-secondary`     | Box border — default and filled states        |
| `--color-stroke-brand`         | Box border — active and typing states         |
| `--color-stroke-error`         | Box border — error state (all boxes)          |
| `--color-stroke-tertiary`      | Box border — read-only state                  |

#### Size tokens

| Token               | Used for                               |
|---------------------|----------------------------------------|
| `--spacing-x4`      | Box horizontal padding (16px)          |
| `--spacing-x3`      | Box vertical padding (12px)            |
| `--spacing-x1`      | Gap between boxes (4px)               |
| `--radius-x3`       | Box corner radius                      |
| `--border-thin`     | Border weight — default / filled / read-only |
| `--border-thick`    | Border weight — active / typing / error |

#### Typography tokens

| Token                      | Used for                          |
|----------------------------|-----------------------------------|
| `typo-body-2-emphasized`   | Label above the boxes             |
| `typo-passcode`            | Digit character inside each box   |
| `typo-meta`                | Helper text below boxes           |
| `typo-body-1`              | Resend countdown / resend link    |
| `typo-body-2`              | Error message text                |

### Anatomy

```
┌─────────────────────────────────────────────┐
│  Label                                       │  ← typo-body-2-emphasized
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │  ← 6 boxes (default length)
│  │  7   │ │  0   │ │  3   │ │  1   │ │  9   │ │  6   │  │     48×56px each, gap x1
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │
│  Helper text (optional)                      │  ← typo-meta
│  Resend / countdown (optional)               │  ← typo-body-1
└─────────────────────────────────────────────┘
```

| Part            | Description                                                             |
|-----------------|-------------------------------------------------------------------------|
| Label           | Short string identifying what code to enter                             |
| Box row         | N individual digit containers (default N=6), gap `--spacing-x1`        |
| Box             | Single character input; 48px wide, 56px tall, `--radius-x3` corners    |
| Cursor          | 1.5px wide brand-coloured blinking bar inside the currently active box |
| Helper text     | Instructional copy shown when there is no error                         |
| Error message   | Error circle icon + danger-coloured message, replaces helper text       |
| Resend control  | Slot for countdown timer or resend link, rendered below footer text     |

### States

| State     | Box border                                   | Box background                  | Digit colour              | Footer                         |
|-----------|----------------------------------------------|---------------------------------|---------------------------|--------------------------------|
| Default   | `--border-thin` + `--color-stroke-secondary` | `--color-background-primary`    | —                         | Helper text + resend           |
| Active    | Focused box: `--border-thick` + `--color-stroke-brand`; others: default | `--color-background-primary` | — | Helper text + resend |
| Typing    | Focused box: `--border-thick` + `--color-stroke-brand`; filled boxes: default | `--color-background-primary` | `--color-text-and-icons-primary` | Helper text + resend |
| Filled    | `--border-thin` + `--color-stroke-secondary` | `--color-background-primary`    | `--color-text-and-icons-primary` | Helper text + resend |
| Error     | All boxes: `--border-thick` + `--color-stroke-error` | `--color-background-primary` | `--color-text-and-icons-primary` | Error message + resend |
| Read-only | `--border-thin` + `--color-stroke-tertiary`  | `--color-background-tertiary`   | `--color-text-and-icons-tertiary` | Hidden                         |

### Rules

- Always show a label — never rely on surrounding context to convey the field's purpose.
- Default `length` is 6. Provide lengths of 4–8 only; longer codes break the horizontal layout on 375px viewports.
- Call `onComplete` as soon as the last digit is entered so the parent can trigger submission without requiring an extra button tap.
- Support paste: when the user pastes a string of digits, populate boxes left to right and discard extra characters.
- In error state show `errorMessage` replacing `helperText` — do not show both at the same time.
- Read-only state hides the footer entirely; it is for confirmation screens, not editing flows.
- The component must be accessible: each hidden `<input>` carries an `aria-label` derived from its 1-based index (e.g. "Digit 1 of 6"), and the group is wrapped in a `role="group"` with `aria-label` set to the `label` prop.

---

## WEB — React

### Props

| Prop           | Type                     | Default                     | Required | Description |
|----------------|--------------------------|-----------------------------|----------|-------------|
| `value`        | `string`                 | `''`                        | Yes      | Current code value (up to `length` characters). |
| `onChange`     | `(value: string) => void` | —                          | Yes      | Called on every keystroke with the new value. |
| `onComplete`   | `(value: string) => void` | —                          | No       | Called when the last digit is entered. |
| `length`       | `number`                 | `6`                         | No       | Number of digit boxes to render. |
| `label`        | `string`                 | `'Código de verificación'`  | No       | Label shown above the boxes. |
| `helperText`   | `string`                 | —                           | No       | Help copy below boxes. Hidden when `$error` is true. |
| `errorMessage` | `string`                 | —                           | No       | Error copy with icon. Shown when `$error` is true. |
| `resendNode`   | `ReactNode`              | —                           | No       | Countdown timer or resend link rendered below footer text. |
| `$error`       | `boolean`                | `false`                     | No       | Puts all boxes in error styling and shows `errorMessage`. |
| `disabled`     | `boolean`                | `false`                     | No       | Disables all inputs; applies 40% opacity. |
| `readOnly`     | `boolean`                | `false`                     | No       | Makes all inputs read-only; hides footer. |
| `className`    | `string`                 | —                           | No       | Class appended to the root wrapper. |
| `id`           | `string`                 | —                           | No       | ID for the root group element. |

### Content Slots

| Slot         | How to use                                                                         |
|--------------|------------------------------------------------------------------------------------|
| `resendNode` | Pass a countdown component or a `<button>` for resend. Typically shown after the footer text. |

### Code Reference

**Package path**
```
@kueski/react/atoms/OTPInput
```

**Import**
```typescript
import { OTPInput } from '@kueski/react/atoms/OTPInput';
```

**Basic usage**
```tsx
const [code, setCode] = React.useState('');

<OTPInput
  value={code}
  onChange={setCode}
  onComplete={(c) => verifyCode(c)}
/>
```

**With error state**
```tsx
<OTPInput
  value={code}
  onChange={setCode}
  $error={!!error}
  errorMessage="Código incorrecto. Intenta de nuevo."
  resendNode={<ResendCountdown seconds={42} onResend={handleResend} />}
/>
```

**Read-only (confirmation screen)**
```tsx
<OTPInput
  value="703196"
  onChange={() => {}}
  readOnly
  label="Código enviado a"
/>
```

**Custom length (4-digit PIN)**
```tsx
<OTPInput
  value={pin}
  onChange={setPin}
  length={4}
  label="PIN"
  onComplete={handlePinComplete}
/>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class    | `KdsOTPInput` |
| Import   | `package:kds/atoms/otp_input/otp_input.dart` |
| Level    | Atom |
| GetX needed? | No |

### Parameters

| Parameter       | Type                      | Default                    | Required | Description |
|-----------------|---------------------------|----------------------------|----------|-------------|
| `value`         | `String`                  | `''`                       | Yes      | Current code value |
| `onChanged`     | `ValueChanged<String>`    | —                          | Yes      | Called on each keystroke |
| `onCompleted`   | `VoidCallback?`           | —                          | No       | Called when all digits entered |
| `length`        | `int`                     | `6`                        | No       | Number of boxes |
| `label`         | `String?`                 | `'Código de verificación'` | No       | Label text |
| `helperText`    | `String?`                 | —                          | No       | Helper copy |
| `errorMessage`  | `String?`                 | —                          | No       | Error copy |
| `resendWidget`  | `Widget?`                 | —                          | No       | Resend timer or link |
| `hasError`      | `bool`                    | `false`                    | No       | Error state |
| `enabled`       | `bool`                    | `true`                     | No       | Enabled/disabled |
| `readOnly`      | `bool`                    | `false`                    | No       | Read-only state |

### Token Contract

#### Colour

| Role                  | Flutter token                              |
|-----------------------|--------------------------------------------|
| Box background        | `KdsColors.backgroundPrimary`              |
| Box background (r/o)  | `KdsColors.backgroundTertiary`             |
| Border default        | `KdsColors.strokeSecondary`                |
| Border active         | `KdsColors.strokeBrand`                    |
| Border error          | `KdsColors.strokeError`                    |
| Border read-only      | `KdsColors.strokeTertiary`                 |
| Cursor                | `KdsColors.textAndIconsBrand`              |
| Digit text            | `KdsColors.textAndIconsPrimary`            |
| Digit text (r/o)      | `KdsColors.textAndIconsTertiary`           |
| Error message         | `KdsColors.textAndIconsDanger`             |

#### Spacing

| Role              | Flutter token          |
|-------------------|------------------------|
| Box padding h     | `KdsSpacing.x4`        |
| Box padding v     | `KdsSpacing.x3`        |
| Box gap           | `KdsSpacing.x1`        |

#### Radius

| Role       | Flutter token      |
|------------|--------------------|
| Box radius | `KdsRadius.x3`     |

### States

| State     | Flutter implementation |
|-----------|------------------------|
| Default   | `enabled=true`, `hasError=false`, `readOnly=false` |
| Active    | `FocusNode` has focus on first empty box |
| Error     | `hasError=true` |
| Read-only | `readOnly=true` |
| Disabled  | `enabled=false` |

### Code Examples

**Basic**
```dart
KdsOTPInput(
  value: _code,
  onChanged: (v) => setState(() => _code = v),
  onCompleted: () => _verifyCode(_code),
)
```

**With error**
```dart
KdsOTPInput(
  value: _code,
  onChanged: (v) => setState(() => _code = v),
  hasError: _hasError,
  errorMessage: 'Código incorrecto. Intenta de nuevo.',
  resendWidget: ResendCountdown(seconds: _seconds, onResend: _resend),
)
```

---

## Version Log

| Version | Date       | Change           |
|---------|------------|------------------|
| 1.0.0   | 2026-06-29 | Initial release  |
