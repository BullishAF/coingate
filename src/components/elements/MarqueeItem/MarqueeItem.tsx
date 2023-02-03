import type { FunctionComponent } from 'react';

import Image from 'next/image';

import { useStyles } from './styles';
import type { MarqueeItemProps } from './types';

const MarqueeItem: FunctionComponent<MarqueeItemProps> = ({
  iconUrl,
  title,
  subtitle
}) => {
  const { classes } = useStyles();
  const { Wrapper, Content, TextWrapper, Title, Subtitle } = classes;

  return (
    <div className={Wrapper}>
      <div className={Content}>
        {iconUrl && <Image src={iconUrl} alt={title} width={20} height={20} />}

        <div className={TextWrapper}>
          <span className={Title}>{title}</span>

          {subtitle && <span className={Subtitle}>{subtitle}</span>}
        </div>
      </div>
    </div>
  );
};

export default MarqueeItem;
