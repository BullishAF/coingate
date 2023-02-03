import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL_MS } from '@/constants';

import { useCoinGeckoApi } from '../';
import type { Exchange } from '../useCoinGeckoApi/types';
import type { UseExchangesProps } from './types';

const useExchanges = ({ desiredPage, exchangeId }: UseExchangesProps) => {
  const { getExchanges, getExchangeById } = useCoinGeckoApi();

  let exchanges = [] as Array<Exchange>;

  const { data: exchangesData, ...restExchangesState } = useQuery({
    queryKey: ['exchanges', desiredPage],
    queryFn: () => getExchanges({ page: desiredPage }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS
  });

  const { data: exchangeData, ...restExchangeState } = useQuery({
    queryKey: ['exchange', exchangeId],
    queryFn: () => getExchangeById(exchangeId),
    refetchOnWindowFocus: false,
    refetchInterval: REFETCH_INTERVAL_MS,
    enabled: !!exchangeId
  });

  if (exchangesData?.length && !exchangeId.length) exchanges = exchangesData;
  else if (exchangeData?.length && exchangeId.length) exchanges = exchangeData;

  return {
    exchangesState: { ...restExchangesState },
    exchangeState: { ...restExchangeState },
    exchanges
  };
};

export default useExchanges;
