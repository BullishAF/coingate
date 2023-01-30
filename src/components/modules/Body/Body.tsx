import Marquee from 'react-fast-marquee';

import { Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';

import { M_PROPS, TABS } from '@/constants';
import { useGlobalData, useTrendingCoins } from '@/hooks';
import { formatNumber } from '@/utils';

import { CoinsTab, ExchangesTab } from '../';
import { Badge, InfoItem, MarqueeItem, PercentageText } from '../../elements';
import { useStyles } from './styles';
import type { BodyProps } from './types';

const Body = ({ activeTab }: BodyProps) => {
  const { classes, theme } = useStyles();
  const {
    Wrapper,
    MarketInfoWrapper,
    BadgeWrapper,
    TrendingCoinsMarqueeWrapper
  } = classes;

  const { trendingCoins } = useTrendingCoins();

  const {
    getTotalMarketCap,
    getTotalMarketCapChangePercentage,
    getTotalMarketVolume,
    getBTCMarketCapPercentage,
    getTotalActiveCryptocurrencies,
    isLoading
  } = useGlobalData();

  const totalMarketCapChangePercentage = +getTotalMarketCapChangePercentage();

  const renderActiveTab = () => {
    switch (activeTab) {
      case TABS.COINS:
        return <CoinsTab />;
      case TABS.EXCHANGES:
        return <ExchangesTab />;
      default:
        return <CoinsTab />;
    }
  };

  return (
    <div className={Wrapper}>
      <Marquee pauseOnHover className={TrendingCoinsMarqueeWrapper}>
        {trendingCoins.map(({ item }) => (
          <MarqueeItem
            key={item.id}
            iconUrl={item.thumb}
            title={item.name}
            subtitle={`(${item.symbol} #${
              item.market_cap_rank
            }) at ${item.score++}º place in 24h trend, ${formatNumber(
              item.price_btc,
              { maximumFractionDigits: 8 }
            )} BTC`}
          />
        ))}
      </Marquee>

      <Skeleton
        height="100px"
        visible={isLoading}
        className={MarketInfoWrapper}
      >
        <motion.div transition={{ delay: 1.5, type: 'tween' }} {...M_PROPS}>
          <InfoItem title="MARKET CAPITALIZATION" value={getTotalMarketCap()} />

          <div className={BadgeWrapper}>
            <Badge
              color={
                totalMarketCapChangePercentage > 0
                  ? theme.colors.successLight
                  : theme.colors.dangerLight
              }
            >
              <PercentageText
                prefersIndicatorIcon
                dynamicColorBasedOnValue
                value={totalMarketCapChangePercentage}
                weight="bold"
              />
            </Badge>
          </div>
        </motion.div>

        <motion.div transition={{ delay: 1.75, type: 'tween' }} {...M_PROPS}>
          <InfoItem title="24H VOLUME" value={getTotalMarketVolume()} />
        </motion.div>

        <motion.div transition={{ delay: 2, type: 'tween' }} {...M_PROPS}>
          <InfoItem title="BTC DOMINANCE" value={getBTCMarketCapPercentage()} />
        </motion.div>

        <motion.div transition={{ delay: 2.25, type: 'tween' }} {...M_PROPS}>
          <InfoItem
            title="ACTIVE COINS"
            value={getTotalActiveCryptocurrencies()}
          />
        </motion.div>
      </Skeleton>

      {renderActiveTab()}
    </div>
  );
};

export default Body;
