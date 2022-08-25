import React from 'react';
import { Box, Typography } from '@mui/material';

const PageNotFound = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h2" component="h2">
                    Page not found
                </Typography>
            </Box>
        </>
    );
};

export default PageNotFound;
