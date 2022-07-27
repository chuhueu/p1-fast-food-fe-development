import { Container } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-page-header.png';
import AuthButton from '../auth-button/AuthButton';
import NavbarHeader from './components/navbar-header';

import MenuIcon from '@mui/icons-material/Menu';

const PageHeader = () => {
    const [showNav, setShowNav] = useState(false);

    const showNavbar = () => {
        setShowNav(true);
    };

    const closeNavbar = () => {
        setShowNav(false);
    };

    return (
        <div className="bg-[#f8a70433]">
            <Container>
                <div className="flex items-center justify-between h-25 ">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-28"
                    />

                    <div className="flex items-center gap-5">
                        <ul className="flex items-center font-bold gap-6 text-xl cursor-pointer">
                            <li>Celebrate</li>
                            <Link to="/sign-up">Sign up</Link>
                        </ul>

                        <div>
                            <AuthButton page="sign-in">Log In</AuthButton>
                        </div>

                        <div className="cursor-pointer" onClick={showNavbar}>
                            <MenuIcon />
                        </div>
                    </div>

                    <NavbarHeader showNav={showNav} closeNavbar={closeNavbar} />
                </div>
            </Container>
        </div>
    );
};

export default PageHeader;
