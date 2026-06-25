/* eslint-disable react/prop-types */
import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Card } from '../Card';
import { Text } from '../Text';
import { Divider } from '../Divider';

const Template = () => (
  <>
    <DesignSystemGlobals />
    <Text $format="Body/Large/Bold">Current setup</Text>
    <Divider />
    <Card>
      <Text>Text above the divider</Text>
      <Divider />
      <Text>Text below the divider</Text>
    </Card>
  </>
);

export const Default = Template.bind({});

export default {
  component: Divider,
  title: 'OLD Design System/Components/Divider',
};
