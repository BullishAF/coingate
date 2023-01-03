import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '100%',
    height: '3.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    zIndex: 2,
    borderBottom: '1px solid ' + theme.colors.border,
    backgroundColor: theme.colors.shapeLight
  },
  Container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '15rem',

    '@media (max-width: 620px)': {
      gap: '8rem'
    },
    '@media (max-width: 510px)': {
      gap: '4rem'
    },
    '@media (max-width: 450px)': {
      gap: '2rem'
    }
  },
  AppName: {
    width: 'fit-content',
    alignSelf: 'center',
    marginLeft: '3.25rem',
    cursor: 'default',

    '@media (max-width: 395px)': {
      marginLeft: '1.5rem'
    }
  },
  AppSections: {
    width: '12rem',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
