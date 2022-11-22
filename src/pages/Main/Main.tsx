import { Body, Header } from './components';
import { useTabs } from './hooks';

const Main = () => {
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

export default Main;
