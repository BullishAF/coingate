import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100%',
    height: 'calc(100vh - 4rem)',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7.5rem',

    '@media (max-width: 768px)': {
      marginTop: '6.5rem'
    }
  },
  MarketInfoWrapper: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',

    '@media (max-width: 1585px)': {
      width: '90%'
    },
    '@media (max-width: 768px)': {
      width: '100%',
      flexDirection: 'column',
      gap: '1rem',
      paddingLeft: '1rem'
    }
  }
}));
