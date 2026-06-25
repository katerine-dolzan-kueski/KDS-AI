import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Kueski Design System/Atoms/Badge v2',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['brand', 'success', 'warning', 'danger', 'upsell', 'neutral'],
    },
    $emphasis: {
      control: { type: 'select' },
      options: ['subtle', 'default', 'strong'],
    },
    $type: {
      control: { type: 'select' },
      options: ['dot', 'label', 'count'],
    },
    $size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS = ['brand', 'success', 'warning', 'danger', 'upsell', 'neutral'] as const;
const EMPHASES = ['subtle', 'default', 'strong'] as const;

// ── Configurable sandbox ──────────────────────────────────────────────────────

export const Configurable: Story = {
  args: {
    children: 'Activo',
    $variant: 'brand',
    $emphasis: 'default',
    $type: 'label',
    $size: 'md',
  },
};

// ── All variants × emphasis ───────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      {EMPHASES.map(emphasis => (
        <div key={emphasis} className="flex flex-col gap-2">
          <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">{emphasis}</p>
          <div className="flex flex-wrap gap-2">
            {VARIANTS.map(v => (
              <Badge key={v} $variant={v} $emphasis={emphasis}>{v}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Types: dot, label, count ──────────────────────────────────────────────────

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Dot</p>
        <div className="flex items-center gap-4">
          {VARIANTS.map(v => (
            <Badge key={v} $type="dot" $variant={v} aria-label={`${v} status`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Label</p>
        <div className="flex flex-wrap gap-2">
          {VARIANTS.map(v => (
            <Badge key={v} $type="label" $variant={v}>Etiqueta</Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">Count</p>
        <div className="flex items-center gap-2">
          <Badge $type="count" $variant="brand">{5}</Badge>
          <Badge $type="count" $variant="danger">{42}</Badge>
          <Badge $type="count" $variant="neutral">{99}</Badge>
          <Badge $type="count" $variant="brand">{128}</Badge>
          <span className="typo-meta text-[var(--color-text-and-icons-tertiary)]">↑ overflows at 99+</span>
        </div>
      </div>
    </div>
  ),
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Badge $size="sm">Small</Badge>
      <Badge $size="md">Medium</Badge>
      <Badge $type="dot" $size="sm" aria-label="small dot" />
      <Badge $type="dot" $size="md" aria-label="medium dot" />
    </div>
  ),
};
