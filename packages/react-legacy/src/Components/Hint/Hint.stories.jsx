/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '../Text';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Hint } from './Hint';

export default {
  argTypes: {
    hintTitle: {
      defaultValue: 'hintTitle',
      description: 'Short title of the hint. Ex. Number or words.',
      type: 'string',
    },
  },
  component: Hint,
  title: 'OLD Design System/Components/Hint',
};

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Hint {...args}>
      <Text $format={['bigTablet:Body/Small/Medium']}>
        Paga el monto total y la comisión, recuerda conservar tu comprobante.
      </Text>
    </Hint>
  </>
);

export const Default = Template.bind({});

export const WithNumber = Template.bind({});
WithNumber.args = { hintTitle: '1' };
