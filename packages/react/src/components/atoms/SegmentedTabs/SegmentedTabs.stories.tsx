import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { DeviceModeDarkIcon } from '../Icons/DeviceModeDarkIcon';
import { SegmentedTabs } from './SegmentedTabs';

const meta: Meta<typeof SegmentedTabs> = {
  title: 'Kueski Design System/Atoms/SegmentedTabs',
  component: SegmentedTabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const TABS = ['Overview', 'Payments', 'Documents'];

const DefaultRender = ({
  $size,
  icon,
  disabledIndices = [],
}: {
  $size?: 'normal' | 'small' | 'icon';
  icon?: React.ReactNode;
  disabledIndices?: number[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SegmentedTabs $size={$size} className="w-[calc(100vw-2rem)] md:w-[400px]">
      {TABS.map((label, index) => (
        <SegmentedTabs.Item
          key={label}
          disabled={disabledIndices.includes(index)}
          onClick={() => {
            if (!disabledIndices.includes(index)) {
              setActiveIndex(index);
            }
          }}
          $selected={index === activeIndex}
          $icon={icon}
          $text={label}
        />
      ))}
    </SegmentedTabs>
  );
};

export const Small: Story = {
  render: () => <DefaultRender $size="small" />,
};

export const Normal: Story = {
  render: () => <DefaultRender $size="normal" />,
};

export const Icon: Story = {
  render: () => (
    <DefaultRender
      $size="icon"
      icon={
        <DeviceModeDarkIcon $width={16} $height={16} className="text-text-and-icons-primary" />
      }
    />
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <DefaultRender
      $size="normal"
      disabledIndices={[1]}
    />
  ),
};