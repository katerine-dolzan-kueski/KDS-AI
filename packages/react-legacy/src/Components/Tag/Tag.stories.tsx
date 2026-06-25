import React from 'react';

import { Icon } from '../Icon';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Text } from '../Text';

import { Tag, TagIcon } from './Tag.styles';
import { TagProps, tagVariants } from './Tag.models';

export default {
  argTypes: {
    $variant: {
      control: 'select',
      description: 'Color variant to display',
      options: Object.keys(tagVariants),
      type: 'string',
    },
  },
  component: Tag,
  title: 'OLD Design System/Components/Tag',
};

const Template = (args: TagProps) => (
  <>
    <DesignSystemGlobals />
    <Text $align="center">
      <Tag {...args}>Alguna tag</Tag>
      {' '}
      <Tag {...args}>
        Tag con ícono
        {' '}
        <TagIcon><Icon name="Close" height="12" width="12" /></TagIcon>
      </Tag>
    </Text>
  </>
);

export const Default = Template.bind({});

export const Success = Template.bind({});
(Success as any).args = { $variant: 'success' };

export const Warning = Template.bind({});
(Warning as any).args = { $variant: 'warning' };

export const Danger = Template.bind({});
(Danger as any).args = { $variant: 'danger' };

export const Info = Template.bind({});
(Info as any).args = { $variant: 'info' };
