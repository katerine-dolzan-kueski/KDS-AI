import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarouselStepper } from './CarouselStepper';
import { Button } from '../Button-v2/Button';

const meta = {
  title: 'Kueski Design System/Atoms/CarouselStepper',
  component: CarouselStepper,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    $type: {
      control: { type: 'select' },
      options: ['manual', 'progress'],
      description: 'manual = carousel pagination, progress = sequential flow',
    },
    $size: {
      control: { type: 'select' },
      options: ['short', 'wide'],
      description: 'short = dots/pills (default), wide = full-width bars (progress + dark bg only)',
    },
    steps: {
      control: { type: 'number', min: 2, max: 10, step: 1 },
      description: 'Total number of steps (minimum 2)',
    },
    activeStep: {
      control: { type: 'number', min: 0, max: 9, step: 1 },
      description: '0-indexed active step index',
    },
  },
} satisfies Meta<typeof CarouselStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Configurable sandbox ──────────────────────────────────────────────────────

export const Configurable: Story = {
  args: {
    $type: 'manual',
    $size: 'short',
    steps: 5,
    activeStep: 2,
  },
};

// ── All type × size combinations ──────────────────────────────────────────────

export const AllCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6 w-80">
      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          manual · short
        </p>
        <CarouselStepper $type="manual" $size="short" steps={5} activeStep={2} />
      </div>

      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          progress · short
        </p>
        <CarouselStepper $type="progress" $size="short" steps={5} activeStep={2} />
      </div>

      <div className="flex flex-col gap-3">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          progress · wide (dark bg)
        </p>
        <div className="rounded-lg p-4 bg-[var(--color-background-invert-primary)]">
          <CarouselStepper $type="progress" $size="wide" steps={5} activeStep={2} />
        </div>
      </div>
    </div>
  ),
};

// ── Step counts ───────────────────────────────────────────────────────────────

export const StepCounts: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-6 w-80">
      {[2, 3, 4, 5, 6, 8].map(n => (
        <div key={n} className="flex flex-col gap-1">
          <p className="typo-meta text-[var(--color-text-and-icons-tertiary)]">{n} steps</p>
          <CarouselStepper $type="manual" $size="short" steps={n} activeStep={Math.floor(n / 2)} />
        </div>
      ))}
    </div>
  ),
};

// ── Step states (inactive / active / completed) ───────────────────────────────

export const StepStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 w-80">
      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          manual — step 1 of 5
        </p>
        <CarouselStepper $type="manual" $size="short" steps={5} activeStep={0} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          manual — step 3 of 5
        </p>
        <CarouselStepper $type="manual" $size="short" steps={5} activeStep={2} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          progress — step 3 of 5
        </p>
        <CarouselStepper $type="progress" $size="short" steps={5} activeStep={2} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="typo-meta-emphasized text-[var(--color-text-and-icons-secondary)] uppercase tracking-wide">
          progress · wide — step 3 of 5
        </p>
        <div className="rounded-lg p-4 bg-[var(--color-background-invert-primary)]">
          <CarouselStepper $type="progress" $size="wide" steps={5} activeStep={2} />
        </div>
      </div>
    </div>
  ),
};

// ── Interactive demo ──────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const STEPS = 5;
    const [active, setActive] = useState(0);

    return (
      <div className="flex flex-col items-center gap-8 p-6 w-80">
        <div className="flex flex-col items-center gap-2 w-full">
          <p className="typo-meta text-[var(--color-text-and-icons-secondary)]">
            Paso {active + 1} de {STEPS}
          </p>
          <CarouselStepper $type="progress" $size="short" steps={STEPS} activeStep={active} />
        </div>

        <div className="flex gap-3 w-full">
          <Button
            $variant="secondary"
            $size="md"
            $fullWidth
            disabled={active === 0}
            onClick={() => setActive(p => p - 1)}
          >
            Anterior
          </Button>
          <Button
            $variant="primary"
            $size="md"
            $fullWidth
            disabled={active === STEPS - 1}
            onClick={() => setActive(p => p + 1)}
          >
            Siguiente
          </Button>
        </div>

        <div className="rounded-lg p-4 bg-[var(--color-background-invert-primary)] w-full">
          <p className="typo-meta-emphasized text-[var(--color-text-and-icons-always-white)] mb-3">
            Wide variant (dark bg)
          </p>
          <CarouselStepper $type="progress" $size="wide" steps={STEPS} activeStep={active} />
        </div>
      </div>
    );
  },
};
