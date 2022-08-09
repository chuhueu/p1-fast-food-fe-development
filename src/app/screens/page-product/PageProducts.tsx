import { Container, Typography, Grid, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProductCard } from '../../shared';
import React from 'react';

const PageProducts = () => {
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
            >
                Back to Delivery {''}
                <ArrowBackIcon
                    sx={{
                        fontSize: '16px'
                    }}
                />
            </Typography>
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    fontWeight: '600',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}
            >
                Best Foods
            </Typography>

            <ProductCard />
        </Container>
    );
};

export default PageProducts;
