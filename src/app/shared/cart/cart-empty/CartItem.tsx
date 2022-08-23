import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { Box, Typography, IconButton, CircularProgress } from '@mui/material';

import { PrimaryButton } from '../../index';

//redux
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { cartState } from '../../../redux/reducers/cartReducer';
import { getCart, removeCartItem, updateQtyCartItem } from '../../../redux/actions/cartActions';

interface Props {
    closeCart: Function;
}

const CartItem: React.FC<Props> = ({ closeCart }) => {
    const dispatch = useDispatch();
    const getCartData = useSelector<RootState, cartState>((state) => state.getCart);
    const { cartInfo } = getCartData;
    console.log(cartInfo);

    const handleIncrease = (productID: string, qnt: number) => {
        dispatch(updateQtyCartItem(productID, qnt + 1));
        dispatch(getCart());
    };

    const handleDecrease = (productID: string, qnt: number) => {
        if (qnt > 1) {
            dispatch(updateQtyCartItem(productID, qnt - 1));
            dispatch(getCart());
        }
    };

    const handleRemoveItem = async (productID: string) => {
        await dispatch(removeCartItem(productID));
        dispatch(getCart());
    };

    return (
        <>
            <Box
                sx={{
                    height: '100%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px 10px 20px 22px',
                        borderBottom: '2px solid #e5e5ea'
                    }}
                >
                    <Typography variant="h4" component="h3">
                        Shopping Cart
                    </Typography>
                    <CloseIcon fontSize="large" onClick={() => closeCart()} />
                </Box>

                <Box
                    sx={{
                        padding: '20px 16px',
                        height: ' 420px',
                        overflowY: 'auto'
                    }}
                >
                    {cartInfo.map((product: any) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '16px'
                            }}
                            key={product._id}
                        >
                            <Box
                                sx={{
                                    marginRight: '10px'
                                }}
                            >
                                <img src={product.image} alt={product.image} className="w-[80px] h-[80px]" />
                            </Box>

                            <Box
                                sx={{
                                    flex: '1'
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="h4"
                                    sx={{
                                        fontWeight: '600'
                                    }}
                                >
                                    {product.name}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        fontWeight: '600'
                                    }}
                                    className="text-yellow-light"
                                >
                                    ${''}
                                    {product.price}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <IconButton size="small" onClick={() => handleDecrease(product._id, product.quantity)}>
                                        <RemoveIcon />
                                    </IconButton>

                                    <Typography variant="body1" component="span">
                                        {product.quantity}
                                    </Typography>

                                    <IconButton size="small" onClick={() => handleIncrease(product._id, product.quantity)}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Box>

                            <IconButton onClick={() => handleRemoveItem(product._id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        borderTop: '2px solid #e5e5ea',
                        padding: '16px 20px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '20px'
                        }}
                    >
                        <Typography variant="h5" component="h4">
                            Total
                        </Typography>

                        <Typography variant="h5" component="h4" className="text-yellow-light">
                            $ 2000
                        </Typography>
                    </Box>

                    <Box>
                        <PrimaryButton
                            border="none"
                            bgcolor="#F5AD11"
                            radius="12px"
                            height="50px"
                            width="40%"
                            color="#FFF"
                            onClick={() => console.log('Checkout')}
                        >
                            Checkout
                        </PrimaryButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CartItem;
