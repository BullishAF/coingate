import { useQuery } from '@tanstack/react-query';

import { useCoinGeckoApi } from '../../../../../../../hooks';

const useCoins = () => {
  const { getCoins } = useCoinGeckoApi();

  const { data: coins, ...rest } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    refetchOnWindowFocus: false
  });

  return {
    ...rest,
    coins
  };
};

export default useCoins;
