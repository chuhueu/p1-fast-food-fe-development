import { FC, useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';

import { SearchInput } from '../../../shared';

import { Link, useLocation } from 'react-router-dom';
import { Typography, Avatar } from '@mui/material';

import { AuthContext } from '../../../context/AuthContext';

const navItem = [
    {
        path: '/delivery',
        itemName: 'delivery'
    },
    {
        path: '/pick-up',
        itemName: 'pick-up'
    },
    {
        path: '/event',
        itemName: 'event'
    }
];

interface IProps {
    showNavbarUser: Function;
}

const NavbarUser: FC<IProps> = ({ showNavbarUser }) => {
    const { user, isShowCart, setIsShowCart } = useContext(AuthContext);
    const { pathname } = useLocation();
    const activeNav = pathname.replace('/', '');
    const [typeNav, setTypeNav] = useState(activeNav);

    const handleShowCart = () => {
        setIsShowCart(!isShowCart);
    };

    return (
        <>
            <div className="flex items-center justify-between w-full">
                <nav className="ml-11 border-4 border-solid border-gray-blur rounded-3xl bg-gray-blur">
                    <ul className="flex">
                        {navItem.map(({ path, itemName }) => (
                            <Link
                                to={path}
                                key={itemName}
                                className={
                                    typeNav === itemName ? 'cursor-pointer py-2 px-5 bg-white rounded-3xl' : 'cursor-pointer py-2 px-5'
                                }
                                onClick={() => setTypeNav(itemName)}
                            >
                                <span>{itemName}</span>
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-between gap-5">
                    {/* <SearchInput placeholder="Beer, Wine, Food, etc" /> */}

                    <div className="flex gap-5">
                        <div
                            className="bg-yellow-light flex items-center py-3 px-5 rounded-2xl gap-2 cursor-pointer"
                            onClick={() => handleShowCart()}
                        >
                            <ShoppingCartIcon
                                sx={{
                                    width: '30px',
                                    height: '30px'
                                }}
                                className="!fill-white"
                            />
                            <Typography
                                variant="h6"
                                component="span"
                                sx={{
                                    color: '#ffffff'
                                }}
                            >
                                0
                            </Typography>
                        </div>

                        <div className="flex justify-center items-center cursor-pointer">
                            {user ? <Avatar src={user.image} /> : <Avatar />}
                        </div>
                        <div className="flex justify-center items-center cursor-pointer" onClick={() => showNavbarUser()}>
                            <MenuIcon
                                sx={{
                                    width: '30px',
                                    height: '30px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarUser;
