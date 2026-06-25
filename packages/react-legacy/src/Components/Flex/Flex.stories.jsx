/* eslint-disable react/prop-types */
import React from 'react';
import { Button, KDSButton } from '../Button';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { FlexWrapper, FullPageCentered } from './Flex';
import { Header } from '../Header';
import { Text } from '../Text';
import { Spacer } from '../Spacer';

const Template = ({ $type, ...args }) => (
  <>
    <DesignSystemGlobals />
    <FullPageCentered>
      <FlexWrapper {...args} $type={KDSButton[$type]}>
        <div>
          <Header
            as="h1"
            $color="textPrimary"
            $format={['Title/Large/Bold', 'tablet:Headline/Large/Bold']}
          >
            Title
          </Header>
          <Text $align="center" $color="textSecondary" $format="Body/Large/Regular">
            Content
          </Text>
          <Spacer $size="spacing07" />
        </div>
        <Button $type={KDSButton.PRIMARY} $wide type="button">
          Action
        </Button>
      </FlexWrapper>
    </FullPageCentered>
  </>
);

export const Default = Template.bind({});

export default {
  argTypes: {},
  component: FlexWrapper,
  title: 'OLD Design System/Components/FlexPage',
};
