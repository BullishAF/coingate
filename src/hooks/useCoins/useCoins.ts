import { useQuery } from '@tanstack/react-query';

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
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  const { data: coin, ...restCoinState } = useQuery({
    queryKey: ['coin', coinId],
    queryFn: async () => await getCoinById(coinId),
    refetchOnWindowFocus: false
  });

  return {
    coinsState: { ...restCoinsState },
    coinState: { ...restCoinState },
    coins,
    coin
  };
};

export default useCoins;
