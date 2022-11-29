import { TABS } from '@/constants';

import { CoinsTab, ExchangesTab, InfoItem } from './components';
import { useGlobalData } from './hooks';
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={Wrapper}>
      <div className={MarketInfoWrapper}>
        <InfoItem title="MARKET CAPITALIZATION" value={getTotalMarketCap()} />

        <InfoItem title="24H VOLUME" value={getTotalMarketVolume()} />

        <InfoItem title="BTC DOMINANCE" value={getBTCMarketCapPercentage()} />

        <InfoItem
          title="ACTIVE COINS"
          value={getTotalActiveCryptocurrencies()}
        />
      </div>

      {renderActiveTab()}
    </div>
  );
};

export default Body;
