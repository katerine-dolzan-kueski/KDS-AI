import { Meta, StoryObj } from '@storybook/react-vite';
import { PaymentPlanSelector, PaymentPlanSelectorProps, PaymentPlanSelectorItemData, PaymentPlanSelectorItemProps, PaymentPlanHeaderProps, PaymentPlanChipProps } from '.';
import README from './PaymentPlanSelector.docs.md';

const meta: Meta<PaymentPlanSelectorItemProps> = {
  title: 'Kueski Design System/Molecules/PaymentPlanSelector',
  component: PaymentPlanSelector.Item,
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
      <div className="w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] sm:w-[470px] sm:max-w-[470px] sm:border sm:border-stroke-primary sm:border-dashed sm:p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    $onSelect: () => console.log('$onSelect'),
  },
};

export default meta;

type Story = StoryObj<PaymentPlanSelectorItemProps>;

export const Item: Story = {
  args: {
    $quincena: 1,
    $amount: 482,
    $date: '28 feb 2025',
    $loading: false,
  },
};

export const ItemLoading: Story = {
  args: {
    $quincena: 3,
    $amount: 482,
    $date: '28 feb 2025',
    $loading: true,
  },
};

export const ItemCustomLabels: Story = {
  args: {
    $quincena: 2,
    $amount: 750,
    $date: '15 mar 2025',
    $loading: false,
    $quincenaLabel: (quincena: number) => `Payment ${quincena}`,
  },
};

export const ItemCustomContent: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center gap-2 p-2">
        <div className="text-text-and-icons-brand text-xs font-medium">Prestamo</div>
        <div className="text-text-and-icons-primary text-lg font-bold">$1,250.00</div>
        <div className="text-text-and-icons-secondary text-sm">30 de Febrero</div>
      </div>
    ),
  },
};

type ChipStory = StoryObj<PaymentPlanChipProps>;

export const Chip: ChipStory = {
  render: (args: PaymentPlanChipProps) => <PaymentPlanSelector.Chip {...args} />,
  args: {
    children: "1ª quincena",
  },
};

type HeaderStory = StoryObj<PaymentPlanHeaderProps>;

export const Header: HeaderStory = {
  render: (args: PaymentPlanHeaderProps) => <PaymentPlanSelector.Header {...args} />,
  args: {
    $planHeaderLabel: "Plan de pagos:",
    $planCountText: "4 quincenas",
    $changeButtonLabel: "Cambiar",
    $onChangePlan: () => console.log('Change plan clicked'),
  },
};

export const Selector = {
  render: (args: PaymentPlanSelectorProps) => <PaymentPlanSelector {...args} />,
  args: {
    $plan: 3,
    $loading: false,
    $items: [
      {
        quincena: 1,
        amount: 482.00,
        date: '28 feb 2025',
      },
      {
        quincena: 2,
        amount: 482.00,
        date: '15 mar 2025',
      },
      {
        quincena: 3,
        amount: 482.00,
        date: '31 mar 2025',
      },
    ],
    $onSelect: (item: PaymentPlanSelectorItemData) => console.log('$onSelect:', item),
    $onChangePlan: () => console.log('$onChangePlan'),
  },
};

export const SelectorLoading = {
  render: (args: PaymentPlanSelectorProps) => <PaymentPlanSelector {...args} />,
  args: {
    $plan: 6,
    $loading: true,
    $items: [
      {
        quincena: 1,
        amount: 482.00,
        date: '28 feb 2025',
      },
      {
        quincena: 2,
        amount: 482.00,
        date: '15 mar 2025',
      },
      {
        quincena: 3,
        amount: 482.00,
        date: '31 mar 2025',
      },
      {
        quincena: 4,
        amount: 482.00,
        date: '15 abr 2025',
      },
      {
        quincena: 5,
        amount: 482.00,
        date: '30 abr 2025',
      },
      {
        quincena: 6,
        amount: 482.00,
        date: '15 may 2025',
      },
    ],
    $onChangePlan: () => console.log('$onChangePlan'),
    $onSelect: (item: PaymentPlanSelectorItemData) => console.log('$onSelect:', item),
  },
};
