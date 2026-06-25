import styled, { css } from 'styled-components';

import { withResponsive, parseResponsiveProp } from '../../hocs/withResponsive';
import { KDSFontSize, KDSFontText, KDSFontWeight } from '../../theme/font';
import { KDSResponsiveProp } from '../../theme/breakpoint';
import { parseTypography } from '../../utils';
import { color } from '../../theme/color';

type TextDesignToken = `${KDSFontText}/${KDSFontSize}/${KDSFontWeight}`;
export interface TextBaseProps {
  $format?: KDSResponsiveProp<TextDesignToken>;
  $number?: boolean;
}

export const TextBase = styled.p<TextBaseProps>`${({ $format, $number }) => css`
  margin: 0;
  padding: 0;
  ${$format
    ? parseResponsiveProp($format, '', undefined, {
      formatter: value => parseTypography(`${$number ? 'Numbers' : 'Text'}/${(value as TextDesignToken)}`),
    })
    : parseTypography(`${$number ? 'Numbers' : 'Text'}/Body/Medium/Regular`)}
  
  a {
    color: ${color.primary};
    text-decoration: none !important;
  }
`}`;

export const Text = withResponsive(
  {
    $align: 'left',
    $color: 'textPrimary',
  } as const,
  TextBase,
);