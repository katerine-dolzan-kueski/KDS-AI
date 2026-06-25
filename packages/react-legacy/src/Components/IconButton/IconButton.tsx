import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '../Spacer';
import { Header } from '../Header';
import { ButtonContainer, IconWrapper } from './IconButton.styles';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children?: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  children,
  ...props
}) => (
  <ButtonContainer {...props} role="button">
    <IconWrapper>
      {icon}
    </IconWrapper>
    <Spacer $size="layout01" />
    <Header $format="Title/Small/Bold" $color="textPrimary" $align="center">
      {children}
    </Header>
  </ButtonContainer>
);

IconButton.defaultProps = {
  children: null,
  icon: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};

export default IconButton;
