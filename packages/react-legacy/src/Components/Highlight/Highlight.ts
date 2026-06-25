import styled, { css } from 'styled-components';

import { font, type KDSFontWeight } from '../../theme/font';
import { color, KDSColor } from '../../theme/color';

export const Highlight = styled.strong<{ $weight: KDSFontWeight; $color?: KDSColor }>`${({ $weight = 'Bold', $color }) => css`
    font-weight: ${font.weight[$weight]};
    ${$color && `color: ${color[$color]};`}
`}`;
