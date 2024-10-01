import React from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';

import {ParsedData} from '../../contsants/types.ts';

import styles from './code.module.scss';


interface ICodeProps {
  item: ParsedData;
}

export const Code: React.FC<ICodeProps> = ({item}) => {
  const width = 50;
  
  const dynamicStyle = {
    top: `${item.anchorY}px`,
    left: `${item.anchorX}px`,
    fontFamily: item.fontFamily,
    fontSize: `${item.fontSize}px`,
    color: item.fontColor,
    width: `${width}px`,
    textAlign: item.align as 'left' | 'center' | 'right',
    transform: '',
  };

  if (item.align === 'right') {
    dynamicStyle.transform = 'translateX(-100%)';
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code).then(() => {
      toast.success(`${item.code} скопирован`, { position: 'top-left' });
    });
  };

  return (
    <div className={clsx(styles.code)} style={dynamicStyle} onClick={handleCopy}>
      {item.code}
    </div>
  )
};

export default Code;