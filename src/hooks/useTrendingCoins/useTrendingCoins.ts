import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL_MS } from '@/constants';

import useCoinGeckoApi from '../useCoinGeckoApi';
import type { TrendingCoin } from '../useCoinGeckoApi/types';

const useTrendingCoins = () => {
  const { getTrendingCoinsInLast24h } = useCoinGeckoApi();

  let trendingCoins = [] as Array<TrendingCoin>;

  const { data, ...restTrendingCoinsState } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingCoinsInLast24h,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  if (data?.length) trendingCoins = data;

  return {
    trendingCoinsState: { ...restTrendingCoinsState },
    trendingCoins
  };
};

export default useTrendingCoins;
