import { theme } from '../../theme';
import styled, { css } from 'styled-components';
import { Text } from '../Text';
import { NotificationProps, notificationVariants } from './Notification.models';

const {
  elevation, font, radius, spacing,
} = theme;

export const NotificationIcon = styled.figure`
  margin: 0;
  order: 0;
  padding: 0;
`;

export const NotificationContent = styled.div`
  flex-grow: 1;
  order: 1;
`;

export const NotificationRight = styled.aside`
  order: 2;
`;

export const Notification = styled.div<NotificationProps>`${({
  $variant = 'main',
  $elevated = false,
  $verticalAlign = 'flex-start',
  $gap = 'spacing02',
  $anchorColor = notificationVariants[$variant].icon,
}) => css`
  align-items: ${$verticalAlign};
  background: ${notificationVariants[$variant].background};
  border-radius: ${radius.lg};
  box-shadow: ${$elevated ? elevation.buttonHover : 'none'};
  display: flex;
  gap: ${spacing[$gap]};
  justify-content: center;
  margin: 0 auto;
  max-width: calc(100vw - ${spacing.spacing09});
  padding: ${spacing.spacing05};
  position: relative;
  width: 100%;

  svg path {
    fill: ${notificationVariants[$variant].icon} !important;
  }

  ${Text} a {
    color: ${$anchorColor} !important;
    font-weight: ${font.weight.Medium};
  }
`};`;

export const NotificationFooter = styled(Text).attrs({ $format: 'Body/Medium/Bold', as: 'footer' })`
  display: flex;
  gap: ${spacing.spacing03};
  a {
    font-weight: ${font.weight.Bold} !important;
  }
`;
