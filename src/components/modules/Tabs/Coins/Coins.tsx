/* eslint-disable react/jsx-newline */
import { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

import { Skeleton, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

import { COINS_TABLE_HEADERS, TOTAL_ITEMS_PER_PAGE } from '@/constants';
import { useCoins, useGlobalData } from '@/hooks';
import { formatCurrency, formatNumber, isValidURL } from '@/utils';

import {
  PercentageText,
  ScrollBtn,
  Sparklines,
  Table
} from '../../../elements';
import { useStyles } from './styles';

const Coins = () => {
  const [isMounting, setIsMounting] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedCoin, setSearchedCoin] = useState('');

  const [debouncedSearch] = useDebouncedValue(searchedCoin, 800);

  const { classes } = useStyles();
  const { Wrapper, TableWrapper, TableData, SparklinesWrapper } = classes;

  const { coins, coinsState, coinState } = useCoins({
    desiredPage: currentPage,
    coinId: debouncedSearch
  });

  const { getTotalActiveCryptocurrencies } = useGlobalData();

  const isLoading = coinsState.isLoading || coinState.isLoading;

  const totalCoinsPerPage =
    +getTotalActiveCryptocurrencies(false) / TOTAL_ITEMS_PER_PAGE;

  const memoizedCoinsList = useMemo(
    () =>
      coins?.map((coin) => (
        <tr key={coin.id}>
          <td>
            <div className={TableData}>
              {isValidURL(coin.image) && (
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={22}
                  height={22}
                />
              )}

              <div className={TableData}>
                <Text weight={600}>{coin.name}</Text>

                <Text color="gray">{coin.symbol.toUpperCase()}</Text>
              </div>
            </div>
          </td>

          <td>
            <Text>{formatCurrency(coin.current_price)}</Text>
          </td>

          <td>
            <PercentageText
              prefersIndicatorIcon
              dynamicColorBasedOnValue
              value={coin.price_change_percentage_24h}
              weight="bold"
            />
          </td>

          <td>
            <PercentageText
              prefersIndicatorIcon
              dynamicColorBasedOnValue
              value={coin.price_change_percentage_30d_in_currency}
              weight="bold"
            />
          </td>

          <td>
            <div className={TableData}>
              <Text>{formatCurrency(coin.market_cap)}</Text>

              {!!coin.market_cap && (
                <Text color="gray">#{coin.market_cap_rank}</Text>
              )}
            </div>
          </td>

          <td>
            <div>
              <Text>{formatNumber(coin.total_volume)}</Text>

              {!!coin.total_volume && (
                <Text size="xs" color="gray">
                  {formatNumber(coin.total_volume / coin.current_price)}{' '}
                  {coin.symbol.toUpperCase()}
                </Text>
              )}
            </div>
          </td>

          <td>{formatNumber(coin.circulating_supply)}</td>

          <td>
            <div className={SparklinesWrapper}>
              <Sparklines
                strokeWidth="3"
                data={coin.sparkline_in_7d.price}
                dynamicColorBasedOnValue={
                  coin.price_change_percentage_7d_in_currency
                }
              />
            </div>
          </td>
        </tr>
      )),
    [SparklinesWrapper, TableData, coins]
  );

  useEffect(() => setIsMounting(false), []);

  return (
    <div className={Wrapper}>
      <div className={TableWrapper}>
        {isMounting && <Skeleton height={1200} />}

        {!isMounting && (
          <Table
            withBorder
            searchable
            highlightOnHover
            loading={isLoading}
            searchPlaceholder="Search a coin by name"
            totalItems={totalCoinsPerPage}
            onChangePage={setCurrentPage}
            onSearch={setSearchedCoin}
            headers={COINS_TABLE_HEADERS}
            data={memoizedCoinsList}
          />
        )}
      </div>

      <ScrollBtn />
    </div>
  );
};

export default Coins;
