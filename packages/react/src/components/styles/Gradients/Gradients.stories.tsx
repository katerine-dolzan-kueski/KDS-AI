import { Meta, StoryObj } from '@storybook/react-vite';
import Gradients, { GradientsProps } from './Gradients';

const meta: Meta<typeof Gradients> = {
  title: 'Kueski Design System/Styles Patterns/Gradients',
  component: Gradients,
  parameters: {
    docs: {
      description: {
        component: `
These utility classes provide a streamlined way to apply various gradient styles defined in Figma, complementing Tailwind CSS's native background utilities. They allow for consistent and customizable gradient backgrounds across your application.
## Features
- **Figma-Defined Gradients**: Directly utilize gradient steps and colors as configured in Figma.
- **Highly Customizable**: Easily combine with other Tailwind CSS classes to fine-tune gradient shape, direction, and positioning.
- **Consistent Design**: Ensures a unified look and feel for all gradient applications within the Kueski Design System.
## Usage Example
To apply these gradient utilities, pair them with a [Tailwind CSS background utility](https://tailwindcss.com/docs/background-image#using-a-custom-value) (e.g., \`bg-linear-to-r\` or \`bg-radial\`) and one of the specific gradient classes (e.g., \`gradient-shimmer\`, \`gradient-spinner-blue\`).

\`\`\`
<div className="bg-linear-to-r gradient-shimmer w-70 aspect-square rounded-x3" />
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: [
        'linear-to-t',
        'linear-to-tr',
        'linear-to-r',
        'linear-to-br',
        'linear-to-b',
        'linear-to-bl',
        'linear-to-l',
        'linear-to-tl',
        'linear-45',
        'radial',
        'conic',
      ] satisfies Array<GradientsProps['type']>,
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Linear: Story = {
  args: {
    type: 'linear-to-r',
  },
};

export const CustomLinear: Story = {
  name: 'Linear (Custom angle)',
  args: {
    type: 'linear-45',
  },
};

export const Radial: Story = {
  args: {
    type: 'radial',
  },
};

export const Conic: Story = {
  args: {
    type: 'conic',
  },
};
