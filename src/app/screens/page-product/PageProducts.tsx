import { Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProductCard } from '../../shared';
import React from 'react';

import DetailProduct from './components/DetailProduct';
import { useHistory } from 'react-router-dom';

const PageProducts = () => {
    const history = useHistory();
    const backToDeliveryPage = () => {
        history.goBack();
    };

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
                onClick={() => backToDeliveryPage()}
            >
                Back to Delivery {''}
                <ArrowBackIcon
                    sx={{
                        fontSize: '16px'
                    }}
                />
            </Typography>

            <ProductCard />

            <DetailProduct />
        </Container>
    );
};

export default PageProducts;
