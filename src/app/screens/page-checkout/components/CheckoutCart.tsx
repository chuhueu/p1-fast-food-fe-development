import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import useTotalPrice from '../../../hooks/usePrice';
import { cartState } from '../../../redux/reducers/cartReducer';
import { RootState } from '../../../redux/store';

const CheckoutCart = () => {
    const getCartData = useSelector<RootState, cartState>((state) => state.getCart);
    const totalCartPrice = useTotalPrice();
    const { cartInfo } = getCartData;

    // useEffect(() => {
    //     dispatch
    // })

    return (
        <>
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 40px',
                    paddingTop: '60px',
                    backgroundColor: 'rgba(0,0,0,.89)',
                    borderRadius: '12px'
                }}
            >
                <Box
                    sx={{
                        padding: '20px 16px',
                        height: ' 120px',
                        overflowY: 'auto'
                    }}
                >
                    {cartInfo?.map((product: any) => (
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
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{
                                        fontWeight: '600'
                                    }}
                                    className="text-white"
                                >
                                    {product.name}
                                </Typography>

                                <Typography variant="caption" component="span" className="text-zinc-400">
                                    Quantity: {product.quantity}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        fontWeight: '600'
                                    }}
                                    className="text-white"
                                >
                                    ${''}
                                    {product.price}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Divider
                    light
                    sx={{
                        backgroundColor: 'hsla(0,0%,100%,.15)'
                    }}
                />

                <Box
                    sx={{
                        width: '100',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                    className="my-4"
                >
                    <Box
                        sx={{
                            width: '100',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant="body1" component="span" className="text-zinc-400">
                            Discount
                        </Typography>

                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                fontWeight: '600'
                            }}
                            className="text-white"
                        >
                            ${''}
                            0.00
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '100',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant="body1" component="span" className="text-zinc-400">
                            Shipping Cost
                        </Typography>

                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                fontWeight: '600'
                            }}
                            className="text-white"
                        >
                            Free
                        </Typography>
                    </Box>
                </Box>

                <Divider
                    light
                    sx={{
                        backgroundColor: 'hsla(0,0%,100%,.15)'
                    }}
                />

                <Box
                    sx={{
                        width: '100',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '16px'
                    }}
                >
                    <Typography variant="body1" component="span" className="text-zinc-200">
                        Total
                    </Typography>

                    <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                            fontWeight: '600'
                        }}
                        className="text-white"
                    >
                        $ {totalCartPrice}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default CheckoutCart;
