import { useContext } from 'react';

import { Avatar, Box } from '@mui/material';

import { SearchInput } from '../../../shared/index';
//redux
import { RootState } from '../../../redux/store';
import { userState } from '../../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';

const NavbarAdmin = () => {
    const userData = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userData;

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
                <div className="flex justify-center items-center cursor-pointer group">
                    {userInfo ? <Avatar src={userInfo?.avatar} /> : <Avatar />}
                </div>
            </div>
        </>
    );
};

export default NavbarAdmin;
