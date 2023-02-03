import type { FunctionComponent } from 'react';

import { useStyles } from './styles';
import type { BadgeProps } from './types';

const Badge: FunctionComponent<BadgeProps> = ({ color, children }) => {
  const { classes } = useStyles();
  const { Wrapper } = classes;

  return (
    <div className={Wrapper} style={{ backgroundColor: color as string }}>
      {children}
    </div>
  );
};

export default Badge;
