import React from 'react';

import { Box, Avatar, Typography } from '@mui/material';
import { smallLogo } from '../../../utils/dataImages';
import { ListItem } from '../../../shared';

const AdminSideBar = () => {
    return (
        <>
            <Box
                sx={{
                    width: { sm: '40%', md: '30%', lg: '20%' },
                    padding: ' 24px 20px 16px',
                    borderRight: '1px solid #f2f2f7',
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <img src={smallLogo} alt={smallLogo} />

                    <Box
                        sx={{
                            display: 'flex',
                            marginTop: '20px',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            backgroundColor: 'rgba(145, 158, 171, 0.12)',
                            width: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        <Avatar />

                        <Box
                            sx={{
                                paddingLeft: '16px'
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                component="h6"
                                sx={{
                                    fontWeight: '600'
                                }}
                            >
                                Le Hieu
                            </Typography>

                            <Typography
                                variant="body2"
                                component="p"
                                sx={{
                                    fontWeight: '400',
                                    color: 'rgb(99, 115, 129)'
                                }}
                            >
                                admin
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            marginTop: '24px'
                        }}
                    >
                        <ListItem />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AdminSideBar;
