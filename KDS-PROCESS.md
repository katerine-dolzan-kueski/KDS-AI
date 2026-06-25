# Building KDS — Design Process Retrospective

A record of how the Kueski Design System was built with Claude: the methodology, decisions, technical patterns, and lessons that define the pipeline going forward.

---

## The problem we were solving

The existing component library (KDS Components V.1.0) had components defined independently in Figma and in code, with no enforced connection between them. Tokens were hardcoded as hex values in Figma and as raw Tailwind classes in React. Adding a new component meant recreating the same structure from scratch each time, with no guarantee it matched anything that existed.

The goal was to build a system that is:
- **Token-connected everywhere** — Figma, React, and Flutter all pull from the same source
- **Self-documenting** — every component has a machine-readable spec that is the authority for both code and design
- **Scalable** — adding a new component follows a repeatable pipeline, not a one-off process
- **Self-enforcing** — a linter catches violations before anything ships

---

## The pipeline: four steps for every component

Every component follows the same four-step sequence. Steps cannot be skipped or reordered — each one feeds the next.

```
Step 1 — Spec        [ComponentName].docs.md
Step 2 — React       .types.ts  .styles.ts  .tsx  index.ts
Step 3 — Figma       ComponentSet with variable bindings
Step 4 — Figma       Doc frame (1440px) + Showcase frame (850px)
```

### Step 1: Write the spec first

The `.docs.md` file is the single source of truth. It is written before any code or Figma work begins, and it defines:

- Every design token the component uses (verified against `tokens.registry.json`)
- The full States table (default, hover, pressed, focus, error, read-only, disabled)
- The anatomy (which slots exist and what they do)
- All props and their types, defaults, and descriptions

**Why spec first?** Writing the spec forces you to answer every design question — what happens in each state, which tokens apply, what the anatomy actually is — before implementation locks in choices. React and Figma then become straightforward execution of decisions already made.

After writing the spec, the linter runs:

```bash
node scripts/lint-doc-tokens.mjs packages/react/src/components/atoms/[Name]/[Name].docs.md
```

If it fails, fix the spec. Never move to Step 2 with a failing linter.

### Step 2: React implementation

Four files, in this order:

1. **`.types.ts`** — union types for all design prop values, the full props interface extending native HTML attributes. Design props use a `$` prefix (`$variant`, `$size`, `$error`) to signal they are not passed to the DOM.

2. **`.styles.ts`** — CVA (class-variance-authority) functions. Every class name references a CSS custom property: `bg-[var(--color-background-brand)]`. Never bare Tailwind colour classes. Compound variants handle state interactions.

3. **`.tsx`** — `forwardRef<HTMLElement, Props>` with `displayName` set. Internal state (`focused`, `hasValue`) is derived from events, not exposed as props. Slots are composed with resolved defaults before render.

4. **`index.ts`** — re-exports everything: component + all types.

### Step 3: Figma ComponentSet

A plugin script runs in the KDS-AI Figma file (`8dFZ2WMLcxXGqj0g5R6VYy`). The script:

1. Imports all needed KDS variables with `figma.variables.importVariableByKeyAsync(key)`
2. Creates one component per variant combination (e.g. 5 types × 6 states = 30 components for Input)
3. Binds variables to **everything** — fills, strokes, all 4 padding sides, all 4 radius corners, `itemSpacing`, `strokeWeight`
4. Combines with `figma.combineAsVariants()`, then sets wrap layout in the correct order

### Step 4: Figma doc + showcase frames

Two frames placed on the KDS-AI canvas:

- **Doc frame** (1440px wide, `x=11`): header bar, identity cards, props table, token reference
- **Showcase frame** (850px wide, `x=1536`): state-grouped instances using `component.createInstance()` — never raw frames

Canvas positions are tracked in `CLAUDE.md` so each new component gets placed without overlap.

---

## Components shipped

Ten atoms completed through all four steps:

| Component | Variants / States | Notes |
|---|---|---|
| Button-v2 | 5 variants × 4 sizes × 2 modes | Includes icon-only and link modes |
| Badge-v2 | 6 variants × 3 emphasis × 3 types × 2 sizes | Dot, label, count types |
| Chip | Status + filter types, 6 variants × 3 emphasis | Discriminated union props |
| Avatar | 3 visuals × 2 sizes × 2 border colours | Photo, icon, logo |
| Card | Primary / secondary types | Pattern C structural atom |
| CarouselStepper | Manual / progress × short / wide | Animated step indicator |
| Checkbox | 3 states × error × disabled | Indeterminate state |
| Divider | 3 weights × horizontal/vertical | |
| Input | 5 types × 6 states | Text, phone, date, payment, CLABE |

Plus a **Flutter/Dart PoC** for Checkbox: `KdsTokens extends ThemeExtension<KdsTokens>` with full token contract, `KdsCheckbox` widget with animated fill and focus ring, and a runnable demo in `flutter-poc/example/main.dart`.

---

## The zero raw values rule

The most important constraint in the system: **no hex colours, no `px` values, no `rgba()` — anywhere, ever**.

This applies to:
- `.docs.md` token tables — must use `--color-*` / `--spacing-*` token names
- React `.styles.ts` — must use `[var(--token-name)]` syntax in class strings
- Figma plugin scripts — must use `importVariableByKeyAsync` and `setBoundVariable`
- Flutter — must reference `KdsTokens` fields, never `Color(0xFF...)`

**Why so strict?** A hardcoded value breaks theme switching, dark mode, and any future token update. It also creates invisible inconsistency — two components can look the same today and diverge tomorrow if they use raw values instead of shared tokens.

The linter enforces this automatically in `.docs.md`. For React and Figma, it is enforced by code review and convention.

---

## The linter: two phases

The linter (`scripts/lint-doc-tokens.mjs`) runs on every `.docs.md` file and catches two classes of problems:

**Phase 1 — Token validity.** Every backtick token reference must exist in `scripts/tokens.registry.json`. Raw hex/px/rgba values in token positions are forbidden. This is the baseline — no unknown tokens, no raw values.

**Phase 2 — Semantic rules.** Six rules extracted from the design language:

| Rule | What it checks |
|---|---|
| S-01 | Every solid background token must be accompanied by its matched foreground token |
| S-02 | Error state in field components: `--color-stroke-error` requires `--color-text-and-icons-danger` |
| S-03 | Focus state: States table Focus row requires `--color-stroke-brand` |
| S-04 | Interactive overlays: Hover/Pressed rows require `--color-states-hover` / `--color-states-pressed` |
| S-05 | Read-only (field only): `--color-stroke-tertiary` requires `--color-background-tertiary` |
| S-06 | Disabled: States table Disabled row requires a token or opacity reference |

Rules are scoped to the patterns they apply to. S-02 and S-05 only fire for Pattern B (field) components. S-03 only fires on explicit Focus rows, not "Active" (which means something different in non-interactive components like CarouselStepper).

Running the linter after writing the `.docs.md` skeleton — before touching any code — is the "filter beforehand" that catches design decisions before implementation locks them in.

---

## Component anatomy patterns

All KDS atoms follow one of three anatomy patterns. This makes new components predictable and allows the linter to apply the right rules.

**Pattern A — Inline atom** (Button, Badge, Chip, Avatar, CarouselStepper)
Single horizontal row: leading slot → label → trailing slot. Interactive states use `--color-states-hover` / `--color-states-pressed` overlays.

**Pattern B — Field atom** (Input, Checkbox with label, FieldBase)
Three vertical regions: label row → field container → footer row. Field border changes by state: secondary (rest) → brand (focus) → error (error) → tertiary (read-only). Field fill changes: primary → tertiary (read-only).

**Pattern C — Structural atom** (Card, Divider)
Defines layout regions (header, content, footer). Content is consumer-supplied. Minimal interactive state requirements.

---

## Token architecture

The token hierarchy has three levels:

```
Figma Foundations (variables in KDS • Foundations library)
         ↓
CSS custom properties (packages/react/src/styles/tokens/*.css)
         ↓
Tailwind utilities (typo-*, spacing-*, etc.)
```

The `scripts/tokens.registry.json` is the machine-readable index of all valid tokens at every level. It drives the linter and is the single source of truth for token names. `design.md` references it but never duplicates it.

---

## Key technical lessons

### Figma API ordering matters

When building ComponentSets with wrap layout, operations must happen in this exact order:

```javascript
set.layoutMode = 'HORIZONTAL';  // 1. Set direction first
set.layoutWrap = 'WRAP';        // 2. layoutWrap after layoutMode
set.primaryAxisSizingMode = 'FIXED'; // 3. Then fix the width
set.resize(width, set.height);  // 4. Then apply the size
```

Any other order silently produces the wrong result.

### `layoutSizingHorizontal` must come after `appendChild`

Setting `layoutSizingHorizontal = 'HUG'` on a node before appending it to an auto-layout parent throws an error. Always: create node → append to parent → set layout sizing.

```javascript
// Wrong
node.layoutSizingHorizontal = 'HUG'; // ❌ error: not yet a child
parent.appendChild(node);

// Correct
parent.appendChild(node);
node.layoutSizingHorizontal = 'HUG'; // ✅
```

### Icon instances can't use HUG

`InstanceNode` (from `importComponentByKeyAsync`) cannot be set to `HUG` sizing — only text nodes and auto-layout frames can. Icon instances must always use `FIXED` sizing with an explicit `resize()`.

### design.md must not duplicate the registry

The first version of `design.md` included full token name tables. These drifted immediately. The fix: `design.md` contains only rules (S-01 through S-06, anatomy patterns, border/radius categories). Token names and values live exclusively in `tokens.registry.json`. Documents that duplicate their source of truth become stale.

### Discriminated unions prevent impossible prop combinations

When a component has modes that are mutually exclusive (Chip has status chips and filter chips with different props), use a discriminated union rather than a flat interface with optional props:

```typescript
type StatusChipProps = BaseProps & { $type: 'status'; $variant: ChipVariant; };
type FilterChipProps = BaseProps & { $type: 'filter'; selected: boolean; onToggle: () => void; };
export type ChipProps = StatusChipProps | FilterChipProps;
```

This catches impossible combinations at the TypeScript level rather than at runtime.

---

## The design system as infrastructure

The most important shift in this process: treating the design system as infrastructure rather than a deliverable.

- The **linter** is infrastructure — it runs on every file and enforces rules automatically
- The **`kds-component` skill** is infrastructure — it codifies the four-step pipeline so it can be executed consistently
- The **token registry** is infrastructure — it is the single source of truth that all other tools validate against
- The **`design.md` + `CLAUDE.md`** combination is infrastructure — it carries context across sessions and prevents decisions from being re-litigated

Each component added to the system makes the next one easier, because the patterns are more established, the linter catches more edge cases, and the canvas layout grows in a predictable direction.

---

## What comes next

Components identified as natural extensions of what's been built:

| Component | Extends | Priority |
|---|---|---|
| Select / Dropdown | Input (Pattern B) | High — form completion |
| Textarea | Input (Pattern B) | High — form completion |
| Radio | Checkbox | Medium |
| Toggle / Switch | Checkbox | Medium |
| OTP field | Input (6-box grid) | Medium |
| Toast / Snackbar | Badge + Button | Low |
| Modal | Card (Pattern C) | Low |
| Tooltip | Badge | Low |

Before starting any of these: answer the §7.1 decision questions in `design.md`, write the `.docs.md` skeleton, run the linter to zero, then proceed.
