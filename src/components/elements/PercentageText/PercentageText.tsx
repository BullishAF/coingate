/* eslint-disable react/jsx-no-useless-fragment */
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { Text, useMantineTheme } from '@mantine/core';

import { UNKNOWN_VALUE_CHAR } from '@/constants';
import { formatNumber } from '@/utils';

import { useStyles } from './styles';
import type { PercentageTextProps } from './types';

const PercentageText = ({
  value,
  weight = 'normal',
  prefersIndicatorIcon,
  dynamicColorBasedOnValue
}: PercentageTextProps) => {
  const { classes } = useStyles();
  const { Wrapper, Icon } = classes;

  const { colors } = useMantineTheme();

  const isPositive = value > 0;
  const isNeutral = !value || value === 0;
  let color: string | Array<string> = colors.shapeDark;

  if (dynamicColorBasedOnValue && !isNeutral)
    color = isPositive ? colors.green[7] : colors.red[6];

  const parsedIndicator = () => {
    if (isNeutral) return;

    if (isPositive) {
      return (
        <IoMdArrowDropup className={Icon} style={{ color: color as string }} />
      );
    } else {
      return (
        <IoMdArrowDropdown
          className={Icon}
          style={{ color: color as string }}
        />
      );
    }
  };

  const parsedValue = () => {
    if (isNeutral) return UNKNOWN_VALUE_CHAR;

    const formattedValue = `${formatNumber(value, true)}%`;

    if (!prefersIndicatorIcon)
      return `${isPositive ? '+' : ''}${formattedValue}`;

    return formattedValue;
  };

  return (
    <div className={Wrapper}>
      {prefersIndicatorIcon && parsedIndicator()}

      <Text weight={weight} color={color as string}>
        {parsedValue()}
      </Text>
    </div>
  );
};

export default PercentageText;
