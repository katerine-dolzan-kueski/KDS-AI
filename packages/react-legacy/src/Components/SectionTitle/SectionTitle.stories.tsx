import React from 'react';

import { SectionTitle, SectionTitleProps } from '../SectionTitle';
import { FlowContent as Content, NarrowFlowLayout } from '../Layout';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

export default {
  argTypes: {
    large: {
      control: 'boolean',
      description: 'Display large',
      type: 'boolean',
    },
  },
  component: SectionTitle,
  title: 'OLD Design System/Components/SectionTitle',
};

const Template = (args: SectionTitleProps) => (
  <>
    <DesignSystemGlobals />
    <NarrowFlowLayout>
      <Content $wide>
        <SectionTitle {...args}>Pagar</SectionTitle>
      </Content>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis eget nulla
          quis aliquet. Maecenas ultrices sagittis ante et dapibus. Ut bibendum aliquam diam in
          maximus.
        </p>
        <p>
          Etiam est neque, viverra at ultricies a, molestie nec odio. Nunc pulvinar massa eget ipsum
          laoreet bibendum. In tempor leo vitae velit sodales, in facilisis nulla maximus. Proin
          elementum quam quis urna congue eleifend.Etiam ut tincidunt dolor.
        </p>
      </Content>
    </NarrowFlowLayout>
  </>
);

export const Desktop = Template.bind({});
