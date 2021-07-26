import { ComponentClass, FunctionComponent } from 'react';
import { Login, Dashboard } from './pages';

export interface Route {
  path: string;
  componente: ComponentClass<any, any> | FunctionComponent<any>;
}

const routes: Route[] = [
  {
    path: '/signin',
    componente: Login,
  },
  {
    path: '/',
    componente: Dashboard,
  },
];

export default routes;
