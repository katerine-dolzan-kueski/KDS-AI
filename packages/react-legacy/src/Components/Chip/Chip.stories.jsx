/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '../Card';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Chip, ChipSet } from './Chip';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Card>
      <ChipSet>
        <Chip {...args}>Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
        <Chip>Another Sample Chip</Chip>
      </ChipSet>
    </Card>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $active: {
      defaultValue: true,
      description: 'Is active?',
      type: 'boolean',
    },
  },
  component: Chip,
  title: 'OLD Design System/Components/Chip',
};
