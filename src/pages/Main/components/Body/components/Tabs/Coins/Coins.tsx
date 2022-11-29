/* eslint-disable react/jsx-newline */
import { IoMdArrowRoundUp } from 'react-icons/io';

import Image from 'next/image';

import { Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import { PercentageText, Sparklines, Table } from '@/components';
import { formatCurrency } from '@/utils';

import { useCoins } from './hooks';
import { useStyles } from './styles';

const COINS_TABLE_HEADERS = [
  'Coin',
  'Price',
  '24h',
  '30d',
  'Market Capitalization',
  'Total Volume',
  'Last 7 Days'
];

const Coins = () => {
  const { classes } = useStyles();
  const {
    Wrapper,
    TableWrapper,
    TableData,
    SparklinesWrapper,
    ScrollButton,
    ScrollIcon
  } = classes;

  const { coins, isLoading, isFetching } = useCoins();

  const [scroll, scrollTo] = useWindowScroll();

  const isRendering = isLoading || isFetching;

  const handleScrollToTop = () => scrollTo({ y: 0 });

  return (
    <div className={Wrapper}>
      <div className={TableWrapper}>
        <Table
          withBorder
          verticalSpacing="sm"
          horizontalSpacing="lg"
          loading={isRendering}
          headers={COINS_TABLE_HEADERS}
        >
          {coins &&
            coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <div className={TableData}>
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
                  </div>
                </td>

                <td>{formatCurrency(coin.current_price)}</td>

                <td>
                  <div className={TableData}>
                    <PercentageText
                      dynamicColorBasedOnValue
                      value={coin.price_change_percentage_24h}
                      weight="bold"
                    />
                  </div>
                </td>

                <td>
                  <div className={TableData}>
                    <PercentageText
                      dynamicColorBasedOnValue
                      value={coin.price_change_percentage_30d_in_currency}
                      weight="bold"
                    />
                  </div>
                </td>

                <td>
                  <div className={TableData}>
                    <Text>{formatCurrency(coin.market_cap)}</Text>

                    <Text color="gray">#{coin.market_cap_rank}</Text>
                  </div>
                </td>

                <td>{formatCurrency(coin.total_volume)}</td>

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
        </Table>
      </div>

      {scroll.y > 0 && (
        <button
          type="button"
          className={ScrollButton}
          onClick={handleScrollToTop}
        >
          <IoMdArrowRoundUp className={ScrollIcon} />
        </button>
      )}
    </div>
  );
};

export default Coins;
