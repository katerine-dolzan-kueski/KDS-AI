import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { OfferFooter } from '.';
import type { OfferFooterProps } from './OfferFooter.types';
import { Button, ButtonGroup } from '../../..';
import README from './OfferFooter.docs.md';

interface FooterStoryProps extends OfferFooterProps {
  $buttonVariant?: 'primary' | 'destructive' | 'success';
}

const meta: Meta<FooterStoryProps> = {
  title: 'Kueski Design System/Organisms/OfferFooter',
  component: OfferFooter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: README,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="sm:w-[412px]">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

const argTypes = {
  $buttonVariant: {
    control: { type: 'select' },
    options: ['primary', 'destructive', 'success'],
  },
} as const;

export default meta;

type Story = StoryObj<FooterStoryProps>;

const defaultRows: OfferFooterProps['$rows'] = [
  {
    id: 'discount-1',
    type: 'discount',
    amount: -150.89,
    loading: false,
    label: '',
  },
  {
    id: 'interest-1',
    type: 'interest',
    amount: 1150.20,
    loading: false,
    label: '',
  },
  {
    id: 'save-1',
    type: 'save',
    amount: 100,
    loading: false,
    leading: '',
    trailing: '',
  },
  {
    id: 'total-1',
    type: 'total',
    amount: 1750.20,
    loading: false,
    label: '',
  },
  {
    id: 'rate-1',
    type: 'rate',
    label: 'Tasa de interés anual',
    amount: 43,
    crossed: 75,
    loading: false,
  },
  {
    id: 'rate-2',
    type: 'rate',
    label: 'CAT',
    amount: 58,
    loading: false,
  }
];

export const SingleButton: Story = {
  args: {
    $elevated: false,
    $dataProtectionLink: 'https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_datos_personales',
    $dataProtectionLinkText: '',
    $legalAmount: 5000,
    $legalLink: 'https://es.wikipedia.org/wiki/T%C3%A9rminos_y_condiciones_de_uso',
    $buttonVariant: 'primary',
    $rows: defaultRows,
  },
  argTypes,
  render: (args) => (
    <OfferFooter 
      $elevated={args.$elevated}
      $dataProtectionLink={args.$dataProtectionLink}
      $dataProtectionLinkText={args.$dataProtectionLinkText}
      $legalAmount={args.$legalAmount}
      $legalLink={args.$legalLink}
      $rows={args.$rows}
    >
      <ButtonGroup>
        <Button $variant={args.$buttonVariant}>
          Botón
        </Button>
      </ButtonGroup>
    </OfferFooter>
  ),
};

export const SideBySideButtons: Story = {
  args: {
    $elevated: false,
    $dataProtectionLink: 'https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_datos_personales',
    $dataProtectionLinkText: '',
    $legalContent: <>Al <b>Confirmar</b>, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones.</>,
    $buttonVariant: 'primary',
    $rows: defaultRows,
  },
  argTypes,
  render: (args) => (
    <OfferFooter
      $elevated={args.$elevated}
      $dataProtectionLink={args.$dataProtectionLink}
      $dataProtectionLinkText={args.$dataProtectionLinkText}
      $legalContent={args.$legalContent}
      $rows={args.$rows}
    >
      <ButtonGroup>
        <Button $variant="secondary">
          Botón 1
        </Button>
        <Button $variant={args.$buttonVariant}>
          Botón 2
        </Button>
      </ButtonGroup>
    </OfferFooter>
  ),
};

export const StackedButtons: Story = {
  args: {
    $elevated: false,
    $dataProtectionLink: 'https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_datos_personales',
    $dataProtectionLinkText: '',
    $legalContent: 'Al Confirmar, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones.',
    $buttonVariant: 'primary',
    $rows: defaultRows,
  },
  argTypes,
  render: (args) => (
    <OfferFooter
      $elevated={args.$elevated}
      $dataProtectionLink={args.$dataProtectionLink}
      $dataProtectionLinkText={args.$dataProtectionLinkText}
      $legalContent={args.$legalContent}
      $rows={args.$rows}
    >
      <ButtonGroup $orientation="vertical">
        <Button $variant="secondary">
          Botón 1
        </Button>
        <Button $variant={args.$buttonVariant}>
          Botón 2
        </Button>
      </ButtonGroup>
    </OfferFooter>
  ),
};

export const AllRowVariants: Story = {
  args: {
    $elevated: false,
    $dataProtectionLink: 'https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_datos_personales',
    $dataProtectionLinkText: '',
    $legalContent: 'Al Confirmar, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones.',
    $rows: [
      // #region Amounts & Interests
      {
        id: 'A&I-1',
        type: 'discount',
        amount: -150.89,
        loading: false,
        label: '',
      },
      {
        id: 'A&I-2',
        type: 'interest',
        amount: 1150.20,
        loading: false,
        label: '',
      },
      {
        id: 'A&I-3',
        type: 'save',
        amount: 100,
        loading: false,
        leading: '',
        trailing: '',
      },
      {
        id: 'A&I-4',
        type: 'total',
        amount: 1750.20,
        loading: false,
        label: '',
      },
      {
        id: 'A&I-5',
        type: 'rate',
        label: 'Tasa de interés anual',
        amount: 43,
        loading: false,
      },
      {
        id: 'A&I-6',
        type: 'rate',
        label: 'CAT',
        amount: 58,
        loading: false,
      },
      // #endregion

      // #region Discount
      {
        id: 'discount-1',
        type: 'discount',
        amount: -150.89,
        loading: false,
        label: '',
      },
      {
        id: 'discount-2',
        type: 'discount',
        amount: -150.89,
        loading: true,
      },
      // #endregion

      // #region Total interests
      {
        id: 'ti-1',
        type: 'interest',
        amount: 120,
        loading: false,
      },
      {
        id: 'ti-2',
        type: 'interest',
        amount: 120,
        loading: true,
      },
      {
        id: 'ti-3',
        type: 'interest',
        amount: 0,
        crossed: 350.2,
        loading: false,
      },
      {
        id: 'ti-4',
        type: 'interest',
        amount: 0,
        loading: false,
      },
      {
        id: 'ti-5',
        type: 'interest',
        amount: 0,
        crossed: 350.2,
        loading: true,
      },
      // #endregion

      // #region Savings
      {
        id: 'save-1',
        type: 'save',
        amount: 100,
        loading: false,
        leading: '',
        trailing: '',
      },
      {
        id: 'save-2',
        type: 'save',
        amount: 100,
        loading: true,
        leading: '',
        trailing: '',
      },
      // #endregion

      // #region Total due
      {
        id: 'total-1',
        type: 'total',
        amount: 1750.20,
        crossed: 2550.20,
        loading: false,
      },
      {
        id: 'total-2',
        type: 'total',
        amount: 1750.20,
        loading: false,
      },
      {
        id: 'total-3',
        type: 'total',
        amount: 1750.20,
        loading: true,
      },
      // #endregion

      // #region Annual interests
      {
        id: 'rate-1',
        type: 'rate',
        label: 'Tasa de interés anual',
        amount: 43,
        loading: false,
      },
      {
        id: 'rate-2',
        type: 'rate',
        label: 'CAT',
        amount: 58,
        loading: false,
      },
      {
        id: 'rate-3',
        type: 'rate',
        label: 'Tasa de interés anual',
        amount: 43,
        loading: true,
      },
      {
        id: 'rate-4',
        type: 'rate',
        label: 'CAT',
        amount: 58,
        loading: true,
      },
      {
        id: 'rate-5',
        type: 'rate',
        label: 'Tasa de interés anual',
        crossed: 43,
        amount: 0,
        loading: false,
      },
      {
        id: 'rate-6',
        type: 'rate',
        label: 'CAT',
        crossed: 58,
        amount: 0,
        loading: false,
      },

      {
        id: 'rate-7',
        type: 'rate',
        label: 'Tasa de interés anual',
        crossed: 43,
        amount: 0,
        loading: true,
      },
      {
        id: 'rate-8',
        type: 'rate',
        label: 'CAT',
        crossed: 58,
        amount: 0,
        loading: true,
      },
      // #endregion
    ],
  },
};

export const CustomLabels: Story = {
  args: {
    $elevated: false,
    $dataProtectionLink: 'https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_datos_personales',
    $dataProtectionLinkText: '',
    $legalContent: 'Al Confirmar, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones.',
    $rows: [
      {
        id: 'discount-1',
        type: 'discount',
        amount: 'cien pesos',
        loading: false,
        label: 'Descuento especial',
      },
    ],
  },
};

export const BuildingBlocks: Story = {
  args: {},
  render: () => (
    <OfferFooter.Wrapper $elevated={false}>
      <div className="flex flex-col gap-x1">
        <OfferFooter.RowAmount
          $variant="discount"
          $label="Descuento especial"
          $amount="$150.89"
          $success
          $loading={false}
        />
        <OfferFooter.RowAmount
          $variant="interest"
          $label="Intereses totales"
          $amount="$1,150.20"
          $loading={false}
        />
        <OfferFooter.RowAmount
          $variant="total"
          $label="Total a pagar"
          $amount="$1,750.20"
          $crossed="$2,550.20"
          $emphatized
          $loading={false}
        />
        <OfferFooter.RowAmount
          $variant="rate"
          $label="Tasa de interés anual"
          $amount="43%"
          $loading={false}
        />
      </div>

      <OfferFooter.RowSave
        $amount="$100.00"
        $leading="Tu ahorro será de"
        $trailing="en intereses."
        $loading={false}
      />

      <ButtonGroup>
        <Button $variant="primary">
          Confirmar Préstamo
        </Button>
      </ButtonGroup>

      <OfferFooter.Legal>
        Al Confirmar, acepto las condiciones de los contratos de mi préstamo por $5,000 otorgado por Kueski y confirmo que leí y entendí los términos y condiciones.
      </OfferFooter.Legal>
      <OfferFooter.DataProtection $link="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad_de_Kueski" />
    </OfferFooter.Wrapper>
  ),
};
