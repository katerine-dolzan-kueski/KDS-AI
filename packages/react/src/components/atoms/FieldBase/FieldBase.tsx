import FieldBaseBox from './FieldBase.Box';
import FieldBaseLayout from './FieldBase.Layout';
import FieldBaseLeading from './FieldBase.Leading';
import FieldBaseTrailing from './FieldBase.Trailing';
import { FieldBaseBoxProps, FieldBaseLayoutProps, FieldBaseLeadingProps, FieldBaseTrailingProps } from './FieldBase.types';

export namespace FieldBase {
  export const Box = FieldBaseBox;
  export const Layout = FieldBaseLayout;
  export const Leading = FieldBaseLeading;
  export const Trailing = FieldBaseTrailing;
  export type BoxProps = FieldBaseBoxProps;
  export type LayoutProps = FieldBaseLayoutProps;
  export type LeadingProps = FieldBaseLeadingProps;
  export type TrailingProps = FieldBaseTrailingProps;
}
