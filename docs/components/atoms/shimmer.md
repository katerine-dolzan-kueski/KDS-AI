The Shimmer component provides a loading skeleton effect using animated gradients. It's designed to give users visual feedback during content loading states, creating a smooth and polished user experience.

## Features

- **Animated Loading Effect**: Uses CSS animations to create a shimmer effect that moves across the component
- **Highly Customizable**: Easily customizable through className prop to match any design requirement
- **Consistent Design**: Built on top of the Kueski Design System gradient utilities for consistent visual appearance
- **Flexible Sizing**: Can be sized and shaped to match any content layout

## Usage

The Shimmer component automatically applies the shimmer animation using the `gradient-mirrored-shimmer` gradient and `animate-shimmer` animation classes. Simply pass a `className` prop to customize the appearance:

```tsx
<Shimmer className="h-6 w-24" />
<Shimmer className="h-26 w-26 rounded-full!" />
```

## Common Use Cases

- **Profile Loading**: Circular shimmer for profile pictures
- **Text Loading**: Rectangular shimmers for text content
- **Card Loading**: Full-width shimmers for card layouts
- **List Loading**: Multiple shimmers for list items

## Best Practices

- Use appropriate sizing to match the expected content
- Consider using rounded corners for profile images
- Group multiple shimmers to create realistic loading layouts
- Keep shimmer duration consistent across your application
