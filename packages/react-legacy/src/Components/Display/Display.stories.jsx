/* eslint-disable react/prop-types */
import React from 'react';
import { Display, Card, Grid, Text, Label, Spacer } from '../';
import { theme } from '../../theme';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

import { getAllResponsiveOptions } from '../../utils';
import { getLabelColors, tokenMessage } from '../../utils/kds.utils';

const Template = ({ ...args }) => (
  <>
    <DesignSystemGlobals />
    <Card $air="spacing05">
      <Grid $cols={['1', 'bigTablet:2']} $gap="spacing03">
        <div>
          <Text $format="Body/Large/Bold">
            Current setup:
          </Text>
          <Spacer $size="spacing03" />
          {args.$on.map(selected => (
            <React.Fragment key={selected}>
              {' '}
              <Label $color={getLabelColors(selected)}>{selected}</Label>
            </React.Fragment>
          ))}
          <Spacer $size="spacing03" />
          <Text>
            Change the
            {' '}
            <code>$on</code>
            {' '}
            prop and the display will be applied to the following card.
          </Text>
          <Spacer $size="spacing08" />
        </div>
        <div>
          <Text>Active breakpoints:</Text>
          <Spacer $size="spacing03" />
          <Grid $cols={['3', 'tablet:5']} $gap="spacing05" $air="spacing05">
            {Object
              .keys(theme.breakpoint)
              .map(value => (
                <Text
                  key={value}
                  $format={['Body/Medium/Regular', `${value}:Body/Large/Bold`]}
                  $color={['textDisabled', `${value}:success`]}
                >
                  {value}
                </Text>
              ))}
          </Grid>
        </div>
      </Grid>
    </Card>
    <Display {...args}>
      <Card $air="spacing05" $background="success">
        <Text $color="white">Some responsive content wrapped in Display component</Text>
      </Card>
    </Display>
  </>
);

export const Default = Template.bind({});

const fakeDisplayDicctionary = {
  block: true,
  none: true,
};

export default {
  argTypes: {
    $on: {
      control: 'multi-select',
      defaultValue: ['none', 'laptop:block'],
      description: `Setup different displays for responsive sizes.${tokenMessage()}`,
      options: getAllResponsiveOptions(fakeDisplayDicctionary),
      type: 'string',
    },
  },
  component: Display,
  title: 'OLD Design System/Components/Display',
};
