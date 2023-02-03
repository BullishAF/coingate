import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL_MS } from '@/constants';

import { useCoinGeckoApi } from '../';
import type { Coin } from '../useCoinGeckoApi/types';
import type { UseCoinsProps } from './types';

const useCoins = ({ desiredPage, coinId }: UseCoinsProps) => {
  const { getCoins, getCoinById } = useCoinGeckoApi();

  let coins = [] as Array<Coin>;

  const { data: coinsData, ...restCoinsState } = useQuery({
    queryKey: ['coins', desiredPage],
    queryFn: () => getCoins({ page: desiredPage, includeTimeSeries: true }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  const { data: coinData, ...restCoinState } = useQuery({
    queryKey: ['coin', coinId],
    queryFn: () => getCoinById(coinId),
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS,
    enabled: !!coinId
  });

  if (coinsData?.length && !coinId.length) coins = coinsData;
  else if (coinData?.length && coinId.length) coins = coinData;

  return {
    coinsState: { ...restCoinsState },
    coinState: { ...restCoinState },
    coins
  };
};

export default useCoins;
