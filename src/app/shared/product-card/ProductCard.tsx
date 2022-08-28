import { Container, Typography, Box, Grid, styled, CircularProgress, IconButton } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useEffect } from 'react';
import SearchInput from '../search-input/search-input';
import { useNavigate } from 'react-router-dom';

import { usePathName } from '../../hooks/usePathName';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { filterProductState, searchTextName } from '../../redux/reducers/productReducer';

import { getFilterProduct } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { addToCart, getCart } from '../../redux/actions/cartActions';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

const ProductCard = () => {
    const navigate = useNavigate();
    const filterProductByName = useSelector<RootState, searchTextName>((state) => state.filterProductByName);

    const filterProduct = useSelector<RootState, filterProductState>((state) => state.filterProduct);

    const dataPrice = useSelector<RootState, any>((state) => state.filterProductByPrice);

    const dispatch = useDispatch();

    const pathName = usePathName();

    const { textName } = filterProductByName;
    const { filterProductInfo, isFetching } = filterProduct;

    const handleAddToCart = async (product: any) => {
        await dispatch(addToCart(product, product?.name, product?.image, product?.price, 1));
        dispatch(getCart());
    };

    useEffect(() => {
        Object.keys(dataPrice).length > 0
            ? dispatch(
                  getFilterProduct({
                      category: 'All',
                      type: pathName,
                      min: dataPrice.price?.min,
                      max: dataPrice.price?.max,
                      rating: null,
                      pageNumber: null,
                      sortOrder: null
                  })
              )
            : dispatch(
                  getFilterProduct({
                      category: 'All',
                      type: pathName,
                      min: 1,
                      max: 10000000,
                      rating: null,
                      pageNumber: null,
                      sortOrder: null
                  })
              );
    }, [pathName, dataPrice.price]);

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
                        {filterProductInfo?.products &&
                            filterProductInfo?.products
                                .filter((item) => {
                                    if (textName === '') {
                                        return item;
                                    } else if (item.name.toLowerCase().includes(textName.toLowerCase())) {
                                        return item;
                                    }
                                    return false;
                                })
                                .map((item) => (
                                    <Grid item xs={12} sm={6} md={6} key={item._id}>
                                        <Link to={`/delivery/product/${item._id}`}>
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
                                                            alignItems: 'center',
                                                            flex: '1'
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                maxWidth: '100px',
                                                                maxHeight: '100px'
                                                            }}
                                                        >
                                                            <Img src={item.image} alt={item.image} />
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
                                                            <Typography
                                                                variant="h5"
                                                                component="h4"
                                                                className="text-yellow-light !font-semibold"
                                                            >
                                                                ${''} {item.price}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <IconButton
                                                        className="left-0 top-0 !w-12 !h-12 cursor-pointer z-[100]"
                                                        onClick={() => handleAddToCart(item)}
                                                    >
                                                        <AddShoppingCartIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default ProductCard;
