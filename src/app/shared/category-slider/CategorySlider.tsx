import { FC } from 'react';
import { Typography } from '@mui/material';

import 'swiper/css';

// swiperjs
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

import { Wine, Beer, Liquor } from '../../utils/dataImages';

interface dataSlider {
    categoryName: string;
    categoryImg: string;
}

const dataHomeSlider: dataSlider[] = [
    {
        categoryName: 'Wine',
        categoryImg: Wine
    },
    {
        categoryName: 'Beer',
        categoryImg: Beer
    },
    {
        categoryName: 'Liquor',
        categoryImg: Liquor
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
                loop={true}
                slidesPerView={3}
                slidesPerGroup={3}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: `${prevBtn}`,
                    nextEl: `${nextBtn}`
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
                className="!flex"
            >
                {dataHomeSlider.map(({ categoryImg, categoryName }) => (
                    <SwiperSlide key={categoryName}>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-center items-center">
                                <img src={categoryImg} className="h-28" />
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
