import { useContext, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { PrimaryButton } from '../../../shared';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { CoorLightBeer } from '../../../utils/dataImages';

import { AuthContext } from '../../../context/AuthContext';

// redux
import { RootState } from '../../../redux/store';
import { detailProductState } from '../../../redux/reducers/productReducer';
import { useSelector } from 'react-redux';

const ItemProduct = () => {
    const detailProduct = useSelector<RootState, detailProductState>((state) => state.detailProduct);
    const { setShowDetail } = useContext(AuthContext);

    const { isFetching, productInfo } = detailProduct;

    const closeDetailProduct = () => {
        setShowDetail(false);
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
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <PrimaryButton
                                            border="1px solid #111"
                                            bgcolor="transparent"
                                            height="max-content"
                                            onClick={() => console.log('-')}
                                            radius="16px"
                                            width="40px"
                                            color="#111"
                                        >
                                            <RemoveIcon />
                                        </PrimaryButton>

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
                                            1
                                        </Typography>

                                        <PrimaryButton
                                            border="1px solid #111"
                                            bgcolor="transparent"
                                            height="max-content"
                                            onClick={() => console.log('+')}
                                            radius="16px"
                                            width="40px"
                                            color="#111"
                                        >
                                            <AddIcon />
                                        </PrimaryButton>
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
                                onClick={() => console.log(productInfo)}
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
