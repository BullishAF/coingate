import { useQuery } from '@tanstack/react-query';

import { useCoinGeckoApi } from '../../../../../../../hooks';

const useCoins = () => {
  const { getCoins } = useCoinGeckoApi();

  const { data: coins, isLoading } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins
  });

  return {
    isLoading,
    coins
  };
};

export default useCoins;
