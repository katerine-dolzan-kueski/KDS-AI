/* eslint-disable react/prop-types */
import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { color } from '../../theme/color';
import { tokenMessage } from '../../utils/kds.utils';
import { Link } from './Link';

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Link {...args}>Sample Link</Link>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $color: {
      control: 'select',
      defaultValue: 'primary',
      description: `Link color. ${tokenMessage('color')}`,
      options: [undefined, ...Object.keys(color)],
      type: 'string',
    },
    $underline: {
      defaultValue: false,
      description: 'Add a line underline',
      type: 'boolean',
    },
  },
  component: Link,
  title: 'OLD Design System/Components/Link',
};
