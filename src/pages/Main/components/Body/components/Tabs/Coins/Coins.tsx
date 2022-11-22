/* eslint-disable react/jsx-newline */
import Image from 'next/image';

import { Text } from '@mantine/core';

import { Table } from '@/components';
import { formatCurrency, formatNumber } from '@/utils';

import { useCoins } from './hooks';
import { useStyles } from './styles';

const COINS_TABLE_HEADERS = [
  'Coin',
  'Price',
  '24h',
  'Market Capitalization',
  'Total Volume'
];

const Coins = () => {
  const { classes } = useStyles();
  const { Wrapper, TableWrapper, TableData } = classes;

  const { coins, isLoading } = useCoins();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={Wrapper}>
      <div className={TableWrapper}>
        <Table
          withBorder
          verticalSpacing="md"
          horizontalSpacing="lg"
          headers={COINS_TABLE_HEADERS}
        >
          {coins &&
            coins.map((coin) => (
              <tr key={coin.id}>
                <td className={TableData}>
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={20}
                    height={20}
                  />

                  <div className={TableData}>
                    <Text>{coin.name}</Text>

                    <Text color="gray">{coin.symbol.toUpperCase()}</Text>
                  </div>
                </td>

                <td>{formatCurrency(coin.current_price)}</td>

                <td>
                  <div className={TableData}>
                    <Text
                      weight="bold"
                      color={
                        coin.price_change_percentage_24h > 0 ? 'green' : 'red'
                      }
                    >
                      {coin.price_change_percentage_24h > 0 && '+'}{' '}
                      {formatNumber(coin.price_change_percentage_24h)}%
                    </Text>
                  </div>
                </td>

                <td>
                  <div className={TableData}>
                    <Text>{formatCurrency(coin.market_cap)}</Text>

                    <Text color="gray">#{coin.market_cap_rank}</Text>
                  </div>
                </td>

                <td>{formatCurrency(coin.total_volume)}</td>
              </tr>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default Coins;
