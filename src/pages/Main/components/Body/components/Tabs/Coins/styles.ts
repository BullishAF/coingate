import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  TableWrapper: {
    marginTop: '5rem'
  },
  TableData: {
    display: 'flex',
    gap: '0.5rem'
  }
}));
