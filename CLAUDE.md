# KDS — Kueski Design System

This is the source of truth for KDS components across design (Figma) and code (React/Dart).

You are helping build or maintain KDS components. Read this file before doing anything.

---

## What we're building

We are replacing the existing flawed component library with properly structured, token-connected components. Every component must:
- Use KDS semantic tokens — never raw hex, px, rgba, or unitless numbers
- Exist in four formats: documentation spec, React, Figma ComponentSet, Figma doc/showcase frame

---

## Critical constraint — zero raw values

**This applies everywhere: `.docs.md`, React code, Figma plugin scripts.**

| Instead of | Use |
|---|---|
| `#6e5be6`, `rgba(...)` | `--color-*` token |
| `8`, `16`, `0.5px` | `--spacing-*` or `--border-*` token |
| `8px`, `border-radius: 4px` | `--radius-*` token |
| Tailwind color classes like `bg-purple-600` | `bg-[var(--color-background-brand)]` |

If a token doesn't exist for the value you need, flag it — don't work around it with raw values.

---

## How to build a component (4-step pipeline)

Use the **`kds-component` skill** in Cowork. Paste the Figma URL for the old component and the skill handles all four steps.

```
Step 1 — docs     packages/react/src/components/atoms/[Name]/[Name].docs.md
Step 2 — React    .types.ts  .styles.ts (CVA)  .tsx (forwardRef)  index.ts
Step 3 — Figma    ComponentSet with all properties variable-bound
Step 4 — Figma    Doc frame (1440px) + showcase frame (850px)
```

The `.docs.md` is the source of truth — React props and Figma variants must match it exactly.

---

## Figma files

| File | Key | Purpose |
|---|---|---|
| KDS — AI | `8dFZ2WMLcxXGqj0g5R6VYy` | Where all new ComponentSets, doc frames, and showcase frames live |
| KDS Components V.1.0 | `eNpi2yt5tE24cpxvfgcEGl` | Old component library — inspect only, never modify |

Connected libraries in KDS — AI: KDS • Foundations, KDS • Components V.1.0, KDS • Icons, KDS • Photos, KDS • Illustrations, KDS • Logos.

---

## Repo structure

```
packages/react/src/components/atoms/   ← all atom components
scripts/lint-doc-tokens.mjs            ← linter for .docs.md token references
```

After writing any `.docs.md`, run the linter before proceeding:

```bash
node scripts/lint-doc-tokens.mjs packages/react/src/components/atoms/[Name]/[Name].docs.md
```

---

## React patterns

- All style files use **CVA** (`class-variance-authority`)
- Design props use a `$` prefix: `$variant`, `$size`, `$error`, etc.
- All class names reference CSS custom properties: `bg-[var(--color-background-brand)]`
- Components use `forwardRef` with `displayName` set
- `'use client'` at the top of every `.tsx`

---

## Figma plugin rules

When creating or updating a ComponentSet via plugin:

1. Import variables with `figma.variables.importVariableByKeyAsync(key)` — never hardcode values
2. Bind **everything**: fills, strokes, all 4 padding sides, all 4 radius corners, `itemSpacing`, `strokeWeight`, fixed widths/heights
3. After `combineAsVariants`, set `layoutMode = 'HORIZONTAL'`, then `layoutWrap = 'WRAP'`, then `primaryAxisSizingMode = 'FIXED'` with an explicit width — this order matters
4. Showcase frames use `component.createInstance()` — never raw frames as stand-ins
5. Font style in the API uses spaces: `'Semi Bold'`, not `'SemiBold'`

---

## Canvas layout in KDS — AI (`8dFZ2WMLcxXGqj0g5R6VYy`)

| Component | Doc (x, y) | Showcase (x, y) | ComponentSet (x, y) |
|---|---|---|---|
| Button | 11, 0 | 1536, 0 | — |
| Badge | 11, 2900 | 1536, 2900 | 2500, 2900 |
| Chip | 11, 6100 | — | — |
| Avatar | 11, 9300 | 1536, 9300 | 2500, 9300 |
| Card | 11, 12300 | 1536, 12300 | 2500, 12300 |
| CarouselStepper | 11, 15000 | 1536, 15000 | 2500, 15000 |
| Checkbox | 11, 17000 | 1536, 17000 | 2500, 17000 |
| Divider | 11, 18500 | 1536, 18500 | 2500, 18500 |
| Input | 11, 20000 | 1536, 20000 | 2500, 20000 |
| **Next** | **11, 23500** | **1536, 23500** | **2500, 23500** |

Place each new component at the next available y position and update this table.

---

## What's already done

The following components have completed all 4 steps:
Button-v2, Badge-v2, Chip, Avatar, Card, CarouselStepper, Checkbox, Divider, Input

---

## Questions?

Ping Katerine Dolzan (katerine.dolzan@kueski.com) — she owns the KDS pipeline and can review Figma output.
