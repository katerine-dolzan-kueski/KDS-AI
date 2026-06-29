/**
 * @kueski-dev/kds
 * @version 2.0.1
 * @description Kueski Design System - Complete component library built with React, TypeScript, and Tailwind CSS
 */

// ============================================
// Atoms
// ============================================
export {
  Button,
  buttonVariants,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
  type ButtonMode,
} from './components/atoms/Button';

export {
  ButtonGroup,
  type ButtonGroupProps,
  buttonGroupVariants,
  type ButtonGroupVariants,
} from './components/atoms/ButtonGroup';

export {
  CircularProgress,
  type CircularProgressProps,
  type CircularProgressSize,
  type CircularProgressSpeed,
  circularProgressContainerVariants,
} from './components/atoms/CircularProgress';

export {
  Spinner,
  type SpinnerProps,
  type SpinnerSize,
  type SpinnerSpeed,
  spinnerContainerVariants,
  spinnerTitleVariants,
  spinnerSubtitleVariants,
} from './components/atoms/Spinner';

export {
  Theme,
  type ThemeProps,
  type ThemeBehaviour,
  type ThemeMode,
} from './components/atoms/Theme';

export { Shimmer, type ShimmerProps } from './components/atoms/Shimmer';

export { DatePicker, type DatePickerProps } from './components/molecules/DatePicker';

export { Card, type CardProps, type CardVariant, type CardSize } from './components/atoms/Card';

export { Chip, type ChipProps } from './components/atoms/Chip';

export { BottomSheet, type BottomSheetProps } from './components/molecules/BottomSheet';

export { Toggle, type ToggleProps } from './components/atoms/Toggle';
export { Radio, RadioIndicator, RadioLabel, type RadioProps } from './components/atoms/Radio';
export { RadioGroup, RadioGroupOption, type RadioGroupProps } from './components/atoms/RadioGroup';
export { FieldBase } from './components/atoms/FieldBase';

export { Checkbox, type CheckboxProps } from './components/atoms/Checkbox';
export { OTPInput, type OTPInputProps } from './components/atoms/OTPInput';
export {
  SegmentedTabs,
  type SegmentedTabsProps,
} from './components/atoms/SegmentedTabs';

// ============================================
// Molecules
// ============================================
export {
  PaymentPlanSelector,
  type PaymentPlanSelectorProps,
  type PaymentPlanSelectorItemAmount,
  type PaymentPlanSelectorItemData,
  type PaymentPlanSelectorItemProps,
} from './components/molecules/PaymentPlanSelector';
export { Banner, type BannerProps } from './components/molecules/Banner';
export {
  Toast,
  useToast,
  type ToastBodyProps,
  type ToastCloseProps,
  type ToastContentProps,
  type ToastIconProps,
  type ToastProps,
  type ToastVariant,
} from './components/molecules/Toast';
export { AmountInput, type AmountInputProps } from './components/molecules/AmountInput';
export { DropDown, type DropDownProps } from './components/molecules/DropDown';
export { Stepper, type StepperProps } from './components/molecules/Stepper';
export { SectionHeader, type SectionHeaderProps } from './components/molecules/SectionHeader';
export { DataProtectionBadge, type DataProtectionBadgeProps } from './components/molecules/DataProtectionBadge';

// ============================================
// Organisms
// ============================================
export {
  Header,
  type HeaderProps,
} from './components/organisms/Header';

export {
  OfferFooter,
  type OfferFooterDataProtectionProps,
  type OfferFooterDataRow,
  type OfferFooterDataRowAmount,
  type OfferFooterDataRowRate,
  type OfferFooterDataRowSave,
  type OfferFooterProps,
  type OfferFooterRowAmountProps,
  type OfferFooterRowSaveProps,
  type OfferFooterWrapperProps
} from './components/organisms/OfferFooter';

export { Footer, type FooterProps } from './components/organisms/Footer';
export { NavigationHeader, type NavigationHeaderProps } from './components/organisms/NavigationHeader';

export {
  OfferSuccessPage,
  type OfferSuccessPageDetailProps,
} from './components/organisms/OfferSuccessPage';

// ============================================
// Flows
// ============================================
export {
  LoginFlow,
  type LoginFlowProps,
  type LoginFlowStep,
  LoginScreen,
  type LoginScreenProps,
  BiometricsScreen,
  type BiometricsScreenProps,
  BiometricsSystemPromptScreen,
  type BiometricsSystemPromptScreenProps,
  BiometricsSuccessScreen,
  type BiometricsSuccessScreenProps,
} from './components/flows/LoginFlow';

export {
  PersonalInfoFlow,
  type PersonalInfoFlowProps,
  type PersonalInfoFlowStep,
  PersonalInfoScreen,
  type PersonalInfoScreenProps,
  type PersonalInfoData,
  CurpConfirmationSheet,
  type CurpConfirmationSheetProps,
  type CurpConfirmationSheetState,
} from './components/flows/PersonalInfoFlow';

export {
  RegistrationFlow,
  type RegistrationFlowProps,
  type RegistrationFlowStep,
  OnboardingScreen,
  type OnboardingScreenProps,
  CreateAccountScreen,
  type CreateAccountScreenProps,
  VerifyPhoneScreen,
  type VerifyPhoneScreenProps,
} from './components/flows/RegistrationFlow';

export {
  FunnelLayout,
  type FunnelLayoutDesktopHeaderProps,
  type FunnelLayoutPageHeaderProps,
} from './components/organisms/FunnelLayout';

// ============================================
// Icons
// ============================================
export * from './components/atoms/Icons';

// ============================================
// Hooks
// ============================================
export { useAccessibility, useKeyboardEvent } from './hooks';
export type {
  AccessibilityOptions,
  AccessibilityReturn,
  KeyboardEventOptions,
  KeyboardEventReturn,
} from './hooks';
export { useBreakpoint, type Breakpoint } from './hooks/useBreakpoint';

// ============================================
// Utils
// ============================================
export { cn } from './lib/utils';
export * as Utils from './lib';
export { type PropsOf } from './lib/types';
