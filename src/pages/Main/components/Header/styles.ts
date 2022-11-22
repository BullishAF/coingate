import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '100%',
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.colors.shapeDark
  },
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '15rem',

    '@media (max-width: 575px)': {
      gap: '5rem'
    }
  },
  AppName: {
    width: 'fit-content',
    alignSelf: 'center',
    marginLeft: '3.25rem',
    cursor: 'default',
    color: theme.colors.background,

    '@media (max-width: 395px)': {
      marginLeft: '1.5rem'
    }
  },
  AppSections: {
    width: '11rem',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
