import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageAdmin } from '../screens';
import AdminProduct from '../screens/page-admin/components/AdminProduct';

import AdminLayout from '../layout/AdminLayout';
import AddNewProduct from '../screens/page-admin/components/AddNewProduct';

const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<PageAdmin />} />
            <Route
                path="/products"
                element={
                    <AdminLayout>
                        <AdminProduct />
                    </AdminLayout>
                }
            />
            <Route
                path="/products/addProduct"
                element={
                    <AdminLayout>
                        <AddNewProduct />
                    </AdminLayout>
                }
            />
        </Routes>
    );
};
export default Admin;
