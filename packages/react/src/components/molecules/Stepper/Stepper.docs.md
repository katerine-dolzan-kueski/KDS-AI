# Stepper

The Stepper component provides a visual representation of a multi-step process, showing the current step and progress through a sequence of tasks or actions.

## Features
- **Step Progress Visualization**: Clear display of current step and completed/remaining steps
- **Flexible Icons**: Supports both numeric indicators and custom icons for each step
- **Connector Lines**: Visual connectors between steps to show progression flow
- **Rich Content**: Each step can have title, description, and custom content
- **Responsive Layout**: Adapts to different screen sizes and content lengths

## Usage
```tsx
// Basic numeric stepper
<Stepper
  $items={[
    { title: 'Account Setup', description: 'Create your profile', icon: 1 },
    { title: 'Verification', description: 'Verify your identity', icon: 2 },
    { title: 'Complete', description: 'All done!', icon: 3 },
  ]}
/>

// With custom icons
<Stepper
  $items={[
    { 
      title: 'Tu INE o pasaporte', 
      description: 'Debe estar vigente. No se aceptan fotos, imágenes digitales ni copias.',
      icon: <IdCardIcon />
    },
    { 
      title: 'Activar tu cámara', 
      description: 'Danos acceso a tu cámara para que tomes fotos de tu documento y de tu rostro.',
      icon: <CameraIcon />
    },
    { 
      title: 'Lugar iluminado', 
      description: 'Toma fotos de tu documento y de tu rostro sin accesorios que lo cubran.',
      icon: <DeviceModeLightIcon />
    },
  ]}
/>
```

## Props
| Prop        | Type                | Description                                    |
|-------------|---------------------|------------------------------------------------|
| `$items`    | `StepperItemData[]` | Array of step items to display in the stepper |
| `className` | `string`            | Additional CSS classes for the root element   |

## Building Block Components (Advanced)
For exceptional use cases, individual components can be rendered separately:

### Stepper.Item Props
| Prop          | Type                    | Description                                      |
|---------------|-------------------------|--------------------------------------------------|
| `className`   | `string`                | Custom class name for the root element          |
| `$icon`       | `ReactNode \| number`   | Icon or number to display in the step indicator |
| `$hasNext`    | `boolean`               | Whether this step has a next step (shows connector) |
| `$hasPrev`    | `boolean`               | Whether this step has a previous step (shows connector) |
| `$title`      | `string`                | Title text for the step                         |
| `$description`| `string`                | Description text for the step                   |
| `$children`   | `ReactNode`             | Custom content to display instead of title/description |

### Stepper.Connector Props
| Prop       | Type                 | Description                                        |
|------------|----------------------|----------------------------------------------------|
| `$variant` | `'fill' \| 'space'`  | Visual style of the connector line                |
| `$visible` | `boolean`            | Whether the connector should be visible           |

## Step Item Data Structure
```tsx
interface StepperItemData {
  icon: ReactNode | number;  // Icon component or numeric indicator
  title?: string;            // Step title
  description?: string;      // Step description
}
```

## Use Cases

### Process Flows
Use the Stepper to guide users through multi-step processes:
- **Onboarding flows**: Account creation, profile setup, verification
- **Document upload**: ID verification, photo capture, review
- **Checkout process**: Cart review, payment, confirmation
- **Form wizards**: Multi-page forms with clear progression

### Numeric vs Icon Steps
- **Numeric steps**: Use `icon: 1, 2, 3...` for simple sequential processes
- **Custom icons**: Use relevant icons to make each step more descriptive and visual
- **Mixed approach**: Combine both as needed for different step types

### Visual Progression
The component automatically handles:
- **Connector lines**: Visual links between steps showing flow direction
- **Step indicators**: Circular backgrounds for numbers or icon containers
- **Content layout**: Proper spacing and alignment of titles and descriptions

### Building Block Components (Advanced)
**⚠️ EXCEPTIONAL USE ONLY**: The components `Stepper.Item` and `Stepper.Connector` are internally used by `Stepper` and should only be used independently in exceptional cases where the standard component doesn't meet requirements. Most use cases should use the main component.

## Important Considerations
**Icon Sizing**: When using custom icons, they are automatically sized to fit the step indicators. The component handles both numeric and icon content appropriately.

**Content Length**: Step titles and descriptions should be concise for best visual results. Very long content may affect the layout and readability of the stepper.

**Responsive Behavior**: The stepper is designed to work on various screen sizes, but consider the total width needed for your content when implementing.
