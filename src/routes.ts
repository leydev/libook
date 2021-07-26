import { ComponentClass, FunctionComponent } from 'react';
import {
  Login, Dashboard, Users, Books,
} from './pages';

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
  {
    path: '/books',
    componente: Books,
  },
];

export default routes;
