import { useQuery } from '@tanstack/react-query';

import { BASE_DIVISOR, REFETCH_INTERVAL_MS } from '@/constants';
import { formatCurrency, formatNumber } from '@/utils';

import { useCoinGeckoApi } from '../';

const useGlobalData = () => {
  const { getGlobalData } = useCoinGeckoApi();

  const { data, isLoading } = useQuery({
    queryKey: ['globalData'],
    queryFn: getGlobalData,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  const getTotalMarketCap = () => {
    if (!data) return 0;

    const totalMarketCap = Object.values(data.total_market_cap).reduce(
      (acc, curr) => acc + curr / BASE_DIVISOR,
      0
    );

    return formatCurrency(totalMarketCap, 2);
  };

  const getTotalMarketVolume = () => {
    if (!data) return 0;

    const totalMarketVolume = Object.values(data.total_volume).reduce(
      (acc, curr) => acc + curr / BASE_DIVISOR,
      0
    );

    return formatCurrency(totalMarketVolume, 2);
  };

  const getBTCMarketCapPercentage = () => {
    if (!data) return 0;

    const btcMarketCapPercentage = formatNumber(data.market_cap_percentage.btc);

    return `${btcMarketCapPercentage}%`;
  };

  const getTotalActiveCryptocurrencies = (preferFormatted = true) => {
    if (!data) return 0;

    return preferFormatted
      ? formatNumber(data.active_cryptocurrencies)
      : data.active_cryptocurrencies;
  };

  return {
    isLoading,
    getTotalMarketCap,
    getTotalMarketVolume,
    getBTCMarketCapPercentage,
    getTotalActiveCryptocurrencies
  };
};

export default useGlobalData;
