import { FC } from 'react';
import { Typography } from '@mui/material';

import 'swiper/css';

// swiperjs
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

import { Bread, Burger, Drinks, Pizza, Sandwich, Beef } from '../../utils/dataImages';

interface dataSlider {
    categoryName: string;
    categoryImg: string;
}

const dataHomeSlider: dataSlider[] = [
    {
        categoryName: 'Bread',
        categoryImg: Bread
    },
    {
        categoryName: 'Burger',
        categoryImg: Burger
    },
    {
        categoryName: 'Pizza',
        categoryImg: Pizza
    },
    {
        categoryName: 'Sandwich',
        categoryImg: Sandwich
    },
    {
        categoryName: 'Drinks',
        categoryImg: Drinks
    },
    {
        categoryName: 'Beef',
        categoryImg: Beef
    }
];

interface StyleBtn {
    nextBtn: string;
    prevBtn: string;
}

const CategorySlider: FC<StyleBtn> = ({ nextBtn, prevBtn }) => {
    return (
        <>
            <Swiper
                slidesPerView={6}
                slidesPerGroup={6}
                spaceBetween={30}
                loopFillGroupWithBlank={true}
                // className="mySwiper"
                loop={true}
                loopedSlides={6}
                autoplay={{
                    delay: 1800
                }}
                navigation={{
                    prevEl: `${prevBtn}`,
                    nextEl: `${nextBtn}`
                }}
            >
                {dataHomeSlider.map(({ categoryImg, categoryName }) => (
                    <SwiperSlide key={categoryName}>
                        <div className="flex flex-col gap-3 cursor-pointer">
                            <div className="flex justify-center items-center">
                                <img src={categoryImg} className="h-14" />
                            </div>
                            <Typography variant="caption" component="span">
                                {categoryName}
                            </Typography>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CategorySlider;
