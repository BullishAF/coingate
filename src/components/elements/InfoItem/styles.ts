import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  Title: {
    fontSize: '14px',

    '@media (max-width: 1060px) and (min-width: 768px)': {
      fontSize: '12px'
    }
  },
  Value: {
    fontSize: '32px',

    '@media (max-width: 1250px)': {
      fontSize: '26px'
    },
    '@media (max-width: 1060px)': {
      fontSize: '20px'
    },
    '@media (max-width: 768px)': {
      fontSize: '28px'
    }
  }
}));
