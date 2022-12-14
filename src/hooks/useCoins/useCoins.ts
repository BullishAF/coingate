import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL_MS } from '@/constants';

import { useCoinGeckoApi } from '../';

type UseCoinsProps = {
  desiredPage: number;
  coinId: string;
};

const useCoins = ({ desiredPage, coinId }: UseCoinsProps) => {
  const { getCoins, getCoinById } = useCoinGeckoApi();

  const { data: coins, ...restCoinsState } = useQuery({
    queryKey: ['coins', desiredPage],
    queryFn: async () => await getCoins(desiredPage),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  const { data: coin, ...restCoinState } = useQuery({
    queryKey: ['coin', coinId],
    queryFn: async () => await getCoinById(coinId),
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  return {
    coinsState: { ...restCoinsState },
    coinState: { ...restCoinState },
    coins,
    coin
  };
};

export default useCoins;
