import React from 'react';
import clsx from 'clsx';

import Codes from '../codes';

import styles from './content.module.scss';


interface IContentProps {
  csvPath: string;
  imgPath: string;
}

export const Content: React.FC<IContentProps> = ({ csvPath, imgPath }) => {
  return (
    <div className={clsx(styles.content)}>
      <img src={imgPath} alt='background' />
      <Codes csvPath={csvPath} />
    </div>
  );
};

export default Content;