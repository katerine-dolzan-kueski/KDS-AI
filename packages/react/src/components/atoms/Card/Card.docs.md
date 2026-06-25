# Card

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                             |
|-----------|-----------------------------------|
| Component | Card                              |
| Package   | `@kueski/react` → `atoms/Card`   |
| Status    | Stable                            |
| Version   | 1.0.0                             |

---

### Description

Card is a flexible container that groups related content and actions into a visually distinct surface. It supports three structural slots — **header**, **content**, and **footer** — that give teams a consistent skeleton while keeping the interior fully customisable.

Do not confuse Card with Modal or Sheet. Card is an inline element that lives in the page flow; it does not overlay other content. Card also differs from a list item: a card holds a self-contained unit of information, whereas a list item is one entry in a sequence.

---

### Design Tokens

#### Colour tokens — background

| Role                  | Token                          | Used by                              |
|-----------------------|--------------------------------|--------------------------------------|
| Primary bg            | `--color-background-primary`   | `$type=primary` container fill       |
| Secondary bg          | `--color-background-secondary` | `$type=secondary` container fill     |

#### Colour tokens — border / divider

| Role                  | Token                         | Used by                                   |
|-----------------------|-------------------------------|-------------------------------------------|
| Container border      | `--color-stroke-tertiary`     | Outline stroke on `$type=primary`         |
| Slot divider          | `--color-stroke-tertiary`     | Line between header / content / footer    |

#### Size tokens

| Role               | Token            | Used by                            |
|--------------------|------------------|------------------------------------|
| Corner radius      | `--radius-x3`    | All four corners                   |
| Outer padding      | `--spacing-x5`   | All four sides of container        |
| Slot gap           | `--spacing-x4`   | Gap between header, content, footer|
| Border weight      | `--border-thin`  | Outline stroke weight              |

---

### Anatomy

```
╭──────────────────────────────────────╮
│  ┌────────────────────────────────┐  │
│  │  Header slot (optional)        │  │
│  └────────────────────────────────┘  │
│  ────────────────────────────────    │ ← divider (only when header + footer present)
│  ┌────────────────────────────────┐  │
│  │  Content slot (required)       │  │
│  └────────────────────────────────┘  │
│  ────────────────────────────────    │ ← divider (only when footer present)
│  ┌────────────────────────────────┐  │
│  │  Footer slot (optional)        │  │
│  └────────────────────────────────┘  │
╰──────────────────────────────────────╯
  └ Container: `--radius-x3`, `--spacing-x5` padding
```

| Part          | Description                                                                              |
|---------------|------------------------------------------------------------------------------------------|
| Container     | Outer surface — rounded, padded, filled per `$type`. Optional border on primary.        |
| Header slot   | Top zone. Typically holds a title, icon, badge, or avatar. Optional.                    |
| Content slot  | Main body. Accepts any content. Always present.                                         |
| Footer slot   | Bottom zone. Typically holds CTAs, summaries, or secondary actions. Optional.           |
| Dividers      | Stroke lines (`--color-stroke-tertiary`) separating header/content/footer when multiple slots are used. |

---

### States

| State     | Visual behaviour                                                                |
|-----------|---------------------------------------------------------------------------------|
| Default   | Resting surface — bg and border per `$type`.                                   |
| Hover     | No visual change on the card container itself. Child elements handle their own hover. |
| Disabled  | Not applicable — Card is a non-interactive container.                           |
| Loading   | Consumer wraps content in a skeleton loader component. Card itself does not manage loading state. |

---

### Rules

- Use Card as a container only — it does not manage its own internal state.
- Always provide at least one child to the content slot; do not render an empty Card.
- Use `$type=primary` for elevated or foreground content; `$type=secondary` for nested or background-level cards.
- Only show the header divider when both header and another slot are present.
- Only show the footer divider when a footer is present.
- Limit the footer to CTAs or summaries — do not duplicate content from the content slot.
- Do not use Card as a navigation anchor directly — wrap it in a link or button if click behaviour is needed.
- Alt text is the consumer's responsibility for any images placed inside Card slots.
- Card width is determined by its container — never set a fixed width on Card itself.

---

## WEB — React

### Props

| Prop        | Type           | Default     | Required | Description                                                         |
|-------------|----------------|-------------|----------|---------------------------------------------------------------------|
| `$type`     | `CardType`     | `'primary'` | No       | Surface colour and border style.                                    |
| `header`    | `ReactNode`    | —           | No       | Content rendered in the header slot. Adds a divider below it.      |
| `children`  | `ReactNode`    | —           | Yes      | Content rendered in the main content slot.                         |
| `footer`    | `ReactNode`    | —           | No       | Content rendered in the footer slot. Adds a divider above it.      |
| `as`        | `ElementType`  | `'div'`     | No       | Rendered HTML element. Use `'article'` or `'section'` for semantics.|
| `className` | `string`       | —           | No       | Appended to generated class list (Tailwind merge-safe).            |

#### Type Reference (`CardType`)

| Value       | Container bg                    | Border                          | Notes                    |
|-------------|---------------------------------|---------------------------------|--------------------------|
| `primary`   | `--color-background-primary`    | `--color-stroke-tertiary` thin  | Default. White surface.  |
| `secondary` | `--color-background-secondary`  | None                            | Filled. No border.       |

---

### Content Slots

| Slot       | How to use                                                                       |
|------------|----------------------------------------------------------------------------------|
| `header`   | Pass a title string, icon + title group, or badge. A divider appears below it when other slots are also present. |
| `children` | Pass any React content — text, lists, data rows, icons, images, etc.            |
| `footer`   | Pass action buttons or a summary row. A divider appears above it.               |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Card
```

**Import**
```typescript
import { Card } from '@kueski/react/atoms/Card';
import type { CardProps, CardType } from '@kueski/react/atoms/Card';
```

**Content-only card (primary)**
```tsx
<Card>
  <p>Tu información se ha guardado correctamente.</p>
</Card>
```

**Secondary type**
```tsx
<Card $type="secondary">
  <p>Cómo funciona</p>
</Card>
```

**With header and footer**
```tsx
<Card
  header={<p className="typo-body-1-emphasized">Fecha límite de pago</p>}
  footer={<Button $variant="primary">Continuar</Button>}
>
  <p>Tu préstamo vence el 28 feb 2025.</p>
</Card>
```

**Header only**
```tsx
<Card header={<p className="typo-body-1-emphasized">Cómo funciona</p>}>
  <p>Tus datos se validarán con Veriff.</p>
</Card>
```

**Semantic element**
```tsx
<Card as="article" header={<h2>Resumen</h2>}>
  <p>Total a pagar: $1,810.20</p>
</Card>
```

---

## FLUTTER — Dart

<!-- TODO: Flutter section — placeholder until Dart token foundation is complete -->
> Flutter implementation deferred. Web KDS token foundation takes priority.
> Dart widget `KdsCard` to be added in Phase 2 alongside the Flutter token layer.

---

## Version Log

| Version | Date       | Change                                                      |
|---------|------------|-------------------------------------------------------------|
| 1.0.0   | 2026-06-16 | Initial release — primary/secondary types, header/content/footer slots |
