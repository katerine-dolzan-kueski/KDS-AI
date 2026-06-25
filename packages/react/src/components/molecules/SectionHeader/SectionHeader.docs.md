# SectionHeader

The SectionHeader component provides a structured way to introduce sections with titles, optional descriptions, and optional trailing action. Perfect for page sections, modal headers, or content groupings.

## Features
- **Dynamic Heading Tags**: Uses semantic HTML (h1-h4) based on size variant
- **Trailing Actions**: Optional action elements with pre-styled button support
- **Flexible Content**: Custom children content for descriptions or complex layouts
- **Alignment Options**: Left or centered text alignment
- **Icon Support**: Automatic SVG sizing in trailing actions

## Usage
```tsx
// Basic section header
<SectionHeader 
  $title="User Settings"
  $size="h2"
>
  Manage your account preferences and security settings.
</SectionHeader>

// With trailing action
<SectionHeader 
  $title="Recent Transactions"
  $trailing={(
    <button onClick={handleAdd}>
      <MyFavoriteIcon>
      Awesome action
    </button>
  )}
>
  Your latest financial activity and payments.
</SectionHeader>

// Centered layout
<SectionHeader 
  $title="Welcome to Kueski"
  $alignment="centered"
  $size="h1"
>
  Get started with your financial journey today.
</SectionHeader>
```

## Props
| Prop          | Type                            | Default     | Description                          |
|---------------|---------------------------------|-------------|--------------------------------------|
| `$title`      | `string`                        | -           | Required header text for the section |
| `$trailing`   | `ReactNode`                     | `undefined` | Optional trailing action element     |
| `$size`       | `'h1' \| 'h2' \| 'h3' \| 'h4'`  | `'h2'`      | Heading tag and typography size      |
| `$alignment`  | `'left' \| 'centered'`          | `'left'`    | Text alignment of the content        |
| `children`    | `ReactNode`                     | `undefined` | Optional content below header        |
| `className`   | `string`                        | `undefined` | Additional CSS classes               |

## Trailing Actions
The component automatically styles button elements with:
- **Typography**: Body-2 text in brand color
- **Layout**: Flex alignment with icon spacing
- **Icons**: SVG descendants sized to 24x24px (1.5rem)
- **Interaction**: Cursor pointer on hover

## Important Considerations
**Semantic HTML**: The component uses proper heading tags based on `$size` for accessibility and SEO.
**Content Length**: Keep descriptions concise (2-3 lines max) for optimal visual balance and readability.
