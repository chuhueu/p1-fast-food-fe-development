import { Container, Box, Avatar, Typography, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { userState } from '../../redux/reducers/userReducer';
import { RootState } from '../../redux/store';
import { PageHeader } from '../../shared';

import { PrimaryButton } from '../../shared/';

// const fieldProfile = [
//     {
//         fieldName: 'Display Name',
//         type: 'username'
//     },
//     {
//         fieldName: 'Address',
//         type: 'address'
//     },
//     {
//         fieldName: 'Phone',
//         type: 'phone'
//     }
// ];

const ProfileUser = () => {
    const userData = useSelector<RootState, userState>((state) => state.userLogin);

    const { userInfo } = userData;

    return (
        <>
            <Container>
                <PageHeader />

                <Box
                    sx={{
                        marginTop: '80px',
                        display: 'flex',
                        gap: '16px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            sx={{
                                width: '250px',
                                height: '250px'
                            }}
                        >
                            <Avatar
                                src={userInfo?.avatar}
                                sx={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                padding: '16px 0'
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="h2"
                                sx={{
                                    fontWeight: '500'
                                }}
                            >
                                {userInfo?.username}
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                {userInfo?.email}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: '1'
                        }}
                    >
                        <form action="" className="flex flex-col items-center justify-start gap-7">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    width: '80%'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        minWidth: '100px'
                                    }}
                                >
                                    Username
                                </Typography>

                                <TextField
                                    hiddenLabel
                                    id="user-profile"
                                    defaultValue={userInfo?.username}
                                    size="small"
                                    sx={{
                                        width: '50%'
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    width: '80%'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        minWidth: '100px'
                                    }}
                                >
                                    Address
                                </Typography>

                                <TextField
                                    hiddenLabel
                                    id="user-profile"
                                    defaultValue=""
                                    size="small"
                                    sx={{
                                        width: '50%'
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    width: '80%'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        minWidth: '100px'
                                    }}
                                >
                                    Phone
                                </Typography>

                                <TextField
                                    hiddenLabel
                                    id="user-profile"
                                    defaultValue=""
                                    size="small"
                                    sx={{
                                        width: '50%'
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    width: '80%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <PrimaryButton
                                    border="1px solid #111"
                                    bgcolor="#fff"
                                    color="#111"
                                    height="50px"
                                    onClick={() => alert('save')}
                                    radius="16px"
                                    width="100px"
                                >
                                    Save
                                </PrimaryButton>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default ProfileUser;
