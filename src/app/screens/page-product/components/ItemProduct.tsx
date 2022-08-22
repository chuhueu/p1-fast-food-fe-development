import { useContext, useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, IconButton } from '@mui/material';
import { PrimaryButton } from '../../../shared';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { AuthContext } from '../../../context/AuthContext';

// redux
import { RootState } from '../../../redux/store';
import { detailProductState } from '../../../redux/reducers/productReducer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getCart } from '../../../redux/actions/cartActions';

interface productType {
    product: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const ItemProduct = () => {
    const detailProduct = useSelector<RootState, detailProductState>((state) => state.detailProduct);
    const dispatch = useDispatch();
    const [qntProduct, setQntProduct] = useState(1);
    const { setShowDetail } = useContext(AuthContext);

    const { isFetching, productInfo } = detailProduct;
    // quantity
    const handleDecreaseProduct = () => {
        setQntProduct((prev) => (prev === 1 ? prev : prev - 1));
    };

    const handleIncreaseProduct = () => {
        setQntProduct((prev) => prev + 1);
    };
    // close Product
    const closeDetailProduct = () => {
        setShowDetail(false);
    };
    // add to Cart
    const handleAddToCart = async () => {
        await dispatch(addToCart(productInfo, productInfo?.name, productInfo?.image, productInfo?.price, qntProduct));
        dispatch(getCart());
    };

    return (
        <>
            {isFetching ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '250px'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            marginTop: '20px'
                        }}
                        key={productInfo?._id}
                    >
                        <Box sx={{ display: 'flex', width: '100%', gap: '10px', marginBottom: '40px' }}>
                            <Box
                                sx={{
                                    width: '20%'
                                }}
                            >
                                <img src={productInfo?.image} alt={productInfo?.image} className="h-full" />
                            </Box>
                            <Box sx={{ width: '80%', maxWidth: '70%' }}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        wordWrap: 'break-word',
                                        fontWeight: '500',
                                        marginBottom: '12px'
                                    }}
                                >
                                    {productInfo?.name}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        wordWrap: 'break-word'
                                    }}
                                    className="text-zinc-400"
                                >
                                    {productInfo?.country}
                                </Typography>

                                <Box
                                    sx={{
                                        marginTop: '12px',
                                        marginBottom: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{
                                            width: '100%',
                                            maxWidth: '100%',
                                            wordWrap: 'break-word',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}
                                        className="text-yellow-light"
                                    >
                                        $
                                        <Typography
                                            variant="h5"
                                            component="span"
                                            sx={{
                                                fontWeight: '500'
                                            }}
                                            className="text-yellow-light"
                                        >
                                            {productInfo?.price}
                                        </Typography>
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '6px'
                                        }}
                                    >
                                        <IconButton onClick={() => handleDecreaseProduct()}>
                                            <RemoveIcon />
                                        </IconButton>

                                        <Typography
                                            variant="h4"
                                            component="h3"
                                            sx={{
                                                width: '100%',
                                                maxWidth: '100%',
                                                wordWrap: 'break-word',
                                                fontWeight: '600',
                                                textAlign: 'center'
                                            }}
                                            className="text-yellow-light"
                                        >
                                            {qntProduct}
                                        </Typography>

                                        <IconButton onClick={() => handleIncreaseProduct()}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    {productInfo?.desc}
                                </Typography>
                            </Box>
                            <Box>
                                <CloseIcon className="cursor-pointer" fontSize="large" onClick={() => closeDetailProduct()} />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <PrimaryButton
                                border="none"
                                bgcolor="#FFCE00"
                                height="50px"
                                onClick={() => handleAddToCart()}
                                radius="12px"
                                width="40%"
                                color="#FFF"
                            >
                                Add to Cart
                            </PrimaryButton>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default ItemProduct;
