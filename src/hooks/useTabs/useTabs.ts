import { useState } from 'react';

import { TABS } from '@/constants';

import type { AppTab } from './types';

const APP_TABS = [TABS.Coins, TABS.Exchanges] as AppTab[];

const useTabs = () => {
  const [activeTab, setActiveTab] = useState(APP_TABS[0]);

  const handleChangeTab = (tab: AppTab) => setActiveTab(tab);

  return {
    activeTab,
    handleChangeTab
  };
};

export default useTabs;
