# Chip

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                              |
|-----------|------------------------------------|
| Component | Chip                               |
| Package   | `@kueski/react` → `atoms/Chip`     |
| Status    | Stable                             |
| Version   | 1.0.0                              |

---

### Description

Chip is a compact labelled element used in two distinct modes. In **status** mode it communicates a semantic category or state — non-interactive, informational. In **filter** mode it acts as a toggleable control for narrowing content or selecting options.

Do not confuse Chip with Badge. Badge floats over another element and communicates a count or presence signal. Chip lives inline in the content flow, always has a text label, and can be interactive.

---

### Design Tokens

#### Colour tokens — background

| Role                        | Token                                       | Used by                              |
|-----------------------------|---------------------------------------------|--------------------------------------|
| Neutral subtle bg           | `--color-background-tertiary`               | neutral / subtle + filter unselected |
| Neutral strong bg           | `--color-background-invert-secondary`       | neutral / strong + filter selected (subtle) |
| Brand subtle bg             | `--color-background-brand-subtle`           | brand / subtle                       |
| Brand strong bg             | `--color-background-brand`                  | brand / strong                       |
| Success subtle bg           | `--color-background-success-subtle`         | success / subtle                     |
| Success strong bg           | `--color-background-success`                | success / strong                     |
| Warning subtle bg           | `--color-background-warning-subtle`         | warning / subtle                     |
| Warning strong bg           | `--color-background-warning`                | warning / strong                     |
| Danger subtle bg            | `--color-background-danger-subtle`          | danger / subtle                      |
| Danger strong bg            | `--color-background-danger`                 | danger / strong                      |
| Upsell subtle bg            | `--color-background-upsell-subtle`          | upsell / subtle                      |
| Upsell strong bg            | `--color-background-upsell`                 | upsell / strong                      |
| White bg (filter outline)   | `--color-background-primary`                | filter / outline / unselected        |
| Tinted bg (filter selected) | `--color-background-secondary`              | filter / outline / selected          |

#### Colour tokens — text and icons

| Role                      | Token                                          | Used by                              |
|---------------------------|------------------------------------------------|--------------------------------------|
| Neutral text              | `--color-text-and-icons-secondary`             | neutral / subtle + filter unselected |
| Always white              | `--color-text-and-icons-always-white`          | all strong + filter subtle selected  |
| Brand on subtle           | `--color-text-and-icons-brand-on-subtle`       | brand / subtle                       |
| Success on subtle         | `--color-text-and-icons-success-on-subtle`     | success / subtle                     |
| Warning on subtle         | `--color-text-and-icons-warning-on-subtle`     | warning / subtle                     |
| Danger on subtle          | `--color-text-and-icons-danger-on-subtle`      | danger / subtle                      |
| Upsell on subtle          | `--color-text-and-icons-upsell-on-subtle`      | upsell / subtle                      |

#### Colour tokens — border (outline and filter selected only)

| Role                        | Token                     | Used by                              |
|-----------------------------|---------------------------|--------------------------------------|
| Neutral outline             | `--color-stroke-secondary`| neutral / outline + filter outline   |
| Brand outline / filter sel  | `--color-stroke-brand`    | brand / outline + filter selected    |
| Success outline             | `--color-stroke-success`  | success / outline                    |
| Warning outline             | `--color-stroke-warning`  | warning / outline                    |
| Danger outline              | `--color-stroke-error`    | danger / outline                     |
| Upsell outline              | `--color-stroke-upsell`   | upsell / outline                     |

#### Size tokens

| Role                    | Token                | Used by                                     |
|-------------------------|----------------------|---------------------------------------------|
| Padding-x sm            | `--spacing-x2`       | sm horizontal padding (8 px)                |
| Padding-y sm            | `--spacing-half`     | sm vertical padding (2 px)                  |
| Padding-x md            | `--spacing-x3`       | md horizontal padding (12 px)               |
| Padding-y md status     | `--spacing-x1`       | md status vertical padding (4 px)           |
| Padding-y md filter     | `--spacing-x2`       | md filter vertical padding (8 px)           |
| Gap                     | `--spacing-x1`       | space between icon and label (4 px)         |
| Border outline          | `--border-thin`      | outline emphasis + filter outline unselected|
| Border filter selected  | `--border-regular`   | filter outline selected stroke              |
| Radius sm status        | `--radius-x2`        | sm status chip corners (8 px)               |
| Radius md status        | `--radius-x3`        | md status chip corners (12 px)              |
| Radius filter           | `--radius-max`       | filter chip (pill)                          |

#### Typography tokens

| Role         | Token                    | Used by          |
|--------------|--------------------------|------------------|
| sm label     | `typo-meta`              | sm size text     |
| md label     | `typo-body-2-emphasized` | md size text     |

---

### Anatomy

```
status chip (sm):
╭──────────────╮
│ ● Label  ×  │
╰──────────────╯
  └ leadingIcon  └ trailingIcon

filter chip (md, pill):
╭────────────────────╮
│ ● Filter label  ×  │
╰────────────────────╯
  └ leadingIcon        └ trailingIcon / counter
```

| Part           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| Root           | Container — `<span>` (status) or `<button>` (filter)                     |
| leadingIcon    | Optional icon slot before the label                                       |
| label          | Text content (required)                                                   |
| trailingIcon   | Optional icon after the label; used for dismiss (status) or close (filter)|
| counter        | Filter only — selection count indicator (`$selectionCounter`)             |

---

### States

#### Status chip states

| State    | Visual behaviour                                                     |
|----------|----------------------------------------------------------------------|
| Default  | Resting fill and text per variant + emphasis.                        |
| Disabled | Not applicable — status chips are non-interactive.                   |

#### Filter chip states

| State           | Visual behaviour                                                |
|-----------------|-----------------------------------------------------------------|
| Unselected      | Resting fill per emphasis (subtle = tertiary bg, outline = white bg + stroke). |
| Selected        | Dark fill (subtle) or brand-stroke (outline).                   |
| Hover           | `--color-states-hover` overlay at 10% opacity.                  |
| Pressed         | `--color-states-pressed` overlay at 20% opacity.                |
| Focus-visible   | System focus ring — do not suppress.                            |
| Disabled        | Reduced opacity via `--color-states-disabled`; `aria-disabled`. |

---

### Rules

- Use `status` chips for read-only semantic labels (state, category, tag).
- Use `filter` chips for interactive toggles — do not use status chips in filter groups.
- Always provide a visible text label; icon-only chips are not permitted.
- When `$type="filter"` and `trailingIcon` shows a dismiss action, also handle `onDismiss` to remove the chip from the list.
- Do not mix status and filter chips in the same row.
- Limit label text to 2–4 words. Long labels should be truncated with `text-overflow: ellipsis`.
- `danger` variant replaces the old "Error" label. Use for destructive or error states only.

---

## WEB — React

### Props

| Prop               | Type               | Default      | Required | Description                                               |
|--------------------|--------------------|--------------|----------|-----------------------------------------------------------|
| `$type`            | `ChipType`         | `'status'`   | No       | Determines rendering and interaction model.               |
| `$variant`         | `ChipVariant`      | `'neutral'`  | No       | Semantic colour. Status chips only; filter ignores this.  |
| `$emphasis`        | `ChipEmphasis`     | `'subtle'`   | No       | Visual weight.                                            |
| `$size`            | `ChipSize`         | `'sm'`       | No       | Size. Controls padding, radius, and font.                 |
| `$selected`        | `boolean`          | `false`      | No       | Filter type only — selected toggle state.                 |
| `leadingIcon`      | `ReactNode`        | —            | No       | Icon rendered before the label.                           |
| `trailingIcon`     | `ReactNode`        | —            | No       | Icon rendered after the label.                            |
| `$selectionCounter`| `number`           | —            | No       | Filter type only — badge showing selection count.         |
| `onDismiss`        | `() => void`       | —            | No       | Callback when the trailing dismiss icon is activated.     |
| `onClick`          | `() => void`       | —            | No       | Filter type — toggle handler.                             |
| `disabled`         | `boolean`          | `false`      | No       | Filter type only — disables toggle interaction.           |
| `children`         | `ReactNode`        | —            | Yes      | Label text.                                               |
| `className`        | `string`           | —            | No       | Appended to generated class list (Tailwind merge-safe).   |
| `aria-label`       | `string`           | —            | No       | Accessible label override.                                |

#### Type Reference (`ChipType`)

| Value    | Element   | Interactive | Notes                                     |
|----------|-----------|-------------|-------------------------------------------|
| `status` | `<span>`  | No          | `$variant` controls colour. No `$selected`. |
| `filter` | `<button>`| Yes         | Always neutral colour. `$selected` toggles state. |

#### Variant Reference (`ChipVariant`) — status only

| Value     | Subtle bg token                       | Subtle text token                              | Strong bg token                    |
|-----------|---------------------------------------|------------------------------------------------|------------------------------------|
| `neutral` | `--color-background-tertiary`         | `--color-text-and-icons-secondary`             | `--color-background-invert-secondary` |
| `brand`   | `--color-background-brand-subtle`     | `--color-text-and-icons-brand-on-subtle`       | `--color-background-brand`         |
| `success` | `--color-background-success-subtle`   | `--color-text-and-icons-success-on-subtle`     | `--color-background-success`       |
| `warning` | `--color-background-warning-subtle`   | `--color-text-and-icons-warning-on-subtle`     | `--color-background-warning`       |
| `danger`  | `--color-background-danger-subtle`    | `--color-text-and-icons-danger-on-subtle`      | `--color-background-danger`        |
| `upsell`  | `--color-background-upsell-subtle`    | `--color-text-and-icons-upsell-on-subtle`      | `--color-background-upsell`        |

All strong text uses `--color-text-and-icons-always-white`. Outline bg matches subtle, text matches subtle.

#### Emphasis Reference (`ChipEmphasis`)

| Value     | Background             | Text                 | Border                             |
|-----------|------------------------|----------------------|------------------------------------|
| `subtle`  | `*-subtle` token       | `*-on-subtle` token  | None                               |
| `outline` | `*-subtle` token       | `*-on-subtle` token  | `--border-thin` variant stroke     |
| `strong`  | filled token           | always-white         | None                               |

#### Size Reference (`ChipSize`)

| Value | Status padding (y/x)                        | Filter padding (y/x)                        | Radius (status) | Radius (filter) | Typography               |
|-------|---------------------------------------------|---------------------------------------------|-----------------|-----------------|--------------------------|
| `sm`  | `--spacing-half` / `--spacing-x2`           | `--spacing-x1` / `--spacing-x2`             | `--radius-x2`   | `--radius-max`  | `typo-meta`              |
| `md`  | `--spacing-x1` / `--spacing-x3`             | `--spacing-x2` / `--spacing-x3`             | `--radius-x3`   | `--radius-max`  | `typo-body-2-emphasized` |

> Gap between icon and label is always `--spacing-x1`.

---

### Content Slots

| Slot           | How to use                                                                       |
|----------------|----------------------------------------------------------------------------------|
| `children`     | Required label text.                                                             |
| `leadingIcon`  | Pass a KDS icon node. Rendered at 16px (sm) or 20px (md).                        |
| `trailingIcon` | Pass a KDS icon node. Use for dismiss (status) or remove (filter) interactions.  |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Chip
```

**Import**
```typescript
import { Chip } from '@kueski/react/atoms/Chip';
import type { ChipProps, ChipType, ChipVariant, ChipEmphasis, ChipSize } from '@kueski/react/atoms/Chip';
```

**Status chip — basic**
```tsx
<Chip>Active</Chip>
<Chip $variant="success">Approved</Chip>
<Chip $variant="danger" $emphasis="strong">Rejected</Chip>
<Chip $variant="warning" $emphasis="outline">Pending</Chip>
```

**Status chip — with icons**
```tsx
<Chip $variant="brand" leadingIcon={<KdsIcon name="star" />}>Featured</Chip>
<Chip $variant="neutral" trailingIcon={<KdsIcon name="close" />} onDismiss={handleDismiss}>
  Tag
</Chip>
```

**Filter chip — basic toggle**
```tsx
const [selected, setSelected] = React.useState(false);

<Chip
  $type="filter"
  $selected={selected}
  onClick={() => setSelected(s => !s)}
>
  Remote
</Chip>
```

**Filter chip — outline style with counter**
```tsx
<Chip
  $type="filter"
  $emphasis="outline"
  $selected={selected}
  $selectionCounter={3}
  onClick={toggle}
>
  Location
</Chip>
```

**Sizes**
```tsx
<Chip $size="sm">Small</Chip>
<Chip $size="md">Medium</Chip>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class    | `KdsChip` |
| Import   | `package:kds/atoms/chip/kds_chip.dart` |
| Level    | Atom |
| GetX     | Not required |

---

### Parameters

| Parameter          | Type               | Default                    | Description |
|--------------------|--------------------|----------------------------|-------------|
| `type`             | `KdsChipType`      | `KdsChipType.status`       | Status (non-interactive) or filter (toggle). |
| `variant`          | `KdsChipVariant`   | `KdsChipVariant.neutral`   | Semantic colour. Status type only. |
| `emphasis`         | `KdsChipEmphasis`  | `KdsChipEmphasis.subtle`   | Visual weight. |
| `size`             | `KdsChipSize`      | `KdsChipSize.sm`           | Size. |
| `selected`         | `bool`             | `false`                    | Filter type only — selected state. |
| `label`            | `String`           | —                          | Required label text. |
| `leadingIcon`      | `Widget?`          | —                          | Icon before label. |
| `trailingIcon`     | `Widget?`          | —                          | Icon after label. |
| `selectionCounter` | `int?`             | —                          | Filter type — selection count indicator. |
| `onTap`            | `VoidCallback?`    | —                          | Filter type — toggle callback. |
| `onDismiss`        | `VoidCallback?`    | —                          | Dismiss callback shown via trailing icon. |
| `disabled`         | `bool`             | `false`                    | Disables interaction (filter type). |
| `semanticsLabel`   | `String?`          | —                          | Accessible label override. |

#### Type values (`KdsChipType`)

| Value    | Behaviour   | Notes                     |
|----------|-------------|---------------------------|
| `status` | Read-only   | Semantic colour via `variant`. |
| `filter` | Toggleable  | Neutral colour. Uses `selected`. |

#### Variant values (`KdsChipVariant`)

| Value     | Subtle bg token  | Strong bg token  | Notes |
|-----------|------------------|------------------|-------|
| `neutral` | `surface-muted`  | `text-secondary` | Default. |
| `brand`   | `surface-cool`   | `primary`        | |
| `success` | `surface-muted`  | `success`        | Pending: success-subtle Flutter token. |
| `warning` | `surface-muted`  | `warning`        | Pending: warning-subtle Flutter token. |
| `danger`  | `surface-muted`  | `destructive`    | Pending: danger-subtle Flutter token. |
| `upsell`  | `surface-subtle` | `accent`         | Pending: upsell-subtle Flutter token. |

> **Token gap note**: Flutter does not yet have brand-subtle, success-subtle, warning-subtle, danger-subtle, or upsell-subtle tokens. Use `surface-cool` (brand) or `surface-muted` (others) as closest approximations until added to KDS Foundations / Flutter.

#### Emphasis values (`KdsChipEmphasis`)

| Value     | Background      | Text                 | Border  |
|-----------|-----------------|----------------------|---------|
| `subtle`  | subtle bg token | action text token    | None    |
| `outline` | subtle bg token | action text token    | `ring`  |
| `strong`  | action bg token | `primary-foreground` | None    |

#### Size values (`KdsChipSize`)

| Value | Status padding (y/x)              | Filter padding (y/x)              | Radius (status) | Radius (filter) | Typography |
|-------|-----------------------------------|-----------------------------------|-----------------|-----------------|------------|
| `sm`  | `spacing-1` / `spacing-2`        | `spacing-1` / `spacing-2`        | `md`            | `full`          | Meta       |
| `md`  | `spacing-1` / `spacing-3`        | `spacing-2` / `spacing-3`        | `lg`            | `full`          | Body 2     |

---

### Token Contract

#### Colour

| Role               | Token                | Used by                             |
|--------------------|----------------------|-------------------------------------|
| Neutral subtle bg  | `surface-muted`      | neutral / subtle; filter unselected |
| Brand subtle bg    | `surface-cool`       | brand / subtle                      |
| Other subtle bg    | `surface-muted`      | success, warning, danger, upsell / subtle |
| Upsell subtle bg   | `surface-subtle`     | upsell / subtle                     |
| Neutral strong bg  | `text-secondary`     | neutral / strong; filter selected   |
| Brand strong bg    | `primary`            | brand / strong                      |
| Success strong bg  | `success`            | success / strong                    |
| Warning strong bg  | `warning`            | warning / strong                    |
| Danger strong bg   | `destructive`        | danger / strong                     |
| Upsell strong bg   | `accent`             | upsell / strong                     |
| White text         | `primary-foreground` | all strong                          |
| Focus / ring       | `ring`               | outline emphasis; filter selected   |

#### Spacing

| Role             | Token       | Used by                |
|------------------|-------------|------------------------|
| Padding-x sm     | `spacing-2` | sm horizontal padding  |
| Padding-x md     | `spacing-3` | md horizontal padding  |
| Padding-y sm     | `spacing-1` | sm vertical padding    |
| Padding-y md     | `spacing-1` (status) / `spacing-2` (filter) | md vertical padding |
| Gap              | `spacing-1` | icon-to-label gap      |

#### Radius

| Role           | Token  | Used by           |
|----------------|--------|-------------------|
| Status sm      | `md`   | status / sm       |
| Status md      | `lg`   | status / md       |
| Filter all     | `full` | filter (pill)     |

---

### States

| State      | Flutter implementation                           |
|------------|--------------------------------------------------|
| Unselected | Resting fill per emphasis.                       |
| Selected   | Dark fill (subtle) or brand-ring (outline).      |
| Hover      | InkWell ripple with `ring` colour overlay.       |
| Pressed    | Darker ripple overlay.                           |
| Disabled   | `disabled` opacity via theme.                    |

---

### Code Examples

**Status chip**
```dart
import 'package:kds/atoms/chip/kds_chip.dart';

KdsChip(label: 'Active')
KdsChip(variant: KdsChipVariant.success, label: 'Approved')
KdsChip(variant: KdsChipVariant.danger, emphasis: KdsChipEmphasis.strong, label: 'Rejected')
KdsChip(variant: KdsChipVariant.warning, emphasis: KdsChipEmphasis.outline, label: 'Pending')
```

**Filter chip**
```dart
KdsChip(
  type: KdsChipType.filter,
  label: 'Remote',
  selected: _isSelected,
  onTap: () => setState(() => _isSelected = !_isSelected),
)
```

**Filter chip — outline with counter**
```dart
KdsChip(
  type: KdsChipType.filter,
  emphasis: KdsChipEmphasis.outline,
  label: 'Location',
  selected: _isSelected,
  selectionCounter: 3,
  onTap: toggle,
)
```

---

## Version Log

| Version | Date       | Change                                                             |
|---------|------------|--------------------------------------------------------------------|
| 1.0.0   | 2026-06-15 | Initial release — unifies Chip/Status + Chip/Filter into one atom |
