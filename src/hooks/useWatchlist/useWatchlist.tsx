import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-hot-toast';

import { envs } from '@/config';

import type {
  Watchlist,
  WatchlistContextProps,
  WatchlistProviderProps
} from './types';

const WatchlistContext = createContext({} as WatchlistContextProps);

const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [coinsWatchlist, setCoinsWatchlist] = useState([] as Array<string>);
  const [exchangesWatchlist, setExchangesWatchlist] = useState(
    [] as Array<string>
  );

  const watchlistCoin = useCallback(
    (coinId: string) => {
      let stringifiedWatchlist = '';

      if (coinsWatchlist.includes(coinId)) {
        const filteredWatchList = coinsWatchlist.filter((id) => id !== coinId);

        setCoinsWatchlist(filteredWatchList);

        stringifiedWatchlist = JSON.stringify({
          coins: filteredWatchList
        } as Watchlist);

        localStorage.setItem(envs.watchlistStorageKey, stringifiedWatchlist);

        toast.success('Coin removed from watch list');
        return;
      }

      setCoinsWatchlist((state) => [...state, coinId]);

      stringifiedWatchlist = JSON.stringify({
        coins: [...coinsWatchlist, coinId]
      } as Watchlist);

      localStorage.setItem(envs.watchlistStorageKey, stringifiedWatchlist);

      toast.success('Coin added to watch list');
    },
    [coinsWatchlist]
  );

  const watchlistExchange = useCallback(
    (exchangeId: string) => {
      let stringifiedWatchlist = '';

      if (exchangesWatchlist.includes(exchangeId)) {
        const filteredWatchList = exchangesWatchlist.filter(
          (id) => id !== exchangeId
        );

        setExchangesWatchlist(filteredWatchList);

        stringifiedWatchlist = JSON.stringify({
          exchanges: filteredWatchList
        } as Watchlist);

        localStorage.setItem(envs.watchlistStorageKey, stringifiedWatchlist);

        toast.success('Exchange removed from watch list');
        return;
      }

      setExchangesWatchlist((state) => [...state, exchangeId]);

      stringifiedWatchlist = JSON.stringify({
        exchanges: [...exchangesWatchlist, exchangeId]
      } as Watchlist);

      localStorage.setItem(envs.watchlistStorageKey, stringifiedWatchlist);

      toast.success('Exchange added to watch list');
    },
    [exchangesWatchlist]
  );

  const loadWatchlist = useCallback(() => {
    const storedWatchlist = localStorage.getItem(envs.watchlistStorageKey);
    if (!storedWatchlist) return;

    const parsedWatchlist: Watchlist = JSON.parse(storedWatchlist);
    const { coins, exchanges } = parsedWatchlist;

    if (coins) setCoinsWatchlist(coins);

    if (exchanges) setExchangesWatchlist(exchanges);
  }, []);

  useEffect(loadWatchlist, [loadWatchlist]);

  return (
    <WatchlistContext.Provider
      value={{
        coinsWatchlist,
        exchangesWatchlist,
        watchlistCoin,
        watchlistExchange
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlist = () => {
  const context = useContext(WatchlistContext);

  return context;
};

export { WatchlistProvider, useWatchlist };
