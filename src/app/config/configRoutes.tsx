import { lazy } from 'react';
import { HomePage, SignIn, SignUp } from '../components';

import { PageDelivery, PageProducts, PageAdmin } from '../screens';

import { PageNotFound } from '../shared';

import AdminProduct from '../screens/page-admin/components/AdminProduct';

export const configRoutesUser = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/delivery',
        element: <PageDelivery />,
        routes: [
            {
                path: '/delivery/:product',
                element: <PageProducts />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
];

export const configRoutesAdmin = [
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/delivery',
        element: <PageDelivery />,
        routes: [
            {
                path: '/delivery/:product',
                element: <PageProducts />
            }
        ]
    },
    {
        path: '/manage',
        element: <PageAdmin />,
        routes: [
            {
                path: '/manage/products',
                element: <AdminProduct />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
];
