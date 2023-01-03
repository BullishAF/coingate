import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

import type { AxiosResponse } from 'axios';

import { api } from '@/config';
import { TOTAL_ITEMS_PER_PAGE } from '@/constants';

import type { Coin, Exchange, GlobalData } from './types';

const useCoinGeckoApi = () => {
  const getCoins = useCallback(async (desiredPage = 1) => {
    const { data }: AxiosResponse<Array<Coin>> = await api.get(
      `/coins/markets?vs_currency=usd&page=${desiredPage}&per_page=${TOTAL_ITEMS_PER_PAGE}&price_change_percentage=24h,7d,30d&sparkline=true`
    );
    if (!data || !data.length) {
      toast.error('Could not fetch coins. Please try again later');
      return;
    }

    return data;
  }, []);

  const getCoinById = useCallback(async (id: string) => {
    const { data }: AxiosResponse<Array<Coin>> = await api.get(
      `/coins/markets?vs_currency=usd&ids=${id}&price_change_percentage=24h,7d,30d&sparkline=true`
    );

    return data;
  }, []);

  const getCoinFullDataById = useCallback(async (id: string) => {
    const { data }: AxiosResponse<Coin> = await api.get(`/coins/${id}`);

    return data;
  }, []);

  const getExchanges = useCallback(async () => {
    const { data }: AxiosResponse<Array<Exchange>> = await api.get(
      `/exchanges`
    );
    if (!data || !data.length) {
      toast.error('Could not fetch exchanges. Please try again later');
      return;
    }

    return data;
  }, []);

  const getExchangeById = useCallback(async (id: string) => {
    const { data }: AxiosResponse<Exchange> = await api.get(`/exchanges/${id}`);

    return data;
  }, []);

  const getGlobalData = useCallback(async () => {
    const { data }: AxiosResponse<GlobalData> = await api.get('/global');
    if (!data) {
      toast.error('Could not fetch trading data. Please try again later');
      return;
    }

    return data?.data;
  }, []);

  return {
    getCoins,
    getCoinById,
    getCoinFullDataById,
    getExchanges,
    getExchangeById,
    getGlobalData
  };
};

export default useCoinGeckoApi;