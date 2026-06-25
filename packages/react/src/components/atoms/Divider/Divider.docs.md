# Divider

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                              |
|-----------|------------------------------------|
| Component | Divider                            |
| Package   | `@kueski/react` → `atoms/Divider` |
| Status    | Stable                             |
| Version   | 1.0.0                              |

---

### Description

Divider is a thin horizontal line that visually separates groups of content within a layout. It supports three stroke thicknesses to accommodate varying levels of visual emphasis, from the near-invisible 0.5dp separator to the more prominent 2dp rule.

Use Divider between sections of a page, between list items that need clear separation, or within card bodies to divide distinct content blocks. Do not use Divider as a decorative element — reserve it for meaningful content grouping.

---

### Design Tokens

#### Colour tokens

| Role             | Token                                 | Used by                  |
|------------------|---------------------------------------|--------------------------|
| Line colour      | `--color-text-and-icons-tertiary-a50` | All thickness variants   |

#### Stroke-size tokens

| Thickness | Token            | dp  |
|-----------|------------------|-----|
| thin      | `--border-thin`    | 0.5 |
| regular   | `--border-regular` | 1   |
| thick     | `--border-thick`   | 2   |

---

### Anatomy

```
┌────────────────────────────────────────────┐
│ ────────────────────────────────────────── │  ← height = --border-thin / --border-regular / --border-thick
│                                            │     fill  = --color-stroke-secondary
└────────────────────────────────────────────┘
        ↑ width = 100% of its container
```

| Part  | Description                                                                   |
|-------|-------------------------------------------------------------------------------|
| Line  | Full-width rectangle whose height is bound to the chosen thickness token.     |

---

### States

| State    | Visual behaviour                               |
|----------|------------------------------------------------|
| Default  | Static line — no hover, focus, or press states. |

---

### Rules

- Divider stretches to fill 100% of its container width.
- Default thickness is `thin` (0.5dp).
- Do not wrap Divider in a fixed-width container — let it inherit layout width.
- For a vertical separator between inline elements, use `orientation='vertical'` once that variant is added; do not rotate the horizontal Divider manually.

---

## WEB — React

### Props

| Prop         | Type                              | Default  | Required | Description                                  |
|--------------|-----------------------------------|----------|----------|----------------------------------------------|
| `$thickness` | `'thin' \| 'regular' \| 'thick'` | `'thin'` | No       | Controls the height of the divider line.     |
| `className`  | `string`                          | —        | No       | Appended to the root element class list.     |

---

### Thickness reference

| `$thickness` | Token              | Visual dp |
|--------------|--------------------|-----------|
| `thin`       | `--border-thin`    | 0.5       |
| `regular`    | `--border-regular` | 1         |
| `thick`      | `--border-thick`   | 2         |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Divider
```

**Import**
```typescript
import { Divider } from '@kueski/react/atoms/Divider';
import type { DividerProps } from '@kueski/react/atoms/Divider';
```

**Default (thin)**
```tsx
<Divider />
```

**Regular separator between sections**
```tsx
<Divider $thickness="regular" />
```

**Bold rule**
```tsx
<Divider $thickness="thick" />
```

---

## FLUTTER — Dart

<!-- TODO: Flutter section — placeholder until Dart token foundation is complete -->
> Flutter implementation deferred. Web KDS token foundation takes priority.
> Dart widget `KdsDivider` to be added in Phase 2 alongside the Flutter token layer.

---

## Version Log

| Version | Date       | Change                                             |
|---------|------------|----------------------------------------------------|
| 1.0.0   | 2026-06-16 | Initial KDS spec — three thickness variants        |
