/* eslint-disable react/prop-types */
import React from 'react';
import { color } from '../../theme/color';
import { Text } from '../Text';
import { Header } from '../Header';
import { Spacer } from '../Spacer';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';
import { getAllResponsiveOptions, getAllFontTokens, fontTokenToTuple } from '../../utils';
import { tokenMessage } from '../../utils/kds.utils';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Header {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Header>
    <Spacer $size="spacing05" />
    <Text>
      Quisque feugiat libero at lacus lacinia maximus.
      Etiam porta at est quis accumsan.
      Praesent aliquam eros sed tempor aliquet.
      Nam ut venenatis sem. Quisque facilisis nunc lorem,
      eget rhoncus lacus maximus suscipit.
      Mauris efficitur ultrices imperdiet.
      Proin et odio sollicitudin, aliquam mi non,
      imperdiet est. Integer ut purus nisi.
      Pellentesque dictum vulputate eros, at
      laoreet augue blandit a.
    </Text>
  </>
);

const fakeAlignDicctionary = {
  center: true,
  justify: true,
  left: true,
  right: true,
};

const asOptions = [
  'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'i', 'p', 'span',
];

export const Default = Template.bind({});

export default {
  argTypes: {
    $align: {
      control: 'multi-select',
      description: `Text alignment.${tokenMessage()}`,
      options: getAllResponsiveOptions(fakeAlignDicctionary),
      type: 'string',
    },
    $color: {
      control: 'multi-select',
      description: `Font color.${tokenMessage('color')}`,
      options: getAllResponsiveOptions(color),
      type: 'string',
    },
    $format: {
      control: 'multi-select',
      description: `Formatting.${tokenMessage('typography')}`,
      options: getAllResponsiveOptions(
        Object.fromEntries(
          getAllFontTokens()
            .filter(token => !token.match(/Body|Label/))
            .map(token => {
              const [, ...restToken] = fontTokenToTuple(token);
              return [restToken.join('/'), true];
            }),
        ),
      ),
      type: 'string',
    },
    as: {
      control: 'select',
      description: 'Use a specific HTML component to render.',
      options: asOptions,
      type: 'string',
    },
  },
  component: Header,
  title: 'OLD Design System/Components/Header',
};
