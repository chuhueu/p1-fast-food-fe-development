import React from 'react';
import { PageHeader, FilterBar, RestaurantSilder } from '../../shared';
import { Container, Box } from '@mui/material';

// import DeliveryPurchase from './components/delivery-purchase/DeliveryPurchase';

import DeleveryCategorySlider from './components/delivery-category-slide/DeleveryCategorySlider';

import { PageProducts } from '../index';

const PageDelivery = () => {
    return (
        <>
            <PageHeader />
            <Container maxWidth={false}>
                <Box
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        gap: '10px',
                        width: '100%'
                    }}
                >
                    <FilterBar />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                        className="4k-desktop:max-w-[1200px] tablet:max-w-[600px] large-desktop:max-w-[1100px] tablet-lg:max-w-[780px] py-5 px-3"
                    >
                        {/* products */}

                        <DeleveryCategorySlider />

                        <RestaurantSilder slidePerViews={2} />

                        {/* <DeliveryPurchase /> */}

                        <PageProducts />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default PageDelivery;
