/* eslint-disable react/prop-types */
import React from 'react';
import { Button, KDSButton } from '../Button';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Button {...args} $type={KDSButton[$type]}>Sample Button</Button>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $small: {
      defaultValue: false,
      description: 'Display smaller version?',
      type: 'boolean',
    },
    $type: {
      control: 'select',
      description: 'Look n\' Feel',
      options: Object.keys(KDSButton).filter(n => Number.isNaN(parseInt(n))),
      type: 'string',
    },
    disabled: {
      defaultValue: false,
      description: 'Any other native HTML props for Button element are valid',
      type: 'boolean',
    },
  },
  component: Button,
  title: 'OLD Design System/Components/Button',
};
