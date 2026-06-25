import { KDSColor, color } from '../../theme/color';
import { parseResponsiveProp, withResponsive } from '../../hocs/withResponsive';
import { KDSResponsiveProp } from '../../theme/breakpoint';
import styled, { css } from 'styled-components';
import { gradient } from '../../foundation';
import { parseTypography } from '../../utils';

type KDSAvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
/* eslint-disable sort-keys-fix/sort-keys-fix */
export const sizeMap: Record<KDSAvatarSizes, string> = {
  xs: '1rem',
  sm: '1.5rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
  xxl: '6rem',
};
export const fontMap: Record<KDSAvatarSizes, string> = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.375rem',
  xl: '2rem',
  xxl: '2.625rem',
};
/* eslint-enable sort-keys-fix/sort-keys-fix */

export interface AvatarProps {
  $size?: KDSResponsiveProp<KDSAvatarSizes>;
  $background?: KDSColor;
}

export const AvatarStyles = styled.div<AvatarProps>`${({ $size = 'md', $background }) => css`
  align-items: center;
  background: ${$background ? color[$background] : gradient.blue};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-align: center;

  ${parseTypography('Text/Body/Medium/Regular')};

  ${parseResponsiveProp($size, '', undefined, {
    formatter: (value: string) => `
      font-size: ${fontMap[value as KDSAvatarSizes]};
      height: ${sizeMap[value as KDSAvatarSizes]};
      line-height: ${sizeMap[value as KDSAvatarSizes]};
      width: ${sizeMap[value as KDSAvatarSizes]};
    `,
  })}

  > :not(svg) {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`}`;

export const Avatar = withResponsive({
  $color: color.white,
}, AvatarStyles);
