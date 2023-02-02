import { CgArrowsExchange } from 'react-icons/cg';
import { RiCoinLine } from 'react-icons/ri';

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
        <Text
          style={{ fontFamily: 'Archivo, sans-serif' }}
          className={AppName}
          size={24}
        >
          coingate
        </Text>

        <div className={AppSections}>
          <SectionItem
            title="Coins"
            active={activeTab === TABS.COINS}
            icon={<RiCoinLine size={18} />}
            onClick={() => onChangeTab(TABS.COINS as AppTab)}
          />

          <SectionItem
            title="Exchanges"
            active={activeTab === TABS.EXCHANGES}
            icon={<CgArrowsExchange size={18} />}
            onClick={() => onChangeTab(TABS.EXCHANGES as AppTab)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
