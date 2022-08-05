import { HomePage, SignIn, SignUp } from '../components';

import { PageDelivery } from '../screens';

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
