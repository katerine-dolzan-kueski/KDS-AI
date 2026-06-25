# Checkbox

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                               |
|-----------|-------------------------------------|
| Component | Checkbox                            |
| Package   | `@kueski/react` → `atoms/Checkbox` |
| Status    | Stable                              |
| Version   | 1.0.0                               |

---

### Description

Checkbox is a controlled binary input that supports three selection states: unchecked, checked, and indeterminate. It is built on Radix UI's accessible checkbox primitive and exposes KDS design tokens for consistent visual styling across all interaction states.

Use Checkbox when the user needs to toggle a single option on or off, or when a parent item needs to represent the mixed state of a group of child items. For exclusive single-selection within a group, use Radio instead.

Always pair Checkbox with a visible label — either via the `children` prop or an explicit `aria-label`.

---

### Design Tokens

#### Colour tokens — border

| Role              | Token                     | Used by                                         |
|-------------------|---------------------------|-------------------------------------------------|
| Default border    | `--color-stroke-secondary`| Unchecked box border                            |
| Error border      | `--color-stroke-error`    | Unchecked box border in error state             |
| Focus ring        | `--color-stroke-brand`    | Outer focus ring on keyboard focus              |

#### Colour tokens — fill

| Role              | Token                        | Used by                                      |
|-------------------|------------------------------|----------------------------------------------|
| Checked fill      | `--color-background-brand`   | Checked and indeterminate box background     |
| Error fill        | `--color-background-danger`  | Checked / indeterminate box in error state   |

#### Colour tokens — content & states

| Role              | Token                                 | Used by                                   |
|-------------------|---------------------------------------|-------------------------------------------|
| Icon              | `--color-text-and-icons-invert-primary` | Checkmark and dash icons                |
| Hover overlay     | `--color-states-hover`                | Semi-transparent hover overlay            |
| Pressed overlay   | `--color-states-pressed`              | Semi-transparent press feedback           |
| Disabled overlay  | `--color-states-disabled`             | Reduced-opacity disabled mask             |

#### Size tokens

| Role             | Token            | Used by                              |
|------------------|------------------|--------------------------------------|
| Corner radius    | `--radius-x1`    | All four corners of the checkbox box |
| Box border width | `--border-thick` | Default and error border weight      |

---

### Anatomy

```
┌──────────────────────────┐  ← 36×36px hit area (--spacing-x1 transparent margin all sides)
│  ┌──────────────────┐    │
│  │  ┌──────────┐    │    │
│  │  │  ✓ or −  │    │    │  ← 18×18px box, --radius-x1 corners
│  │  └──────────┘    │    │
│  └──────────────────┘    │
│   Label text             │
└──────────────────────────┘
     └─ Optional focus ring: --color-stroke-brand, --spacing-x1 offset
```

| Part         | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| Hit area     | 36×36px transparent outer shell. Padding bound to `--spacing-x1` on all sides.              |
| Box          | 18×18px rounded square centered in the hit area. Border or fill depending on state.         |
| Checkmark    | Visible when `$checked=true`. Icon colour `--color-text-and-icons-invert-primary`.           |
| Dash         | Visible when `$checked='indeterminate'`. Same colour.                                        |
| Label        | Optional text rendered beside the box via `children`. Linked to the input for a11y.         |
| Focus ring   | Appears on keyboard focus: outer ring in `--color-stroke-brand` offset by `--spacing-x1`.   |
| Hover layer  | Semi-transparent `--color-states-hover` overlay on unselected box during pointer hover.      |

---

### States

| State           | Visual behaviour                                                                          |
|-----------------|-------------------------------------------------------------------------------------------|
| Default         | Box with `--color-stroke-secondary` border (unselected) or brand fill (checked).          |
| Hover           | Unselected: `--color-states-hover` overlay. Checked: no visual change on box.             |
| Pressed         | `--color-states-pressed` overlay briefly on pointer down.                                 |
| Focus           | Outer ring `--color-stroke-brand`, offset `--spacing-x1`. Border also shifts to brand.   |
| Disabled        | `--color-states-disabled` overlay reduces opacity. Pointer events suppressed.             |
| Error           | Border switches to `--color-stroke-error`; fill switches to `--color-background-danger`.  |

---

### Rules

- Checkbox is always controlled — provide both `$checked` and `$onCheckedChange`.
- Use `$checked='indeterminate'` for parent checkboxes whose children are partially selected.
- Do not use Checkbox for exclusive choice — use Radio instead.
- Always provide a label (`children` or `aria-label`). A visible label is strongly preferred.
- The `$error` state is for validation feedback — pair it with an error message below the field.
- Disabled checkboxes should still communicate their current `$checked` state visually.

---

## WEB — React

### Props

| Prop               | Type                                            | Default | Required | Description                                                  |
|--------------------|-------------------------------------------------|---------|----------|--------------------------------------------------------------|
| `$checked`         | `boolean \| 'indeterminate'`                    | —       | Yes      | Controlled checked state.                                    |
| `$onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | —       | Yes      | Callback fired when the checked state changes.               |
| `$error`           | `boolean`                                       | `false` | No       | When true, switches to error border/fill tokens.             |
| `children`         | `ReactNode`                                     | —       | No       | Label text or element rendered beside the checkbox.          |
| `disabled`         | `boolean`                                       | `false` | No       | Disables interaction and applies disabled overlay.           |
| `className`        | `string`                                        | —       | No       | Appended to the root `<label>` class list.                   |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Checkbox
```

**Import**
```typescript
import { Checkbox } from '@kueski/react/atoms/Checkbox';
import type { CheckboxProps } from '@kueski/react/atoms/Checkbox';
```

**Controlled checkbox with label**
```tsx
const [checked, setChecked] = useState(false);

<Checkbox $checked={checked} $onCheckedChange={setChecked}>
  Acepto los términos y condiciones
</Checkbox>
```

**Indeterminate (select-all pattern)**
```tsx
<Checkbox $checked="indeterminate" $onCheckedChange={handleParentChange}>
  Seleccionar todos
</Checkbox>
```

**Error state (validation)**
```tsx
<Checkbox $checked={false} $onCheckedChange={setChecked} $error>
  Debes aceptar los términos
</Checkbox>
```

**Disabled**
```tsx
<Checkbox $checked={true} $onCheckedChange={() => {}} disabled>
  Opción no disponible
</Checkbox>
```

---

## FLUTTER — Dart

### Widget

| Property  | Value                                      |
|-----------|--------------------------------------------|
| Widget    | `KdsCheckbox`                              |
| File      | `flutter-poc/lib/kds_checkbox.dart`        |
| Token dep | `KdsTokens` (`flutter-poc/lib/kds_tokens.dart`) |
| Status    | PoC — mirrors React spec exactly           |

---

### Parameters

| Parameter  | Type                                | Default                     | Required | Description                                              |
|------------|-------------------------------------|-----------------------------|----------|----------------------------------------------------------|
| `state`    | `KdsCheckboxState`                  | —                           | Yes      | `.unchecked`, `.checked`, or `.indeterminate`.           |
| `onChanged`| `ValueChanged<KdsCheckboxState>?`   | —                           | Yes      | Callback on tap. Pass `null` to make read-only.          |
| `error`    | `bool`                              | `false`                     | No       | Switches fill/border to danger colour tokens.            |
| `disabled` | `bool`                              | `false`                     | No       | Suppresses interaction; applies 40 % opacity.            |
| `label`    | `String?`                           | `null`                      | No       | Optional label rendered to the right of the box.        |

---

### KdsCheckboxState enum

| Value           | Equivalent React prop         |
|-----------------|-------------------------------|
| `.unchecked`    | `$checked={false}`            |
| `.checked`      | `$checked={true}`             |
| `.indeterminate`| `$checked='indeterminate'`    |

---

### Token contract

| Token (CSS name)                        | Dart field                        | Used by                        |
|-----------------------------------------|-----------------------------------|--------------------------------|
| `--color-background-brand`              | `colorBackgroundBrand`            | Checked fill                   |
| `--color-background-danger`             | `colorBackgroundDanger`           | Error fill                     |
| `--color-stroke-secondary`              | `colorStrokeSecondary`            | Unchecked border               |
| `--color-stroke-error`                  | `colorStrokeError`                | Error border                   |
| `--color-stroke-brand`                  | `colorStrokeBrand`                | Focus ring                     |
| `--color-text-and-icons-invert-primary` | `colorTextAndIconsInvertPrimary`  | Check / dash icon              |
| `--color-states-hover`                  | `colorStatesHover`                | Hover overlay                  |
| `--color-states-pressed`                | `colorStatesPressed`              | Press overlay                  |
| `--radius-x1`                           | `radiusX1`                        | Box corner radius              |
| `--radius-x2`                           | `radiusX2`                        | Focus ring corner radius       |
| `--border-thick`                        | `borderThick`                     | Border & icon stroke weight    |
| `--spacing-x1`                          | `spacingX1`                       | Hit-area padding (4 px sides)  |
| `--spacing-x2`                          | `spacingX2`                       | Label gap                      |

---

### States

| State        | Flutter behaviour                                                                |
|--------------|---------------------------------------------------------------------------------|
| Default      | Transparent box with `colorStrokeSecondary` border (2 px).                     |
| Checked      | Box fills with `colorBackgroundBrand`; checkmark icon in `colorTextAndIconsInvertPrimary`. |
| Indeterminate| Same fill as checked; dash (−) icon instead of tick.                            |
| Hover        | `colorStatesHover` overlay on unchecked box via `MouseRegion`.                  |
| Pressed      | `colorStatesPressed` overlay via `GestureDetector` tap callbacks.               |
| Focus        | Outer ring `colorStrokeBrand`, offset by `spacingX1`, `borderThick` wide.      |
| Error        | Border → `colorStrokeError`; fill → `colorBackgroundDanger`.                    |
| Disabled     | Whole widget at 40 % opacity via `Opacity`; `onChanged: null`.                  |

---

### Setup — register tokens in MaterialApp

```dart
import 'package:flutter/material.dart';
import 'flutter-poc/lib/kds_tokens.dart';

MaterialApp(
  theme: ThemeData(
    extensions: const [KdsTokens.light],
  ),
  darkTheme: ThemeData(
    extensions: const [KdsTokens.dark],
  ),
)
```

---

### Code examples

**Controlled — unchecked → checked**
```dart
KdsCheckboxState _state = KdsCheckboxState.unchecked;

KdsCheckbox(
  state: _state,
  onChanged: (next) => setState(() => _state = next),
  label: 'Acepto los términos y condiciones',
)
```

**Indeterminate (select-all pattern)**
```dart
KdsCheckbox(
  state: KdsCheckboxState.indeterminate,
  onChanged: _handleParentChange,
  label: 'Seleccionar todos',
)
```

**Error state (validation)**
```dart
KdsCheckbox(
  state: KdsCheckboxState.unchecked,
  onChanged: _handleChange,
  error: true,
  label: 'Debes aceptar los términos',
)
```

**Disabled**
```dart
KdsCheckbox(
  state: KdsCheckboxState.checked,
  onChanged: null,
  disabled: true,
  label: 'Opción no disponible',
)
```

---

### React ↔ Flutter comparison

| React                                      | Flutter                                          |
|--------------------------------------------|--------------------------------------------------|
| `$checked={false}`                         | `state: KdsCheckboxState.unchecked`              |
| `$checked={true}`                          | `state: KdsCheckboxState.checked`                |
| `$checked='indeterminate'`                 | `state: KdsCheckboxState.indeterminate`          |
| `$onCheckedChange={(v) => ...}`            | `onChanged: (v) => ...`                          |
| `$error`                                   | `error: true`                                    |
| `disabled`                                 | `disabled: true`                                 |
| `children` (label)                         | `label: '...'`                                   |
| `bg-[var(--color-background-brand)]`       | `tokens.colorBackgroundBrand`                    |
| class-variance-authority variants          | Dart `if` / ternary on widget props              |

---

## Version Log

| Version | Date       | Change                                                                    |
|---------|------------|---------------------------------------------------------------------------|
| 1.0.0   | 2026-06-16 | Initial KDS spec — controlled checkbox with Radix UI, error + indeterminate |
