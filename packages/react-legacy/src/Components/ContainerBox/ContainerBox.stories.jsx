/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '../Text';
import { getAllResponsiveOptions } from '../../utils';
import { theme } from '../../theme';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { tokenMessage } from '../../utils/kds.utils';
import { ContainerBox } from './ContainerBox';

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <Text>Content before the container box</Text>
    <ContainerBox {...args}>
      <Text>
        Sample container box, similar to Card but with others specific props and different usage.
      </Text>
    </ContainerBox>
    <Text>Content after the container box</Text>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $air: {
      control: 'multi-select',
      description: `Visual air (spacing up and down).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(theme.spacing),
      type: 'string',
    },
    $padding: {
      control: 'multi-select',
      description: `Custom internal padding (overrides defaults).${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(theme.spacing),
      type: 'string',
    },
  },
  component: ContainerBox,
  title: 'OLD Design System/Components/ContainerBox',
};
