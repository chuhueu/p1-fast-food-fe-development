import { HomePage, SignIn, SignUp } from '../components';

import { PageDelivery, PageProducts, PageAdmin } from '../screens';

import AdminProduct from '../screens/page-admin/components/AdminProduct';

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
        component: PageDelivery,
        Routes: [
            {
                path: '/delivery/best-foods',
                exact: true,
                component: PageProducts
            }
        ]
    },
    {
        path: '/manage',
        exact: true,
        component: PageAdmin,
        Routes: [
            {
                path: '/manage/products',
                exact: true,
                component: AdminProduct
            }
        ]
    }
];
