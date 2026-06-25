# Flutter/Dart Section — Scalable Template

> This file defines the canonical structure for the `## FLUTTER — Dart` section in every KDS component `.docs.md` file.
> The section is **additive**: atoms use the base set of subsections; molecules add Composition; organisms add Controller and Lifecycle.
> All token references must use the Flutter vocabulary from `scripts/tokens.registry.json → flutter`.
> No raw hex, rgb, or px values anywhere. Run `node scripts/lint-doc-tokens.mjs` before merging.

---

## Levels at a glance

| Level    | Examples                                  | Required sections                                                                 |
|----------|-------------------------------------------|-----------------------------------------------------------------------------------|
| Atom     | Button, Badge, Avatar, Icon, Tag          | Widget · Parameters · Token Contract · States · Code Examples                    |
| Molecule | InputField, Card, Chip, ListItem, Toast   | Widget · Parameters · Token Contract · States · Composition · Code Examples      |
| Organism | Dialog, BottomSheet, Header, NavBar, Form | Widget · Parameters · Token Contract · States · Composition · Controller · Code Examples |

---

## BASE TEMPLATE (all levels)

Copy this block into your `.docs.md` file below `## WEB — React`. Delete the `<!-- ... -->` instruction comments before committing.

---

```markdown
## FLUTTER — Dart

### Widget

<!-- Required for all levels -->

| Property | Value |
|----------|-------|
| Class    | `Kds{ComponentName}` |
| Import   | `package:kds/{level}/{component-slug}/kds_{component_slug}.dart` |
| Level    | Atom <!-- or Molecule or Organism --> |
| GetX     | Not required <!-- or: "KdsXxxController" for organisms --> |

---

### Parameters

<!-- Required for all levels -->
<!-- Map each React prop to its Dart equivalent. Dart naming: camelCase, no $ prefix -->
<!-- Disabled state = onPressed: null (no separate disabled param) -->
<!-- No $asChild / $as — Flutter uses Widget composition -->

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| ...       | ...  | ...     | ...         |

---

### Token Contract

<!-- Required for all levels -->
<!-- Use ONLY Flutter token names from tokens.registry.json → flutter -->
<!-- Sections: Colour, Spacing, Radius, Typography, Motion (omit Motion if no animation) -->

#### Colour

| Role | Token | Used by |
|------|-------|---------|
| ...  | ...   | ...     |

#### Spacing

| Role | Token | Used by |
|------|-------|---------|
| ...  | ...   | ...     |

#### Radius

| Role | Token | Used by |
|------|-------|---------|
| ...  | ...   | ...     |

#### Typography

| Role | Style | Used by |
|------|-------|---------|
| ...  | ...   | ...     |

#### Motion

<!-- Include only if the component animates (entrance, feedback, loading, transition) -->

| Role | Token | Used by |
|------|-------|---------|
| ...  | ...   | ...     |

---

### States

<!-- Required for all levels -->
<!-- Document how each SHARED state is achieved in Flutter -->

| State    | Flutter implementation |
|----------|------------------------|
| Default  | ...                    |
| Hover    | ...                    |
| Pressed  | ...                    |
| Focus    | ...                    |
| Disabled | ...                    |

---

<!-- ─────────────────────────────────────────────────────────────────────────
     MOLECULE ONLY — add this section if the component is a Molecule
     ──────────────────────────────────────────────────────────────────────── -->

### Composition

<!-- Which KDS atoms does this molecule use? List them with their Dart import path -->

| Atom | Import |
|------|--------|
| `KdsButton` | `package:kds/atoms/button/kds_button.dart` |
| ...         | ...                                        |

#### Named slots

<!-- Widget builders or named child parameters that consumers can override -->

| Slot | Type | Description |
|------|------|-------------|
| `leading` | `Widget?` | Icon or avatar shown before the label. |
| ...       | ...        | ...                                    |

---

<!-- ─────────────────────────────────────────────────────────────────────────
     ORGANISM ONLY — add this section if the component is an Organism
     ──────────────────────────────────────────────────────────────────────── -->

### Controller

<!-- Organisms that manage state or navigation use a GetX controller -->

| Property         | Value |
|------------------|-------|
| Class            | `Kds{ComponentName}Controller` |
| Import           | `package:kds/organisms/{slug}/kds_{slug}_controller.dart` |
| Registered by    | Widget (auto-injected via `Get.put` on mount) |

#### Controller state

| Field | Type | Description |
|-------|------|-------------|
| `isVisible` | `RxBool` | Controls visibility / open state. |
| ...         | ...       | ...                               |

#### Navigation patterns

```dart
// Open
Get.to(() => const KdsXxxScreen());

// Dismiss
Get.back();

// Named route
Get.toNamed('/xxx');
```

---

### Code Examples

<!-- Required for all levels -->
<!-- Show: basic, variants, states (loading/disabled), any organism open/close pattern -->

**Basic**
```dart
import 'package:kds/{level}/{slug}/kds_{slug}.dart';

Kds{ComponentName}(
  // minimum required props
)
```

**Variants / props**
```dart
// ...
```

**Disabled**
```dart
// ...
```

**Loading** <!-- if applicable -->
```dart
// ...
```

**Organism open/close** <!-- organisms only -->
```dart
// open
controller.isVisible.value = true;

// close via button
KdsButton(
  onPressed: () => Get.back(),
  child: const Text('Close'),
)
```
```

---

## Flutter token quick-reference

Use these when filling in the Token Contract. Full values are in `scripts/tokens.registry.json`.

### Colour — semantic action (variant fills / text)

| Token                  | Equivalent web token                    |
|------------------------|-----------------------------------------|
| `primary`              | `--color-background-brand`              |
| `primary-foreground`   | `--color-text-and-icons-always-white`   |
| `primary-hover`        | blue-700                                |
| `primary-active`       | blue-800                                |
| `destructive`          | `--color-background-danger`             |
| `destructive-foreground` | `--color-text-and-icons-always-white` |
| `success`              | `--color-background-success`            |
| `success-foreground`   | `--color-text-and-icons-always-white`   |
| `warning`              | `--color-background-warning`            |
| `warning-foreground`   | white (on amber bg)                     |
| `accent`               | `--color-background-upsell`             |
| `accent-foreground`    | `--color-text-and-icons-always-white`   |
| `secondary`            | gray-200                                |
| `secondary-foreground` | `--color-text-and-icons-secondary`      |

### Colour — semantic neutral (surfaces / text / feedback)

| Token          | Equivalent web token                         |
|----------------|----------------------------------------------|
| `surface`      | `--color-background-primary` (white)         |
| `surface-muted`| `--color-background-secondary`               |
| `surface-subtle`| `--color-background-tertiary`               |
| `text-primary` | `--color-text-and-icons-primary`             |
| `text-secondary`| `--color-text-and-icons-secondary`          |
| `text-muted`   | `--color-text-and-icons-tertiary`            |
| `text-disabled`| gray-400                                     |
| `border`       | `--color-stroke-tertiary`                    |
| `border-strong`| `--color-stroke-secondary`                   |
| `ring`         | `--color-stroke-brand`                       |
| `input`        | `--color-stroke-tertiary`                    |

### Spacing (maps to web --spacing-x* tokens)

| Token      | Value | Web equivalent     |
|------------|-------|--------------------|
| `spacing-1`| 4px   | `--spacing-x1`     |
| `spacing-2`| 8px   | `--spacing-x2`     |
| `spacing-3`| 12px  | `--spacing-x3`     |
| `spacing-4`| 16px  | `--spacing-x4`     |
| `spacing-5`| 20px  | `--spacing-x5`     |
| `spacing-6`| 24px  | `--spacing-x6`     |
| `spacing-7`| 28px  | `--spacing-x7`     |
| `spacing-8`| 32px  | `--spacing-x8`     |

### Radius (maps to web --radius-x* tokens)

| Token  | Value | Web equivalent  |
|--------|-------|-----------------|
| `none` | 0px   | `--radius-none` |
| `sm`   | 4px   | `--radius-x1`   |
| `md`   | 8px   | `--radius-x2`   |
| `lg`   | 12px  | `--radius-x3`   |
| `xl`   | 16px  | `--radius-x4`   |
| `full` | 9999px| `--radius-max`  |

### Motion

| Token              | Value  | Dart class                  |
|--------------------|--------|-----------------------------|
| `duration-micro`   | 200ms  | `MotionDuration.micro`      |
| `duration-quick`   | 300ms  | `MotionDuration.quick`      |
| `duration-moderate`| 500ms  | `MotionDuration.moderate`   |
| `duration-standard`| 600ms  | `MotionDuration.standard`   |
| `ease-standard`    | easeInOut | `MotionCurve.standard`   |
| `ease-linear`      | linear | `MotionCurve.linear`        |
| `display-toast`    | 3000ms | `MotionDuration.toast`      |

---

## Checklist before committing a Flutter section

- [ ] Every token in the Token Contract table exists in `scripts/tokens.registry.json → flutter`
- [ ] No raw hex, rgb, or px values appear anywhere in backticks
- [ ] `node scripts/lint-doc-tokens.mjs <path-to.docs.md>` exits 0
- [ ] Code examples compile without reference to undefined symbols
- [ ] Disabled state is expressed as `onPressed: null`, not `disabled: true`
- [ ] Icon-only mode wraps widget in `Semantics(label:)` in examples
- [ ] Organism sections include Controller + Lifecycle entries
