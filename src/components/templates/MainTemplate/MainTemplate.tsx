import type { FunctionComponent } from 'react';

import { useTabs } from '@/hooks';

import { Body, Header } from '../../modules';

const MainTemplate: FunctionComponent = () => {
  const { handleChangeTab, activeTab } = useTabs();

  return (
    <>
      <Header
        activeTab={activeTab}
        onChangeTab={(current) => handleChangeTab(current)}
      />

      <Body activeTab={activeTab} />
    </>
  );
};

export default MainTemplate;
