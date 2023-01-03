import type { ReactNode } from 'react';

export type BadgeProps = {
  children?: ReactNode;
  text?: string;
  color: string | Array<string>;
};
