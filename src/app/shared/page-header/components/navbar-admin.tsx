import { useContext } from 'react';

import { Avatar, Box } from '@mui/material';

import { AuthContext } from '../../../context/AuthContext';
import { SearchInput } from '../../../shared/index';

const NavbarAdmin = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="flex justify-between mt-6 mx-5 mb-8">
                <Box
                    sx={{
                        width: { sm: '300px', lg: '400px' }
                    }}
                >
                    <SearchInput placeholder="Search..." />
                </Box>
                <div className="flex justify-center items-center cursor-pointer group">
                    {user ? <Avatar src={user.image} /> : <Avatar />}
                </div>
            </div>
        </>
    );
};

export default NavbarAdmin;
