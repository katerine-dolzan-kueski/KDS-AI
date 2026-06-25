import { createGlobalStyle } from 'styled-components';
import { color as COLOR } from '../../foundation';

export const DesignSystemGlobals = createGlobalStyle`
html, body, #root, #root > .branding-name {
  min-height: 100%;
}

.accessible:focus-visible{
  outline: 2px solid black;
}

:root {
  --kds-color-black: ${COLOR.black};
  --kds-color-background-alternative: ${COLOR.white};
  --kds-color-background-nav: ${COLOR.white};
  --kds-color-background: ${COLOR.gray[100]};
  --kds-color-danger-background: ${COLOR.red[100]};
  --kds-color-danger-dark: ${COLOR.red[700]};
  --kds-color-danger-light: ${COLOR.red[500]};
  --kds-color-danger-main: ${COLOR.red[600]};
  --kds-color-divider: ${COLOR.gray[400]};
  --kds-color-divider-light: ${COLOR.gray[200]};
  --kds-color-icon-alternate: ${COLOR.white};
  --kds-color-icon-disabled: ${COLOR.gray[500]};
  --kds-color-icon-interaction: ${COLOR.blue[500]};
  --kds-color-icon-primary: ${COLOR.gray[900]};
  --kds-color-icon-secondary: ${COLOR.gray[700]};
  --kds-color-info-background: ${COLOR.lightBlue[100]};
  --kds-color-info-dark: ${COLOR.blue[700]};
  --kds-color-info-light: ${COLOR.blue[500]};
  --kds-color-info-main: ${COLOR.blue[600]};
  --kds-color-paper: ${COLOR.white};
  --kds-color-primary-background: ${COLOR.blue[100]};
  --kds-color-primary-dark: ${COLOR.blue[600]};
  --kds-color-primary-light: ${COLOR.blue[400]};
  --kds-color-primary-main: ${COLOR.blue[500]};
  --kds-color-secondary-dark: ${COLOR.gray[600]};
  --kds-color-secondary-light: ${COLOR.gray[400]};
  --kds-color-secondary-main: ${COLOR.gray[500]};
  --kds-color-success-background: ${COLOR.green[100]};
  --kds-color-success-dark: ${COLOR.green[800]};
  --kds-color-success-light: ${COLOR.green[600]};
  --kds-color-success-main: ${COLOR.green[700]};
  --kds-color-text-alternate: ${COLOR.white};
  --kds-color-text-disabled: ${COLOR.gray[500]};
  --kds-color-text-interaction: ${COLOR.blue[600]};
  --kds-color-text-primary: ${COLOR.gray[900]};
  --kds-color-text-secondary: ${COLOR.gray[700]};
  --kds-color-warning-background: ${COLOR.orange[100]};
  --kds-color-warning-dark: ${COLOR.orange[800]};
  --kds-color-warning-light: ${COLOR.orange[500]};
  --kds-color-warning-main: ${COLOR.orange[700]};
  --kds-color-warning-secondary: ${COLOR.amber[100]};
  --kds-color-white: ${COLOR.white};

  /*
  @media (prefers-color-scheme: dark) {
    --kds-color-background: ${COLOR.black};
    --kds-color-background-alternative: ${COLOR.black};
    --kds-color-background-nav: ${COLOR.white};
    --kds-color-black: ${COLOR.black};
    --kds-color-danger-dark: ${COLOR.red[700]};
    --kds-color-danger-light: ${COLOR.red[500]};
    --kds-color-danger-main: ${COLOR.red[600]};
    --kds-color-divider: ${COLOR.gray[700]};
    --kds-color-icon-alternate: ${COLOR.white};
    --kds-color-icon-disabled: ${COLOR.gray[700]};
    --kds-color-icon-interaction: ${COLOR.blue[500]};
    --kds-color-icon-primary: ${COLOR.white};
    --kds-color-icon-secondary: ${COLOR.gray[300]};
    --kds-color-info-dark: ${COLOR.blue[700]};
    --kds-color-info-light: ${COLOR.blue[500]};
    --kds-color-info-main: ${COLOR.blue[600]};
    --kds-color-paper: ${COLOR.gray[900]};
    --kds-color-primary-dark: ${COLOR.blue[600]};
    --kds-color-primary-light: ${COLOR.blue[400]};
    --kds-color-primary-main: ${COLOR.blue[500]};
    --kds-color-secondary-dark: ${COLOR.gray[400]};
    --kds-color-secondary-light: ${COLOR.gray[200]};
    --kds-color-secondary-main: ${COLOR.gray[300]};
    --kds-color-success-dark: ${COLOR.green[800]};
    --kds-color-success-light: ${COLOR.green[600]};
    --kds-color-success-main: ${COLOR.green[700]};
    --kds-color-text-alternate: ${COLOR.white};
    --kds-color-text-disabled: ${COLOR.gray[700]};
    --kds-color-text-interaction: ${COLOR.blue[600]};
    --kds-color-text-primary: ${COLOR.white};
    --kds-color-text-secondary: ${COLOR.gray[300]};
    --kds-color-warning-dark: ${COLOR.orange[800]};
    --kds-color-warning-light: ${COLOR.orange[500]};
    --kds-color-warning-main: ${COLOR.orange[700]};
    --kds-color-white: ${COLOR.white};
  }
  */
}
`;
