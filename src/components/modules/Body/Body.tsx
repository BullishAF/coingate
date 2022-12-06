import { Skeleton } from '@mantine/core';

import { TABS } from '@/constants';
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
        <InfoItem title="MARKET CAPITALIZATION" value={getTotalMarketCap()} />

        <InfoItem title="24H VOLUME" value={getTotalMarketVolume()} />

        <InfoItem title="BTC DOMINANCE" value={getBTCMarketCapPercentage()} />

        <InfoItem
          title="ACTIVE COINS"
          value={getTotalActiveCryptocurrencies()}
        />
      </Skeleton>

      {renderActiveTab()}
    </div>
  );
};

export default Body;
