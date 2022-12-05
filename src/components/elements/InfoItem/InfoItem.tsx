import { Text } from '@mantine/core';

import { useStyles } from './styles';
import type { InfoItemProps } from './types';

const InfoItem = ({ title, value }: InfoItemProps) => {
  const { classes } = useStyles();
  const { Wrapper, Title, Value } = classes;

  return (
    <div className={Wrapper}>
      <Text color="gray" weight={600} className={Title}>
        {title}
      </Text>

      <Text className={Value}>{value}</Text>
    </div>
  );
};

export default InfoItem;
