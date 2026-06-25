import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const { breakpoint, color, spacing } = theme;

export const TabletFooter = styled.footer`
  border-top: 1px solid ${color.divider};
  display: none;
  margin: auto auto 0;
  padding: ${spacing.layout03} 0 ${spacing.layout05};
  width: 100%;

  @media ${breakpoint.bigTablet} {
    display: block;
    max-width: 840px;
  }

  @media ${breakpoint.laptop} {
    max-width: 1040px;
  }
`;

export const Content = styled.section<{ $wide?: boolean }>`
  margin: 0 auto;
  overflow: hidden;
  padding: ${({ $wide }) => ($wide ? '0' : spacing.spacing06)};
  width: 100%;

  @media ${breakpoint.tablet} {
    padding: ${({ $wide }) => ($wide ? '0' : spacing.spacing07)};
    max-width: 840px;
  }
  
  @media ${breakpoint.laptop} {
    padding: ${({ $wide }) => ($wide ? '0' : spacing.spacing09)};
    max-width: 1040px;
  }
`;

export const Drawer = styled.aside<{ collapsed?: boolean }>`
  background-color: ${color.white};
  min-height: 100%;
  width: ${({ collapsed }) => (collapsed ? '72px' : '260px')};
`;

const baseMain = css`
  display: grid;
  margin: 0 auto;
  position: relative;
`;

export const LandingLayout = styled.main`
  ${baseMain}
  background-color: ${color.backgroundAlter};
  grid-template-areas: "drawer content" "footer footer";
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  min-height: 100dvh;

  @media ${breakpoint.bigTablet} {
    background-color: ${color.background};
  }

  ${Content} {
    grid-area: content;
  }

  ${Drawer} {
    grid-area: drawer;
  }

  ${TabletFooter} {
    grid-area: footer;
  }
`;

export const FlowLayout = styled.main<{ $dark?: boolean }>`
  ${baseMain}
  background-color: ${({ $dark }) => ($dark ? color.background : color.backgroundAlter)};
  min-height: 100%;

  ${Drawer} {
    display: none;
  }
`;

export const FlowContent = styled.section<{ $wide?: boolean }>`
  margin: 0 auto;
  max-width: 460px;
  overflow: hidden;
  padding: ${({ $wide }) => ($wide ? '0' : spacing.spacing06)};
  width: 100%;

  @media ${breakpoint.bigTablet} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const FlowReferenceContent = styled.section<{ $wide?: boolean }>`
  margin: 0 auto;
  max-width: 460px;
  overflow: hidden;
  padding: ${({ $wide }) => ($wide ? '0' : spacing.spacing06)};

  @media ${breakpoint.bigTablet} {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
`;

export const NarrowFlowLayout = styled.main<{ $dark?: boolean; $full?: boolean }>`${({ $dark, $full }) => css`
  ${baseMain}
  background-color: ${$dark ? color.background : color.backgroundAlter};
  min-height: 100%;
  ${$full && css`
    display: flex;
    min-height: 100vh;
    min-height: 100dvh;
  `}

  @media ${breakpoint.bigTablet} {
    padding-top: ${spacing.spacing07};
    padding-bottom: ${spacing.spacing07};
  }

  ${Drawer} {
    display: none;
  }

  ${FlowContent} + ${FlowContent}:not(:last-child) {
    padding-bottom: 0;
  }
`}`;
