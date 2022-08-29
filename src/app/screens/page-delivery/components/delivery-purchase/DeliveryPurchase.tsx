import React from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DeliveryPurchase = () => {
    return (
        <section className="pb-10">
            <div className="flex justify-between items-center mb-5">
                <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                        fontWeight: '600'
                    }}
                >
                    Based On Past Purchases
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
        </section>
    );
};

export default DeliveryPurchase;
