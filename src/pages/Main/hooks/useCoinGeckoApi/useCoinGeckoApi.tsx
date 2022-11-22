import { useCallback } from 'react';

import type { AxiosResponse } from 'axios';

import { api } from '@/config';

import type { Coin, Exchange, GlobalData } from './types';

const useCoinGeckoApi = () => {
  const getCoins = useCallback(async () => {
    const { data }: AxiosResponse<Array<Coin>> = await api.get(
      '/coins/markets?vs_currency=usd'
    );

    return data;
  }, []);

  const getCoinById = useCallback(async (id: string) => {
    const { data }: AxiosResponse<Coin> = await api.get(`/coins/${id}`);

    return data;
  }, []);

  const getExchanges = useCallback(async () => {
    const { data }: AxiosResponse<Array<Exchange>> = await api.get(
      '/exchanges'
    );

    return data;
  }, []);

  const getExchangeById = useCallback(async (id: string) => {
    const { data }: AxiosResponse<Exchange> = await api.get(`/exchanges/${id}`);

    return data;
  }, []);

  const getGlobalData = useCallback(async () => {
    const { data }: AxiosResponse<GlobalData> = await api.get('/global');

    return data?.data;
  }, []);

  return {
    getCoins,
    getCoinById,
    getExchanges,
    getExchangeById,
    getGlobalData
  };
};

export default useCoinGeckoApi;
