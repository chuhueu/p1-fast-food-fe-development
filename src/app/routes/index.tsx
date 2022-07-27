import { HomePage, SignIn } from '../components';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/sign-in',
    component: SignIn
  }
];
