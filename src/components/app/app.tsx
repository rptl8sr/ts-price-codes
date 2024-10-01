import React from 'react';
import clsx from 'clsx';
import {ChakraProvider} from '@chakra-ui/react';
import {Toaster} from 'react-hot-toast';
import {Outlet} from 'react-router-dom';


import styles from './app.module.scss';


interface IAppProps {
  props?: string;
}

export const App: React.FC<IAppProps> = () => {
  return (
    <ChakraProvider>
      <div className={clsx(styles.app)}>
        <Toaster />
        <Outlet />
      </div>
    </ChakraProvider>
  );
};

export default App;