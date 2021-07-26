import { ComponentClass, FunctionComponent } from 'react';
import { Login, Dashboard, Users } from './pages';

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
  {
    path: '/users',
    componente: Users,
  },
];

export default routes;
