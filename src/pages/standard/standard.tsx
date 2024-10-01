import React from 'react';
import clsx from 'clsx';

import {Background, Data} from '../../contsants/links.ts';
import Content from '../../components/content';

import styles from './standard.module.scss';


interface IStandartProps {
  props?: string;
}

export const Standard: React.FC<IStandartProps> = () => {
  return (
    <div className={clsx(styles.standard)}>
      <Content csvPath={Data.standard} imgPath={Background.standard} />
    </div>
  );
};

export default Standard;