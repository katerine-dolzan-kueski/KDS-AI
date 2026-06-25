# KDS Design Language — design.md

> **What this file is:** Semantic rules, anatomy patterns, and a generation scaffold for KDS atoms.
> **What this file is NOT:** A token name list or value reference — those live in `scripts/tokens.registry.json`.
>
> **Before writing any component:**
> 1. Read `scripts/tokens.registry.json` for exact valid token names.
> 2. Run `node scripts/lint-doc-tokens.mjs` after every `.docs.md` edit.
> 3. Check §5 (consistency checklist) before opening a PR.

---

## 1. Semantic Rules

Rules enforced by the linter (Phase 2). Any new component must satisfy all that apply.

### S-01 — Fill + text pairs
Every solid background token must be accompanied by its matched foreground token. The pairs are defined in `scripts/tokens.registry.json`. The pattern is always:

- `--color-background-[semantic]` → `--color-text-and-icons-always-white` (solid/strong fills)
- `--color-background-[semantic]-subtle` → `--color-text-and-icons-[semantic]-on-subtle`
- `--color-background-invert-primary` → `--color-text-and-icons-invert-primary`

**Rationale:** Mixing pairs breaks contrast guarantees. The linter enforces all known pairs automatically.

### S-02 — Error completeness (field components only)
If a component documents an `errorMessage` prop and uses `--color-stroke-error`, it must also reference `--color-text-and-icons-danger` for the footer error text.

**Applies to:** Input, Checkbox (with label), any Pattern B component. Does not apply to inline atoms (Badge, Chip) where colour alone signals error.

### S-03 — Focus state border
If a component's States table has a **Focus** row, `--color-stroke-brand` must appear in the token tables.

**Rationale:** All keyboard focus indicators must use the brand stroke colour for consistency and accessibility.

### S-04 — Interactive state overlays
If the States table documents **Hover**, `--color-states-hover` must appear. If it documents **Pressed**, `--color-states-pressed` must appear.

**Rationale:** Overlays allow tokens to work on any background. Hardcoding fill changes for hover/pressed breaks dark mode and contextual backgrounds.

### S-05 — Read-only completeness (Pattern B only)
If the States table has a **Read-only** row and `--color-stroke-tertiary` is used, `--color-background-tertiary` must also be present. Read-only field containers use both tokens together.

### S-06 — Disabled state
If the States table has a **Disabled** row, the file must reference either `--color-states-disabled` or the word "opacity". Disabled suppression must be documented.

---

## 2. Border weight by component category

Use the linter to catch invalid token names. Use this table to choose the *right* token for your component type.

| Category | Token | Who uses it |
|---|---|---|
| Decorative ring | `--border-thin` | Avatar, Card, Chip selection ring |
| Form field | `--border-regular` | Input and any Pattern B field |
| Interactive emphasis | `--border-thick` | Button focus ring, Badge outline, Checkbox |

**Rule:** Do not use `--border-thick` on a Pattern B field. Do not use `--border-regular` on a pill-shaped inline atom.

---

## 3. Radius by shape category

| Shape | Token | Who uses it |
|---|---|---|
| Pill (always round) | `--radius-max` | Avatar, Badge, CarouselStepper, Chip |
| Field / panel | `--radius-x3` | Input, Card |
| Control | `--radius-x2` | Button, small Chip |
| Micro | `--radius-x1` | Checkbox box, indicators |

---

## 4. Component anatomy patterns

All KDS atoms follow one of three patterns. A deviation requires explicit justification in the component's `.docs.md`.

### Pattern A — Inline atom
```
┌──────────────────────────────────┐
│  [Leading]  [Label]  [Trailing]  │   single row, horizontal auto-layout
└──────────────────────────────────┘
```
Used by: Button, Badge, Chip, Avatar, CarouselStepper.

- One horizontal auto-layout frame
- Label always present (except icon-only mode)
- Interactive states use `--color-states-hover` / `--color-states-pressed` overlays

### Pattern B — Field atom
```
[Label]  [(opcional)]
┌──────────────────────────────────┐
│  [Leading]  [Value]  [Trailing]  │
└──────────────────────────────────┘
[Helper / error text]    [Char count]
```
Used by: Input, Checkbox (with label), FieldBase.

- Three vertical regions, gap = `--spacing-x1`
- Field border changes by state: `--color-stroke-secondary` → `--color-stroke-brand` (focus) → `--color-stroke-error` (error) → `--color-stroke-tertiary` (read-only)
- Field fill changes by state: `--color-background-primary` → `--color-background-tertiary` (read-only)

### Pattern C — Structural atom
```
┌──────────────────────────────────┐
│  [Header slot]                   │
│  [Content slot]                  │
│  [Footer slot]                   │
└──────────────────────────────────┘
```
Used by: Card, Divider.

- Defines layout regions; content is supplied by the consumer
- Minimal interactive state requirements

---

## 5. Consistency checklist

Run before every component PR. All boxes must be checked.

### Tokens
- [ ] No raw hex, `rgba()`, or `px` values anywhere (linter Phase 1 catches this)
- [ ] Fill + text pairs are complete (S-01)
- [ ] Error state: `--color-stroke-error` + `--color-text-and-icons-danger` (S-02, if applicable)
- [ ] Focus state: `--color-stroke-brand` (S-03, if applicable)
- [ ] Hover + pressed overlays documented (S-04, if applicable)
- [ ] Read-only: both stroke and background tertiary tokens present (S-05, if applicable)
- [ ] Disabled: `--color-states-disabled` or opacity documented (S-06, if applicable)
- [ ] Border weight matches component category (§2)
- [ ] Radius matches shape category (§3)
- [ ] All spacing uses `--spacing-x*` tokens only — values in `tokens.registry.json`
- [ ] Typography uses `typo-*` Tailwind utilities only — list in `tokens.registry.json`

### Anatomy
- [ ] Component clearly follows Pattern A, B, or C
- [ ] Slot names are standard: `leadingSlot`, `trailingSlot`, `label`, `helperText`, `errorMessage`
- [ ] States table is complete for the component's pattern (§4)

### React code
- [ ] `'use client'` at top of `.tsx`
- [ ] `forwardRef<HTMLElement, Props>` with `displayName` set
- [ ] Design props use `$` prefix
- [ ] All CVA class strings use `[var(--token-name)]` — never bare Tailwind colour classes
- [ ] `defaultVariants` matches the Default row in `.docs.md`
- [ ] `index.ts` re-exports component and all types

### Figma
- [ ] All fills, strokes, padding (×4), radius (×4), `itemSpacing`, `strokeWeight` are variable-bound
- [ ] ComponentSet uses `layoutWrap = 'WRAP'` after `layoutMode = 'HORIZONTAL'`
- [ ] Showcase uses `component.createInstance()` — no raw frames

### Linter
- [ ] `node scripts/lint-doc-tokens.mjs packages/react/src/components/atoms/[Name]/[Name].docs.md` exits 0

---

## 6. Known gaps in existing components

Detected by the semantic linter. Fix these before shipping the next atom.

| Rule | Component | Issue |
|---|---|---|
| S-01 | Badge-v2 | `--color-background-invert-primary` used without `--color-text-and-icons-invert-primary` |
| S-01 | Checkbox | `--color-background-brand` / `--color-background-danger` used without `--color-text-and-icons-always-white` |
| S-04 | Button-v2 | Hover + Pressed states documented but overlay tokens missing |
| S-04 | Card | Hover state documented but `--color-states-hover` missing |
| S-06 | Badge-v2 | Disabled state documented but no token or opacity reference |
| S-06 | Avatar | Disabled state documented but no token or opacity reference |
| S-06 | Card | Disabled state documented but no token or opacity reference |

---

## 7. New component generation scaffold

Answer the decision questions, then copy the skeletons. Every `[PLACEHOLDER]` must be replaced before the linter will pass.

### 7.1 Decision questions

```
1.  Name:             [ComponentName]
2.  Anatomy pattern:  [ ] A — inline   [ ] B — field   [ ] C — structural
3.  Shape:            [ ] pill (radius-max)  [ ] field (radius-x3)  [ ] control (radius-x2)  [ ] micro (radius-x1)
4.  Border weight:    [ ] thin  [ ] regular  [ ] thick  [ ] none
5.  Variants ($variant values):   [value1 | value2 | ...]
6.  Sizes ($size values):         [sm | md | one-size]
7.  Interactive:      [ ] yes → document: hover, pressed, focus, disabled
8.  Error state:      [ ] yes (Pattern B only) — requires S-02 tokens
9.  Read-only state:  [ ] yes (Pattern B only) — requires S-05 tokens
10. Canvas y position (see CLAUDE.md): doc x=11 y=?  showcase x=1536 y=?  componentSet x=2500 y=?
```

### 7.2 `.docs.md` skeleton

```markdown
# [ComponentName]

## SHARED

### Identity

| Property | Value |
|---|---|
| Name | [ComponentName] |
| Category | Atom |
| Tag | `<[html-element]>` |
| Package | `@kueski/kds-react` |
| Status | In Development |
| Platform | Web + Flutter |

### Description

[One paragraph.]

### Design Tokens

#### Backgrounds and fills
| Role | Token |
|---|---|
| [role] | `--color-background-[semantic]` |

#### Text and icons
| Role | Token |
|---|---|
| [role] | `--color-text-and-icons-[semantic]` |

#### Strokes
| Role | Token |
|---|---|
| Default | `--color-stroke-secondary` |
| Focus | `--color-stroke-brand` |

#### Spacing
| Role | Token |
|---|---|
| Padding (vertical) | `--spacing-x[n]` |
| Padding (horizontal) | `--spacing-x[n]` |

#### Shape
| Role | Token |
|---|---|
| Corner radius | `--radius-x[n]` |
| Border weight | `--border-[thin|regular|thick]` |

### States

| State | Border | Background | Text |
|---|---|---|---|
| Default | `--color-stroke-secondary` | `--color-background-primary` | `--color-text-and-icons-primary` |

### Rules

- [Usage rule]

---

## WEB — React

### Props

| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `$variant` | `[type]` | `'[default]'` | No | [description] |

### Code Reference

#### Import
\`\`\`tsx
import { [ComponentName] } from '@kueski/kds-react';
\`\`\`

#### Usage
\`\`\`tsx
<[ComponentName] $variant="[default]" />
\`\`\`

---

## FLUTTER — Dart

### Widget

| Property | Value |
|---|---|
| Widget | `Kds[ComponentName]` |

### Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| [param] | [type] | [default] | [description] |

### Token Contract

| CSS token | Dart field |
|---|---|
| `--color-background-[x]` | `tokens.color[X]` |
```

### 7.3 `.styles.ts` skeleton

```typescript
import { cva } from 'class-variance-authority';

export const [componentName]Styles = cva(
  [
    // Shape (§3)
    'rounded-[var(--radius-x[n])]',
    // Border (§2)
    'border-[length:var(--border-[weight])] border-solid',
    // Spacing (values from tokens.registry.json)
    'px-[var(--spacing-x[n])] py-[var(--spacing-x[n])]',
    // Typography (typo-* utilities from tokens.registry.json)
    'typo-[size]-[weight]',
    // Layout
    'inline-flex items-center gap-[var(--spacing-x[n])]',
    'transition-colors duration-150',
  ],
  {
    variants: {
      $variant: {
        // Use §1 pairs — NEVER bare Tailwind colour classes
        brand: [
          'bg-[var(--color-background-brand)]',
          'text-[var(--color-text-and-icons-always-white)]',
        ],
      },
      $disabled: {
        true:  'opacity-40 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      $variant: '[default]',
      $disabled: false,
    },
  },
);
```

### 7.4 Figma plugin snippet

```javascript
// Import tokens (check tokens.registry.json for exact variable keys in memory)
const bgBrand = await figma.variables.importVariableByKeyAsync('KEY');

await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });

const comp = figma.createComponent();
comp.name = 'Variant=[value], State=[value]';

// Bind EVERYTHING — no raw values
comp.fills = [{ type:'SOLID', color:{r:0,g:0,b:0},
  boundVariables:{ color:{ type:'VARIABLE_ALIAS', id: bgBrand.id }}}];
comp.setBoundVariable('paddingTop',    spacingVar);
comp.setBoundVariable('paddingBottom', spacingVar);
comp.setBoundVariable('paddingLeft',   spacingVar);
comp.setBoundVariable('paddingRight',  spacingVar);
comp.setBoundVariable('itemSpacing',   gapVar);
comp.setBoundVariable('topLeftRadius',     radiusVar);
comp.setBoundVariable('topRightRadius',    radiusVar);
comp.setBoundVariable('bottomLeftRadius',  radiusVar);
comp.setBoundVariable('bottomRightRadius', radiusVar);
comp.setBoundVariable('strokeWeight',      borderVar);

// ComponentSet wrap (order matters)
const set = figma.combineAsVariants(components, figma.currentPage);
set.name = '[ComponentName]';
set.layoutMode = 'HORIZONTAL';
set.layoutWrap = 'WRAP';
set.primaryAxisSizingMode = 'FIXED';
set.resize([width], set.height);
set.counterAxisSizingMode = 'AUTO';
set.x = 2500; set.y = [NEXT_Y]; // see CLAUDE.md canvas table
```

---

## 8. Related component inference

Before building new, check whether an existing atom covers the need or can be extended.

| New component | Extend / relate to | What to reuse |
|---|---|---|
| OTP / PIN field | Input | Pattern B anatomy, same state tokens, grid layout for boxes |
| Search bar | Input | Pattern B field row, `--radius-max` instead of x3, no label row |
| Select / Dropdown | Input | Pattern B + trailing chevron, popover layer added |
| Textarea | Input | Pattern B, multi-line field, no trailing slot |
| Radio | Checkbox | Same interactive tokens, circle indicator instead of square |
| Toggle / Switch | Checkbox | Same state tokens, pill track shape (`--radius-max`) |
| Tag | Chip | Pattern A, remove `onClick` for non-interactive variant |
| Notification dot | Badge | Dot type only, `--radius-max` |
| Progress bar | CarouselStepper | Brand-colour fill, `--radius-max` track |
| Toast | Badge + Button | Badge variant tokens + Button action tokens combined |
| Tooltip | Badge | Pattern A, `--color-background-invert-primary` fill |
| Modal | Card | Pattern C + overlay backdrop, same `--radius-x3` |

---

*Update this file when: a new semantic rule is added to the linter, a new component pattern is introduced, or a gap from §6 is resolved.*
