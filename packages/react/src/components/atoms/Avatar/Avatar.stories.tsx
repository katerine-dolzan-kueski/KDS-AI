import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
  title: 'Kueski Design System/Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    $visual: {
      control: { type: 'select' },
      options: ['icon', 'photo', 'logo'],
    },
    $iconSize: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
    $showBorder: { control: 'boolean' },
    $borderColor: {
      control: { type: 'select' },
      options: ['default', 'brand'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const PHOTO_SRC = 'https://i.pravatar.cc/150?img=47';
const LOGO_SRC  = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png';

// ── Configurable sandbox ──────────────────────────────────────────────────────

export const Configurable: Story = {
  args: {
    $visual: 'icon',
    $iconSize: 'lg',
    $showBorder: false,
    $borderColor: 'default',
    alt: 'Usuario',
  },
};

// ── Visuals ───────────────────────────────────────────────────────────────────

export const Visuals: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Icon</p>
        <div className="flex items-center gap-4">
          <Avatar $visual="icon" $iconSize="sm" alt="sm" />
          <Avatar $visual="icon" $iconSize="lg" alt="lg" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Photo</p>
        <div className="flex items-center gap-4">
          <Avatar $visual="photo" src={PHOTO_SRC} alt="Katerine" />
          <Avatar $visual="photo" alt="Sin foto (fallback)" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Logo</p>
        <div className="flex items-center gap-4">
          <Avatar $visual="logo" src={LOGO_SRC} alt="Amazon" />
          <Avatar $visual="logo" alt="Sin logo (fallback)" />
        </div>
      </div>
    </div>
  ),
};

// ── Borders ───────────────────────────────────────────────────────────────────

export const Borders: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar $visual="photo" src={PHOTO_SRC} alt="default border" $showBorder $borderColor="default" />
        <span className="typo-meta text-[var(--color-text-and-icons-tertiary)]">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar $visual="photo" src={PHOTO_SRC} alt="brand border" $showBorder $borderColor="brand" />
        <span className="typo-meta text-[var(--color-text-and-icons-tertiary)]">brand</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar $visual="icon" alt="no border" />
        <span className="typo-meta text-[var(--color-text-and-icons-tertiary)]">none</span>
      </div>
    </div>
  ),
};
