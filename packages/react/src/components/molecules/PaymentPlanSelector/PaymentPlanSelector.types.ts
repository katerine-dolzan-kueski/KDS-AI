import { ReactNode } from 'react';

/** Amount shown in the item: numbers are formatted as MXN; strings are rendered as-is. */
export type PaymentPlanSelectorItemAmount = number | string;

// Base props shared by both configurations
interface BaseItemProps {
  className?: string;
  $loading?: boolean;
  $onSelect?: () => void;
}

// Props when using default content
interface DefaultItemProps extends BaseItemProps {
  $quincena: number;
  $amount: PaymentPlanSelectorItemAmount;
  $date: string;
  $quincenaLabel?: (quincena: number) => string;
  children?: never;
}

// Props when using custom children
interface CustomizedItemProps extends BaseItemProps {
  children: ReactNode;
  $quincena?: never;
  $amount?: never;
  $date?: never;
  $quincenaLabel?: never;
}

export type PaymentPlanSelectorItemProps = 
  | DefaultItemProps 
  | CustomizedItemProps;

export interface PaymentPlanSelectorItemData {
  amount: PaymentPlanSelectorItemAmount;
  date: string;
  quincena: number;
}

export interface PaymentPlanSelectorProps {
  $items?: PaymentPlanSelectorItemData[];
  $onSelect?: (item: PaymentPlanSelectorItemData) => void;
  $onChangePlan?: () => void;
  $loading?: boolean;
  $plan: number;
  $planHeaderLabel?: string;
  $planCountLabel?: (plan: number) => string;
  $changeButtonLabel?: string;
}

export interface PaymentPlanHeaderProps {
  $planHeaderLabel?: string;
  $planCountText: string;
  $changeButtonLabel?: string;
  $onChangePlan?: () => void;
}

export interface PaymentPlanChipProps {
  children: React.ReactNode;
  className?: string;
}
