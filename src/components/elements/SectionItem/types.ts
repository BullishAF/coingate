import type { ReactNode } from 'react';

export type SectionItemProps = {
  title: string;
  active: boolean;
  icon?: ReactNode;
  onClick: () => void;
};
