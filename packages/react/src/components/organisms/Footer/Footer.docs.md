# Footer

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                                  |
|-----------|----------------------------------------|
| Component | Footer                                 |
| Package   | `@kueski/react` → `atoms/Footer`       |
| Status    | Stable                                 |
| Version   | 1.0.0                                  |

### Description

Footer is the fixed action zone at the bottom of a screen or sheet. It renders a primary action button, an optional secondary action, an optional caption area for supporting text (consent copy, legal notice, or any inline links), and an optional badge for trust or contextual link signals. It can optionally surface an L2 elevation shadow when floating above scrollable content, and render the Android system navigation indicator.

Footer is **not** a content component. Domain-specific information — loan summaries, amount breakdowns, financial line items — belongs in the screen's scrollable body, not inside Footer. Footer owns the action zone only. For screens that need a summary above the CTA, compose a separate `LoanSummary` or equivalent molecule above the Footer, outside it.

Not to be confused with: web page footers, bottom navigation bars, or tab bars.

### Design Tokens

**Colour tokens — background**

| Token | Usage |
|-------|-------|
| `--color-background-primary` | Footer surface (all states) |

**Size tokens — spacing**

| Token | Usage |
|-------|-------|
| `--spacing-x5` | Horizontal padding (left/right edges of all zones) |
| `--spacing-x4` | Vertical padding (top/bottom of caption, badge, and button zones) |
| `--spacing-x2` | Gap between icon and text in the badge zone; gap between stacked buttons |

**Shadow — elevation**

The `$elevated` state applies a bottom elevation shadow using `--shadows/6-percent` and `--shadows/3-percent` CSS custom properties, equivalent to KDS elevation level 2.

**Typography tokens**

| Token | Usage |
|-------|-------|
| `typo-meta` | Caption text (default) |
| `typo-body-2` | Badge link text |

### Anatomy

```
┌────────────────────────────────────────────────────────────┐
│  [caption]        optional · px-x5, pt-x4                  │
├────────────────────────────────────────────────────────────┤
│  [primaryAction]  required · px-x5, py-x4                  │
│  [secondaryAction] optional (side-by-side or stacked only) │
├────────────────────────────────────────────────────────────┤
│  [badge]          optional · px-x5, pb-x4                  │
├────────────────────────────────────────────────────────────┤
│  [system bar]     optional · 24px Android nav indicator    │
└────────────────────────────────────────────────────────────┘
```

| Part | Description |
|------|-------------|
| Caption | Optional small-text zone above the buttons. Accepts any `ReactNode` — plain text, rich text with inline bold/links, or a consent statement. Renders with `typo-meta`. |
| Buttons | The action zone. Layout is controlled by `$buttons`. Full-width for single; flex row for side-by-side; stacked column for stacked. |
| Badge | Optional icon + link zone below the buttons. Accepts any `ReactNode`. Typically an icon beside an underlined link (e.g. "How we protect your data"), but not limited to that content. |
| System bar | Optional Android home indicator (4×108px pill, `--color-text-and-icons-primary`). Shown when the screen renders over the system navigation gesture area. |
| Elevation shadow | Applied to the Footer's top edge when `$elevated=true`, indicating it floats above scrollable content beneath it. |

### States

| State | Visual behaviour |
|-------|-----------------|
| Default | White background, no shadow, full-width surface |
| Elevated | Top edge drop-shadow (elevation/2) — use when Footer overlaps scrollable content |
| Single button | One full-width primary action |
| Side by side | Two equal-width buttons in a row |
| Stacked | Primary button full-width on top, secondary full-width below |

### Rules

- Keep the caption short. If your legal or consent copy is longer than 3 lines, consider a modal or expandable disclosure instead of embedding it in the Footer.
- Never put domain content (amounts, loan details, step counts) inside the Footer. The Footer is an action zone only. Domain content belongs in the scrollable screen body above it.
- Secondary actions should be lower-emphasis than the primary (e.g. a ghost or outline Button variant). Never place two primary-emphasis buttons side by side.
- Use `$elevated=true` when the screen content scrolls under the Footer (e.g. bottom-sheet confirmation). Use `$elevated=false` for screens where the Footer is the natural document flow bottom.
- `$systemBar` should reflect the actual device state — only show it when the screen renders below the Android system navigation bar.
- The badge is not a button. If you need a full-bleed tappable row, use a list item or menu item above the Footer instead.

---

## WEB — React

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `$buttons` | `FooterButtons` | `'single'` | No | Action zone layout |
| `$elevated` | `boolean` | `false` | No | L2 elevation shadow on top edge |
| `$systemBar` | `boolean` | `false` | No | Show Android navigation indicator |
| `primaryAction` | `ReactNode` | — | **Yes** | Primary CTA — typically a KDS Button |
| `secondaryAction` | `ReactNode` | — | No | Secondary action — only shown when `$buttons` is `'side-by-side'` or `'stacked'` |
| `caption` | `ReactNode` | — | No | Supporting text above the buttons — consent, legal copy, or contextual note |
| `badge` | `ReactNode` | — | No | Icon + link trust element below the buttons |
| `className` | `string` | — | No | Appended to the root element class list |
| All `HTMLAttributes<HTMLDivElement>` | — | — | No | Forwarded to the root `<footer>` element |

### `$buttons` reference

| Value | Layout | When to use |
|-------|--------|-------------|
| `'single'` | One full-width button | Single primary action screens (confirm, submit) |
| `'side-by-side'` | Two equal-width buttons in a row | Binary choices of equal weight (Accept / Decline) |
| `'stacked'` | Primary on top, secondary below, both full-width | When primary and secondary actions need equal visual width but different emphasis |

### Content Slots

| Slot | How to use |
|------|------------|
| `primaryAction` | Pass a KDS `<Button>` with the appropriate `$variant` and `$hierarchy`. Example: `<Button $hierarchy="primary">Confirmar</Button>` |
| `secondaryAction` | Pass a KDS `<Button>` with a lower-emphasis variant (e.g. `$hierarchy="secondary"` or `$emphasis="ghost"`). Only rendered when `$buttons` is `'side-by-side'` or `'stacked'`. |
| `caption` | Pass a `ReactNode` — a plain string, a `<p>` with inline `<strong>` and `<a>` elements, or a consent statement. Rendered with `typo-meta` and `--color-text-and-icons-secondary`. |
| `badge` | Pass a `ReactNode` — typically an icon and a link side by side. The Footer provides the layout frame (flexbox row, centered, with `--spacing-x2` gap and `--spacing-x5` padding). |

### Code Reference

**Package path**
```
@kueski/react/atoms/Footer
```

**Import**
```typescript
import { Footer } from '@kueski/react/atoms/Footer';
```

**Usage examples**

```tsx
{/* Single primary action */}
<Footer primaryAction={<Button $hierarchy="primary">Confirmar</Button>} />

{/* With legal caption */}
<Footer
  primaryAction={<Button $hierarchy="primary">Confirmar</Button>}
  caption={
    <p>
      Al <strong>Confirmar</strong>, acepto las condiciones de mi préstamo y confirmo que leí
      los <a href="/terms">términos y condiciones</a>.
    </p>
  }
/>

{/* With trust badge */}
<Footer
  primaryAction={<Button $hierarchy="primary">Continuar</Button>}
  badge={
    <>
      <ShieldLock />
      <a href="/privacy">Cómo protegemos tus datos</a>
    </>
  }
/>

{/* Side-by-side with elevated shadow */}
<Footer
  $buttons="side-by-side"
  $elevated
  primaryAction={<Button $hierarchy="primary">Aceptar</Button>}
  secondaryAction={<Button $hierarchy="secondary">Rechazar</Button>}
/>

{/* Fully loaded — caption + badge + system bar */}
<Footer
  $buttons="single"
  $elevated
  $systemBar
  primaryAction={<Button $hierarchy="primary">Confirmar préstamo</Button>}
  caption={
    <p>Al confirmar, acepto los <a href="/terms">términos y condiciones</a>.</p>
  }
  badge={
    <>
      <ShieldLock />
      <a href="/privacy">Cómo protegemos tus datos</a>
    </>
  }
/>
```

---

## FLUTTER — Dart

### Widget

| Property | Value |
|----------|-------|
| Class | `KdsFooter` |
| Import | `package:kueski_design_system/atoms/footer.dart` |
| Level | Atom |
| GetX needed? | No |

### Parameters

| Parameter | Type | Default | Required | Description |
|-----------|------|---------|----------|-------------|
| `buttons` | `KdsFooterButtons` | `KdsFooterButtons.single` | No | Action zone layout |
| `elevated` | `bool` | `false` | No | L2 elevation shadow on top edge |
| `systemBar` | `bool` | `false` | No | Show Android navigation indicator |
| `primaryAction` | `Widget` | — | **Yes** | Primary CTA widget |
| `secondaryAction` | `Widget?` | `null` | No | Secondary action widget |
| `caption` | `Widget?` | `null` | No | Supporting text above buttons |
| `badge` | `Widget?` | `null` | No | Icon + link trust element below buttons |

### `buttons` reference

| Value | Layout |
|-------|--------|
| `KdsFooterButtons.single` | One full-width button |
| `KdsFooterButtons.sideBySide` | Two equal-width buttons in a row |
| `KdsFooterButtons.stacked` | Primary on top, secondary below |

### Token Contract

**Colour**

| Role | Flutter token |
|------|--------------|
| Background | `KdsColors.backgroundPrimary` |
| Caption text | `KdsColors.textAndIconsSecondary` |
| Badge text | `KdsColors.textAndIconsSecondary` |

**Spacing**

| Role | Flutter token |
|------|--------------|
| Horizontal padding | `KdsSpacing.x5` |
| Zone vertical padding | `KdsSpacing.x4` |
| Badge icon-text gap | `KdsSpacing.x2` |

> **Token gap note**: Flutter does not yet have elevation/shadow tokens equivalent to the web `--shadows/6-percent` and `--shadows/3-percent` CSS properties. Use `BoxShadow(color: Color(0x0F000000), blurRadius: 4, offset: Offset(0, -2))` combined with `BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, -3))` as an approximation until KDS Foundations / Flutter includes these tokens.

### States

| State | Flutter implementation |
|-------|----------------------|
| Default | No decoration on container |
| Elevated | `BoxDecoration` with two upward `BoxShadow` entries on the Footer container |
| System bar | `SizedBox(height: 24)` pill indicator at bottom |

### Code Examples

```dart
// Single primary action
KdsFooter(
  primaryAction: KdsButton.primary(label: 'Confirmar', onPressed: () {}),
)

// With caption
KdsFooter(
  primaryAction: KdsButton.primary(label: 'Confirmar', onPressed: () {}),
  caption: KdsText.meta('Al confirmar, acepto los términos y condiciones.'),
)

// Side-by-side, elevated
KdsFooter(
  buttons: KdsFooterButtons.sideBySide,
  elevated: true,
  primaryAction: KdsButton.primary(label: 'Aceptar', onPressed: () {}),
  secondaryAction: KdsButton.secondary(label: 'Rechazar', onPressed: () {}),
)

// Fully loaded
KdsFooter(
  buttons: KdsFooterButtons.single,
  elevated: true,
  systemBar: true,
  primaryAction: KdsButton.primary(label: 'Confirmar préstamo', onPressed: () {}),
  caption: KdsText.meta('Al confirmar, acepto los términos y condiciones.'),
  badge: Row(children: [ShieldLockIcon(), KdsLink(label: 'Cómo protegemos tus datos')]),
)
```

---

## Version Log

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-06-29 | Initial KDS release — redesigned from V1 "Footer button group". Removed domain-specific amountsAndInterests slot; renamed legal→caption and dataProtection→badge for reusability; adopted slot-based action API. |
