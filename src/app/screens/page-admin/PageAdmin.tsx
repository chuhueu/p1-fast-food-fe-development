import React from 'react';
import NavbarAdmin from '../../shared/page-header/components/navbar-admin';
import { Box } from '@mui/material';

import AdminSideBar from './components/AdminSideBar';

const PageAdmin = () => {
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
                </div>
            </Box>
        </>
    );
};

export default PageAdmin;
