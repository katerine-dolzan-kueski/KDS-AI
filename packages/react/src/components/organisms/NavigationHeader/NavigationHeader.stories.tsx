import type { Meta, StoryObj } from '@storybook/react'
import { NavigationHeader } from './index'
import type { NavigationHeaderType, NavigationHeaderAlignment } from './NavigationHeader.types'
// TODO: verify the exact package name in your monorepo (e.g. @kueski/kds-icons, @kds/icons)
import { PersonCircle, HelpCircle, ChevronLeft } from '@kueski/kds-icons'

// KDS icon usage notes:
//   PersonCircle  → KDS • Icons / Security, privacy and compliance / Person circle
//   HelpCircle    → KDS • Icons / Help and support / Help circle
//   ChevronLeft   → KDS • Icons / Navigation and UI / Chevron left
//
// Icons render inside the NavigationHeader's fixed-size slot wrappers (32px or 48px).
// They inherit the current text color, so no explicit color prop is needed.

// ─── Meta ───────────────────────────────────────────────────────────────────

const meta: Meta<typeof NavigationHeader> = {
  title: 'Atoms/NavigationHeader',
  component: NavigationHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top-of-screen header bar. Three types: **Main** (primary screens, 88px default), **Title** (secondary-level, 64px default), **Secondary** (sub-pages, always 48px). All types collapse to 48px with a bottom elevation shadow when `$onScroll` is true.',
      },
    },
  },
  argTypes: {
    $type: {
      control: 'select',
      options: ['main', 'title', 'secondary'] satisfies NavigationHeaderType[],
      description: 'Visual type — controls height, icon size, and title typography scale',
      table: { defaultValue: { summary: 'main' } },
    },
    $alignment: {
      control: 'select',
      options: ['left', 'centered'] satisfies NavigationHeaderAlignment[],
      description: 'Title alignment — only applies when `$type="secondary"`',
      table: { defaultValue: { summary: 'left' } },
    },
    $onScroll: {
      control: 'boolean',
      description: 'Collapsed state — height → 48px, bottom elevation shadow appears',
      table: { defaultValue: { summary: 'false' } },
    },
    leftIcon: { control: false, description: 'ReactNode for the left icon slot' },
    rightIcon: { control: false, description: 'ReactNode for the right icon slot' },
  },
}

export default meta
type Story = StoryObj<typeof NavigationHeader>

// ─── Default ────────────────────────────────────────────────────────────────
// Matches .docs.md defaults: Main, left-aligned, not on scroll.

export const Default: Story = {
  args: {
    $type: 'main',
    $onScroll: false,
    leftIcon: <PersonCircle />,
    rightIcon: <HelpCircle />,
    children: 'Cuenta',
  },
}

// ─── Main — all scroll states ────────────────────────────────────────────────

export const MainAllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationHeader leftIcon={<PersonCircle />} rightIcon={<HelpCircle />}>
        Cuenta
      </NavigationHeader>
      <NavigationHeader $onScroll leftIcon={<PersonCircle />} rightIcon={<HelpCircle />}>
        Cuenta
      </NavigationHeader>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Main: 88px default (top) → 48px on-scroll with elevation shadow (bottom).',
      },
    },
  },
}

// ─── Title — all scroll states ───────────────────────────────────────────────

export const TitleAllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationHeader $type="title" rightIcon={<HelpCircle />}>
        Detalles del préstamo
      </NavigationHeader>
      <NavigationHeader $type="title" $onScroll rightIcon={<HelpCircle />}>
        Detalles del préstamo
      </NavigationHeader>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Title: 64px default → 48px on-scroll. Left icon slot is optional for Title type.',
      },
    },
  },
}

// ─── Secondary — all variants ────────────────────────────────────────────────

export const SecondaryAllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationHeader $type="secondary" leftIcon={<ChevronLeft />} rightIcon={<HelpCircle />}>
        Paso 2 de 3
      </NavigationHeader>
      <NavigationHeader $type="secondary" $onScroll leftIcon={<ChevronLeft />} rightIcon={<HelpCircle />}>
        Paso 2 de 3
      </NavigationHeader>
      <NavigationHeader
        $type="secondary"
        $alignment="centered"
        leftIcon={<ChevronLeft />}
        rightIcon={<HelpCircle />}
      >
        Paso 2 de 3
      </NavigationHeader>
      <NavigationHeader
        $type="secondary"
        $alignment="centered"
        $onScroll
        leftIcon={<ChevronLeft />}
        rightIcon={<HelpCircle />}
      >
        Paso 2 de 3
      </NavigationHeader>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Secondary: left-aligned (top two) and centered (bottom two), default and on-scroll. Centered alignment uses invisible icon placeholders to keep the title truly centred.',
      },
    },
  },
}

// ─── Optional icon slots ─────────────────────────────────────────────────────

export const RightIconOnly: Story = {
  args: {
    $type: 'secondary',
    rightIcon: <HelpCircle />,
    children: 'Configuración',
  },
  parameters: {
    docs: {
      description: { story: 'Both icon slots are optional — omit either or both.' },
    },
  },
}

export const NoIcons: Story = {
  args: {
    $type: 'title',
    children: 'Sin iconos',
  },
}

// ─── Playground (all props exposed via controls) ─────────────────────────────

export const Playground: Story = {
  args: {
    $type: 'main',
    $onScroll: false,
    leftIcon: <PersonCircle />,
    rightIcon: <HelpCircle />,
    children: 'Cuenta',
  },
}
