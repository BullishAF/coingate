import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '75%',
    height: 'calc(100vh - 4rem)',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    marginTop: '7.5rem'
  },
  MarketInfoWrapper: {
    display: 'flex',
    gap: '10rem'
  }
}));
