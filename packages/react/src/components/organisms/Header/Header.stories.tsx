import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header, HeaderProps } from './';
import { HelpCircleIcon, PersonCircleIcon, Shimmer } from '../../atoms';

const HeaderStoryWrapper = ({ showLeading = true, showTrailing = true, ...args }: HeaderProps & { showLeading?: boolean; showTrailing?: boolean }) => (
  <main id="scroll-anchor" className="w-screen h-screen overflow-y-auto relative">
    <Header
      $leading={showLeading ? <PersonCircleIcon /> : undefined}
      $trailing={showTrailing ? <HelpCircleIcon /> : undefined}
      $anchor="#scroll-anchor"
      {...args}
    />
    <ul className="p-4">
      {new Array(50).fill(null).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="flex gap-4 mb-4">
          <Shimmer className="self-stretch w-10 h-10 rounded-full" />
          <div className="flex-1 flex flex-col gap-2">
            <Shimmer className="w-full h-4" />
            <Shimmer className="w-[calc(100%-2.5rem)] h-4" />
          </div>
        </li>
      ))}
    </ul>
  </main>
);

const meta = {
  title: 'Kueski Design System/Organisms/Header',
  component: HeaderStoryWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    $variant: {
      control: { type: 'select' },
      options: ['main', 'title', 'secondary'] satisfies Array<HeaderProps['$variant']>,
    },
    $scrolled: {
      control: { type: 'select' },
      options: [
        undefined,
        true,
        false
      ],
    },
    $align: {
      control: { type: 'select' },
      options: ['left', 'center'] satisfies Array<NonNullable<HeaderProps['$align']>>,
    },
    showLeading: {
      control: { type: 'boolean' },
      description: 'Show or hide the leading icon',
    },
    showTrailing: {
      control: { type: 'boolean' },
      description: 'Show or hide the trailing icon',
    },
  },
} satisfies Meta<typeof HeaderStoryWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainVariant: Story = {
  args: {
    $variant: 'main',
    $align: 'left',
    children: 'Cuenta',
    showLeading: true,
    showTrailing: true,
  },
};

export const TitleVariant: Story = {
  args: {
    $variant: 'title',
    $align: 'left',
    children: 'Cuenta',
    showLeading: true,
    showTrailing: true,
  },
};

export const SecondaryVariant: Story = {
  args: {
    $variant: 'secondary',
    $align: 'left',
    children: 'Cuenta',
    showLeading: true,
    showTrailing: true,
  },
};
