import { Box, Container } from '@mui/material';
import React from 'react';
import AdminSideBar from '../screens/page-admin/components/AdminSideBar';
import NavbarAdmin from '../shared/page-header/components/navbar-admin';

interface Props {
    children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%'
                }}
            >
                <AdminSideBar />
                <div className="flex flex-col w-full">
                    <NavbarAdmin />
                    {children}
                </div>
            </Box>
        </>
    );
};

export default AdminLayout;
