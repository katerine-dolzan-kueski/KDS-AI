# Badge

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                             |
|-----------|-----------------------------------|
| Component | Badge                             |
| Package   | `@kueski/react` → `atoms/Badge-v2`|
| Status    | Stable                            |
| Version   | 1.0.0                             |

---

### Description

Badge is a small contextual indicator used to communicate status, category, or quantity. It appears floating above a tile or icon, or inline within a layout. Use the correct variant to communicate semantic intent; use emphasis to control visual weight.

Do not confuse Badge with Chip. Chips are interactive, appear in the flow, and can be selected or dismissed. Badges are non-interactive indicators positioned relative to another element.

---

### Design Tokens

#### Colour tokens — background

| Role                   | Token                                  | Used by                              |
|------------------------|----------------------------------------|--------------------------------------|
| Brand fill (default)   | `--color-background-brand`             | brand / default, strong              |
| Brand fill (subtle)    | `--color-background-brand-subtle`      | brand / subtle                       |
| Success fill (default) | `--color-background-success`           | success / default, strong            |
| Success fill (subtle)  | `--color-background-success-subtle`    | success / subtle                     |
| Warning fill (default) | `--color-background-warning`           | warning / default, strong            |
| Warning fill (subtle)  | `--color-background-warning-subtle`    | warning / subtle                     |
| Danger fill (default)  | `--color-background-danger`            | danger / default, strong             |
| Danger fill (subtle)   | `--color-background-danger-subtle`     | danger / subtle                      |
| Upsell fill (default)  | `--color-background-upsell`            | upsell / default, strong             |
| Upsell fill (subtle)   | `--color-background-upsell-subtle`     | upsell / subtle                      |
| Neutral fill (subtle)  | `--color-background-secondary`         | neutral / subtle                     |
| Neutral fill (default) | `--color-background-invert-tertiary`   | neutral / default                    |
| Neutral fill (strong)  | `--color-background-invert-primary`    | neutral / strong                     |

#### Colour tokens — text

| Role                   | Token                                         | Used by                             |
|------------------------|-----------------------------------------------|-------------------------------------|
| Always white           | `--color-text-and-icons-always-white`         | all default + strong emphasis       |
| Brand on subtle        | `--color-text-and-icons-brand-on-subtle`      | brand / subtle                      |
| Success on subtle      | `--color-text-and-icons-success-on-subtle`    | success / subtle                    |
| Warning on subtle      | `--color-text-and-icons-warning-on-subtle`    | warning / subtle                    |
| Danger on subtle       | `--color-text-and-icons-danger-on-subtle`     | danger / subtle                     |
| Upsell on subtle       | `--color-text-and-icons-upsell-on-subtle`     | upsell / subtle                     |
| Secondary text         | `--color-text-and-icons-secondary`            | neutral / subtle                    |

#### Colour tokens — border (strong emphasis only)

| Role           | Token                    | Used by              |
|----------------|--------------------------|----------------------|
| Brand ring     | `--color-stroke-brand`   | brand / strong       |
| Success ring   | `--color-stroke-success` | success / strong     |
| Warning ring   | `--color-stroke-warning` | warning / strong     |
| Danger ring    | `--color-stroke-error`   | danger / strong      |
| Upsell ring    | `--color-stroke-upsell`  | upsell / strong      |
| Neutral ring   | `--color-stroke-secondary`| neutral / strong    |

#### Size tokens

| Role          | Token            | Used by                              |
|---------------|------------------|--------------------------------------|
| Dot sm size   | `--spacing-x2`   | dot / sm width + height (8×8)        |
| Dot md size   | `--spacing-x3`   | dot / md width + height (12×12)      |
| Label sm h    | `--spacing-x4`   | label + count / sm height (16px)     |
| Label md h    | `--spacing-x5`   | label + count / md height (20px)     |
| Padding sm    | `--spacing-x1`   | label + count / sm padding-x (4px)   |
| Padding md    | `--spacing-x2`   | label + count / md padding-x (8px)   |
| Border strong | `--border-thick`  | strong emphasis ring                 |
| Pill radius   | `--radius-max`   | all types (fully rounded)            |

#### Typography tokens

| Role       | Token        | Used by           |
|------------|--------------|-------------------|
| sm label   | `typo-mini`  | sm size text      |
| md label   | `typo-meta`  | md size text      |

---

### Anatomy

```
dot type:
 ●

label type:
╭──────────╮
│  New     │
╰──────────╯

count type:
╭────╮
│ 3  │
╰────╯

count overflow:
╭─────╮
│ 99+ │
╰─────╯
```

| Part       | Description                                                          |
|------------|----------------------------------------------------------------------|
| Root       | Pill-shaped or circular container, non-interactive                   |
| label      | Text content. Omitted for `dot` type.                                |
| ring       | `--border-thick` solid border visible only in `strong` emphasis.     |

---

### States

Badge is non-interactive. There are no hover, active, focus, or loading states.

| State    | Visual behaviour                                          |
|----------|-----------------------------------------------------------|
| Default  | Resting fill, text, and optional ring per variant/emphasis. |
| Disabled | Not applicable — Badges carry information, not actions.   |

---

### Rules

- Badge must always convey semantic meaning. Do not use it as a purely decorative element.
- `dot` type has no visible text — always provide `aria-label` describing the status.
- `count` type overflows at `max` (default 99); render `{max}+` above the threshold.
- Never place more than one Badge on a single target element.
- `neutral` variant is reserved for generic or non-semantic counts (e.g., total items, unread messages with no urgency).

---

## WEB — React

### Props

| Prop         | Type             | Default        | Required | Description                                                         |
|--------------|------------------|----------------|----------|---------------------------------------------------------------------|
| `$variant`   | `BadgeVariant`   | `'brand'`      | No       | Semantic colour. See Variant Reference below.                       |
| `$emphasis`  | `BadgeEmphasis`  | `'default'`    | No       | Visual weight. See Emphasis Reference below.                        |
| `$type`      | `BadgeType`      | `'label'`      | No       | Content type. See Type Reference below.                             |
| `$size`      | `BadgeSize`      | `'md'`         | No       | Size. Controls height, padding, and dot diameter.                   |
| `$max`       | `number`         | `99`           | No       | Overflow threshold for `count` type. Renders `{max}+` above limit. |
| `children`   | `ReactNode`      | —              | No       | Text or count value. Not rendered for `dot` type.                   |
| `className`  | `string`         | —              | No       | Appended to generated class list (Tailwind merge-safe).             |
| `aria-label` | `string`         | —              | No       | Required for `dot` type. Describes the status visually.             |

#### Variant Reference (`BadgeVariant`)

| Value     | Subtle bg token                         | Subtle text token                             | Filled bg token                    | Notes             |
|-----------|-----------------------------------------|-----------------------------------------------|------------------------------------|-------------------|
| `brand`   | `--color-background-brand-subtle`       | `--color-text-and-icons-brand-on-subtle`      | `--color-background-brand`         | Default variant.  |
| `success` | `--color-background-success-subtle`     | `--color-text-and-icons-success-on-subtle`    | `--color-background-success`       |                   |
| `warning` | `--color-background-warning-subtle`     | `--color-text-and-icons-warning-on-subtle`    | `--color-background-warning`       |                   |
| `danger`  | `--color-background-danger-subtle`      | `--color-text-and-icons-danger-on-subtle`     | `--color-background-danger`        |                   |
| `upsell`  | `--color-background-upsell-subtle`      | `--color-text-and-icons-upsell-on-subtle`     | `--color-background-upsell`        |                   |
| `neutral` | `--color-background-secondary`          | `--color-text-and-icons-secondary`            | `--color-background-invert-tertiary`| Non-semantic.    |

All filled text uses `--color-text-and-icons-always-white`.

#### Emphasis Reference (`BadgeEmphasis`)

| Value     | Background          | Text                   | Border                          |
|-----------|---------------------|------------------------|---------------------------------|
| `subtle`  | `*-subtle` token    | `*-on-subtle` token    | None                            |
| `default` | filled token        | always-white           | None                            |
| `strong`  | filled token        | always-white           | `--border-thick` variant stroke |

> `neutral/strong` uses `--color-background-invert-primary` (darkest) rather than the default `--color-background-invert-tertiary`.

#### Type Reference (`BadgeType`)

| Value   | Shape    | Content              | Notes                                    |
|---------|----------|----------------------|------------------------------------------|
| `dot`   | Circle   | None                 | Width = height. Provide `aria-label`.    |
| `label` | Pill     | `children` as text   | Use for short text (1–4 characters).     |
| `count` | Pill     | `children` as number | Overflows to `{$max}+` above threshold.  |

#### Size Reference (`BadgeSize`)

| Value | Dot size       | Label height   | Padding-x      | Typography   |
|-------|----------------|----------------|----------------|--------------|
| `sm`  | `--spacing-x2` | `--spacing-x4` | `--spacing-x1` | `typo-mini`  |
| `md`  | `--spacing-x3` | `--spacing-x5` | `--spacing-x2` | `typo-meta`  |

All types use `--radius-max` (pill / circle).

---

### Content Slots

| Slot       | How to use                                                            |
|------------|-----------------------------------------------------------------------|
| `children` | The label text or count number. Not rendered when `$type="dot"`.     |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Badge-v2
```

**Import**
```typescript
import { Badge } from '@kueski/react/atoms/Badge-v2';
import type { BadgeProps, BadgeVariant, BadgeEmphasis, BadgeType, BadgeSize } from '@kueski/react/atoms/Badge-v2';
```

**Dot — status indicator**
```tsx
<Badge $type="dot" $variant="danger" aria-label="Unread notifications" />
<Badge $type="dot" $variant="success" $size="sm" aria-label="Online" />
```

**Label**
```tsx
<Badge>New</Badge>
<Badge $variant="success">Active</Badge>
<Badge $variant="warning" $emphasis="subtle">Beta</Badge>
```

**Count**
```tsx
<Badge $type="count">{3}</Badge>
<Badge $type="count" $variant="danger">{128}</Badge>
{/* Renders "99+" when value > $max (default 99) */}
<Badge $type="count" $variant="brand">{128}</Badge>
```

**Emphasis levels**
```tsx
<Badge $variant="brand" $emphasis="subtle">Subtle</Badge>
<Badge $variant="brand" $emphasis="default">Default</Badge>
<Badge $variant="brand" $emphasis="strong">Strong</Badge>
```

**Sizes**
```tsx
<Badge $size="sm">sm</Badge>
<Badge $size="md">md</Badge>
```

**Neutral**
```tsx
<Badge $variant="neutral">{42}</Badge>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class    | `KdsBadge` |
| Import   | `package:kds/atoms/badge/kds_badge.dart` |
| Level    | Atom |
| GetX     | Not required |

---

### Parameters

| Parameter    | Type              | Default                    | Description |
|--------------|-------------------|----------------------------|-------------|
| `variant`    | `KdsBadgeVariant` | `KdsBadgeVariant.brand`    | Semantic colour. |
| `emphasis`   | `KdsBadgeEmphasis`| `KdsBadgeEmphasis.defaultEmphasis` | Visual weight. |
| `type`       | `KdsBadgeType`    | `KdsBadgeType.label`       | Content type. |
| `size`       | `KdsBadgeSize`    | `KdsBadgeSize.md`          | Size. |
| `label`      | `String?`         | —                          | Text for `label` type. |
| `count`      | `int?`            | —                          | Number for `count` type. |
| `max`        | `int`             | `99`                       | Overflow threshold for `count` type. |
| `semanticsLabel` | `String?`     | —                          | Required for `dot` type (screen reader). |

#### Variant values (`KdsBadgeVariant`)

| Value     | Default bg token  | Subtle bg token  | Notes |
|-----------|-------------------|------------------|-------|
| `brand`   | `primary`         | `surface-cool`   | Default. |
| `success` | `success`         | `surface-muted`  | Pending: success-subtle Flutter token. |
| `warning` | `warning`         | `surface-muted`  | Pending: warning-subtle Flutter token. |
| `danger`  | `destructive`     | `surface-muted`  | Pending: danger-subtle Flutter token. |
| `upsell`  | `accent`          | `surface-subtle` | Pending: upsell-subtle Flutter token. |
| `neutral` | `text-secondary`  | `surface-muted`  | Non-semantic counts. |

> **Token gap note**: Flutter does not yet have brand-subtle, success-subtle, warning-subtle, danger-subtle, or upsell-subtle tokens. Until added to KDS Foundations / Flutter, use `surface-cool` (brand) or `surface-muted` (others) as closest approximations. Track in `docs-template/FLUTTER_SECTION.md` checklist.

#### Emphasis values (`KdsBadgeEmphasis`)

| Value              | Background       | Text                  | Border |
|--------------------|------------------|-----------------------|--------|
| `subtle`           | subtle bg token  | action color text     | None   |
| `defaultEmphasis`  | action bg token  | `primary-foreground`  | None   |
| `strong`           | action bg token  | `primary-foreground`  | `ring` |

#### Type values (`KdsBadgeType`)

| Value   | Content           | Notes |
|---------|-------------------|-------|
| `dot`   | None              | Provide `semanticsLabel`. |
| `label` | `label` String    | Short text. |
| `count` | `count` int       | Shows `{max}+` above threshold. |

#### Size values (`KdsBadgeSize`)

| Value | Dot size    | Label height | Padding-x   | Typography    |
|-------|-------------|--------------|-------------|---------------|
| `sm`  | `spacing-2` | `spacing-4`  | `spacing-1` | Mini (11pt)   |
| `md`  | `spacing-3` | `spacing-5`  | `spacing-2` | Meta (12pt)   |

All types: radius `full`.

---

### Token Contract

#### Colour

| Role               | Token                | Used by                          |
|--------------------|----------------------|----------------------------------|
| Brand fill         | `primary`            | brand / default + strong         |
| Success fill       | `success`            | success / default + strong       |
| Warning fill       | `warning`            | warning / default + strong       |
| Danger fill        | `destructive`        | danger / default + strong        |
| Upsell fill        | `accent`             | upsell / default + strong        |
| Neutral fill       | `text-secondary`     | neutral / default + strong       |
| Brand subtle bg    | `surface-cool`       | brand / subtle                   |
| Muted subtle bg    | `surface-muted`      | success, warning, danger / subtle|
| Faint subtle bg    | `surface-subtle`     | upsell / subtle; neutral / subtle|
| White text         | `primary-foreground` | all default + strong             |
| Focus / ring       | `ring`               | strong emphasis border           |

#### Spacing

| Role          | Token       | Used by               |
|---------------|-------------|-----------------------|
| Dot sm        | `spacing-2` | dot / sm              |
| Dot md        | `spacing-3` | dot / md              |
| Label h sm    | `spacing-4` | label + count / sm    |
| Label h md    | `spacing-5` | label + count / md    |
| Padding-x sm  | `spacing-1` | label + count / sm    |
| Padding-x md  | `spacing-2` | label + count / md    |

#### Radius

| Role    | Token  | Used by  |
|---------|--------|----------|
| All     | `full` | all types |

---

### States

Badge is non-interactive. No hover, pressed, focus, or loading states.

| State   | Flutter implementation |
|---------|------------------------|
| Default | Resting fill, text, optional ring per variant/emphasis. |

---

### Code Examples

**Dot — status indicator**
```dart
import 'package:kds/atoms/badge/kds_badge.dart';

KdsBadge(
  type: KdsBadgeType.dot,
  variant: KdsBadgeVariant.danger,
  semanticsLabel: 'Unread notifications',
)
```

**Label**
```dart
KdsBadge(label: 'New')
KdsBadge(variant: KdsBadgeVariant.success, label: 'Active')
KdsBadge(variant: KdsBadgeVariant.warning, emphasis: KdsBadgeEmphasis.subtle, label: 'Beta')
```

**Count with overflow**
```dart
KdsBadge(type: KdsBadgeType.count, count: 3)
KdsBadge(type: KdsBadgeType.count, variant: KdsBadgeVariant.danger, count: 128)
// Renders "99+" (default max)
```

**Emphasis**
```dart
KdsBadge(variant: KdsBadgeVariant.brand, emphasis: KdsBadgeEmphasis.subtle, label: 'Subtle')
KdsBadge(variant: KdsBadgeVariant.brand, emphasis: KdsBadgeEmphasis.defaultEmphasis, label: 'Default')
KdsBadge(variant: KdsBadgeVariant.brand, emphasis: KdsBadgeEmphasis.strong, label: 'Strong')
```

**Sizes**
```dart
KdsBadge(size: KdsBadgeSize.sm, label: 'sm')
KdsBadge(size: KdsBadgeSize.md, label: 'md')
```

**Positioned over an icon (floating)**
```dart
Stack(
  clipBehavior: Clip.none,
  children: [
    Icon(KdsIcons.bell),
    Positioned(
      top: -spacing-2,
      right: -spacing-2,
      child: KdsBadge(
        type: KdsBadgeType.dot,
        variant: KdsBadgeVariant.danger,
        size: KdsBadgeSize.sm,
        semanticsLabel: 'Notifications',
      ),
    ),
  ],
)
```

---

## Version Log

| Version | Date       | Change          |
|---------|------------|-----------------|
| 1.0.0   | 2026-06-15 | Initial release |
