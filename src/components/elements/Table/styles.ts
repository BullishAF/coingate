import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  CenteredRow: {
    textAlign: 'center'
  },
  NavigationWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #dee2e6',
    borderBottom: 'none',
    padding: '0.5rem',

    '@media (max-width: 610px)': {
      flexDirection: 'column',
      padding: 'unset',

      div: {
        padding: '0.5rem'
      }
    }
  },
  InputWrapper: {
    width: '50%',

    '@media (max-width: 780px)': {
      width: '45%'
    },
    '@media (max-width: 610px)': {
      width: '100%',
      borderBottom: '1px solid #dee2e6'
    }
  },
  Input: {
    width: '100%',
    padding: '0.5rem 0.9rem',
    fontSize: '14px',

    '@media (max-width: 610px)': {
      padding: '0.4rem'
    }
  }
}));
