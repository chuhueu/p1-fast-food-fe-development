import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';

import { SearchInput } from '../../../shared';

import { Link } from 'react-router-dom';
import { Typography, Avatar } from '@mui/material';

const navItem = [
    {
        path: '/',
        itemName: 'delivery'
    },
    {
        path: '/',
        itemName: 'pick-up'
    },
    {
        path: '/',
        itemName: 'event'
    }
];

interface IProps {
    showNavbarUser: Function;
}

const NavbarUser: FC<IProps> = ({ showNavbarUser }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <nav className="ml-11 border-4 border-solid border-gray-blur rounded-3xl bg-gray-blur">
                    <ul className="flex">
                        {navItem.map(({ path, itemName }) => (
                            <Link to={path} key={itemName} className="cursor-pointer py-2 px-5">
                                <span>{itemName}</span>
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-between gap-5">
                    <SearchInput placeholder="Beer, Wine, Food, etc" />

                    <div className="flex gap-5">
                        <div className="bg-yellow-light flex items-center py-3 px-5 rounded-2xl gap-2 cursor-pointer">
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
                            <Avatar />
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
