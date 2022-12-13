import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  Title: {
    fontSize: '14px'
  },
  Value: {
    fontSize: '32px',

    '@media (max-width: 1250px)': {
      fontSize: '28px'
    }
  }
}));
