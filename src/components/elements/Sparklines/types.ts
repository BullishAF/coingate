import type { SparklinesProps as DSparklinesProps } from 'react-sparklines';

export type SparklinesProps = DSparklinesProps & {
  data: Array<number>;
  dynamicColorBasedOnValue?: number;
  color?: string;
  strokeWidth?: string;
  filled?: boolean;
};
