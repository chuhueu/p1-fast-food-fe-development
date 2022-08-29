import { Routes, Route } from 'react-router-dom';
import { HomePage, SignIn, SignUp } from '../components';
import { PageDelivery, PageProducts, PageCheckout } from '../screens';
import DetailProduct from '../screens/page-product/components/DetailProduct';
import { PageHeader } from '../shared';
import ProfileUser from '../screens/page-profile/ProfileUser';

import ClientLayout from '../layout/ClientLayout';

const Client = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/delivery" element={<PageDelivery />} />
            <Route
                path="/delivery/:product"
                element={
                    <ClientLayout>
                        <PageProducts />
                    </ClientLayout>
                }
            />
            <Route
                path="/delivery/:product/:id"
                element={
                    <>
                        <PageHeader />
                        <DetailProduct />
                    </>
                }
            />

            <Route path="/checkout" element={<PageCheckout />} />
            <Route path="/profile" element={<ProfileUser />} />
        </Routes>
    );
};

export default Client;
