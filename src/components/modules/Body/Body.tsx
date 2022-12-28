import { Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';

import { M_PROPS, TABS } from '@/constants';
import { useGlobalData } from '@/hooks';

import { CoinsTab, ExchangesTab } from '../';
import { InfoItem } from '../../elements';
import { useStyles } from './styles';
import type { BodyProps } from './types';

const Body = ({ activeTab }: BodyProps) => {
  const { classes } = useStyles();
  const { Wrapper, MarketInfoWrapper } = classes;

  const {
    getTotalMarketCap,
    getTotalMarketVolume,
    getBTCMarketCapPercentage,
    getTotalActiveCryptocurrencies,
    isLoading
  } = useGlobalData();

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
      <Skeleton
        height="100px"
        visible={isLoading}
        className={MarketInfoWrapper}
      >
        <motion.div transition={{ delay: 1.5, type: 'tween' }} {...M_PROPS}>
          <InfoItem title="MARKET CAPITALIZATION" value={getTotalMarketCap()} />
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
