import React, { useContext } from 'react';
import ItemProduct from './ItemProduct';
import { Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const DetailProduct = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Typography
                    component="span"
                    variant="caption"
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        marginTop: '50px'
                    }}
                    onClick={() => navigate(-1)}
                >
                    Back {''}
                    <ArrowBackIcon
                        sx={{
                            fontSize: '16px'
                        }}
                    />
                </Typography>
                <div className="px-5 rounded-md shadow-btnLogin bg-white">
                    <ItemProduct />
                </div>
            </Container>
        </>
    );
};

export default DetailProduct;
