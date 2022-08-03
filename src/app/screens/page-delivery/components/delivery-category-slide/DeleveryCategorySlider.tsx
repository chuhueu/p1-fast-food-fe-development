import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container, IconButton } from '@mui/material';

import { CategorySlider } from '../../../../shared';

const DeleveryCategorySlider = () => {
    return (
        <section className="relative mb-10">
            <Container>
                <CategorySlider nextBtn=".next-category-btn" prevBtn="" />

                <IconButton
                    sx={{
                        background: '#111',
                        position: 'absolute',
                        top: '30%',
                        right: '0',
                        zIndex: '10',
                        width: '30px',
                        height: '30px'
                    }}
                    className="next-category-btn"
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

export default DeleveryCategorySlider;
