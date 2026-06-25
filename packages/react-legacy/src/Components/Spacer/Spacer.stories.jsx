/* eslint-disable react/prop-types */
import React from 'react';
import { theme } from '../../theme';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { Card } from '../Card';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem/DesignSystemGlobals';
import { tokenMessage } from '../../utils/kds.utils';

const { spacing } = theme;

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text $format="Body/Large/Bold">Current setup</Text>
    <Spacer $size="spacing03" />
    <Spacer $size="spacing06" />
    <Card>
      <Text>Text above the spacer</Text>
      <Spacer $size={args.$size} />
      <Text>Text below the spacer</Text>
    </Card>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $size: {
      control: 'multi-select',
      defaultValue: ['layout01', 'tablet:layout02', 'laptop:layout03', 'desktop:layout04'],
      description: `Spacing size.${tokenMessage('spacing')}`,
      options: Object.keys(spacing),
      type: 'string',
    },
  },
  component: Spacer,
  title: 'OLD Design System/Components/Spacer',
};
