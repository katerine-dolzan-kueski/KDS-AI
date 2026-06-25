/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Card, Text, Label, Spacer } from '..';
import { theme } from '../../theme';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

import { getAllResponsiveOptions } from '../../utils';
import { Square } from '../../utils/kds.components';
import { getLabelColors, tokenMessage } from '../../utils/kds.utils';

const colsCount = new Array(12).fill(0).map((_z, i) => [i, null]);

const Template = ({ ...args }) => (
  <>
    <Text $format="Body/Large/Bold">Current setup bro</Text>
    <Spacer $size="spacing03" />
    <Text>
      Columns:
      {args.$cols.map((selected) => (
        <React.Fragment key={selected}>
          {' '}
          <Label $color={getLabelColors(selected)}>{selected}</Label>
        </React.Fragment>
      ))}
    </Text>
    <Spacer $size="spacing03" />
    <Text>
      Gap:
      {args.$gap.map((selected) => (
        <React.Fragment key={selected}>
          {' '}
          <Label $color={getLabelColors(selected)}>{selected}</Label>
        </React.Fragment>
      ))}
    </Text>
    <Spacer $size="spacing03" />
    <Text>
      Air:
      {args.$air.map((selected) => (
        <React.Fragment key={selected}>
          {' '}
          <Label $color={getLabelColors(selected)}>{selected}</Label>
        </React.Fragment>
      ))}
    </Text>
    <Card $air="spacing03">
      <Text>Content above of the grid</Text>
      <Grid {...args}>
        <DesignSystemGlobals />
        {colsCount.map(([i]) => (
          <Square key={i}>
            <Text $color="white" $align="center">
              Col {i + 1}
            </Text>
          </Square>
        ))}
      </Grid>
      <Text>Content below of the grid</Text>
    </Card>
    <Card>
      <Text>Clases `col1`, `col2`, `col3`, ... on direct childs will change the column size</Text>
      <Grid {...args}>
        <DesignSystemGlobals />
        {colsCount.map(([i]) => (
          <Square key={i} className={args.className}>
            <Text $color="white" $align="center">
              An element with class .{args.className}
            </Text>
          </Square>
        ))}
      </Grid>
      <Text>Content below of the grid</Text>
    </Card>
  </>
);

export const Default = Template.bind({});

const fakeCols = Object.fromEntries(colsCount);
const colClasses = colsCount.map(([i]) => `col${i + 1}`);

export default {
  argTypes: {
    $air: {
      control: 'multi-select',
      defaultValue: ['spacing03', 'tablet:spacing05', 'laptop:spacing06', 'desktop:spacing07'],
      description: `Visual air (spacing above and below) size.${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(theme.spacing),
      type: 'string',
    },
    $cols: {
      control: 'multi-select',
      defaultValue: ['4', 'tablet:6', 'laptop:8', 'desktop:12'],
      description: `Number of columns (string).${tokenMessage()}`,
      options: getAllResponsiveOptions(fakeCols),
      type: 'string',
    },
    $gap: {
      control: 'multi-select',
      defaultValue: ['spacing03', 'tablet:spacing05', 'laptop:spacing06', 'desktop:spacing07'],
      description: `Gap size.${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(theme.spacing),
      type: 'string',
    },
    $symetric: {
      defaultValue: false,
      description: 'All columns should have the same width?',
      type: 'boolean',
    },
    className: {
      control: 'select',
      description: 'CSS Class for direct child elements',
      options: colClasses,
      type: 'string',
    },
  },
  component: Grid,
  title: 'OLD Design System/Components/Grid',
};
