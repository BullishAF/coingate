/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react';

export type WatchlistContextProps = {
  coinsWatchlist: Array<string>;
  exchangesWatchlist: Array<string>;
  watchlistCoin: (coin: string) => void;
  watchlistExchange: (exchange: string) => void;
};

export type WatchlistProviderProps = {
  children: ReactNode;
};

export type Watchlist = {
  coins: Array<string>;
  exchanges: Array<string>;
};
