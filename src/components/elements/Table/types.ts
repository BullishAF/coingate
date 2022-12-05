import type { ReactNode } from 'react';

import type { TableProps as MTableProps } from '@mantine/core';

export type TableProps = MTableProps & {
  loading?: boolean;
  headers: string[];
  data?: ReactNode[];
};
