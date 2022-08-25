import React from 'react';
import { Container, Box, IconButton, Typography } from '@mui/material';
import { EnhancedTable } from '../../../shared/index';
import AddIcon from '@mui/icons-material/Add';

const AdminProduct = () => {
    return (
        <>
            <Container>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginBottom: '20px',
                        gap: '8px'
                    }}
                >
                    <Typography variant="body2" component="span">
                        Add New Product
                    </Typography>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </Box>
                <EnhancedTable />
            </Container>
        </>
    );
};

export default AdminProduct;
