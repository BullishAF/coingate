import {
  Sparklines as DSparklines,
  SparklinesLine as DSparklinesLine
} from 'react-sparklines';

import type { SparklinesProps } from './types';

const Sparklines = ({
  dynamicColorBasedOnValue,
  color = 'limegreen',
  strokeWidth = '2',
  filled = false,
  ...props
}: SparklinesProps) => {
  if (dynamicColorBasedOnValue)
    color = dynamicColorBasedOnValue > 0 ? 'limegreen' : 'red';

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
