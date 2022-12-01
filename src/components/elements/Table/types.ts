import type { ReactNode } from 'react';

import type { TableProps as MTableProps } from '@mantine/core';

export type TableProps = MTableProps & {
  headers: string[];
  loading?: boolean;
  children: ReactNode;
};
