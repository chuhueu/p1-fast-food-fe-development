import React, { ReactSVG } from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import './style.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import { CoronaBeer, Sapporo, SmirnoffIce, CoorLightBeer } from '../../utils/dataImages';

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

const ImageSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                grid={{
                    rows: 2
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Grid, Pagination]}
            >
                {dataImageSlide.map((item) => (
                    <SwiperSlide className="!justify-start !w-[400px] border-2 border-solid bg-gray-fade rounded-md" key={item.heading}>
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
                                <img src={item.img} alt="CoronaBeer" className="h-2/3" />
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
                            <FavoriteRoundedIcon className="absolute right-8 top-16 !w-8 !h-8 cursor-pointer hover:fill-red-500" />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ImageSlider;
