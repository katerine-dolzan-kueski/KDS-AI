import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { IconButton } from '../IconButton';

const DefaultTemplate = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <IconButton {...args} />
  </>
)

export const Default = DefaultTemplate.bind({});

export default {
  argTypes: {
    icon: {
      defaultValue: undefined,
      description: 'The icon to show',
      type: 'string',
    },
    children: {
      defaultValue: 'Button',
      description: 'The text content',
      type: 'string',
    },
  },
  component: IconButton,
  title: 'OLD Design System/Components/IconButton',
};