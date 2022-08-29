import { Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProductCard } from '../../shared';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const PageProducts = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Typography
                component="span"
                variant="caption"
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/delivery')}
            >
                Back to Delivery {''}
                <ArrowBackIcon
                    sx={{
                        fontSize: '16px'
                    }}
                />
            </Typography>

            <ProductCard />
        </Container>
    );
};

export default PageProducts;
