import type { AppProps } from 'next/app';

import { Global, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { theme } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <MantineProvider
      theme={{
        fontFamily: theme.font.family,
        fontSizes: theme.font.sizes,
        colors: theme.colors as any
      }}
    >
      <Global
        styles={(theme) => ({
          '*': {
            WebkitAppearance: 'none',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
          },
          'html, body': {
            color: theme.colors.shapeDark,
            fontSize: '88.5%',
            fontFamily: 'Archivo, sans-serif',
            backgroundColor: theme.colors.background
          },
          'body, button, input, textarea': {
            fontFamily: 'Archivo, sans-serif',
            border: 'none',
            outline: 'inherit',
            color: theme.colors.shapeDark
          },
          'button, a': {
            cursor: 'pointer',
            color: 'inherit',
            textDecoration: 'none'
          }
        })}
      />

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </MantineProvider>
  );
}
