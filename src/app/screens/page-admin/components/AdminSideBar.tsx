import React from 'react';

import { Box, Avatar, Typography } from '@mui/material';
import { smallLogo } from '../../../utils/dataImages';
import { ListItem } from '../../../shared';
//redux
import { RootState } from '../../../redux/store';
import { userState } from '../../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';

const AdminSideBar = () => {
    const userData = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userData;
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
                        <Avatar src={userInfo?.avatar} />

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
                                {userInfo?.username}
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
