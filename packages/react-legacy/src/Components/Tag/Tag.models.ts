import { color } from '../../theme/color';

export const tagVariants = {
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
    icon: color.textPrimary,
  },
  success: {
    background: color.successBackground,
    icon: color.success,
  },
  warning: {
    background: color.warningBackground,
    icon: color.warning,
  },
} as const;

export type TagVariants = keyof typeof tagVariants;

export interface TagProps {
  $variant?: TagVariants;
}
