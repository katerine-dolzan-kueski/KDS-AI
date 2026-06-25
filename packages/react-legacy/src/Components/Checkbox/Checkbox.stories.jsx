/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '../Text';
import { Card } from '../Card';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Checkbox } from './Checkbox';
import { spacing } from '../../theme/spacing';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Card>
      <Checkbox {...args}>
        Try Me!
      </Checkbox>
      <hr />
      <Text $format="Body/Large/Bold" $color="textInteraction">
        <Checkbox  {...args}>
          Inside Text Component
        </Checkbox>
      </Text>
      <hr />
      <Text>No label:</Text>
      <Checkbox {...args} />
      <hr />
      <Checkbox disabled  {...args}>Disabled</Checkbox>
      <hr />
      <Checkbox disabled checked  {...args}>Disabled + Checked</Checkbox>
    </Card>
  </>
);

export const Default = Template.bind({});
export const SquareVariant = Template.bind({});

SquareVariant.args = {
  $square: true,
  $size: 'spacing06',
};

export default {
  argTypes: {
    $square: {
      defaultValue: false,
      description: 'Display as square',
      type: 'boolean',
    },
    $size: {
      defaultValue: 'spacing06',
      control: 'select',
      description: 'Checkbox size',
      options: Object.keys(spacing),
      type: 'string',
    },
    label: {
      defaultValue: 'Label',
      description: 'It will show a label upper the input',
      type: 'string',
    },
    helperText: {
      defaultValue: 'Message',
      description: 'It will show a label under the input for instructions or errors',
      type: 'string',
    },
    $error: {
      defaultValue: false,
      description: 'It will change the style for error style',
      type: 'boolean',
    }
  },
  component: Checkbox,
  title: 'OLD Design System/Components/Checkbox',
};
