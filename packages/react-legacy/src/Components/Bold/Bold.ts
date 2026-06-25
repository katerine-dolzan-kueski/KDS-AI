import styled from 'styled-components';

import { font, type KDSFontWeight } from '../../theme/font';

export const Bold = styled.strong<{ $weight: KDSFontWeight }>`
  font-weight: ${({ $weight = 'Bold' }) => font.weight[$weight]};
`;
