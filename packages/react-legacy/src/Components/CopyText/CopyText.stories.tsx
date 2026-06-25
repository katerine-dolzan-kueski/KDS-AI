import React from 'react';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { CopyText } from './CopyText';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <CopyText {...args} />
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {
    $content: {
      defaultValue: 'Contenido',
      description: 'All content you want to show in the template',
      type: 'string',
    },
    $title: {
      defaultValue: 'Titulo',
      description: 'Main title',
      type: 'string',
    },
  },
  component: CopyText,
  title: 'OLD Design System/Components/CopyText',
};
