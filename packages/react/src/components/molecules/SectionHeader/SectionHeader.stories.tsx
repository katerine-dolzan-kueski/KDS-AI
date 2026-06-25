import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';
import { AddCircleIcon } from '../../atoms/Icons';

const alignmentArgType = {
  $alignment: {
    control: { type: 'select' },
    options: ['left', 'centered'],
    description: 'Alignment of the section header content',
  },
} as const;

const argTypes = {
  $title: {
    control: { type: 'text' },
    description: 'Required header text for the section',
  },
  $size: {
    control: { type: 'select' },
    options: ['h1', 'h2', 'h3', 'h4'],
    description: 'Size variant that determines the heading tag',
  },
  ...alignmentArgType,
  children: {
    control: { type: 'text' },
    description: 'Optional content to display below the header',
  },
} as const;

const meta = {
  title: 'Kueski Design System/Molecules/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes,
  args: {
    $title: 'Section header',
    $size: 'h2',
    $alignment: 'left',
    children: 'Aquí va una breve descripción sobre lo que trata esta sección. Máximo 2-3 líneas.',
  },
};

export const WithTrailingAction: Story = {
  argTypes,
  args: {
    $title: 'Section header',
    $size: 'h2',
    $alignment: 'left',
    children: 'Aquí va una breve descripción sobre lo que trata esta sección. Máximo 2-3 líneas.',
  },
  render: (args) => (
    <SectionHeader
      $trailing={(
        <button type="button">
          <AddCircleIcon />
          Agregar
        </button>
      )}
      {...args}
    />
  ),
};

export const Centered: Story = {
  argTypes,
  args: {
    $title: 'Section header',
    $size: 'h2',
    $alignment: 'centered',
    children: 'Aquí va una breve descripción sobre lo que trata esta sección. Máximo 2-3 líneas.',
  },
};

export const DifferentSizes: Story = {
  argTypes: alignmentArgType,
  render: ({ $alignment }) => (
    <div className="flex flex-col gap-8">
      <SectionHeader 
        $title="Section header H1"
        $alignment={$alignment}
        $size="h1"
      >
        Aquí va una breve descripción sobre lo que trata esta sección.
      </SectionHeader>
      <SectionHeader 
        $title="Section header H2"
        $alignment={$alignment}
        $size="h2"
      >
        Aquí va una breve descripción sobre lo que trata esta sección.
      </SectionHeader>
      <SectionHeader 
        $title="Section header H3"
        $alignment={$alignment}
        $size="h3"
      >
        Aquí va una breve descripción sobre lo que trata esta sección.
      </SectionHeader>
      <SectionHeader 
        $title="Section header H4"
        $alignment={$alignment}
        $size="h4"
      >
        Aquí va una breve descripción sobre lo que trata esta sección.
      </SectionHeader>
    </div>
  ),
  args: {
    $alignment: 'left',
  } as any,
};
