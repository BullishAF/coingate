import type { FunctionComponent } from 'react';
import {
  Sparklines as DSparklines,
  SparklinesLine as DSparklinesLine
} from 'react-sparklines';

import { useMantineTheme } from '@mantine/core';

import { DEFAULT_SPARKLINE_DATA } from '@/constants';

import type { SparklinesProps } from './types';

const Sparklines: FunctionComponent<SparklinesProps> = ({
  dynamicColorBasedOnValue,
  color = 'gray',
  strokeWidth = '2',
  filled = false,
  data,
  ...props
}) => {
  const { colors } = useMantineTheme();

  if (dynamicColorBasedOnValue && data)
    color = dynamicColorBasedOnValue > 0 ? colors.green[6] : colors.red[7];

  return (
    <DSparklines data={data?.length ? data : DEFAULT_SPARKLINE_DATA} {...props}>
      <DSparklinesLine
        color={color}
        style={{ strokeWidth, fill: filled ? '' : 'none' }}
      />
    </DSparklines>
  );
};

export default Sparklines;
