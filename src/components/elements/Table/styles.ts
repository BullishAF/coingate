import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  CenteredRow: {
    textAlign: 'center'
  },
  FixedRow: {
    position: 'sticky',
    left: 0
  },
  FixedRowBg: {
    backgroundColor: theme.colors.background
  }
}));
