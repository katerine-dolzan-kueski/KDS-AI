import React from 'react';

import { withDesignSystem } from '../../hocs/withDesignSystem';
import { font, type KDSFontWeight } from '../../theme/font';
import { Text } from '../Text';
import { Bold } from './Bold';

const Template = withDesignSystem((args: { $weight: KDSFontWeight }) => (
  <Text $format="Body/Large/Thin">
    {'Lorem '}
    <Bold {...args}>ipsum dolor</Bold>
    {' sit amet ra.'}
  </Text>
));

export const Default = Template.bind({});

export default {
  argTypes: {
    $weight: {
      description: 'Font weight for bolded text',
      options: Object.keys(font.weight),
      type: 'select',
    },
  },
  component: Bold,
  title: 'OLD Design System/Components/Bold',
};
