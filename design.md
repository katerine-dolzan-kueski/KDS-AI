# KDS Design Language — design.md

> **What this file is:** Foundation architecture, semantic rules, anatomy patterns, motion guidance, flows layer, and a generation scaffold for KDS atoms.
> **What this file is NOT:** A token name list or value reference — those live in `scripts/tokens.registry.json` (web) and `tokens/motion.json` + `tokens/motion_tokens.dart` (motion).
>
> **Before writing any component:**
> 1. Read `scripts/tokens.registry.json` for exact valid web token names.
> 2. Run `node scripts/lint-doc-tokens.mjs` after every `.docs.md` edit.
> 3. Check §10 (consistency checklist) before opening a PR.

---

## 0. Foundation Architecture

All KDS tokens follow a strict three-layer hierarchy. No layer may skip to a lower one.

```
Primitive layer       Raw values (HSL, px, ms) — defined once in tokens.registry.json
        ↓
Semantic layer        Meaningful names (--color-background-brand, --spacing-x4) — what components reference
        ↓
Component usage       Slots in .docs.md, CVA class strings, Figma variable bindings
```

### Platform outputs

| Platform | Token source | Format |
|---|---|---|
| Web (React) | `scripts/tokens.registry.json` → CSS custom properties | `--color-*`, `--spacing-*`, `--radius-*`, `--border-*` |
| Flutter | `tokens/motion_tokens.dart`, `KdsTokens` ThemeExtension | Dart fields |
| Figma | KDS • Foundations variable library | Bound variables via `importVariableByKeyAsync` |

### Global constraint

**Zero raw values everywhere.** No hex, `rgba()`, `px` numbers, or unitless values in `.docs.md`, React code, Figma plugin scripts, or Flutter widgets. If a token doesn't exist for the value you need, flag it — do not work around it.

---

## 1. Color System

The palette is built using the OKLab color space for perceptual consistency and accessibility across devices.

### Three neutral families — never mixed within one component

| Family | Contexts |
|---|---|
| **Gray** | Default system neutral — use everywhere unless specifically noted below |
| **Blue Gray** | Cool / data contexts only (analytics, charts) |
| **Brown Gray** | Warm / branded contexts only |

### Semantic color groups

Each semantic color has a base, hover, and active tier following the **state pattern rule**:

| State | Tier |
|---|---|
| Base | Mid-range (e.g. `*-600`) |
| Hover | One step darker |
| Active / Pressed | Two steps darker |

Exact token names and values live in `tokens.registry.json`. Reference these semantic groupings when choosing tokens:

- **Background & surface** — `--color-background-*`
- **Text & icons** — `--color-text-and-icons-*`
- **Strokes** — `--color-stroke-*`
- **State overlays** — `--color-states-*` (hover, pressed, disabled — works on any background)

### Warning foreground exception

Yellow/warning backgrounds have insufficient contrast with white text. When using `--color-background-warning` or `--color-background-warning-subtle`, pair with a dark foreground token, not always-white. Verify with the S-01 linter rule and confirm the correct pair exists in `tokens.registry.json`.

### Color usage rules

- Always use semantic tokens (`--color-background-brand`), never primitive values (`blue-600`, `#6e5be6`)
- Never mix neutral families in the same component
- All fill + text pairs must satisfy S-01 (see §5)

---

## 2. Typography System

**Font family:** Inter Variable 4.0

### Scale

| Category | Styles | Used for |
|---|---|---|
| Display / Headings | Headline 1 (32pt Bold), H2 (24pt Bold), H3 (20pt Bold) | Titles, section headers |
| Body | Body 1 (16pt), Body 2 (14pt) — Regular / Medium / Bold | UI copy, labels |
| Supporting | Meta (12pt), Mini (11pt), Micro (10pt) | Helper text, captions |

All typography is exposed as `typo-*` Tailwind utilities. Token names are in `tokens.registry.json`. Never use arbitrary font sizes.

### Typography rules

- Use predefined styles only — no arbitrary font sizes
- Use tabular numbers for financial data (`font-variant-numeric: tabular-nums`)
- Font style in the Figma API uses spaces: `'Semi Bold'`, not `'SemiBold'`

---

## 3. Spacing System

Based on a **4px grid**. All spacing is exposed as `--spacing-x*` CSS custom properties.

| Multiplier | Token |
|---|---|
| 1× (4px) | `--spacing-x1` |
| 2× (8px) | `--spacing-x2` |
| 3× (12px) | `--spacing-x3` |
| 4× (16px) | `--spacing-x4` |
| 5× (20px) | `--spacing-x5` |
| 6× (24px) | `--spacing-x6` |

Exact values in `tokens.registry.json`. Never use raw `px` values. Negative spacing (e.g. avatar overlap / facepile) is valid but must still reference a spacing token.

---

## 4. Motion System

**Source of truth:** `tokens/motion.json`
**Flutter constants:** `tokens/motion_tokens.dart`
**Implementation target:** Flutter / GetX

All flows must reference motion tokens — no hardcoded duration, delay, or curve values anywhere in the codebase.

### Structure

```
primitive values → semantic aliases → composite presets
```

Reach for a preset first. Use primitives only if no preset covers the case.

### Duration tokens

| Token | Value | Use |
|---|---|---|
| `duration-micro` | 200ms | Toasts, button press feedback |
| `duration-quick` | 300ms | Content within sheets, stepper, internal sheet transitions |
| `duration-moderate` | 500ms | Secondary elements, footer entry, carousel content |
| `duration-standard` | 600ms | Main sheet entry, screen-to-screen route transitions |
| `duration-expressive` | 800ms | Hero illustrations — slow and deliberate |

### Delay tokens

| Token | Value | Use |
|---|---|---|
| `delay-none` | 0ms | Container-level elements (sheet, stepper) |
| `delay-short` | 100ms | First content element after container enters |
| `delay-base` | 300ms | Secondary elements — footer, toast, carousel content |
| `delay-long` | 600ms | Last element in sequence — hero illustration |

### Easing tokens

| Token | Flutter value | Use |
|---|---|---|
| `ease-standard` | `Curves.easeInOut` | All organic, natural transitions. Default. |
| `ease-linear` | `Curves.linear` | Snappy/mechanical only: toast, internal sheet nav |

### Stagger sequence — canonical order

The entrance order for any KDS screen:

```
t=0ms    → Container / Sheet enters     (sheetEnter)
t=100ms  → First content enters         (contentVertical)
t=300ms  → Secondary elements enter     (footerEnter, contentHorizontal)
t=600ms  → Hero illustration enters     (illustration)
```

### Motion rules

- Never hardcode duration, delay, or easing — always use a semantic token or preset
- `ease-linear` is reserved for snappy/mechanical transitions only. Everything else uses `ease-standard`
- Display durations (`slideAutoAdvance`, `toastVisible`) are NOT `AnimationController` durations — handle with `Timer` in component logic
- Stagger order within any screen: **container → content → footer → illustration**
- Do not add new presets without a real flow context to justify them

---

## 5. Semantic Rules

Rules enforced by the linter (Phase 2). Any new component must satisfy all that apply.

### S-01 — Fill + text pairs

Every solid background token must be accompanied by its matched foreground token. The pairs are defined in `scripts/tokens.registry.json`. The pattern is always:

- `--color-background-[semantic]` → `--color-text-and-icons-always-white` (solid/strong fills)
- `--color-background-[semantic]-subtle` → `--color-text-and-icons-[semantic]-on-subtle`
- `--color-background-invert-primary` → `--color-text-and-icons-invert-primary`

**Warning exception:** `--color-background-warning` may require a dark foreground token. Verify contrast manually and confirm the correct pair exists in the registry (see §1).

**Rationale:** Mixing pairs breaks contrast guarantees. The linter enforces all known pairs automatically.

### S-02 — Error completeness (field components only)

If a component documents an `errorMessage` prop and uses `--color-stroke-error`, it must also reference `--color-text-and-icons-danger` for the footer error text.

**Applies to:** Input, Checkbox (with label), any Pattern B component. Does not apply to inline atoms (Badge, Chip) where colour alone signals error.

### S-03 — Focus state border

If a component's States table has a **Focus** row, `--color-stroke-brand` must appear in the token tables.

**Rationale:** All keyboard focus indicators must use the brand stroke colour for consistency and accessibility.

### S-04 — Interactive state overlays

If the States table documents **Hover**, `--color-states-hover` must appear. If it documents **Pressed**, `--color-states-pressed` must appear.

**Rationale:** Overlays work on any background. Hardcoding fill changes for hover/pressed breaks dark mode and contextual backgrounds.

### S-05 — Read-only completeness (Pattern B only)

If the States table has a **Read-only** row and `--color-stroke-tertiary` is used, `--color-background-tertiary` must also be present. Read-only field containers use both tokens together.

### S-06 — Disabled state

If the States table has a **Disabled** row, the file must reference either `--color-states-disabled` or the word "opacity". Disabled suppression must be documented.

---

## 6. Border weight by component category

Use the linter to catch invalid token names. Use this table to choose the *right* token for your component type.

| Category | Token | Who uses it |
|---|---|---|
| Decorative ring | `--border-thin` | Avatar, Card, Chip selection ring |
| Form field | `--border-regular` | Input and any Pattern B field |
| Interactive emphasis | `--border-thick` | Button focus ring, Badge outline, Checkbox |

**Rule:** Do not use `--border-thick` on a Pattern B field. Do not use `--border-regular` on a pill-shaped inline atom.

---

## 7. Radius by shape category

| Shape | Token | Who uses it |
|---|---|---|
| Pill (always round) | `--radius-max` | Avatar, Badge, CarouselStepper, Chip |
| Field / panel | `--radius-x3` | Input, Card |
| Control | `--radius-x2` | Button, small Chip |
| Micro | `--radius-x1` | Checkbox box, indicators |

---

## 8. Component anatomy patterns

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
[Label]  [(optional)]
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

## 9. Flows layer

Flows describe how KDS components are assembled into product screens. They sit above atoms in the hierarchy — they consume components but do not introduce new tokens.

### Global flow rules

- One primary CTA per screen
- Inline validation first — Banner is for system-level or form-level errors only
- Components must not introduce new tokens when used in a flow
- Spacing between sections uses semantic tokens only
- Stagger animation sequence follows §4 motion rules

### Validation hierarchy (applies to all flows)

| Error scope | Where it appears |
|---|---|
| Field-level | Inline in the Input component (error state) |
| Form-level | Functional Banner at top of screen |
| System-level | Functional Banner at top of screen |

Never surface a field error in a Banner, or a system error inline in a field.

### Flow spec template

When documenting a new flow screen, create a separate file in `docs/flows/[FlowName]/[ScreenName].md` using:

```markdown
## [Flow Name] — [Screen Name]

**Flow:** [Flow]   **Screen:** [Name]   **Step:** [N of N]
**Figma:** [URL]
**Purpose:** [One sentence.]

### Components used
- [ComponentName] ([variant])

### Token usage
| Property | Token(s) |
|---|---|
| Background | --color-background-primary |
| Text | --color-text-and-icons-primary |

### States
| State | Description |
|---|---|
| default | [description] |
| error | [description] |

### Validation behavior
| Error type | Component |
|---|---|
| Field errors | Input error state (inline) |
| Form / system errors | Functional Banner |

### Edge cases
- [case]

### Rules
- [constraint specific to this screen]
```

---

## 10. Consistency checklist

Run before every component PR. All boxes must be checked.

### Tokens
- [ ] No raw hex, `rgba()`, or `px` values anywhere (linter Phase 1 catches this)
- [ ] Fill + text pairs are complete (S-01)
- [ ] Warning background paired with correct foreground — not automatically always-white (§1)
- [ ] Error state: `--color-stroke-error` + `--color-text-and-icons-danger` (S-02, if applicable)
- [ ] Focus state: `--color-stroke-brand` (S-03, if applicable)
- [ ] Hover + pressed overlays documented (S-04, if applicable)
- [ ] Read-only: both stroke and background tertiary tokens present (S-05, if applicable)
- [ ] Disabled: `--color-states-disabled` or opacity documented (S-06, if applicable)
- [ ] Border weight matches component category (§6)
- [ ] Radius matches shape category (§7)
- [ ] All spacing uses `--spacing-x*` tokens only — values in `tokens.registry.json`
- [ ] Typography uses `typo-*` Tailwind utilities only — list in `tokens.registry.json`

### Motion (Flutter only)
- [ ] No hardcoded `Duration(milliseconds: ...)` — always use a `MotionDuration.*` constant
- [ ] No hardcoded easing curves — always use `MotionCurve.*`
- [ ] Stagger sequence follows container → content → footer → illustration order
- [ ] Display timers (toast, carousel) handled with `Timer`, not `AnimationController`

### Anatomy
- [ ] Component clearly follows Pattern A, B, or C
- [ ] Slot names are standard: `leadingSlot`, `trailingSlot`, `label`, `helperText`, `errorMessage`
- [ ] States table is complete for the component's pattern (§8)

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

## 11. Known gaps in existing components

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

## 12. New component generation scaffold

Answer the decision questions, then copy the skeletons. Every `[PLACEHOLDER]` must be replaced before the linter will pass.

### 12.1 Decision questions

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
10. Has Flutter motion? [ ] yes → reference motion presets from §4
11. Canvas y position (see CLAUDE.md): doc x=11 y=?  showcase x=1536 y=?  componentSet x=2500 y=?
```

### 12.2 `.docs.md` skeleton

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

### Motion

| Preset | Token | Use |
|---|---|---|
| [MotionWidget.*] | [duration + delay] | [when it fires] |
```

### 12.3 `.styles.ts` skeleton

```typescript
import { cva } from 'class-variance-authority';

export const [componentName]Styles = cva(
  [
    // Shape (§7)
    'rounded-[var(--radius-x[n])]',
    // Border (§6)
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
        // Use §5 S-01 pairs — NEVER bare Tailwind colour classes
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

### 12.4 Figma plugin snippet

```javascript
// Import tokens (check tokens.registry.json for exact variable keys)
const bgBrand = await figma.variables.importVariableByKeyAsync('KEY');

await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' }); // note: space, not SemiBold

const comp = figma.createComponent();
comp.name = 'Variant=[value], State=[value]';

// Bind EVERYTHING — no raw values
comp.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 },
  boundVariables: { color: { type: 'VARIABLE_ALIAS', id: bgBrand.id } } }];
comp.setBoundVariable('paddingTop',          spacingVar);
comp.setBoundVariable('paddingBottom',       spacingVar);
comp.setBoundVariable('paddingLeft',         spacingVar);
comp.setBoundVariable('paddingRight',        spacingVar);
comp.setBoundVariable('itemSpacing',         gapVar);
comp.setBoundVariable('topLeftRadius',       radiusVar);
comp.setBoundVariable('topRightRadius',      radiusVar);
comp.setBoundVariable('bottomLeftRadius',    radiusVar);
comp.setBoundVariable('bottomRightRadius',   radiusVar);
comp.setBoundVariable('strokeWeight',        borderVar);

// CRITICAL: set layoutSizingHorizontal AFTER appendChild, not before
parent.appendChild(node);
node.layoutSizingHorizontal = 'HUG';    // text nodes only
// node.layoutSizingHorizontal = 'FIXED'; // InstanceNode (icons) — HUG not allowed on instances

// ComponentSet wrap — order matters
const set = figma.combineAsVariants(components, figma.currentPage);
set.name = '[ComponentName]';
set.layoutMode = 'HORIZONTAL';        // 1. direction first
set.layoutWrap = 'WRAP';             // 2. wrap after layoutMode
set.primaryAxisSizingMode = 'FIXED'; // 3. then fix width
set.resize([width], set.height);     // 4. then apply size
set.counterAxisSizingMode = 'AUTO';
set.x = 2500; set.y = [NEXT_Y];     // see CLAUDE.md canvas table
```

---

## 13. Related component inference

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
| Toast | Badge + Button | Badge variant tokens + Button action tokens; motion: `MotionWidget.toast` |
| Tooltip | Badge | Pattern A, `--color-background-invert-primary` fill |
| Modal | Card | Pattern C + overlay backdrop, `--radius-x3`; motion: `MotionWidget.sheetEnter` + stagger |
| Functional Banner | — | Inline atom with icon + body + CTA; one per screen max |
| Bottom Sheet | Card | Pattern C + scrim + drag handle; motion: `MotionWidget.sheetEnter` + stagger |

---

*Update this file when: a new semantic rule is added to the linter, a new component pattern is introduced, a new motion preset is defined, a flow screen is formally specced, or a gap from §11 is resolved.*
