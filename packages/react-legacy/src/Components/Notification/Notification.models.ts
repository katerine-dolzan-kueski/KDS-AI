import { KDSColor, color } from '../../theme/color';
import { KDSSpacing } from '../../theme/spacing';
import { CSSProperties } from 'styled-components';

export const notificationVariants = {
  danger: {
    background: color.dangerBackground,
    icon: color.danger,
  },
  info: {
    background: color.infoBackground,
    icon: color.info,
  },
  main: {
    background: color.background,
    icon: color.textInteraction,
  },
  mainLight: {
    background: color.white,
    icon: color.textInteraction,
  },
  success: {
    background: color.successBackground,
    icon: color.success,
  },
  warning: {
    background: color.warningBackground,
    icon: color.warning,
  },
  warningSecondary: {
    background: color.warningSecondary,
    icon: color.iconPrimary,
  },
} as const;

export type NotificationVariants = keyof typeof notificationVariants;

export interface NotificationProps {
  $anchorColor?: KDSColor;
  $elevated?: boolean;
  $gap?: KDSSpacing;
  $variant?: NotificationVariants;
  $verticalAlign?: CSSProperties['alignItems'];
}
