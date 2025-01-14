import type { FunctionComponent } from 'react';

import { Text } from '@mantine/core';

import { useStyles } from './styles';
import type { InfoItemProps } from './types';

const InfoItem: FunctionComponent<InfoItemProps> = ({ title, value }) => {
  const { classes } = useStyles();
  const { Wrapper, Title, Value } = classes;

  return (
    <div className={Wrapper}>
      <Text color="gray" weight={700} className={Title}>
        {title}
      </Text>

      <Text className={Value}>{value}</Text>
    </div>
  );
};

export default InfoItem;
