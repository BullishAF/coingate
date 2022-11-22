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
        <InfoItem title="Market Capitalization" value={getTotalMarketCap()} />

        <InfoItem title="24h Volume" value={getTotalMarketVolume()} />

        <InfoItem title="BTC Dominance" value={getBTCMarketCapPercentage()} />

        <InfoItem
          title="Active Coins"
          value={getTotalActiveCryptocurrencies()}
        />
      </div>

      {renderActiveTab()}
    </div>
  );
};

export default Body;
