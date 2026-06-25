import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { AccordionActionProps } from './Accordion.models';

const { color, spacing } = theme;

export const AccordionIcon = styled.figure`
  grid-area: icon;
  margin: 0;
  padding: 0 ${spacing.spacing04} 0 0;
`;

export const AccordionTitle = styled.div`
  grid-area: title;
`;

export const AccordionActionContainer = styled.aside<AccordionActionProps>`${({ $isOpen }) => css`
  display: flex;
  grid-area: action;
  rotate: ${$isOpen ? '180' : '0'}deg;
  transform-origin: center;
  transition: all .2s;
  transition: rotate .2s;
`}`;

export const AccordionContent = styled.div`
  grid-area: content;
`;

export const AccordionContainer = styled.article`
  background-color: ${color.backgroundAlter};
  padding: 0;
`;

export const AccordionHeaderContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: grid;
  grid-template-columns: [icon] auto [title] 1fr [action] auto;
`;
