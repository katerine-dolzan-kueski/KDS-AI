import React from 'react';

import { FlowContent as Content, NarrowFlowLayout } from '../Layout';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Icon } from '../Icon';
import { SectionTitleWithIcon, SectionTitleWithIconProps } from './SectionTitleWithIcon';

export default {
  argTypes: {
    icon: {
      description: 'Icon element to show',
      type: 'ReactElementLike',
    },
  },
  component: SectionTitleWithIcon,
  title: 'OLD Design System/Components/SectionTitleWithIcon',
};

const Template = (args: SectionTitleWithIconProps) => (
  <>
    <DesignSystemGlobals />
    <NarrowFlowLayout>
      <Content $wide>
        <SectionTitleWithIcon
          {...args}
          icon={<Icon name="Copy" />}
        >
          Titulo con icono
        </SectionTitleWithIcon>
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
