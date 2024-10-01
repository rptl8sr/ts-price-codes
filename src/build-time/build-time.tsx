import React from 'react';
import clsx from 'clsx';
import styles from './build-time.module.scss';


interface IBuildTimeProps {
  props?: string;
}

export const BuildTime: React.FC<IBuildTimeProps> = () => {
  return (
    <div className={clsx(styles.buildtime)}>
      <p>Обновлено {import.meta.env.VITE_BUILD_TIME}</p>
    </div>
  );
};

export default BuildTime;