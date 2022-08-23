import { Container, Typography, Box, Grid, styled, CircularProgress } from '@mui/material';

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { AuthContext } from '../../context/AuthContext';
import { FC, useContext, useEffect } from 'react';
import SearchInput from '../search-input/search-input';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { productState, filterProductState } from '../../redux/reducers/productReducer';

import { getListProduct, getDetailProduct, getFilterProduct } from '../../redux/actions/productActions';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

const ProductCard = () => {
    const products = useSelector<RootState, productState>((state) => state.listProduct);
    const filterProduct = useSelector<RootState, filterProductState>((state) => state.filterProduct);
    const dispatch = useDispatch();
    const { setShowDetail } = useContext(AuthContext);

    const { filterProductInfo, isFetching } = filterProduct;

    const handleShowDetailProduct = (data: any) => {
        dispatch(getDetailProduct(data));
        setShowDetail(true);
    };

    return (
        <>
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
                Best foods
            </Typography>

            <Box
                sx={{
                    width: '50%',
                    transform: 'translateX(20%)',
                    marginBottom: '20px'
                }}
            >
                <SearchInput placeholder="Search product..." />
            </Box>

            <Container>
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
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {filterProductInfo?.products?.map((item) => (
                            <Grid item xs={12} sm={6} md={6} key={item._id} onClick={() => handleShowDetailProduct(item._id)}>
                                <Box className="!justify-start  border-2 border-solid bg-gray-fade rounded-md cursor-pointer">
                                    <Box
                                        sx={{
                                            padding: '10px 30px',
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItem: 'center',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '20px',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    maxWidth: '100px',
                                                    maxHeight: '100px'
                                                }}
                                            >
                                                <Img src={item.image} alt="CoronaBeer" />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    gap: '10px',
                                                    textAlign: 'start',
                                                    flexDirection: 'column'
                                                }}
                                            >
                                                <Typography variant="body1" component="h3" className="!font-semibold">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" component="span" className="text-gray-400">
                                                    {item.desc}
                                                </Typography>
                                                <Typography variant="h5" component="h4" className="text-yellow-light !font-semibold">
                                                    ${''} {item.price}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <FavoriteRoundedIcon className="absolute right-8 top-4 !w-8 !h-8 cursor-pointer hover:fill-red-500" />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default ProductCard;
