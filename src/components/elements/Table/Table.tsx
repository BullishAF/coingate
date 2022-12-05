import { Fragment } from 'react';

import { Skeleton, Table as MTable, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useStyles } from './styles';
import type { TableProps } from './types';

const SCROLL_ACTIVE_VW = 1191;

const Table = ({
  loading,
  headers,
  data,
  highlightOnHover,
  ...props
}: TableProps) => {
  const { classes } = useStyles();
  const { CenteredRow, FixedRow, FixedRowBg } = classes;

  const tableOverflowActive = useMediaQuery(
    `(max-width: ${SCROLL_ACTIVE_VW}px)`
  );

  const renderTableData = () => {
    if (loading)
      return Array.from({ length: 15 }).map((_, i) => (
        <tr key={i}>
          {headers?.map((_, j) => (
            <td key={j}>
              <Skeleton width="150px" height="40px" />
            </td>
          ))}
        </tr>
      ));

    if (!data || !data.length)
      return (
        <tr>
          <td className={CenteredRow} colSpan={headers.length}>
            <Text weight="bold">No data to display</Text>
          </td>
        </tr>
      );

    return data.map((row, i) => <Fragment key={i}>{row}</Fragment>);
  };

  return (
    <MTable highlightOnHover={highlightOnHover && !loading} {...props}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th
              key={header}
              className={`${i === 0 && FixedRow} ${
                tableOverflowActive && FixedRowBg
              }`}
            >
              <Text size="sm" weight={700}>
                {header}
              </Text>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{renderTableData()}</tbody>
    </MTable>
  );
};

export default Table;
