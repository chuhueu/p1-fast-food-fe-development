import { Box, Container } from '@mui/material';
import React from 'react';
import { FilterBar, PageHeader } from '../shared';

interface Props {
    children: React.ReactNode;
}

const ClientLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <PageHeader />
            <Container maxWidth={false}>
                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        gap: '10px',
                        width: '100%'
                    }}
                >
                    <FilterBar />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                        className="4k-desktop:max-w-[1200px] tablet:max-w-[600px] large-desktop:max-w-[1100px] tablet-lg:max-w-[780px] py-5 px-3"
                    >
                        {children}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default ClientLayout;
