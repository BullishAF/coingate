import { Text } from '@mantine/core';

import { TABS } from '@/constants';
import type { AppTab } from '@/hooks/useTabs/types';

import { SectionItem } from '../../elements';
import { useStyles } from './styles';
import type { HeaderProps } from './types';

const Header = ({ onChangeTab, activeTab }: HeaderProps) => {
  const { classes } = useStyles();
  const { Wrapper, Container, AppName, AppSections } = classes;

  return (
    <div className={Wrapper}>
      <div className={Container}>
        <Text className={AppName} color="white" size="xl">
          coingate
        </Text>

        <div className={AppSections}>
          <SectionItem
            title="Coins"
            active={activeTab === TABS.COINS}
            onClick={() => onChangeTab(TABS.COINS as AppTab)}
          />

          <SectionItem
            title="Exchanges"
            active={activeTab === TABS.EXCHANGES}
            onClick={() => onChangeTab(TABS.EXCHANGES as AppTab)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
