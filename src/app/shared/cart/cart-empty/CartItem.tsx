import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { Sapporo } from '../../../utils/dataImages';

import { Box, Typography, IconButton } from '@mui/material';

import { PrimaryButton } from '../../index';
// import { increase } from '../../../redux/action-creators';
// import { useDispatch, useSelector } from 'react-redux';
// import { State } from '../../../redux/reducers';

interface Props {
    closeCart: Function;
}

const dataCart = [
    {
        img: Sapporo,
        dataName: 'Sapporo',
        price: 200
    }
];

const CartItem: React.FC<Props> = ({ closeCart }) => {
    const [numberItemCart, setNumberItemCart] = React.useState(1);

    const handleIncrease = () => {
        setNumberItemCart((prev: number) => prev + 1);
    };

    const handleDecrease = () => {
        numberItemCart === 0 ? setNumberItemCart(0) : setNumberItemCart((prev: number) => prev - 1);
    };

    return (
        <>
            <Box>
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
                        //height: ' 420px',
                        overflowY: 'auto'
                    }}
                >
                    {dataCart.map((item: any) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '16px'
                            }}
                            key={item.dataName}
                        >
                            <Box
                                sx={{
                                    marginRight: '10px'
                                }}
                            >
                                <img src={item.img} alt={item.img} className="w-[80px] h-[80px]" />
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
                                    {item.dataName}
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
                                    {item.price}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <IconButton size="small" onClick={() => handleDecrease()}>
                                        <RemoveIcon />
                                    </IconButton>

                                    <Typography variant="body1" component="span">
                                        {numberItemCart}
                                    </Typography>

                                    <IconButton size="small" onClick={() => handleIncrease()}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Box>

                            <IconButton>
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
