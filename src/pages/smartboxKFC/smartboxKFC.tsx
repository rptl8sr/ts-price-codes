import React from 'react';
import clsx from 'clsx';

import Content from '../../components/content';
import {Background, Data} from '../../contsants/links';

import styles from './smartbox.module.scss';


interface ISmartboxProps {
  props?: string;
}

export const SmartboxKFC: React.FC<ISmartboxProps> = () => {
  return (
    <div className={clsx(styles.smartbox)}>
      <Content csvPath={Data.smartboxKFC} imgPath={Background.smartboxKFC} />
    </div>
  );
};

export default SmartboxKFC;