import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { EmptyCart } from '../../../utils/dataImages';

interface Props {
    closeCart: Function;
}

const CartEmpty: React.FC<Props> = ({ closeCart }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '20px',
                height: '100%'
            }}
        >
            <Box
                sx={{
                    height: '10%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginRight: '20px',
                    cursor: 'pointer'
                }}
                onClick={() => closeCart()}
            >
                <CloseIcon className="hover:!scale-150" />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <Typography variant="h5" component="h2" className="!font-bold">
                    Your Cart Is Empty
                </Typography>
                <Box>
                    <img src={EmptyCart} alt={EmptyCart} />
                </Box>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    Start browsing our selection of drinks and food to begin your first order.{' '}
                </Typography>
            </Box>
        </Box>
    );
};

export default CartEmpty;
