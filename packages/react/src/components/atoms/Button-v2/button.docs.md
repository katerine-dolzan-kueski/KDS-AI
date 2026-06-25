# Button

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property   | Value                                                   |
|------------|---------------------------------------------------------|
| Component  | Button                                                  |
| Package    | `@kueski/react` → `atoms/Button-v2`                     |
| Status     | Stable                                                  |
| Version    | 2.0.0                                                   |

---

### Description

Button triggers an immediate action or navigation event. It is the primary interactive control in KDS. Use the correct variant to communicate intent and the correct mode to communicate shape.

---

### Design Tokens

#### Colour tokens

| Role                    | Token                                    | Used by variant(s)                                 |
|-------------------------|------------------------------------------|----------------------------------------------------|
| Brand fill              | `--color-background-brand`               | primary                                            |
| Warning fill            | `--color-background-warning`             | warning                                            |
| Danger fill             | `--color-background-danger`              | destructive                                        |
| Success fill            | `--color-background-success`             | success                                            |
| Upsell fill             | `--color-background-upsell`              | upsell                                             |
| Surface primary         | `--color-background-primary`             | secondary, opaque-shadow, opaque-outline           |
| Invert translucent fill | `--color-background-invert-translucent`  | translucent                                        |
| Always-white text       | `--color-text-and-icons-always-white`    | primary, warning, destructive, success, upsell, translucent, invert-primary |
| Secondary text          | `--color-text-and-icons-secondary`       | secondary, opaque-shadow, opaque-outline           |
| Brand text              | `--color-text-and-icons-brand`           | ghost-primary (button), ghost-primary (link)       |
| Brand-on-subtle text    | `--color-text-and-icons-brand-on-subtle` | primary (link mode)                                |
| Danger text             | `--color-text-and-icons-danger`          | ghost-destructive (button)                         |
| Danger-on-subtle text   | `--color-text-and-icons-danger-on-subtle`| destructive (link mode)                            |
| Invert-primary text     | `--color-text-and-icons-invert-primary`  | invert-primary (link mode)                         |
| Focus outline           | `--color-stroke-brand`                   | all variants (focus-visible ring)                  |
| Tertiary outline        | `--color-stroke-tertiary`               | secondary, opaque-outline                          |

#### Size tokens

| Role              | Token            | Used by                                     |
|-------------------|------------------|---------------------------------------------|
| Padding xs        | `--spacing-half` | alternative sm padding                      |
| Padding sm        | `--spacing-x1`   | alternative md/default padding              |
| Padding md        | `--spacing-x2`   | sm size padding-y; icon-sm padding          |
| Padding md-x      | `--spacing-x3`   | sm size padding-x; md/default size padding-y; icon-md/lg padding |
| Padding lg        | `--spacing-x4`   | md/default size padding-x                  |
| Padding xl        | `--spacing-x5`   | lg size padding-x                           |
| Radius sm         | `--radius-x2`    | sm, default, md sizes                       |
| Radius md         | `--radius-x3`    | lg size; lg alternative mode                |
| Fixed height      | `--spacing-x12`  | lg size (`h-12`)                            |

#### Typography tokens

| Role              | Token                       | Used by            |
|-------------------|-----------------------------|---------------------|
| Default label     | `typo-body-2-emphasized`    | sm, default, md    |
| Large label       | `typo-body-1-emphasized`    | lg size            |

---

### States

| State    | Visual behaviour                                                              |
|----------|-------------------------------------------------------------------------------|
| Default  | Resting fill and text colour per variant.                                     |
| Hover    | Linear gradient overlay (`bg-linear-{variant}`) applied on top of fill.      |
| Active   | Pressed gradient overlay (`bg-linear-pressed-{variant}`).                    |
| Focus    | `--border-thick` solid `--color-stroke-brand` outline, `--border-thick` offset. |
| Disabled | Branded variants use a dedicated disabled token; others reduce to 50% opacity.|
| Loading  | `disabled` + `aria-busy=true` + spinner (or custom icon) prepended to label. |

---

### Anatomy

```
┌──────────────────────────────────┐
│  [loading-icon?]  label          │
└──────────────────────────────────┘

icon mode:
┌──────┐
│  [✦] │
└──────┘

alternative mode:
 ╭────╮
 │ [✦]│
 ╰────╯
```

| Part         | Description                                                   |
|--------------|---------------------------------------------------------------|
| Root         | `<button>` or the element specified by `$as` / `$asChild`     |
| loading-icon | Spinner shown left of label when `$loading=true`              |
| label        | Children (replaced by `$loadingText` during loading)          |

---

### Rules

- Never use a Button as a purely decorative element. Every Button must have a meaningful label or `aria-label`.
- Use `$mode="link"` only for inline contextual actions where a traditional anchor is inappropriate (e.g. inside a form label). For navigation, prefer `<a>` with `$asChild`.
- `invert-primary` is valid only in `$mode="link"`. In all other modes it renders with white text on a transparent background — use `translucent` for a solid inverted button.
- `$fullWidth` should be used sparingly. Prefer it in mobile layouts or constrained containers.
- `$asChild` does not propagate loading state. Manage loading appearance on the child component directly.
- Always provide `$loadingText` when `$loading` is possible — it ensures screen readers announce the state change.

---

## WEB — React

### Props

| Prop           | Type                    | Default     | Required | Description                                                         |
|----------------|-------------------------|-------------|----------|---------------------------------------------------------------------|
| `$variant`     | `ButtonVariant`         | `'primary'` | No       | Visual style. See Variant Reference below.                          |
| `$size`        | `ButtonSize`            | `'md'`      | No       | Controls padding and font. `'default'` is an alias for `'md'`.     |
| `$mode`        | `ButtonMode`            | `'default'` | No       | Layout/shape mode. See Mode Reference below.                        |
| `$loading`     | `boolean`               | `false`     | No       | Shows spinner, disables button, sets `aria-busy`.                   |
| `$loadingText` | `string`                | —           | No       | Replaces children while loading; used as `aria-label` when loading. |
| `$loadingIcon` | `ReactNode`             | —           | No       | Custom spinner. Replaces default `<CircularProgress>`.              |
| `$fullWidth`   | `boolean`               | `false`     | No       | Stretches button to 100% container width.                           |
| `$asChild`     | `boolean`               | `false`     | No       | Merges props onto child via Radix Slot.                             |
| `$as`          | `React.ElementType`     | `'button'`  | No       | Override root element. Ignored when `$asChild` is true.             |
| `className`    | `string`                | —           | No       | Appended to generated class list (Tailwind merge-safe).             |
| `disabled`     | `boolean`               | —           | No       | Native disabled. Also set automatically when `$loading=true`.       |
| `type`         | `'button'\|'submit'\|'reset'` | `'button'` | No  | Native button type. Defaults to `'button'` to prevent accidental form submission. |
| `aria-label`   | `string`                | —           | No       | Explicit accessible label. Inferred from string children when omitted. |
| `onClick`      | `MouseEventHandler`     | —           | No       | Click handler. Always applied last — takes precedence over internal handlers. |
| `ref`          | `Ref<HTMLButtonElement>`| —           | No       | Forwarded to the root element via `React.forwardRef`.               |

#### Variant Reference (`ButtonVariant`)

| Value               | Background token                         | Text token                               | Notes                                  |
|---------------------|------------------------------------------|------------------------------------------|----------------------------------------|
| `primary`           | `--color-background-brand`               | `--color-text-and-icons-always-white`    | Default. Use for primary actions.      |
| `warning`           | `--color-background-warning`             | `--color-text-and-icons-always-white`    | Caution/amber actions.                 |
| `destructive`       | `--color-background-danger`              | `--color-text-and-icons-always-white`    | Irreversible or deleting actions.      |
| `success`           | `--color-background-success`             | `--color-text-and-icons-always-white`    | Confirm / positive completion.         |
| `upsell`            | `--color-background-upsell`              | `--color-text-and-icons-always-white`    | Premium / upgrade prompts.             |
| `secondary`         | `--color-background-primary`             | `--color-text-and-icons-secondary`       | Neutral; outlined with `--color-stroke-tertiary`. |
| `ghost-primary`     | transparent                              | `--color-text-and-icons-brand`           | Low-emphasis brand action.             |
| `ghost-destructive` | transparent                              | `--color-text-and-icons-danger`          | Low-emphasis destructive action.       |
| `translucent`       | `--color-background-invert-translucent`  | `--color-text-and-icons-always-white`    | Use on photos/dark backgrounds.        |
| `opaque-shadow`     | `--color-background-primary`             | `--color-text-and-icons-secondary`       | Elevated surface with shadow.          |
| `opaque-outline`    | `--color-background-primary`             | `--color-text-and-icons-secondary`       | Elevated surface with thin border.     |
| `invert-primary`    | transparent                              | `--color-text-and-icons-always-white`    | **Link mode only.** For dark surfaces. |

#### Size Reference (`ButtonSize`)

| Value     | Padding X     | Padding Y     | Radius token   | Typography token          | SVG size |
|-----------|---------------|---------------|----------------|---------------------------|----------|
| `sm`      | `--spacing-x3`| `--spacing-x2`| `--radius-x2`  | `typo-body-2-emphasized`  | 20px     |
| `default` | `--spacing-x4`| `--spacing-x3`| `--radius-x2`  | `typo-body-2-emphasized`  | 20px     |
| `md`      | `--spacing-x4`| `--spacing-x3`| `--radius-x2`  | `typo-body-2-emphasized`  | 20px     |
| `lg`      | `--spacing-x5`| `--spacing-x3`| `--radius-x3`  | `typo-body-1-emphasized`  | 24px     |

> `default` and `md` produce identical output. Prefer `md` in new code.

#### Mode Reference (`ButtonMode`)

| Value         | Shape         | Padding                           | Notes                                            |
|---------------|---------------|-----------------------------------|--------------------------------------------------|
| `default`     | Rounded rect  | From `$size`                      | Standard text + icon button.                     |
| `icon`        | Rounded rect  | Equal on all sides (square)       | Icon-only. Compound variants set padding per size.|
| `alternative` | Circle        | Tight equal padding               | Floating action button style.                    |
| `link`        | None          | None                              | Underlined text only. Styles from `buttonLinkVariants`. |

---

### Content Slots

| Slot           | How to use                                                         |
|----------------|--------------------------------------------------------------------|
| `children`     | Button label or icon. Replace with `$loadingText` when loading.   |
| `$loadingIcon` | Custom spinner rendered before the label when `$loading=true`.     |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Button-v2
```

**Import**
```typescript
import { Button } from '@kueski/react/atoms/Button-v2';
import type { ButtonProps, ButtonVariant, ButtonSize, ButtonMode } from '@kueski/react/atoms/Button-v2';
```

**Basic usage**
```tsx
<Button>Save</Button>
```

**Variants**
```tsx
<Button $variant="primary">Primary</Button>
<Button $variant="secondary">Secondary</Button>
<Button $variant="destructive">Delete account</Button>
<Button $variant="ghost-primary">Cancel</Button>
```

**Sizes**
```tsx
<Button $size="sm">Small</Button>
<Button $size="md">Medium</Button>
<Button $size="lg">Large</Button>
```

**Icon mode**
```tsx
// Icon-only (square padding, provide aria-label)
<Button $mode="icon" aria-label="Add item">
  <PlusIcon />
</Button>

// Alternative (circular)
<Button $mode="alternative" $variant="primary" aria-label="Create">
  <PlusIcon />
</Button>
```

**Loading state**
```tsx
<Button $loading $loadingText="Saving…">Save</Button>

// Custom spinner
<Button $loading $loadingText="Uploading…" $loadingIcon={<MySpinner />}>
  Upload
</Button>
```

**Full width**
```tsx
<Button $fullWidth>Continue</Button>
```

**Link mode**
```tsx
<Button $mode="link" $variant="primary">View details</Button>
<Button $mode="link" $variant="invert-primary">Learn more</Button>
```

**Polymorphic — render as `<a>`**
```tsx
<Button $as="a" href="/dashboard">Go to dashboard</Button>
```

**Polymorphic — render as router Link (`$asChild`)**
```tsx
import { Link } from 'react-router-dom';

<Button $asChild>
  <Link to="/profile">My profile</Link>
</Button>
```

**Disabled**
```tsx
<Button disabled>Cannot proceed</Button>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class    | `KdsButton` |
| Import   | `package:kds/atoms/button/kds_button.dart` |
| Level    | Atom |
| GetX     | Not required |

---

### Parameters

| Parameter          | Type                | Default                     | Description |
|--------------------|---------------------|-----------------------------|-------------|
| `variant`          | `KdsButtonVariant`  | `KdsButtonVariant.primary`  | Visual style. See Variant values below. |
| `size`             | `KdsButtonSize`     | `KdsButtonSize.md`          | Controls padding and typography. |
| `mode`             | `KdsButtonMode`     | `KdsButtonMode.defaultMode` | Layout / shape mode. See Mode values below. |
| `onPressed`        | `VoidCallback?`     | —                           | Tap handler. Pass `null` to disable. |
| `child`            | `Widget`            | required                    | Button label or icon widget. |
| `isLoading`        | `bool`              | `false`                     | Shows spinner and blocks `onPressed`. |
| `loadingLabel`     | `String?`           | —                           | Semantics label announced while loading. |
| `loadingIndicator` | `Widget?`           | —                           | Custom spinner. Replaces default `CircularProgressIndicator`. |
| `isFullWidth`      | `bool`              | `false`                     | Stretches button to full available width. |

> **Disabled state**: pass `onPressed: null`. There is no separate `disabled` parameter — this is the Flutter convention.

#### Variant values (`KdsButtonVariant`)

| Value              | Background token | Text token               | Notes                              |
|--------------------|------------------|--------------------------|------------------------------------|
| `primary`          | `primary`        | `primary-foreground`     | Default. Use for primary actions.  |
| `warning`          | `warning`        | `warning-foreground`     | Caution / amber actions.           |
| `destructive`      | `destructive`    | `destructive-foreground` | Irreversible or deleting actions.  |
| `success`          | `success`        | `success-foreground`     | Confirm / positive completion.     |
| `upsell`           | `accent`         | `accent-foreground`      | Premium / upgrade prompts.         |
| `secondary`        | `surface`        | `text-secondary`         | Neutral, outlined with `border`.   |
| `ghostPrimary`     | transparent      | `primary` (color)        | Low-emphasis brand action.         |
| `ghostDestructive` | transparent      | `destructive`            | Low-emphasis destructive action.   |
| `translucent`      | `surface-muted`  | `primary-foreground`     | Use on photos / dark backgrounds.  |
| `opaqueShadow`     | `surface`        | `text-secondary`         | Elevated surface with shadow.      |
| `opaqueOutline`    | `surface`        | `text-secondary`         | Elevated surface with thin border. |
| `invertPrimary`    | transparent      | `primary-foreground`     | **Link mode only.** Dark surfaces. |

#### Size values (`KdsButtonSize`)

| Value | Padding X    | Padding Y    | Radius | Typography    |
|-------|--------------|--------------|--------|---------------|
| `sm`  | `spacing-3`  | `spacing-2`  | `md`   | Body 2 Medium |
| `md`  | `spacing-4`  | `spacing-3`  | `md`   | Body 2 Medium |
| `lg`  | `spacing-5`  | `spacing-3`  | `lg`   | Body 1 Medium |

#### Mode values (`KdsButtonMode`)

| Value          | Shape        | Padding                     | Notes                         |
|----------------|--------------|-----------------------------|-------------------------------|
| `defaultMode`  | Rounded rect | From `size`                 | Standard text + optional icon.|
| `icon`         | Rounded rect | Equal on all sides (square) | Icon-only. Wrap with `Semantics(label:)`. |
| `alternative`  | Circle       | `spacing-1` all sides       | Floating action button style. Radius: `full`. |
| `link`         | None         | None                        | Underlined text only.         |

---

### Token Contract

#### Colour

| Role             | Token                | Used by                                             |
|------------------|----------------------|-----------------------------------------------------|
| Brand fill       | `primary`            | `primary` variant                                   |
| Warning fill     | `warning`            | `warning` variant                                   |
| Danger fill      | `destructive`        | `destructive` variant                               |
| Success fill     | `success`            | `success` variant                                   |
| Upsell fill      | `accent`             | `upsell` variant                                    |
| Surface fill     | `surface`            | `secondary`, `opaqueShadow`, `opaqueOutline`        |
| Muted fill       | `surface-muted`      | `translucent` variant                               |
| White text       | `primary-foreground` | All filled variants + `invertPrimary`               |
| Secondary text   | `text-secondary`     | `secondary`, `opaqueShadow`, `opaqueOutline`        |
| Brand text       | `primary`            | `ghostPrimary`                                      |
| Danger text      | `destructive`        | `ghostDestructive`                                  |
| Focus ring       | `ring`               | All variants (focus outline)                        |
| Outline border   | `border`             | `secondary`, `opaqueOutline`                        |

#### Spacing

| Role          | Token       | Used by                              |
|---------------|-------------|--------------------------------------|
| Padding-Y sm  | `spacing-2` | sm size vertical padding             |
| Padding-X sm  | `spacing-3` | sm size horizontal padding           |
| Padding-Y md  | `spacing-3` | md/lg size vertical padding          |
| Padding-X md  | `spacing-4` | md size horizontal padding           |
| Padding-X lg  | `spacing-5` | lg size horizontal padding           |
| Icon–label gap| `spacing-2` | Gap between leading icon and label   |

#### Radius

| Role           | Token  | Used by                     |
|----------------|--------|-----------------------------|
| sm / md sizes  | `md`   | `sm` and `md` sizes         |
| lg size        | `lg`   | `lg` size                   |
| Circular (FAB) | `full` | `alternative` mode          |

#### Typography

| Role          | Style         | Used by      |
|---------------|---------------|--------------|
| Default label | Body 2 Medium | `sm`, `md`   |
| Large label   | Body 1 Medium | `lg`         |

#### Motion

| Role              | Token            | Used by                       |
|-------------------|------------------|-------------------------------|
| Spinner animation | `duration-quick` | Loading spinner rotation      |

---

### States

| State    | Flutter implementation                                                         |
|----------|--------------------------------------------------------------------------------|
| Default  | Resting fill and text colour per variant.                                      |
| Hover    | `InkWell` hover overlay using `primary-hover` / `*-hover` token.              |
| Pressed  | `InkWell` splash using `primary-active` / `*-active` token.                   |
| Focus    | `FocusNode` + `ring` colour outline at `2dp` offset.                          |
| Disabled | Pass `onPressed: null`. Widget opacity reduced to `0.5`.                       |
| Loading  | `onPressed` blocked internally + spinner prepended to label.                   |

---

### Code Examples

**Basic**
```dart
import 'package:kds/atoms/button/kds_button.dart';

KdsButton(
  onPressed: () {},
  child: const Text('Save'),
)
```

**Variants**
```dart
KdsButton(variant: KdsButtonVariant.primary, onPressed: () {}, child: const Text('Primary'))
KdsButton(variant: KdsButtonVariant.secondary, onPressed: () {}, child: const Text('Secondary'))
KdsButton(variant: KdsButtonVariant.destructive, onPressed: () {}, child: const Text('Delete account'))
KdsButton(variant: KdsButtonVariant.ghostPrimary, onPressed: () {}, child: const Text('Cancel'))
```

**Sizes**
```dart
KdsButton(size: KdsButtonSize.sm, onPressed: () {}, child: const Text('Small'))
KdsButton(size: KdsButtonSize.md, onPressed: () {}, child: const Text('Medium'))
KdsButton(size: KdsButtonSize.lg, onPressed: () {}, child: const Text('Large'))
```

**Icon mode**
```dart
// Icon-only — wrap with Semantics for accessibility
Semantics(
  label: 'Add item',
  child: KdsButton(
    mode: KdsButtonMode.icon,
    onPressed: () {},
    child: const Icon(KdsIcons.plus),
  ),
)

// Alternative / FAB (circular)
KdsButton(
  mode: KdsButtonMode.alternative,
  variant: KdsButtonVariant.primary,
  onPressed: () {},
  child: const Icon(KdsIcons.plus),
)
```

**Loading**
```dart
KdsButton(
  isLoading: true,
  loadingLabel: 'Saving…',
  onPressed: _save,
  child: const Text('Save'),
)

// Custom spinner
KdsButton(
  isLoading: _isSaving,
  loadingLabel: 'Uploading…',
  loadingIndicator: const MySpinner(),
  onPressed: _upload,
  child: const Text('Upload'),
)
```

**Full width**
```dart
KdsButton(
  isFullWidth: true,
  onPressed: () {},
  child: const Text('Continue'),
)
```

**Disabled**
```dart
KdsButton(
  onPressed: null, // null = disabled
  child: const Text('Cannot proceed'),
)
```

**Navigation (GetX)**
```dart
KdsButton(
  onPressed: () => Get.to(() => const DashboardScreen()),
  child: const Text('Go to dashboard'),
)
```

---

## Version Log

| Version | Date       | Change                                                                          |
|---------|------------|---------------------------------------------------------------------------------|
| 2.0.0   | 2026-06-11 | invert-primary explicit styles; icon+default compound variant; type cleanup |
| 1.0.0   | —          | Initial release                                                                 |
