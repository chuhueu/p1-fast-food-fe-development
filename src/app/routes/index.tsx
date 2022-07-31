import { HomePage, SignIn, SignUp } from '../components';

export const Routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/sign-up',
        component: SignUp
    }
];
