import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import { Container, Typography } from '@mui/material';

import './style.scss';

// swiperjs
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const img = 'https://smd.com.vn/wp-content/uploads/2020/04/The-235-Italian-1.png';

SwiperCore.use([Autoplay, Navigation]);

const HomeSlider = () => {
    return (
        <section className="text-center my-[80px] relative">
            <Container>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn'
                    }}
                    breakpoints={{
                        400: {
                            slidesPerView: 2
                        },
                        600: {
                            slidesPerView: 4
                        },
                        960: {
                            slidesPerView: 7
                        }
                    }}
                    className="!flex !overflow-hidden"
                >
                    <SwiperSlide>
                        <div className="flex flex-col gap-3">
                            <img src={img} />
                            <Typography variant="caption" component="span">
                                Wine
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3">
                            <img src={img} />
                            <Typography variant="caption" component="span">
                                Beer
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3">
                            <img src={img} />
                            <Typography variant="caption" component="span">
                                Liquor
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3">
                            <img src={img} />
                            <Typography variant="caption" component="span">
                                Mixer
                            </Typography>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col gap-3">
                            <img src={img} />
                            <Typography variant="caption" component="span">
                                RTDs
                            </Typography>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <IconButton
                    sx={{
                        background: '#111',
                        position: 'absolute',
                        zIndex: '10',
                        left: '20px',
                        top: '40%'
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
                        position: 'absolute',
                        top: '40%',
                        right: '20px'
                    }}
                    className="next-btn"
                >
                    <ChevronRightIcon
                        sx={{
                            fill: '#ffffff'
                        }}
                    />
                </IconButton>
            </Container>
        </section>
    );
};
export default HomeSlider;
