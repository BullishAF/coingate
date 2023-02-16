import type { FunctionComponent } from 'react';
import Marquee from 'react-fast-marquee';

import { Skeleton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

import { M_PROPS, SMALL_VW, TABS } from '@/constants';
import { useGlobalData, useTrendingCoins } from '@/hooks';
import { formatNumber } from '@/utils';

import { CoinsTab, ExchangesTab } from '../';
import { Badge, InfoItem, MarqueeItem, PercentageText } from '../../elements';
import { useStyles } from './styles';
import type { BodyProps } from './types';

const Body: FunctionComponent<BodyProps> = ({ activeTab }) => {
  const { classes, theme } = useStyles();
  const {
    Wrapper,
    MarketInfoWrapper,
    SkeletonsWrapper,
    BadgeWrapper,
    TrendingCoinsMarqueeWrapper,
    TrendingCoinsMarquee
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

  const matchSmallVW = useMediaQuery(`(max-width: ${SMALL_VW}px)`);

  const renderSkeletons = () =>
    Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className={SkeletonsWrapper}>
        <Skeleton width="250px" height="20px" />

        <Skeleton width="250px" height="45px" />

        {i === 0 && <Skeleton width="100px" height="20px" />}
      </div>
    ));

  const renderActiveTab = () => {
    switch (activeTab) {
      case TABS.Coins:
        return <CoinsTab />;
      case TABS.Exchanges:
        return <ExchangesTab />;
      default:
        return <CoinsTab />;
    }
  };

  return (
    <div className={Wrapper}>
      <div className={TrendingCoinsMarqueeWrapper}>
        {isLoading && <Skeleton width="100%" height="20px" />}

        {!isLoading && (
          <Marquee
            pauseOnHover
            gradient={!matchSmallVW}
            className={TrendingCoinsMarquee}
          >
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
        )}
      </div>

      <div className={MarketInfoWrapper}>
        {isLoading && renderSkeletons()}

        {!isLoading && (
          <>
            <motion.div transition={{ delay: 1.5, type: 'tween' }} {...M_PROPS}>
              <InfoItem
                title="MARKET CAPITALIZATION"
                value={getTotalMarketCap()}
              />

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

            <motion.div
              transition={{ delay: 1.75, type: 'tween' }}
              {...M_PROPS}
            >
              <InfoItem title="24H VOLUME" value={getTotalMarketVolume()} />
            </motion.div>

            <motion.div transition={{ delay: 2, type: 'tween' }} {...M_PROPS}>
              <InfoItem
                title="BTC DOMINANCE"
                value={getBTCMarketCapPercentage()}
              />
            </motion.div>

            <motion.div
              transition={{ delay: 2.25, type: 'tween' }}
              {...M_PROPS}
            >
              <InfoItem
                title="ACTIVE COINS"
                value={getTotalActiveCryptocurrencies()}
              />
            </motion.div>
          </>
        )}
      </div>

      {renderActiveTab()}
    </div>
  );
};

export default Body;
