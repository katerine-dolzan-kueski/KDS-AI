import styled, { css } from 'styled-components';

import {
  type HeaderDesignToken,
  parseResponsiveProp,
  withResponsive,
} from '../../hocs/withResponsive';
import { parseTypography } from '../../utils';
import { HeadingStylesProps } from './Header.models';
import { extractHeading } from './Header.utils';

export const HeadingStyles = styled.p<HeadingStylesProps>`${({ $format, $number }) => css`
  margin: 0;
  padding: 0;

  ${$format
    ? parseResponsiveProp($format, '', undefined, {
      formatter: value => parseTypography(`${$number ? 'Numbers' : 'Text'}/${(value as HeaderDesignToken)}`),
    })
    : parseTypography(`${$number ? 'Numbers' : 'Text'}/Body/Medium/Regular`)}
`}`;

export const HeaderBase = styled(HeadingStyles).attrs((props: HeadingStylesProps) => ({
  as: extractHeading(props),
})) <HeadingStylesProps>``;

export const Header = withResponsive(
  {
    $align: 'left',
    $color: 'textPrimary',
  } as const,
  HeaderBase,
);


