import { color } from '../../theme/color';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background: none;
  border: 0 none;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  max-width: 4.875rem;
  padding-top: 0;
  text-align: center;
`;
export const IconWrapper = styled.span`
  align-items: center;
  background-color: ${color.dividerLight};
  border-radius: 50%;
  display: flex;
  height: 3.5rem;
  justify-content: center;
  overflow: hidden;
  width: 3.5rem;
`;
