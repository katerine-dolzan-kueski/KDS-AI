# NavigationHeader

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Component | NavigationHeader                                   |
| Package   | `@kueski/react` → `atoms/NavigationHeader`         |
| Status    | Stable                                             |
| Version   | 1.0.0                                              |

### Description

NavigationHeader sits at the top of every screen and communicates the current page name. It optionally holds a left decorative or navigation icon and a right action icon (typically Help). Three types control height and typographic scale: **Main** is for primary screens and starts tall, collapsing on scroll; **Title** is for secondary-level screens with a slightly smaller default height; **Secondary** is compact and fixed-height, designed for sub-pages where a back-chevron lives in the left icon slot.

Not to be confused with tab bars, bottom navigation bars, or breadcrumbs. This component covers the top-of-screen header bar only. For a sticky affordance, the consuming screen is responsible for tracking scroll position and passing `$onScroll`.

### Design Tokens

**Colour tokens — background**

| Token | Usage |
|-------|-------|
| `--color-background-primary` | Header background (all types, all states) |

**Colour tokens — text and icons**

| Token | Usage |
|-------|-------|
| `--color-text-and-icons-primary` | Title text (all types, all states) |

**Size tokens — spacing**

| Token | Usage |
|-------|-------|
| `--spacing-x5` | Horizontal padding (left and right edges) |
| `--spacing-x2` | Gap between the icon slots and the title |

**Shadow — elevation**

The on-scroll state applies a bottom elevation shadow driven by `--shadows/6-percent` (6% black) and `--shadows/3-percent` (3% black) CSS custom properties. This corresponds to KDS elevation level 2 (two layered drop shadows).

**Typography tokens**

| Token | Usage |
|-------|-------|
| `typo-headline-1` | Title text: Main default; Title default |
| `typo-body-1-emphasized` | Title text: Main on-scroll; Title on-scroll; Secondary (all states) |

### Anatomy

```
┌──────────────────────────────────────────────────────────────────────┐
│  px-x5                                                      px-x5   │
│  [Left icon]   Title text (flex-1)               [Right icon]        │
└──────────────────────────────────────────────────────────────────────┘
        ↑                 ↑                                ↑
   leftIcon slot     children (title)               rightIcon slot
   (optional)                                          (optional)
```

For `$type='secondary'` + `$alignment='centered'`, both icon containers are always rendered (even when empty) so the title centres correctly between two 32px placeholders.

| Part | Description |
|------|-------------|
| Container | Full-width `<header>`; height driven by `$type` + `$onScroll`; horizontal padding `--spacing-x5` |
| leftIcon | Optional slot; icon container is 48px for Main default, 32px in all other states |
| Title | Screen name; typography scale changes with type and on-scroll state; `flex-1` to fill available width |
| rightIcon | Optional slot; container always 32px |
| Shadow | Bottom drop-shadow (elevation/2); only applied when `$onScroll=true` |

### States

| State | Visual behaviour |
|-------|-----------------|
| Default — Main | 88px height; headline-1 title; 48px left icon container |
| Default — Title | 64px height; headline-1 title; 32px left icon container |
| Default — Secondary | 48px height; body-1-emphasized title; 32px left icon container |
| On scroll (all types) | 48px height; body-1-emphasized title; 32px left icon; bottom elevation shadow |

### Rules

- Use **Main** only on the root screen of a product section (e.g. Home, Account, Kueski Cash). One per primary screen.
- Use **Title** on secondary screens that warrant more visual weight than Secondary but are not root-level.
- Use **Secondary** on any screen reached via navigation — a back chevron is expected in the left icon slot.
- The left icon on **Main** type is decorative and non-interactive. Do not put a tappable button there.
- The right icon is typically Help. Tooltip or modal content should be friendly and max 100 characters.
- Avoid all-caps titles. No trailing punctuation. Keep wording consistent with breadcrumbs or tab labels.
- Use `$alignment='centered'` on Secondary only when the screen title needs to visually centre — e.g. step-indicator flows.
- `$onScroll` must be controlled by the page's scroll listener, not toggled manually for aesthetics.

---

## WEB — React

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `$type` | `NavigationHeaderType` | `'main'` | No | Visual type — controls height, icon size, title scale |
| `$alignment` | `NavigationHeaderAlignment` | `'left'` | No | Title alignment; only applies when `$type='secondary'` |
| `$onScroll` | `boolean` | `false` | No | Collapsed state — reduces height to 48px and adds bottom shadow |
| `leftIcon` | `ReactNode` | — | No | Icon rendered in the left slot |
| `rightIcon` | `ReactNode` | — | No | Icon rendered in the right slot |
| `children` | `ReactNode` | — | No | The screen title |
| `className` | `string` | — | No | Appended to the generated class list (Tailwind merge-safe) |
| All `HTMLAttributes<HTMLElement>` | — | — | No | Forwarded to the root `<header>` element |

### Type reference

| Value | Default height | On-scroll height | Title typography (default) | Title typography (on-scroll) | Left icon container |
|-------|---------------|-----------------|---------------------------|------------------------------|---------------------|
| `'main'` | 88px | 48px | `typo-headline-1` | `typo-body-1-emphasized` | 48px |
| `'title'` | 64px | 48px | `typo-headline-1` | `typo-body-1-emphasized` | 32px |
| `'secondary'` | 48px | 48px | `typo-body-1-emphasized` | `typo-body-1-emphasized` | 32px |

### Alignment reference (Secondary only)

| Value | Behaviour |
|-------|-----------|
| `'left'` | Title flows left after the left icon; right icon sits at the far edge |
| `'centered'` | Title centres absolutely between two fixed 32px icon placeholders |

### Content Slots

| Slot | How to use |
|------|------------|
| `leftIcon` | Pass a KDS icon node — `<PersonCircle />` for Main, `<ChevronLeftOffset />` for Secondary. Omit to hide the slot. |
| `children` | The screen title as a string or inline element. |
| `rightIcon` | Pass a KDS icon node — typically `<HelpCircle />`. Omit to hide the slot. |

### Code Reference

**Package path**
```
@kueski/react/atoms/NavigationHeader
```

**Import**
```typescript
import { NavigationHeader } from '@kueski/react/atoms/NavigationHeader';
```

**Usage examples**

```tsx
{/* Main screen header — default state */}
<NavigationHeader leftIcon={<PersonCircle />} rightIcon={<HelpCircle />}>
  Cuenta
</NavigationHeader>

{/* Main header — on-scroll (page scroll listener controls this) */}
<NavigationHeader $onScroll leftIcon={<PersonCircle />} rightIcon={<HelpCircle />}>
  Cuenta
</NavigationHeader>

{/* Title screen */}
<NavigationHeader $type="title" rightIcon={<HelpCircle />}>
  Detalles del préstamo
</NavigationHeader>

{/* Secondary — left-aligned, back button */}
<NavigationHeader $type="secondary" leftIcon={<ChevronLeftOffset />} rightIcon={<HelpCircle />}>
  Paso 2 de 3
</NavigationHeader>

{/* Secondary — centered title */}
<NavigationHeader $type="secondary" $alignment="centered" leftIcon={<ChevronLeftOffset />} rightIcon={<HelpCircle />}>
  Paso 2 de 3
</NavigationHeader>

{/* Secondary — centered, on-scroll */}
<NavigationHeader $type="secondary" $alignment="centered" $onScroll leftIcon={<ChevronLeftOffset />} rightIcon={<HelpCircle />}>
  Paso 2 de 3
</NavigationHeader>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class | `KdsNavigationHeader` |
| Import | `package:kueski_design_system/atoms/navigation_header.dart` |
| Level | Atom |
| GetX needed? | No |

### Parameters

| Parameter | Type | Default | Required | Description |
|-----------|------|---------|----------|-------------|
| `type` | `KdsNavigationHeaderType` | `KdsNavigationHeaderType.main` | No | Visual type |
| `alignment` | `KdsNavigationHeaderAlignment` | `KdsNavigationHeaderAlignment.left` | No | Title alignment (Secondary only) |
| `onScroll` | `bool` | `false` | No | Collapsed state — 48px + shadow |
| `leftIcon` | `Widget?` | `null` | No | Left icon slot |
| `rightIcon` | `Widget?` | `null` | No | Right icon slot |
| `title` | `String?` | `null` | No | The screen title |

### Type reference

| Value | Height (default) | Height (onScroll) | Title style (default) | Title style (onScroll) |
|-------|-----------------|------------------|----------------------|----------------------|
| `main` | 88px | 48px | `KdsTextStyle.headline1` | `KdsTextStyle.body1Emphasized` |
| `title` | 64px | 48px | `KdsTextStyle.headline1` | `KdsTextStyle.body1Emphasized` |
| `secondary` | 48px | 48px | `KdsTextStyle.body1Emphasized` | `KdsTextStyle.body1Emphasized` |

### Token Contract

**Colour**

| Role | Flutter token |
|------|--------------|
| Background | `KdsColors.backgroundPrimary` |
| Title text | `KdsColors.textAndIconsPrimary` |

**Spacing**

| Role | Flutter token |
|------|--------------|
| Horizontal padding | `KdsSpacing.x5` |
| Icon gap | `KdsSpacing.x2` |

> **Token gap note**: Flutter does not yet have elevation/shadow tokens equivalent to the web `--shadows/6-percent` and `--shadows/3-percent` CSS properties. Use `BoxShadow(color: Color(0x0F000000), blurRadius: 4, offset: Offset(0, 2))` combined with `BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, 3))` as an approximation until KDS Foundations / Flutter includes these tokens.

### States

| State | Flutter implementation |
|-------|----------------------|
| Default | Renders at full height per type; no shadow decoration |
| On scroll | `onScroll: true` — height collapses to 48dp; `BoxDecoration` applies the two-layer drop shadow |

### Code Examples

```dart
// Main header — default
KdsNavigationHeader(
  leftIcon: KdsIcon.personCircle(),
  rightIcon: KdsIcon.helpCircle(),
  title: 'Cuenta',
)

// Main header — on-scroll
KdsNavigationHeader(
  onScroll: true,
  leftIcon: KdsIcon.personCircle(),
  rightIcon: KdsIcon.helpCircle(),
  title: 'Cuenta',
)

// Secondary — left-aligned with back chevron
KdsNavigationHeader(
  type: KdsNavigationHeaderType.secondary,
  leftIcon: KdsIcon.chevronLeftOffset(),
  rightIcon: KdsIcon.helpCircle(),
  title: 'Paso 2 de 3',
)

// Secondary — centered, on-scroll
KdsNavigationHeader(
  type: KdsNavigationHeaderType.secondary,
  alignment: KdsNavigationHeaderAlignment.centered,
  onScroll: true,
  leftIcon: KdsIcon.chevronLeftOffset(),
  rightIcon: KdsIcon.helpCircle(),
  title: 'Paso 2 de 3',
)
```

---

## Version Log

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-06-26 | Initial KDS release — ported from V1 Figma |
