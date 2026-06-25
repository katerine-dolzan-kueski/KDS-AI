import React from 'react';

import { Avatar, sizeMap } from '../Avatar';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { getAllResponsiveOptions } from '../../utils';
import { tokenMessage } from '../../utils/kds.utils';
import { color } from '../../theme/color';

export default {
  argTypes: {
    $background: {
      control: 'select',
      description: 'Background color',
      options: [undefined, ...Object.keys(color)],
      type: 'string',
    },
    $color: {
      control: 'multi-select',
      defaultValue: 'white',
      description: `Font color. ${tokenMessage('color')}`,
      options: [undefined, ...Object.keys(color)],
      type: 'string',
    },
    $size: {
      control: 'multi-select',
      defaultValue: 'md',
      description: 'Avatar size.',
      options: getAllResponsiveOptions(sizeMap),
      type: 'string',
    },
  },
  component: Avatar,
  title: 'OLD Design System/Components/Avatar',
};

const Template = (args: object) => (
  <>
    <DesignSystemGlobals />
    <Avatar {...args}>PC</Avatar>
  </>
);

export const Desktop = Template.bind({});
