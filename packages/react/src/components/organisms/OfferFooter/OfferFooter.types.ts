import { ReactNode } from 'react';
import { type PropsOf } from '../../../lib/types';

export interface OfferFooterWrapperProps extends PropsOf<'div'> {
  children?: ReactNode;
  $elevated?: boolean;
}

export interface OfferFooterDataProtectionProps extends PropsOf<'div'> {
  $link: string;
  $linkText?: string;
}

export interface OfferFooterRowSaveProps extends PropsOf<'div'> {
  $amount: number | string;
  $leading: string;
  $trailing: string;
  $loading?: boolean;
}

export interface OfferFooterRowAmountProps extends PropsOf<'div'> {
  $variant: 'discount' | 'interest' | 'total' | 'rate';
  $label: string;
  $amount: string;
  $crossed?: string;
  $loading?: boolean;
  $success?: boolean;
  $emphatized?: boolean;
}

interface OfferFooterDataRowBase {
  id: string | number;
  loading?: boolean;
}

export interface OfferFooterDataRowAmount extends OfferFooterDataRowBase {
  type: 'discount' | 'interest' | 'total';
  amount: number | string;
  crossed?: number | string;
  success?: boolean;
  emphatized?: boolean;
  label?: string;
}

export interface OfferFooterDataRowRate extends OfferFooterDataRowBase {
  type: 'rate';
  label: string;
  amount: number | string;
  crossed?: number | string;
  success?: boolean;
  emphatized?: boolean;
}

export interface OfferFooterDataRowSave extends OfferFooterDataRowBase {
  type: 'save';
  amount: number | string;
  leading?: string;
  trailing?: string;
}

export type OfferFooterDataRow = OfferFooterDataRowAmount | OfferFooterDataRowRate | OfferFooterDataRowSave;

export interface OfferFooterProps extends PropsOf<'div'> {
  $rows?: OfferFooterDataRow[];
  $dataProtectionLink?: string;
  $dataProtectionLinkText?: string;
  $elevated?: boolean;
  $legalContent?: ReactNode;
}
