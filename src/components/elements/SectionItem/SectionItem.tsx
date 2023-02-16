import type { FunctionComponent } from 'react';

import { Text } from '@mantine/core';

import { useStyles } from './styles';
import type { SectionItemProps } from './types';

const SectionItem: FunctionComponent<SectionItemProps> = ({
  title,
  active,
  icon,
  onClick
}) => {
  const { classes } = useStyles();
  const { Wrapper, SectionTitleWrapper, Underline } = classes;

  const isActiveStyles = active
    ? {
        color: 'inherit',
        weight: 600
      }
    : {
        color: 'gray',
        weight: 500
      };

  return (
    <div className={Wrapper} onClick={onClick}>
      <div className={SectionTitleWrapper} style={isActiveStyles}>
        {!!icon && icon}

        <Text size="sm" weight={isActiveStyles['weight']}>
          {title}
        </Text>
      </div>

      {active && <div className={Underline} />}
    </div>
  );
};

export default SectionItem;
