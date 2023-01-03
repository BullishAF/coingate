import { Text as DText } from '@mantine/core';

import { useStyles } from './styles';
import type { SectionItemProps } from './types';

const SectionItem = ({ title, active, onClick }: SectionItemProps) => {
  const { classes } = useStyles();
  const { Wrapper, Text, Underline } = classes;

  return (
    <div className={Wrapper} onClick={onClick}>
      <DText size="sm" color={active ? 'inherit' : 'gray'} className={Text}>
        {title}
      </DText>

      {active && <div className={Underline} />}
    </div>
  );
};

export default SectionItem;
