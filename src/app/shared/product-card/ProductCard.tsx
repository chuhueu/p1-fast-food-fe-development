import { Container, Typography, Box, Grid, styled, CircularProgress } from '@mui/material';

import { CoronaBeer, Sapporo, SmirnoffIce, CoorLightBeer } from '../../utils/dataImages';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

interface ImageSlideItem {
    img: string;
    heading: string;
    desc: string;
    price: number;
}

const dataImageSlide: ImageSlideItem[] = [
    {
        img: CoronaBeer,
        heading: 'Corona Extra Beer',
        desc: '375ml Can  |  5%',
        price: 2.98
    },
    {
        img: Sapporo,
        heading: 'Sapporo Premium Beer',
        desc: '375ml Can  |  5%',
        price: 1.98
    },
    {
        img: SmirnoffIce,
        heading: 'Smirnoff Ice',
        desc: '375ml Can  |  5%',
        price: 2.98
    },
    {
        img: CoorLightBeer,
        heading: 'Coors Light Beer',
        desc: '330ml Can  |  6%',
        price: 3.98
    }
];

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

const ProductCard = () => {
    const { setShowDetail } = useContext(AuthContext);
    const handleShowDetailProduct = () => {
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
            <Container>
                {/* <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '250px'
                    }}
                >
                    <CircularProgress />
                </Box> */}
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {dataImageSlide.map((item) => (
                        <Grid item xs={12} sm={6} md={6} key={item.heading} onClick={() => handleShowDetailProduct()}>
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
                                                width: '100px',
                                                height: '100px'
                                            }}
                                        >
                                            <Img src={item.img} alt="CoronaBeer" />
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
                                                {item.heading}
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
            </Container>
        </>
    );
};

export default ProductCard;
