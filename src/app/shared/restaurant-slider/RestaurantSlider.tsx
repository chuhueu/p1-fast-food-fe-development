import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import 'swiper/css';

// swiperjs
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

import { ChickenCoupon, OutskirtCoupon, RoseCoupon, ThaiOrchidCoupon, TuesdayTacosCoupon } from '../../utils/dataImages';

const DataRestaurant = [
    { img: ChickenCoupon },
    { img: OutskirtCoupon },
    { img: RoseCoupon },
    { img: ThaiOrchidCoupon },
    { img: TuesdayTacosCoupon }
];

interface Props {
    slidePerViews: number;
}

const RestaurantSlider: React.FC<Props> = ({ slidePerViews }) => {
    return (
        <section className="pb-10 bg-white w-full">
            <Container>
                <div className="flex justify-between items-center mb-5">
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            fontWeight: '600'
                        }}
                    >
                        Restaurants
                    </Typography>
                    <div className="flex items-center gap-5 phone:hidden">
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: '600'
                            }}
                        >
                            See All
                        </Typography>
                        <IconButton
                            sx={{
                                background: '#111',
                                width: '30px',
                                height: '30px'
                            }}
                            className="prev-btn-restaurant"
                        >
                            <ChevronLeftIcon
                                sx={{
                                    fill: '#ffffff'
                                }}
                            />
                        </IconButton>

                        <IconButton
                            sx={{
                                background: '#111',
                                width: '30px',
                                height: '30px'
                            }}
                            className="next-btn-restaurant"
                        >
                            <ChevronRightIcon
                                sx={{
                                    fill: '#ffffff'
                                }}
                            />
                        </IconButton>
                    </div>
                </div>
                <Swiper
                    slidesPerView={slidePerViews}
                    spaceBetween={30}
                    className="mySwiper"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: '.prev-btn-restaurant',
                        nextEl: '.next-btn-restaurant'
                    }}
                >
                    {DataRestaurant.map((item) => (
                        <SwiperSlide key={item.img}>
                            <img src={item.img} alt={item.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default RestaurantSlider;
