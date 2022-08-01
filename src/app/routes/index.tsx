import { HomePage, SignIn, SignUp, PageDelivery } from '../components';

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
    },
    {
        path: '/delivery',
        component: PageDelivery
    }
];
