import { Table as MTable, Text } from '@mantine/core';

import { useStyles } from './styles';
import type { TableProps } from './types';

const Table = ({ headers, loading, children, ...props }: TableProps) => {
  const { classes } = useStyles();
  const { CenteredRow } = classes;

  return (
    <MTable {...props}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>
              <Text size="md" weight="bold">
                {header}
              </Text>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {loading ? (
          <tr>
            <td className={CenteredRow} colSpan={headers.length}>
              <Text weight="bold">Loading...</Text>
            </td>
          </tr>
        ) : (
          children
        )}
      </tbody>
    </MTable>
  );
};

export default Table;
