import { Container, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import CardItem from './components/CardItem';

import 'swiper/css';
import 'swiper/css/grid';
import './style.scss';

// swiperjs
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const CardSlider = () => {
    return (
        <section>
            <Container>
                <div className="">
                    <div className="flex justify-between items-center">
                        <Typography
                            component="h2"
                            variant="h4"
                            sx={{
                                fontWeight: '600'
                            }}
                        >
                            Popular Drinks
                        </Typography>
                        <div className="flex items-center gap-5">
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
                                className="prev-btn"
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
                                className="next-btn"
                            >
                                <ChevronRightIcon
                                    sx={{
                                        fill: '#ffffff'
                                    }}
                                />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CardSlider;
