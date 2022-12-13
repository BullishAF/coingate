/* eslint-disable react/jsx-newline */
import { useState } from 'react';

import Image from 'next/image';

import { Text } from '@mantine/core';

import { COINS_TABLE_HEADERS } from '@/constants';
import { useCoins } from '@/hooks';
import { formatCurrency, formatNumber } from '@/utils';

import {
  PercentageText,
  ScrollBtn,
  Sparklines,
  Table
} from '../../../elements';
import { useStyles } from './styles';

const Coins = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedCoin, setSearchedCoin] = useState('');

  const { classes } = useStyles();
  const {
    Wrapper,
    TableWrapper,
    TableData,
    TableDataFixed,
    SparklinesWrapper
  } = classes;

  const { coins, coinsState, coinState } = useCoins({
    desiredPage: currentPage,
    coinId: searchedCoin
  });

  const isMounting =
    coinsState.isLoading ||
    coinsState.isFetching ||
    coinState.isLoading ||
    coinState.isFetching;

  const handleChangePage = (desiredPage: number) => setCurrentPage(desiredPage);

  const handleSearchCoin = (coin: string) => setSearchedCoin(coin);

  return (
    <div className={Wrapper}>
      <div className={TableWrapper}>
        <Table
          withBorder
          searchable
          highlightOnHover
          loading={isMounting}
          searchPlaceholder="Search a coin by name"
          totalItems={coins?.length}
          onChangePage={handleChangePage}
          onSearch={handleSearchCoin}
          headers={COINS_TABLE_HEADERS}
          data={coins?.map((coin) => (
            <tr key={coin.id}>
              <td className={TableDataFixed}>
                <div className={TableData}>
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={22}
                    height={22}
                  />

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

                  <Text color="gray">#{coin.market_cap_rank}</Text>
                </div>
              </td>

              <td>
                <div>
                  <Text>{formatNumber(coin.total_volume)}</Text>

                  <Text size="xs" color="gray">
                    {formatNumber(coin.total_volume / coin.current_price)}{' '}
                    {coin.symbol.toUpperCase()}
                  </Text>
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
          ))}
        />
      </div>

      <ScrollBtn />
    </div>
  );
};

export default Coins;
