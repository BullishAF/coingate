import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  TableWrapper: {
    width: '75%',
    margin: '0 auto',
    marginTop: '5rem',
    overflowX: 'auto',

    '@media (max-width: 1420px)': {
      width: '90%'
    },
    '@media (max-width: 1175px)': {
      width: '100%'
    },
    '@media (max-width: 768px)': {
      width: '100%',
      margin: 'unset',
      marginTop: '3rem'
    }
  },
  TableData: {
    display: 'flex',
    gap: '0.5rem'
  },
  SparklinesWrapper: {
    minWidth: '10rem'
  },
  ScrollButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '0.75rem',
    borderRadius: '50%',
    border: `1px solid ${theme.colors.gray['3']}`,
    backgroundColor: theme.colors.background,
    transition: 'all 0.2s ease',
    '&:hover': {
      filter: 'brightness(0.95)'
    },
    '&:active': {
      transform: 'scale(0.95)'
    }
  },
  ScrollIcon: {
    width: '20px',
    height: '20px'
  }
}));
