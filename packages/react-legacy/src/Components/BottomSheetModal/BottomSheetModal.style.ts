import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const BottomSheetContainer = styled.div<{ $isMini?: boolean }>`
  ${({ $isMini }) => css`
    align-items: flex-end;
    display: flex;
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @media ${theme.breakpoint.tablet} {
      align-items: center;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      ${$isMini
      && `
      align-items: center;
      justify-content: center;
    `}
    }
  `}
`;

export const BottomSheetOverlay = styled.div`
  background-color: ${theme.color.black};
  height: 100%;
  opacity: 0.6;
  position: absolute;
  width: 100%;
`;

export const BottomSheetCard = styled.div<{ $isMini?: boolean }>`
  ${({ $isMini }) => css`
    background-color: ${theme.color.white};
    border-radius: ${theme.radius.lg} ${theme.radius.lg} 0 0;
    padding: ${theme.spacing.spacing06};
    width: 100%;
    z-index: 1;
    ${$isMini
    && `
      max-height: 90vh;
      max-height: 90dvh;
      overflow: auto;
    `}

    @media ${theme.breakpoint.tablet} {
      align-items: center;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      ${$isMini
      && `
        border-radius: ${theme.radius.lg};
        height: auto;
        width: auto;
      `}
    }
  `}
`;

export const BottomSheetCardContent = styled.div<{ $isMini?: boolean }>`
  ${({ $isMini }) => css`
    width: 100%;

    @media ${theme.breakpoint.tablet} {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      max-width: 27.875rem;
      ${$isMini
      && `
          max-width: 34rem;
          .actions {
            gap: ${theme.spacing.spacing04};
          }
        `}
    }
  `}
`;

export const BottomSheetHeader = styled.div`
  align-items: center;
  display: flex;
  gap: ${theme.spacing.spacing05};
  justify-content: space-between;

  & > .close-icon {
    cursor: pointer;
    min-height: ${theme.spacing.spacing05};
    min-width: ${theme.spacing.spacing05};
  }
`;
