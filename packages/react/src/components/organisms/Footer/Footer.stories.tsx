import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './index'
import type { FooterButtons } from './Footer.types'

// ─── Icon stand-ins for stories ─────────────────────────────────────────────
// TODO: replace with real KDS icon imports once package name is confirmed
// import { ShieldLock } from '@kueski/kds-icons'
const ShieldLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill="currentColor" opacity=".15" />
    <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 2.18l6 3V12c0 4.52-3.13 8.75-6 9.93-2.87-1.18-6-5.41-6-9.93V7.18l6-3z" fill="currentColor" />
    <rect x="10" y="11" width="4" height="5" rx="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1.5" fill="currentColor" />
  </svg>
)

// ─── Button stand-ins for stories ────────────────────────────────────────────
// TODO: replace with KDS Button component
// import { Button } from '@kueski/react/atoms/Button'
const PrimaryBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      width: '100%', height: 48, borderRadius: 12,
      background: 'var(--color-background-brand)',
      color: 'var(--color-text-and-icons-always-white)',
      border: 'none', cursor: 'pointer',
      fontFamily: 'Inter Variable, Inter, sans-serif',
      fontSize: 16, fontWeight: 600,
    }}
  >
    {children}
  </button>
)

const SecondaryBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      width: '100%', height: 48, borderRadius: 12,
      background: 'var(--color-background-secondary, #f0f0f0)',
      color: 'var(--color-text-and-icons-primary)',
      border: 'none', cursor: 'pointer',
      fontFamily: 'Inter Variable, Inter, sans-serif',
      fontSize: 16, fontWeight: 600,
    }}
  >
    {children}
  </button>
)

const DestructiveBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      width: '100%', height: 48, borderRadius: 12,
      background: 'var(--color-background-danger)',
      color: 'var(--color-text-and-icons-always-white)',
      border: 'none', cursor: 'pointer',
      fontFamily: 'Inter Variable, Inter, sans-serif',
      fontSize: 16, fontWeight: 600,
    }}
  >
    {children}
  </button>
)

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The fixed action zone at the bottom of a screen or sheet. Accepts a `primaryAction` slot (required), an optional `secondaryAction`, a `caption` slot for supporting or consent text, and a `badge` slot for icon+link trust elements. **Does not** contain domain-specific content — financial summaries, amounts, or line items belong in the scrollable screen body above the Footer.',
      },
    },
  },
  argTypes: {
    $buttons: {
      control: 'select',
      options: ['single', 'side-by-side', 'stacked'] satisfies FooterButtons[],
      description: 'Action zone layout',
      table: { defaultValue: { summary: 'single' } },
    },
    $elevated: {
      control: 'boolean',
      description: 'L2 elevation shadow on top edge — use when Footer floats above scrollable content',
      table: { defaultValue: { summary: 'false' } },
    },
    $systemBar: {
      control: 'boolean',
      description: 'Show Android navigation indicator',
      table: { defaultValue: { summary: 'false' } },
    },
    primaryAction: { control: false, description: 'Required primary CTA — pass a KDS Button' },
    secondaryAction: { control: false, description: 'Optional secondary button (side-by-side or stacked only)' },
    caption: { control: false, description: 'Optional supporting text above the buttons' },
    badge: { control: false, description: 'Optional icon + link trust element below the buttons' },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

// ─── Default ─────────────────────────────────────────────────────────────────
// Single primary action — minimum viable Footer.

export const Default: Story = {
  args: {
    $buttons: 'single',
    $elevated: false,
    $systemBar: false,
    primaryAction: <PrimaryBtn>Confirmar</PrimaryBtn>,
  },
}

// ─── With caption ─────────────────────────────────────────────────────────────
// Consent or legal copy appears above the button.

export const WithCaption: Story = {
  args: {
    $buttons: 'single',
    primaryAction: <PrimaryBtn>Confirmar</PrimaryBtn>,
    caption: (
      <p style={{ margin: 0 }}>
        Al <strong>Confirmar</strong>, acepto las condiciones de mi préstamo otorgado
        por Kueski y confirmo que leí los{' '}
        <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>
          términos y condiciones
        </a>
        .
      </p>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `caption` slot renders above the buttons with `typo-meta` style. Use for consent text, legal copy, or contextual notes. Keep it concise — 3 lines max.',
      },
    },
  },
}

// ─── With badge ───────────────────────────────────────────────────────────────
// Icon + link trust element below the button.

export const WithBadge: Story = {
  args: {
    $buttons: 'single',
    primaryAction: <PrimaryBtn>Continuar</PrimaryBtn>,
    badge: (
      <>
        <ShieldLock />
        <a
          href="#"
          style={{
            color: 'var(--color-text-and-icons-secondary)',
            textDecoration: 'underline',
            fontFamily: 'Inter Variable, Inter, sans-serif',
            fontSize: 14,
          }}
        >
          Cómo protegemos tus datos
        </a>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `badge` slot renders below the buttons. Use for trust signals or contextual links — the Footer provides the flex row layout, icon gap, and padding.',
      },
    },
  },
}

// ─── Side by side ─────────────────────────────────────────────────────────────

export const SideBySide: Story = {
  args: {
    $buttons: 'side-by-side',
    primaryAction: <PrimaryBtn>Aceptar</PrimaryBtn>,
    secondaryAction: <SecondaryBtn>Rechazar</SecondaryBtn>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Two equal-width buttons. Place the secondary action first (left) and the primary action last (right) to follow reading direction and visual hierarchy.',
      },
    },
  },
}

// ─── Stacked ──────────────────────────────────────────────────────────────────

export const Stacked: Story = {
  args: {
    $buttons: 'stacked',
    primaryAction: <PrimaryBtn>Confirmar préstamo</PrimaryBtn>,
    secondaryAction: <SecondaryBtn>Cancelar</SecondaryBtn>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Primary action on top, secondary below — both full-width. Use when both buttons need equal visual width but different emphasis.',
      },
    },
  },
}

// ─── Elevated ─────────────────────────────────────────────────────────────────

export const Elevated: Story = {
  args: {
    $buttons: 'single',
    $elevated: true,
    primaryAction: <PrimaryBtn>Confirmar</PrimaryBtn>,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`$elevated=true` adds an L2 elevation shadow on the top edge, indicating the Footer floats above scrollable content.',
      },
    },
  },
}

// ─── Destructive hierarchy ────────────────────────────────────────────────────

export const Destructive: Story = {
  args: {
    $buttons: 'side-by-side',
    primaryAction: <DestructiveBtn>Eliminar cuenta</DestructiveBtn>,
    secondaryAction: <SecondaryBtn>Cancelar</SecondaryBtn>,
    caption: (
      <p style={{ margin: 0 }}>
        Esta acción es permanente y no puede deshacerse.
      </p>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Destructive hierarchy — the primary action button uses the danger/destructive variant. The `caption` slot is used here to reinforce the consequence.',
      },
    },
  },
}

// ─── With system bar ─────────────────────────────────────────────────────────

export const WithSystemBar: Story = {
  args: {
    $buttons: 'single',
    $systemBar: true,
    primaryAction: <PrimaryBtn>Confirmar</PrimaryBtn>,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`$systemBar=true` adds the Android home indicator at the bottom. Use only when the screen renders below the device's gesture navigation bar.',
      },
    },
  },
}

// ─── Fully loaded ─────────────────────────────────────────────────────────────
// Caption + badge + system bar + elevation — all optional slots active.

export const FullyLoaded: Story = {
  args: {
    $buttons: 'single',
    $elevated: true,
    $systemBar: true,
    primaryAction: <PrimaryBtn>Confirmar préstamo</PrimaryBtn>,
    caption: (
      <p style={{ margin: 0 }}>
        Al <strong>Confirmar</strong>, acepto las condiciones de los contratos de mi
        préstamo otorgado por Kueski y confirmo que leí los{' '}
        <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>
          términos y condiciones
        </a>
        .
      </p>
    ),
    badge: (
      <>
        <ShieldLock />
        <a
          href="#"
          style={{
            color: 'var(--color-text-and-icons-secondary)',
            textDecoration: 'underline',
            fontFamily: 'Inter Variable, Inter, sans-serif',
            fontSize: 14,
          }}
        >
          Cómo protegemos tus datos
        </a>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'All optional slots active — caption, badge, elevation, and system bar. This is the highest-information variant used in loan confirmation screens.',
      },
    },
  },
}

// ─── All button layouts ───────────────────────────────────────────────────────

export const AllLayouts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--color-stroke-secondary, #e0e0e0)' }}>
      {(['single', 'side-by-side', 'stacked'] satisfies FooterButtons[]).map((layout) => (
        <Footer
          key={layout}
          $buttons={layout}
          primaryAction={<PrimaryBtn>Confirmar</PrimaryBtn>}
          secondaryAction={<SecondaryBtn>Cancelar</SecondaryBtn>}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three `$buttons` layouts stacked for comparison.',
      },
    },
  },
}
