import React from 'react';
import clsx from 'clsx';

import Content from '../../components/content';
import {Background, Data} from '../../contsants/links';

import styles from './smartbox.module.scss';


interface ISmartboxProps {
  props?: string;
}

export const Smartbox: React.FC<ISmartboxProps> = () => {
  return (
    <div className={clsx(styles.smartbox)}>
      <Content csvPath={Data.smartbox} imgPath={Background.smartbox} />
    </div>
  );
};

export default Smartbox;