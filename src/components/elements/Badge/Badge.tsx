import { useStyles } from './styles';
import type { BadgeProps } from './types';

const Badge = ({ color, children }: BadgeProps) => {
  const { classes } = useStyles();
  const { Wrapper } = classes;

  return (
    <div className={Wrapper} style={{ backgroundColor: color as string }}>
      {children}
    </div>
  );
};

export default Badge;
