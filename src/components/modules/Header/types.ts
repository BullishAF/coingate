import type { AppTab } from '@/hooks/useTabs/types';

export type HeaderProps = {
  // eslint-disable-next-line no-unused-vars
  onChangeTab: (tab: AppTab) => void;
  activeTab: AppTab;
};
