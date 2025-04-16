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
  console.log(`App version: ${__APP_VERSION__}`);
  
  return (
    <ChakraProvider>
      <div className={ clsx(styles.app) }>
        <Toaster/>
        <Outlet/>
        <footer className={ clsx(styles.footer) }>
          <small>Версия приложения: { __APP_VERSION__ }</small>
        </footer>
      </div>
    </ChakraProvider>
  );
};

export default App;