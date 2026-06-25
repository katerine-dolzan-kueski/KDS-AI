import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const { color, radius, spacing } = theme;

export const ListElementIcon = styled.figure`
  display: flex;
  grid-area: icon;
  margin: 0;
  padding: 0;
`;

export const ListElementAside = styled.aside`
  display: flex;
  flex-flow: column;
  grid-area: aside;
`;

export const ListElementAction = styled.aside`
  grid-area: action;
`;

export const ListElementContent = styled.div`
  grid-area: content;
`;

export const ListElement = styled
  .article
  .attrs(() => ({
    tabIndex: 0,
  })) <{ $wide?: boolean; $rounded?: boolean }>`${({ $wide, $rounded, onClick }) => css`
  align-items: center;
  background-color: ${color.backgroundAlter};
  border-bottom: 2px solid ${color.background};
  column-gap: ${spacing.spacing04};
  cursor: ${onClick ? 'pointer' : 'default'};
  display: grid;
  grid-template-columns: [icon] auto [content] 1fr [aside] auto [action] auto;
  padding: 1rem 1.5rem;

  &:focus-visible {
    box-shadow: inset 0px 0px 0 2px black;
    outline: 0 none;
  }

  button:focus-visible {
    outline: 0px solid black;
  }
  
  ${$wide ? css`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    ${ListElementIcon} { order: 1; }
    ${ListElementContent} { order: 2; flex-grow: 1; }
    ${ListElementAside} { order: 3; }
    ${ListElementAction} { order: 4; }
  ` : ''}

  ${$rounded ? css`
    padding: 1rem;
    
    &:first-child {
      border: 1px solid ${color.secondaryLight};
      border-radius: ${radius.lg};
    }

    &:first-child:not(:last-child) {
      border-radius: ${radius.lg} ${radius.lg} 0 0;
      border-top: 1px solid ${color.secondaryLight};
    }

    &:nth-child(n) {
      border-left: 1px solid ${color.secondaryLight};
      border-right: 1px solid ${color.secondaryLight};
      border-bottom: 1px solid ${color.secondaryLight};
    }

    &:last-child:not(:first-child) {
      border-radius: 0 0 ${radius.lg} ${radius.lg};
      border-top-width: 0;
    }
  ` : ''}
`}`;

