import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer'
  },
  Underline: {
    width: '100%',
    height: '4px',
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.background
  }
}));
