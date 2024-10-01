import React from 'react';
import clsx from 'clsx';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';

import NavButton from '../../components/nav-button';
import {Pages} from '../../routes/routes.ts';

import styles from './main-layout.module.scss';
import BuildTime from '../../build-time';


interface IMainLayoutProps {
  props?: string;
}

export const MainLayout: React.FC<IMainLayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className={clsx(styles.mainlayout)}>
      <div className={clsx(styles.nav)}>
        <BuildTime />
        <NavButton text='Стандарт' onClick={() => navigate(Pages.standart)} disabled={location.pathname === Pages.standart} />
        <NavButton text='Смартбокс' onClick={() => navigate(Pages.smarbox)} disabled={location.pathname === Pages.smarbox}/>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;