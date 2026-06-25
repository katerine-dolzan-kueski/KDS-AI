# Avatar

> **AI-Ready documentation** — every token reference uses a KDS token name.
> No loose hex, rgb, or px values appear anywhere in this file.
> Suitable for generating live React prototypes directly from this spec.

---

## SHARED

### Identity

| Property  | Value                               |
|-----------|-------------------------------------|
| Component | Avatar                              |
| Package   | `@kueski/react` → `atoms/Avatar`   |
| Status    | Stable                              |
| Version   | 1.0.0                               |

---

### Description

Avatar is a compact circular container that represents a person, brand, or system entity. It supports three content modes: **photo** (a person's image), **logo** (a brand or product logo), and **icon** (a generic user icon in two sizes). When no image is available, a placeholder silhouette is shown automatically.

Do not confuse Avatar with Badge. Badge floats over another element to communicate a count or status. Avatar is a standalone identity element that can optionally carry a border stroke to indicate presence, selection, or emphasis.

---

### Design Tokens

#### Colour tokens — background

| Role                  | Token                                    | Used by                          |
|-----------------------|------------------------------------------|----------------------------------|
| Avatar bg (default)   | `--color-background-tertiary`            | icon + photo-placeholder bg      |
| Avatar bg (inverted)  | `--color-background-invert-secondary`    | logo bg (dark fill)              |

#### Colour tokens — text and icons

| Role                    | Token                                  | Used by                    |
|-------------------------|----------------------------------------|----------------------------|
| Icon on default bg      | `--color-text-and-icons-secondary`     | icon fill (default)        |
| Icon on invert bg       | `--color-text-and-icons-always-white`  | icon fill on dark bg       |

#### Colour tokens — border

| Role            | Token                       | Used by                          |
|-----------------|-----------------------------|----------------------------------|
| Default outline | `--color-stroke-secondary`  | border (default state)           |
| Brand outline   | `--color-stroke-brand`      | border (selected/active state)   |

#### Size tokens

| Role              | Token           | Used by                       |
|-------------------|-----------------|-------------------------------|
| Container size    | `--spacing-x6`  | width + height (48px)         |
| Border width      | `--border-thin` | outline stroke weight         |
| Radius (circle)   | `--radius-max`  | all four corners              |

---

### Anatomy

```
╭────────────────────╮
│                    │
│   ◉  or  [img]     │
│                    │
╰────────────────────╯
   └ circular container (48×48)
       └ content: icon | image | logo
       └ optional: border stroke
```

| Part       | Description                                                                      |
|------------|----------------------------------------------------------------------------------|
| Container  | Circular frame — always 48×48, `--radius-max` on all corners                    |
| Content    | One of: icon (svg), image (`<img>`), or logo image                              |
| Border     | Optional stroke using `--color-stroke-secondary` or `--color-stroke-brand`      |

---

### States

| State            | Visual behaviour                                                         |
|------------------|--------------------------------------------------------------------------|
| Default          | Resting fill per `$visual` type. No border unless `$showBorder` is true. |
| Photo — loaded   | Image fills the container. Border optional.                              |
| Photo — blank    | Tertiary bg with secondary icon silhouette. Automatic when no `src`.     |
| Selected / focus | Use `$borderColor='brand'` to indicate selection or active state.        |
| Disabled         | Not applicable — Avatar is non-interactive.                              |

---

### Rules

- Avatar is always circular — do not override `border-radius`.
- Always provide `alt` text when using photo or logo modes.
- Use the blank (no `src`) state as a fallback — do not hide the component.
- `$iconSize` only applies when `$visual='icon'`; it is ignored for photo and logo.
- Do not add interactive behaviour (click, hover) directly to Avatar — wrap it in a button if needed.
- Limit border use to selection, presence indicators, or explicit emphasis — avoid applying borders to all avatars in a list.

---

## WEB — React

### Props

| Prop           | Type               | Default     | Required | Description                                                    |
|----------------|--------------------|-------------|----------|----------------------------------------------------------------|
| `$visual`      | `AvatarVisual`     | `'icon'`    | No       | Content mode: icon silhouette, photo, or logo.                 |
| `$iconSize`    | `AvatarIconSize`   | `'lg'`      | No       | Icon size. Only applies when `$visual='icon'`.                 |
| `$showBorder`  | `boolean`          | `false`     | No       | Renders an outline stroke around the container.                |
| `$borderColor` | `AvatarBorderColor`| `'default'` | No       | Stroke colour. Only visible when `$showBorder` is true.        |
| `src`          | `string`           | —           | No       | Image URL. Used for `$visual='photo'` and `$visual='logo'`.    |
| `alt`          | `string`           | `''`        | No       | Alt text for the image. Required when `src` is provided.       |
| `className`    | `string`           | —           | No       | Appended to generated class list (Tailwind merge-safe).        |

#### Visual Reference (`AvatarVisual`)

| Value    | Content rendered                                            | bg token                              |
|----------|-------------------------------------------------------------|---------------------------------------|
| `icon`   | Generic user icon SVG at sm or lg size                      | `--color-background-tertiary`         |
| `photo`  | `<img>` when `src` provided; silhouette icon when blank     | `--color-background-tertiary`         |
| `logo`   | `<img>` logo when `src` provided; dark container when blank | `--color-background-invert-secondary` |

#### Icon Size Reference (`AvatarIconSize`)

| Value | Icon dimensions | Notes                  |
|-------|-----------------|------------------------|
| `sm`  | 20×20px         | Subtle, low-hierarchy  |
| `lg`  | 32×32px         | Default, standard use  |

#### Border Colour Reference (`AvatarBorderColor`)

| Value     | Token applied               |
|-----------|-----------------------------|
| `default` | `--color-stroke-secondary`  |
| `brand`   | `--color-stroke-brand`      |

---

### Content Slots

| Slot       | How to use                                                                 |
|------------|----------------------------------------------------------------------------|
| `src`      | Pass an image URL for photo or logo. Omit to show blank/icon fallback.    |
| `alt`      | Always provide a description when `src` is used. Empty string for decorative. |

---

### Code Reference

**Package path**
```
@kueski/react/atoms/Avatar
```

**Import**
```typescript
import { Avatar } from '@kueski/react/atoms/Avatar';
import type { AvatarProps, AvatarVisual, AvatarIconSize, AvatarBorderColor } from '@kueski/react/atoms/Avatar';
```

**Icon avatar (default)**
```tsx
<Avatar />
<Avatar $iconSize="sm" />
```

**Photo avatar**
```tsx
<Avatar $visual="photo" src="/users/katerine.jpg" alt="Katerine Dolzan" />
```

**Photo — blank state (no src)**
```tsx
<Avatar $visual="photo" alt="Unknown user" />
```

**Logo avatar**
```tsx
<Avatar $visual="logo" src="/brands/kueski.png" alt="Kueski" />
```

**With border**
```tsx
<Avatar $visual="photo" src="/users/katerine.jpg" alt="Katerine" $showBorder />
<Avatar $visual="photo" src="/users/katerine.jpg" alt="Katerine" $showBorder $borderColor="brand" />
```

---

## FLUTTER — Dart

<!-- TODO: Flutter section — placeholder until Dart token foundation is complete -->
> Flutter implementation deferred. Web KDS token foundation takes priority.
> Dart widget `KdsAvatar` to be added in Phase 2 alongside the Flutter token layer.

---

## Version Log

| Version | Date       | Change                                       |
|---------|------------|----------------------------------------------|
| 1.0.0   | 2026-06-16 | Initial release — photo, icon, logo variants |
