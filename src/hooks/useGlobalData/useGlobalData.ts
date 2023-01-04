import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL_MS } from '@/constants';
import { formatCurrency, formatNumber } from '@/utils';

import { useCoinGeckoApi } from '../';

const useGlobalData = () => {
  const { getGlobalData, getCoins } = useCoinGeckoApi();

  const { data: globalData, isLoading: isGlobalDataLoading } = useQuery({
    queryKey: ['globalData'],
    queryFn: getGlobalData,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  const { data: coinsData, isLoading: isCoinsLoading } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins({ total: 100 }),
    refetchOnWindowFocus: false
  });

  const getTotalMarketCap = () => {
    if (!coinsData) return 0;

    const totalMarketCap = Object.values(coinsData).reduce((acc, curr) => {
      if (!curr.current_price || !curr.circulating_supply) return acc;

      return acc + curr.current_price * curr.circulating_supply;
    }, 0);

    return formatCurrency(totalMarketCap, { notation: 'compact' });
  };

  const getTotalMarketCapChangePercentage = () => {
    if (!globalData) return 0;

    const totalMarketCapChangePercentage = formatNumber(
      globalData.market_cap_change_percentage_24h_usd
    );

    return totalMarketCapChangePercentage;
  };

  const getTotalMarketVolume = () => {
    if (!coinsData) return 0;

    const totalMarketVolume = Object.values(coinsData).reduce(
      (acc, curr) => acc + curr.total_volume,
      0
    );

    return formatCurrency(totalMarketVolume, {
      maximumFractionDigits: 2,
      notation: 'compact'
    });
  };

  const getBTCMarketCapPercentage = () => {
    if (!globalData) return 0;

    const btcMarketCapPercentage = formatNumber(
      globalData.market_cap_percentage.btc
    );

    return `${btcMarketCapPercentage}%`;
  };

  const getTotalActiveCryptocurrencies = (preferFormatted = true) => {
    if (!globalData) return 0;

    return preferFormatted
      ? formatNumber(globalData.active_cryptocurrencies)
      : globalData.active_cryptocurrencies;
  };

  return {
    isLoading: isGlobalDataLoading || isCoinsLoading,
    getTotalMarketCap,
    getTotalMarketCapChangePercentage,
    getTotalMarketVolume,
    getBTCMarketCapPercentage,
    getTotalActiveCryptocurrencies
  };
};

export default useGlobalData;
