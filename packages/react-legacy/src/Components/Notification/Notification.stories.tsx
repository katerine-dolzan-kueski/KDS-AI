/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Header } from '../Header';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { Spacer } from '../Spacer';

import {
  Notification, NotificationContent, NotificationIcon, NotificationRight,
} from './Notification.styles';
import { NotificationProps, notificationVariants } from './Notification.models';

export default {
  argTypes: {
    $elevated: {
      control: 'boolean',
      description: 'Show shadow?',
      type: 'boolean',
    },
    $variant: {
      control: 'select',
      description: 'Color variant to display',
      options: Object.keys(notificationVariants),
      type: 'string',
    },
  },
  component: Notification,
  title: 'OLD Design System/Components/Notification',
};
const DummyContent: React.FC = ({ children }) => (
  <NotificationContent>
    {children}
    <Text>
      Tienes un saldo a favor de
      {' '}
      <a>$500</a>
      {' '}
      por los pagos que realizaste.
      Para solicitarlo
      {' '}
      <a>entra aquí</a>
      .
    </Text>
    <Spacer $size="spacing03" />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum ante arcu, fermentum laoreet enim ac, suscipit venenatis sem.
      Maecenas volutpat at risus eu consequat.
    </Text>
    <Spacer $size="spacing03" />
    <Text>Integer vel euismod est, et pharetra tellus. </Text>
  </NotificationContent>
);

const Template = (args: NotificationProps) => (
  <>
    <DesignSystemGlobals />
    <Notification {...args}>
      <DummyContent>
        <Header $format="Title/Medium/Bold">
          <Icon name="Bank" height="14" width="14" />
          {' '}
          Título con ícono
        </Header>
        <Spacer $size="spacing03" />
      </DummyContent>
    </Notification>
    <Spacer $size="layout04" />
    <Notification {...args}>
      <DummyContent />
    </Notification>
    <Spacer $size="layout04" />
    <Notification {...args}>
      <NotificationIcon>
        <Spacer $size="spacing02" />
        <Icon name="InfoLine" height="16" width="16" />
      </NotificationIcon>
      <DummyContent />
    </Notification>
    <Spacer $size="layout04" />
    <Notification {...args}>
      <NotificationIcon>
        <Spacer $size="spacing02" />
        <Icon name="Cart" height="16" width="16" />
      </NotificationIcon>
      <DummyContent />
      <NotificationRight>
        <Icon name="Close" height="12" width="12" />
      </NotificationRight>
    </Notification>
  </>
);

export const Desktop = Template.bind({});
