import React from 'react';
import styled from 'styled-components';

import { ReactNodeLike } from 'prop-types';
import { Card } from '../Components/Card';
import { Text } from '../Components/Text';
import { elevation } from '../foundation';
import { KDSSpacing } from '../theme/spacing';

const Color = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color ?? '#000000'};
  height: 80px;
  width: 100%;
`;

const Content = styled.div`
  padding: 0.5rem;

  p {
    white-space: nowrap;
  }
`;

interface ColorCardProps {
  children: ReactNodeLike;
  color: string;
  title: string;
}

export const ColorCard = ({ children, color, title }: ColorCardProps) => (
  <Card $padding={'0' as KDSSpacing}>
    <Color $color={color} />
    <Content>
      {title ? <Text $format="Body/Large/Bold">{title}</Text> : null}
      {color ? <Text $format="Label/Medium/Regular" $color="textSecondary">{color}</Text> : null}
      {children}
    </Content>
  </Card>
);

type Elevation = keyof (typeof elevation)['normal'];

export const ElevatedCard = styled(Card) <{ $size: Elevation, $type: keyof typeof elevation }>`
  box-shadow: ${({ $size, $type = 'normal' }) => elevation[$type][$size]};
  display: inline-block;
`;

export const RadiusCard = styled(Card) <{ $size: string }>`
  border-radius: ${({ $size }) => $size};
  display: inline-block;
`;

export const Square = styled.span<{ $size: string }>`
  background-color: var(--kds-color-success-light);
  display: block;
  height: ${({ $size }) => $size};
  width: ${({ $size }) => $size};
`;
