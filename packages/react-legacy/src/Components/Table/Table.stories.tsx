import React from 'react';

import { Table, TableRow, TableCell, TableHead, TableTitle, ResponsiveTableProps } from '../Table';
import { getAllResponsiveOptions } from '../../utils';
import { tokenMessage } from '../../utils/kds.utils';
import { spacing } from '../../theme/spacing';
import { Text } from '../Text';
import { DesignSystemGlobals } from '../../hocs/withDesignSystem';

const colsCount = new Array(12).fill(0).map((_z, i) => [i, null]);
const fakeCols = Object.fromEntries(colsCount);

export default {
  argTypes: {
    $cols: {
      control: 'select',
      defaultValue: '6',
      description: 'Number of columns (string).',
      options: Object.keys(fakeCols),
      type: 'string',
    },
    $padding: {
      control: 'multi-select',
      defaultValue: ['spacing03', 'tablet:spacing05', 'laptop:spacing06', 'desktop:spacing07'],
      description: `Visual air (spacing above and below) size.${tokenMessage('spacing')}`,
      options: getAllResponsiveOptions(spacing),
      type: 'string',
    },
    $shadow: {
      defaultValue: false,
      description: 'Adds Card-like shadow',
      type: 'boolean',
    },
    $symmetric: {
      defaultValue: false,
      description: 'All columns should have the same width?',
      type: 'boolean',
    },
  },
  component: Table,
  title: 'OLD Design System/Components/Table',
};

const Template = (args: ResponsiveTableProps) => (
  <>
    <DesignSystemGlobals />
    <Table {...args}>
      <TableHead>
        <TableTitle>Table Heading 1</TableTitle>
        <TableTitle>Table Heading 2</TableTitle>
        <TableTitle>
          <Text $format="Body/Medium/Bold">Table Heading 3_A</Text>
          <Text $format="Body/Medium/Bold">Table Heading 3_B</Text>
        </TableTitle>
        <TableTitle>Table Heading 4</TableTitle>
        <TableTitle>Table Heading 5</TableTitle>
        <TableTitle>Table Heading 6</TableTitle>
      </TableHead>
      <TableRow>
        <TableCell>Table cell 1</TableCell>
        <TableCell>Table cell 2</TableCell>
        <TableCell>
          <Text>Table cell 3_A</Text>
          <Text>Table cell 3_B</Text>
          <Text>Table cell 3_C</Text>
        </TableCell>
        <TableCell>Table cell 4 - this one has longer text this one has longer text</TableCell>
        <TableCell>Table cell 5</TableCell>
        <TableCell>Table cell 6</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Table cell 7</TableCell>
        <TableCell>Table cell 8</TableCell>
        <TableCell>Table cell 9</TableCell>
        <TableCell>Table cell 10</TableCell>
        <TableCell>Table cell 11</TableCell>
        <TableCell>Table cell 12</TableCell>
      </TableRow>
    </Table>
  </>
);

export const Desktop = Template.bind({});
