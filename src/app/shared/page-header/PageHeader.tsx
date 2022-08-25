import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../../utils/dataImages';
import Cart from '../cart/Cart';
import AuthButton from '../auth-button/AuthButton';

import NavbarHeader from './components/navbar-header';
import UserHeader from './components/user-header';
import NavbarUser from './components/navbar-user';
import NavbarAdmin from './components/navbar-admin';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

//redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { userState } from '../../redux/reducers/userReducer';
// test

const PageHeader = () => {
    const [showNav, setShowNav] = useState(false);
    const [showUserNav, setShowUserNav] = useState(false);
    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);

    const { userInfo } = userLogin;

    const showNavbar = () => {
        setShowNav(true);
    };

    const closeNavbar = () => {
        setShowNav(false);
    };

    const showUserNavbar = () => {
        setShowUserNav(true);
    };

    const closeUserNavbar = () => {
        setShowUserNav(false);
    };

    return (
        <>
            <div className="relative w-full">
                <Container>
                    <div className="flex items-center justify-between h-25 pt-5">
                        <img src={Logo} alt="logo" className="w-40" />

                        {/* user header */}
                        {userInfo ? (
                            userInfo?.role === 'ROLE_MEMBER' ? (
                                <NavbarUser showNavbarUser={showUserNavbar} />
                            ) : (
                                <></>
                            )
                        ) : (
                            <div className=" items-center gap-5 flex">
                                <ul className="flex items-center font-bold gap-6 text-xl cursor-pointer tablet:hidden">
                                    <li>Celebrate</li>
                                    <Link to="/sign-up">Sign up</Link>
                                </ul>

                                <div className="phone-sm:hidden">
                                    <AuthButton page="sign-in">Log In</AuthButton>
                                </div>

                                <div className="cursor-pointer" onClick={showNavbar}>
                                    <MenuIcon />
                                </div>
                            </div>
                        )}

                        {/* pre-login header */}
                        {userInfo ? (
                            userInfo.role !== 'ROLE_MEMBER' ? (
                                <NavbarAdmin />
                            ) : (
                                <UserHeader showUserNav={showUserNav} closeUserNav={closeUserNavbar} />
                            )
                        ) : (
                            <NavbarHeader showNav={showNav} closeNavbar={closeNavbar} />
                        )}
                    </div>
                </Container>

                <Cart />
            </div>
        </>
    );
};

export default PageHeader;
