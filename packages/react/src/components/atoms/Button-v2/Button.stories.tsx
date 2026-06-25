import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Kueski Design System/Atoms/Button v2',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: [
        'primary', 'warning', 'destructive', 'success', 'upsell',
        'secondary', 'ghost-primary', 'ghost-destructive',
        'translucent', 'opaque-shadow', 'opaque-outline', 'invert-primary',
      ],
    },
    $size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    $mode: {
      control: { type: 'select' },
      options: ['default', 'icon', 'alternative', 'link'],
    },
    $loading:   { control: 'boolean' },
    $fullWidth: { control: 'boolean' },
    children:   { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Configurable sandbox ──────────────────────────────────────────────────────

export const Configurable: Story = {
  args: {
    children: 'Continuar',
    $variant: 'primary',
    $size: 'md',
    $mode: 'default',
    $loading: false,
    $fullWidth: false,
  },
};

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 max-w-2xl">
      <h3 className="typo-headline-3 text-[var(--color-text-and-icons-primary)]">Default mode</h3>
      <div className="flex flex-wrap gap-3">
        {(['primary','warning','destructive','success','upsell','secondary','ghost-primary','ghost-destructive','opaque-shadow','opaque-outline'] as const).map(v => (
          <Button key={v} $variant={v} $size="md">{v}</Button>
        ))}
      </div>

      <h3 className="typo-headline-3 text-[var(--color-text-and-icons-primary)]">Link mode</h3>
      <div className="flex flex-wrap gap-3">
        {(['primary','warning','destructive','success','upsell','secondary','ghost-primary','ghost-destructive'] as const).map(v => (
          <Button key={v} $variant={v} $mode="link">{v}</Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 p-4 rounded-lg bg-[var(--color-background-invert-primary)]">
        <Button $variant="invert-primary" $mode="link">invert-primary link</Button>
        <Button $variant="translucent">translucent</Button>
      </div>
    </div>
  ),
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Button $size="sm">Small</Button>
      <Button $size="md">Medium</Button>
      <Button $size="lg">Large</Button>
    </div>
  ),
};

// ── States ────────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 max-w-xs">
      <Button $variant="primary">Default</Button>
      <Button $variant="primary" $loading>Loading</Button>
      <Button $variant="primary" $loading $loadingText="Cargando...">Loading with text</Button>
      <Button $variant="primary" disabled>Disabled</Button>
      <Button $variant="primary" $fullWidth>Full width</Button>
    </div>
  ),
};

// ── Icon mode ─────────────────────────────────────────────────────────────────

export const IconMode: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      {(['sm','md','lg'] as const).map(size => (
        <Button key={size} $mode="icon" $size={size} aria-label={`Icon ${size}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </Button>
      ))}
    </div>
  ),
};

// ── Alternative (circular) mode ───────────────────────────────────────────────

export const AlternativeMode: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      {(['sm','md','lg'] as const).map(size => (
        <Button key={size} $mode="alternative" $size={size} aria-label={`Alt ${size}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </Button>
      ))}
    </div>
  ),
};
