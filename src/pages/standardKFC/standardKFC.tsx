import React from 'react';
import clsx from 'clsx';

import {Background, Data} from '../../contsants/links.ts';
import Content from '../../components/content';

import styles from './standard.module.scss';


interface IStandardKFCProps {
  props?: string;
}

export const StandardKFC: React.FC<IStandardKFCProps> = () => {
  return (
    <div className={clsx(styles.standard)}>
      <Content csvPath={Data.standardKFC} imgPath={Background.standardKFC} />
    </div>
  );
};

export default StandardKFC;