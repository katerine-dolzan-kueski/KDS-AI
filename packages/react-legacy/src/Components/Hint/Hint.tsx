import React from 'react';
import { Text } from '../Text';
import { HintContainer, HintText } from './Hint.styles';

export interface HintProps {
  hintTitle?: string;
  children?: React.ReactNode;
}

export const Hint: React.FC<HintProps> = ({
  children,
  hintTitle,
}) => (
  <HintContainer>
    <HintText>
      <Text $format="Label/Large/Bold">{hintTitle}</Text>
    </HintText>
    {children}
  </HintContainer>
);

Hint.defaultProps = {
  hintTitle: undefined,
};
