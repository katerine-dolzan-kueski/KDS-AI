/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '../Text';
import { getAllResponsiveOptions } from '../../utils';
import { theme } from '../../theme';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { tokenMessage } from '../../utils/kds.utils';
import { HeaderCard, HeaderCardTag } from './HeaderCard';
import { Label } from '../Label';

const { spacing, color } = theme;

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text>Content before the Header Card</Text>
    <HeaderCard {...args}><Text>Sample content header card</Text></HeaderCard>
    <Text>Content after the Header Card</Text>
  </>
);

const TemplateWithTag = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text>Content before the Header Card</Text>
    <HeaderCard {...args}><Text>Sample content header card</Text></HeaderCard>
    <HeaderCardTag>
      <Label>Sample Content Header</Label>
    </HeaderCardTag>
    <Text>Content after the Header Card</Text>
  </>
);

export const Default = Template.bind({});

export const WithTag = TemplateWithTag.bind({});

export default {
  argTypes: {
    $air: {
      control: 'multi-select',
      description: `Visual air (spacing up and down).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(spacing),
      type: 'string',
    },
    $background: {
      control: 'select',
      description: 'Background color. `color` tokens are allowed.',
      options: [undefined, ...Object.keys(color)],
      type: 'string',
    },
    $padding: {
      control: 'multi-select',
      description: `Custom internal padding (overrides defaults).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(spacing),
      type: 'string',
    },
  },
  component: HeaderCard,
  title: 'OLD Design System/Components/HeaderCard',
};
