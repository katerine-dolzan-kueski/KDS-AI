# CarouselStepper

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                                        |
|-----------|----------------------------------------------|
| Component | CarouselStepper                              |
| Package   | `@kueski/react` → `atoms/CarouselStepper`   |
| Status    | Stable                                       |
| Version   | 1.0.0                                        |

---

### Description

CarouselStepper is a compact progress indicator that communicates position within a multi-step sequence or carousel. It renders a row of dots (short) or bars (wide) that update to reflect the current step.

It covers two distinct use cases:

- **Manual** (`$type='manual'`): Used inside a carousel or slideshow. The user can navigate freely in both directions. Steps before the active step are shown as "completed" (already visited), the active step is highlighted, and steps after are "inactive."

- **Progress** (`$type='progress'`): Used for sequential flows where the user moves forward only — onboarding, multi-step forms, and similar flows. `$size='short'` renders dot/pill indicators; `$size='wide'` renders full-width bars designed for dark or photo backgrounds.

Do not use CarouselStepper as a primary navigation or breadcrumb element. It conveys position, not action. Pair it with explicit next/back controls.

---

### Design Tokens

#### Colour tokens — short variant

| Role                        | Token                                   | Used by                                          |
|-----------------------------|-----------------------------------------|--------------------------------------------------|
| Inactive dot                | `--color-text-and-icons-tertiary`       | Dots not yet reached; opacity reduced to 50%     |
| Active dot / pill           | `--color-text-and-icons-brand`          | Current step — manual and progress               |
| Completed dot (manual)      | `--color-text-and-icons-brand`          | Steps already visited in manual type             |
| Completed pill (progress)   | `--color-text-and-icons-secondary`      | Steps fully completed in progress type           |

#### Colour tokens — wide variant

| Role                        | Token                                   | Used by                                          |
|-----------------------------|-----------------------------------------|--------------------------------------------------|
| Inactive bar                | `--color-text-and-icons-always-white`   | Bars not yet reached; opacity reduced to 50%     |
| In-progress bar (active)    | `--color-text-and-icons-always-white`   | Current step bar — partial fill on white track   |
| Completed bar               | `--color-text-and-icons-always-white`   | Steps fully completed                            |

> Note: The wide variant uses white tokens and is designed to be placed on dark or photo backgrounds.

#### Size tokens

| Role            | Token           | Used by                                 |
|-----------------|-----------------|-----------------------------------------|
| Gap between steps | `--spacing-x1`| Space between dot/bar elements          |
| Dot border-radius | `--radius-max`| Fully rounded dots, pills, and bars     |

---

### Anatomy

#### Short variant

```
○  ●●●●  ○  ○
│   │    │  │
│   │    │  └── Inactive dot (small, 50% opacity)
│   │    └───── Inactive dot (small, 50% opacity)
│   └────────── Active pill (wider, brand fill)
└────────────── Completed dot (small, brand fill) [manual] / completed pill (progress)
```

#### Wide variant (progress only)

```
████████  ████████  ≡≡≡≡≡≡≡≡░░░░░░░░  ░░░░░░░░░░░░░░░░
   ↑           ↑           ↑                ↑
Completed  Completed   In-progress       Inactive
 (white)    (white)   (white + track)   (white 50%)
```

| Part         | Description                                                                              |
|--------------|------------------------------------------------------------------------------------------|
| Container    | Horizontal row with `--spacing-x1` gap. Short: `w-fit`; Wide: full-width `flex`.        |
| Inactive dot | `6×6px` rounded pill, `--color-text-and-icons-tertiary` at 50% opacity (short).         |
| Active pill  | `24×6px` rounded pill, `--color-text-and-icons-brand` fill (short, manual/progress).    |
| Completed dot| `6×6px` rounded pill, `--color-text-and-icons-brand` fill (short, manual).             |
| Completed pill| `24×6px` rounded pill, `--color-text-and-icons-secondary` fill (short, progress).     |
| Inactive bar | `flex-1 × 4px` bar, `--color-text-and-icons-always-white` at 50% opacity (wide).       |
| In-progress bar| `flex-1 × 4px` bar with partial white fill on 50%-opacity track (wide).             |
| Completed bar| `flex-1 × 4px` bar, `--color-text-and-icons-always-white` full opacity (wide).         |

---

### States

| State       | Visual behaviour                                                                           |
|-------------|--------------------------------------------------------------------------------------------|
| Inactive    | Small dot or full-opacity-reduced bar. No interactivity.                                   |
| Active      | Wider pill (short) or in-progress bar (wide). Highlights current position.                |
| Completed   | Small dot in brand colour (manual short), wider pill in secondary (progress short), full bar (wide). |

---

### Rules

- CarouselStepper is a non-interactive indicator — it does not respond to clicks itself. Use it with external next/back buttons.
- Do not use `$size='wide'` with `$type='manual'`. Wide is for progress flows only.
- Always place the wide variant on a dark, coloured, or photo background — white tokens are invisible on white.
- The `steps` prop accepts any integer of 2 or more. The `activeStep` prop is 0-indexed.
- Do not use CarouselStepper as a substitute for a full stepper or breadcrumb — it communicates position only, not step labels or actions.
- Animate step transitions with CSS transitions (`transition-all duration-300`) for a polished experience.

---

## WEB — React

### Props

| Prop         | Type                        | Default      | Required | Description                                                  |
|--------------|-----------------------------|--------------|----------|--------------------------------------------------------------|
| `$type`      | `CarouselStepperType`       | `'manual'`   | No       | Interaction model: carousel pagination or sequential progress. |
| `$size`      | `CarouselStepperSize`       | `'short'`    | No       | Indicator style. `'wide'` only valid with `$type='progress'`. |
| `steps`      | `number`                    | —            | Yes      | Total number of steps (minimum 2).                           |
| `activeStep` | `number`                    | —            | Yes      | 0-indexed index of the current step.                         |
| `className`  | `string`                    | —            | No       | Appended to the container class list (Tailwind merge-safe).  |

#### Type Reference (`CarouselStepperType`)

| Value       | Description                                                                              |
|-------------|------------------------------------------------------------------------------------------|
| `'manual'`  | Carousel/slideshow pagination. States: inactive → active, completed when navigated past. |
| `'progress'`| Sequential flow. States: inactive → active (in-progress) → completed.                   |

#### Size Reference (`CarouselStepperSize`)

| Value     | Description                                                 | Valid with              |
|-----------|-------------------------------------------------------------|-------------------------|
| `'short'` | Dots (6×6px) and pills (24×6px). Light-background-friendly. | `manual`, `progress`    |
| `'wide'`  | Full-width bars (flex-1 × 4px). Dark-background-friendly.   | `progress` only         |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/CarouselStepper
```

**Import**
```typescript
import { CarouselStepper } from '@kueski/react/atoms/CarouselStepper';
import type { CarouselStepperProps, CarouselStepperType, CarouselStepperSize } from '@kueski/react/atoms/CarouselStepper';
```

**Carousel — manual pagination (3 slides, showing slide 1)**
```tsx
<CarouselStepper $type="manual" steps={3} activeStep={1} />
```

**Progress — short dots (4-step form, step 2 active)**
```tsx
<CarouselStepper $type="progress" steps={4} activeStep={2} />
```

**Progress — wide bars (on dark background)**
```tsx
<div className="bg-[var(--color-background-invert-primary)] p-[var(--spacing-x5)]">
  <CarouselStepper $type="progress" $size="wide" steps={4} activeStep={1} />
</div>
```

---

## FLUTTER — Dart

<!-- TODO: Flutter section — placeholder until Dart token foundation is complete -->
> Flutter implementation deferred. Web KDS token foundation takes priority.
> Dart widget `KdsCarouselStepper` to be added in Phase 2 alongside the Flutter token layer.

---

## Version Log

| Version | Date       | Change                                                                           |
|---------|------------|----------------------------------------------------------------------------------|
| 1.0.0   | 2026-06-16 | Initial release — manual + progress types, short + wide sizes, dynamic step count |
