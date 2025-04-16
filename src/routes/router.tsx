import { createBrowserRouter } from 'react-router-dom';

import App from '../components/app';
import {Smartbox, SmartboxKFC, StandardKFC, Standard} from '../pages';
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
            index: true,
            path: Pages.standartKFC,
            Component: StandardKFC
          },
          {
            path: Pages.smarbox,
            Component: Smartbox
          },
          {
            path: Pages.smartboxKFC,
            Component: SmartboxKFC
          }
        ]
      }
    ]
  }
]);