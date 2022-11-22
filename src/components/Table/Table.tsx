import { Table as MTable, Text } from '@mantine/core';

import type { TableProps } from './types';

const Table = ({ headers, children, ...props }: TableProps) => {
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

      <tbody>{children}</tbody>
    </MTable>
  );
};

export default Table;
