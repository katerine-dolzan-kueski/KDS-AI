/* eslint-disable react/prop-types */
import React from 'react';
import { color } from '../../theme/color';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { Card } from '../Card';
import { Label } from '../Label';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { getAllResponsiveOptions } from '../../utils';
import { getLabelColors, tokenMessage } from '../../utils/kds.utils';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text $format="Body/Large/Bold">Current setup</Text>
    <Spacer $size="spacing03" />
    <Text>
      Color:
      {args.$color.map((selected) => (
        <React.Fragment key={selected}>
          {' '}
          <Label $color={getLabelColors(selected)}>{selected}</Label>
        </React.Fragment>
      ))}
    </Text>
    <Spacer $size="spacing06" />
    <Card>
      <Text $align="center">
        <Label {...args}>Sample label</Label>
      </Text>
    </Card>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $border: {
      defaultValue: false,
      description: 'Use border?',
      type: 'boolean',
    },
    $color: {
      control: 'multi-select',
      defaultValue: ['danger', 'tablet:warning', 'laptop:success', 'desktop:info'],
      description: `Font color.${tokenMessage('color')}`,
      options: getAllResponsiveOptions(color),
      type: 'string',
    },
  },
  component: Label,
  title: 'OLD Design System/Components/Label',
};
