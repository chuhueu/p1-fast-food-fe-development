import { Avatar, Box, Typography, Divider, List, ListItemButton } from '@mui/material';

import { SearchInput } from '../../../shared/index';
//redux
import { RootState } from '../../../redux/store';
import { userState } from '../../../redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';

const NavbarAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userData;

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const [show, setShow] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/sign-in');
    };

    return (
        <>
            <div className="flex justify-between mt-6 mx-5 mb-8 gap-5">
                <Box
                    sx={{
                        width: { sm: '300px', lg: '400px' }
                    }}
                >
                    <SearchInput placeholder="Search..." />
                </Box>
                <div className="flex justify-center items-center cursor-pointer mr-5 group relative">
                    {userInfo && (
                        <Avatar
                            src={userInfo?.avatar}
                            onClick={() => {
                                setShow(!show);
                            }}
                        />
                    )}

                    <Box
                        sx={{
                            position: 'absolute',
                            width: '200px',
                            top: '100%',
                            right: '-10%',
                            borderRadius: '12px',
                            boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px;',
                            zIndex: '998'
                        }}
                        className={show ? 'my-3 opacity-1' : 'my-3 opacity-0 '}
                    >
                        <Box
                            sx={{
                                marginTop: '12px',
                                marginBottom: '12px',
                                paddingLeft: '20px',
                                paddingRight: '20px'
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
                                    color: 'rgb(99, 115, 129)'
                                }}
                            >
                                {userInfo?.email}
                            </Typography>
                        </Box>

                        <Divider />

                        <Box sx={{ width: '100%', maxWidth: 360 }}>
                            <List
                                component="li"
                                aria-label="main mailbox folders"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '8px 20px',
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                                        }
                                    }}
                                    onClick={() => navigate('/manage')}
                                >
                                    <Typography
                                        variant="body2"
                                        component="span"
                                        sx={{
                                            fontWeight: '400',
                                            color: 'rgb(99, 115, 129)',
                                            width: '100%'
                                        }}
                                    >
                                        Manage
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '8px 20px',
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                                        }
                                    }}
                                    onClick={() => navigate('/')}
                                >
                                    <Typography
                                        variant="body2"
                                        component="span"
                                        sx={{
                                            fontWeight: '400',
                                            color: 'rgb(99, 115, 129)',
                                            width: '100%'
                                        }}
                                    >
                                        Profile
                                    </Typography>
                                </ListItemButton>
                            </List>

                            <Divider />

                            <Box sx={{ width: '100%', maxWidth: 360 }}>
                                <List
                                    component="li"
                                    aria-label="main mailbox folders"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <ListItemButton
                                        sx={{
                                            borderRadius: '8px',
                                            padding: '8px 20px',
                                            '&.Mui-selected': {
                                                backgroundColor: 'rgba(145, 158, 171, 0.08)'
                                            }
                                        }}
                                        onClick={() => handleLogout()}
                                    >
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            sx={{
                                                fontWeight: '400',
                                                color: 'rgb(99, 115, 129)',
                                                width: '100%'
                                            }}
                                        >
                                            Logout
                                        </Typography>
                                    </ListItemButton>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default NavbarAdmin;
