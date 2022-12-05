import {
  Sparklines as DSparklines,
  SparklinesLine as DSparklinesLine
} from 'react-sparklines';

import { useMantineTheme } from '@mantine/core';

import type { SparklinesProps } from './types';

const Sparklines = ({
  dynamicColorBasedOnValue,
  color = 'limegreen',
  strokeWidth = '2',
  filled = false,
  ...props
}: SparklinesProps) => {
  const { colors } = useMantineTheme();

  if (dynamicColorBasedOnValue)
    color = dynamicColorBasedOnValue > 0 ? colors.green[6] : colors.red[7];

  return (
    <DSparklines {...props}>
      <DSparklinesLine
        color={color}
        style={{ strokeWidth, fill: filled ? '' : 'none' }}
      />
    </DSparklines>
  );
};

export default Sparklines;
