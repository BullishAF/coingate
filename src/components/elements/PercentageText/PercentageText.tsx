import { Text } from '@mantine/core';

import { theme } from '@/styles';
import { formatNumber } from '@/utils';

import type { PercentageTextProps } from './types';

const PercentageText = ({
  value,
  weight = 'normal',
  dynamicColorBasedOnValue
}: PercentageTextProps) => {
  let color = theme.colors.shapeDark;
  const parsedValue = `${value > 0 ? '+' : ''}${formatNumber(value)}%`;

  if (dynamicColorBasedOnValue) color = value > 0 ? 'green' : 'red';

  return (
    <div>
      <Text weight={weight} color={color}>
        {parsedValue}
      </Text>
    </div>
  );
};

export default PercentageText;
