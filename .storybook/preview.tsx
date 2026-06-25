import React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import { Theme } from '../packages/react/src/components/atoms/Theme';
import './global.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
} satisfies Preview;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators: Decorator[] = [
  (Story, context) => {
    if (context.parameters.manualTheme) {
      return <Story />;
    }

    return (
      <>
        <Theme className="fixed inset-0 z-0" $variant="background" $mode={context.globals.theme} />
        <Theme className="relative z-10" $variant="background" $mode={context.globals.theme}>
          <Story />
        </Theme>
      </>
    );
  },
];
