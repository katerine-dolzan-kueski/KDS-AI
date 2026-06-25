import React from 'react';

import { withDesignSystem } from '../../hocs/withDesignSystem';
import { font, type KDSFontWeight } from '../../theme/font';
import { Text } from '../Text';
import { color } from '../../theme/color';
import { Highlight } from './Highlight';


const Template = withDesignSystem((args: { $weight: KDSFontWeight }) => (
  <Text $format="Body/Large/Thin">
    {'Lorem '}
    <Highlight {...args}>ipsum dolor</Highlight>
    {' sit amet ra.'}
  </Text>
));

export const Default = Template.bind({});

export default {
  argTypes: {
    $color: {
      description: 'Font color highlighted text',
      options: Object.keys(color),
      type: 'select',
    },
    $weight: {
      description: 'Font weight for highlighted text',
      options: Object.keys(font.weight),
      type: 'select',
    },
  },
  component: Highlight,
  title: 'OLD Design System/Components/Highlight',
};
