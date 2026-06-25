/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '../Card';
import { Text } from '../Text';
import { getAllResponsiveOptions } from '../../utils';
import { theme } from '../../theme';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { tokenMessage } from '../../utils/kds.utils';

const { spacing, color, breakpoint } = theme;

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text>Content before the card</Text>
    <Card {...args}><Text>Sample card</Text></Card>
    <Text>Content after the card</Text>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $air: {
      control: 'multi-select',
      description: `Visual air (spacing up and down).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(spacing),
      type: 'string',
    },
    $background: {
      control: 'select',
      description: 'Background color. `color` tokens are allowed.',
      options: [undefined, ...Object.keys(color)],
      type: 'string',
    },
    $only: {
      control: 'select',
      description: 'Display the Card format for a specific breakpoint only',
      options: Object.keys(breakpoint),
      type: 'string',
    },
    $padding: {
      control: 'multi-select',
      description: `Custom internal padding (overrides defaults).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(spacing),
      type: 'string',
    },
  },
  component: Card,
  title: 'OLD Design System/Components/Card',
};
