import { createBrowserRouter } from 'react-router-dom';

import App from '../components/app';
import {Smartbox, Standard} from '../pages';
import MainLayout from '../layouts/main-layout';
import {Pages} from './routes.ts';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            path: Pages.standart,
            Component: Standard
          },
          {
            path: Pages.smarbox,
            Component: Smartbox
          }
        ]
      }
    ]
  }
]);