import React from 'react';
import clsx from 'clsx';

import useCSVData from '../../hooks/csv';

import styles from './codes.module.scss';
import Code from '../code';



interface ICodesProps {
  csvPath: string;
}

export const Codes: React.FC<ICodesProps> = ({ csvPath }) => {
  const { data, loading, error } = useCSVData(csvPath);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className={clsx(styles.codes)}>
      {data.map((item, i) => {
        return <Code key={i} item={item} />;
      })}
    </div>
  );
};

export default Codes;