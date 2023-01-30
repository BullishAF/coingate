import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 2.5rem'
  },
  Content: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '12px'
  },
  TextWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  Title: {
    fontWeight: 'bold'
  },
  Subtitle: {
    color: '#666'
  }
}));
