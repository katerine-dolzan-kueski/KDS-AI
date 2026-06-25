/* eslint-disable sort-keys-fix/sort-keys-fix */

export const color = {
  primaryBackground: 'var(--kds-color-primary-background)', // #CCE3FF
  primaryLight: 'var(--kds-color-primary-light)', // #3391FF
  primary: 'var(--kds-color-primary-main)', // #0075FF
  primaryDark: 'var(--kds-color-primary-dark)', // #005ECC
  secondaryLight: 'var(--kds-color-secondary-light)', // #BEC5D8
  secondary: 'var(--kds-color-secondary-main)', // #8994AF
  secondaryDark: 'var(--kds-color-secondary-dark)', // #636E8C
  infoBackground: 'var(--kds-color-info-background)', // #D9F3FF
  infoLight: 'var(--kds-color-info-light)', // #0075FF
  info: 'var(--kds-color-info-main)', // #005ECC
  infoDark: 'var(--kds-color-info-dark)', // #004699
  successBackground: 'var(--kds-color-success-background)',
  successLight: 'var(--kds-color-success-light)', // #54C08B
  success: 'var(--kds-color-success-main)', // #3F9068
  successDark: 'var(--kds-color-success-dark)', // #2A6046
  warningBackground: 'var(--kds-color-warning-background)',
  warningLight: 'var(--kds-color-warning-light)', // #FFAB40
  warning: 'var(--kds-color-warning-main)', // #D57700
  warningDark: 'var(--kds-color-warning-dark)', // #A05900
  warningSecondary: 'var(--kds-color-warning-secondary)', // #FFF7D9
  dangerBackground: 'var(--kds-color-danger-background)', // #FFDCDC
  dangerLight: 'var(--kds-color-danger-light)', // #FF5252
  danger: 'var(--kds-color-danger-main)', // #CC4242
  dangerDark: 'var(--kds-color-danger-dark)', // #993131
  black: 'var(--kds-color-black)', // #000000
  white: 'var(--kds-color-white)', // #FFFFFF
  background: 'var(--kds-color-background)', // #F5F6FB
  backgroundAlter: 'var(--kds-color-background-alternative)', // #FFFFFF
  backgroundNav: 'var(--kds-color-background-alternative)', // #FFFFFF
  paper: 'var(--kds-color-paper)', // #FFFFFF
  divider: 'var(--kds-color-divider)', // #BEC5D8
  dividerLight: 'var(--kds-color-divider-light)', // #EBEEF7
  textAlternate: 'var(--kds-color-text-alternate)', // #FFFFFF
  textPrimary: 'var(--kds-color-text-primary)', // #282C38
  textSecondary: 'var(--kds-color-text-secondary)', // #4F5870
  textDisabled: 'var(--kds-color-text-disabled)', // #8994AF
  textInteraction: 'var(--kds-color-text-interaction)', // #005ECC
  iconAlternate: 'var(--kds-color-icon-alternate)', // #FFFFFF
  iconPrimary: 'var(--kds-color-icon-primary)', // #282C38
  iconSecondary: 'var(--kds-color-icon-secondary)', // #4F5870
  iconDisabled: 'var(--kds-color-icon-disabled)', // #8994AF
  iconInteraction: 'var(--kds-color-icon-interaction)', // #0075FF
} as const;

export type KDSVariableColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
export type KDSColor = keyof typeof color;
