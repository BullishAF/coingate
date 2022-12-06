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
        colors: theme.colors as Record<string, any>
      }}
    >
      <Global
        styles={(theme) => ({
          '*': {
            WebkitFontSmoothing: 'antialiased',
            WebkitAppearance: 'none',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
          },
          'html, body': {
            fontSize: '88.5%',
            fontFamily: theme.fontFamily,
            fontWeight: 500,
            color: theme.colors.text,
            backgroundColor: theme.colors.background
          },
          'body, button, input, textarea': {
            fontFamily: theme.fontFamily,
            border: 'none',
            outline: 'inherit',
            color: theme.colors.text
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
