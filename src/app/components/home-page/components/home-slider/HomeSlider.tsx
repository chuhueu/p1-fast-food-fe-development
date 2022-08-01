import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import { Container } from '@mui/material';

import { CategorySlider } from '../../../../shared';

import 'swiper/css';

// swiperjs

const HomeSlider = () => {
    return (
        <section className="text-center py-[80px] relative bg-white">
            <Container>
                <CategorySlider prevBtn=".prev-btn" nextBtn=".next-btn" />

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
                        right: '20px',
                        zIndex: '10'
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
