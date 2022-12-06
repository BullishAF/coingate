/* eslint-disable react/jsx-no-useless-fragment */
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { Text, useMantineTheme } from '@mantine/core';

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
  let color: string | Array<string> = colors.shapeDark;

  if (dynamicColorBasedOnValue)
    color = isPositive ? colors.green[7] : colors.red[6];

  const parsedValue = () => {
    const formattedValue = `${formatNumber(value, true)}%`;

    if (!prefersIndicatorIcon)
      return `${isPositive ? '+' : ''}${formattedValue}`;

    return formattedValue;
  };

  return (
    <div className={Wrapper}>
      {prefersIndicatorIcon && (
        <>
          {isPositive ? (
            <IoMdArrowDropup
              className={Icon}
              style={{ color: color as string }}
            />
          ) : (
            <IoMdArrowDropdown
              className={Icon}
              style={{ color: color as string }}
            />
          )}
        </>
      )}

      <Text weight={weight} color={color as string}>
        {parsedValue()}
      </Text>
    </div>
  );
};

export default PercentageText;
