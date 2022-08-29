import React from 'react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { Logo } from '../../../utils/dataImages';

import { Box, Typography } from '@mui/material';

// redux
import { RootState } from '../../../redux/store';
import { userState } from '../../../redux/reducers/userReducer';
import { logout } from '../../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
    closeUserNav: Function;
    showUserNav: boolean;
}

const UserHeader: FC<IProps> = ({ showUserNav, closeUserNav }) => {
    const userData = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userData;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div
                className={
                    showUserNav
                        ? 'fixed top-0 right-0 bottom-0 z-50 w-[400px] phone-sm:w-full bg-white translate-x-0 delay-[0.4s] ease-linear'
                        : 'fixed top-0 right-0 bottom-0 z-50 w-[400px] phone-sm:w-full bg-white translate-x-full delay-150 ease-linear'
                }
            >
                <div className="flex items-center justify-end mt-5 mr-5 cursor-pointer" onClick={() => closeUserNav()}>
                    <CloseIcon />
                </div>
                {userInfo && (
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            marginLeft: '50px',
                            marginBottom: '20px'
                        }}
                    >
                        Hi, {userInfo?.username}
                    </Typography>
                )}
                <div className="flex flex-col ml-20 justify-between h-[80%] phone-sm:ml-10 gap-5">
                    <ul className="flex flex-col items-stretch h-full justify-between">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}
                        >
                            <Link to="/profile" className="text-xl font-medium">
                                Account
                            </Link>
                            <Link to="/" className="text-xl font-medium">
                                Order History
                            </Link>
                            <Link to="/" className="text-xl font-medium">
                                Favourites
                            </Link>
                        </Box>

                        <Box>
                            <Link to="/" className="text-xl font-medium" onClick={() => handleLogout()}>
                                Log out
                            </Link>
                        </Box>
                    </ul>

                    <div className="flex flex-col gap-5 ">
                        <h3 className="text-xl font-medium">Get the App</h3>

                        <div>
                            <img src={Logo} alt="logo" className="w-20" />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={showUserNav ? 'fixed inset-0 block bg-zinc-500 opacity-20 z-40' : 'fixed inset-0 hidden bg-zinc-500 opacity-20'}
                onClick={() => closeUserNav()}
            ></div>
        </>
    );
};

export default UserHeader;
