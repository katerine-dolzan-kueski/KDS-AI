import React from 'react';

import {
  TableHeadDelimiter, TableRowDelimiter,
} from './Table.styles';

export const TableRow: React.FC = ({ children }) => (
  <>
    {children}
    <TableRowDelimiter />
  </>
);

export const TableHead: React.FC = ({ children }) => (
  <>
    {children}
    <TableHeadDelimiter />
  </>
);
