import { Text } from '@mantine/core';

import { useStyles } from './styles';
import type { SectionItemProps } from './types';

const SectionItem = ({ title, active, onClick }: SectionItemProps) => {
  const { classes } = useStyles();
  const { Wrapper, Underline } = classes;

  return (
    <div className={Wrapper} onClick={onClick}>
      <Text color="white" size="md">
        {title}
      </Text>

      {active && <div className={Underline} />}
    </div>
  );
};

export default SectionItem;
