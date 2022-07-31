import AuthButton from '../../auth-button/AuthButton';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { Logo } from '../../../utils/dataImages';

interface IProps {
    closeNavbar: Function;
    showNav: boolean;
}

const NavbarHeader: FC<IProps> = ({ closeNavbar, showNav }) => {
    return (
        <>
            <div
                className={
                    showNav
                        ? 'fixed top-0 right-0 bottom-0 z-50 w-[400px] phone-sm:w-full bg-white translate-x-0 delay-[0.4s] ease-linear'
                        : 'fixed top-0 right-0 bottom-0 z-50 w-[400px] phone-sm:w-full bg-white translate-x-full delay-150 ease-linear'
                }
            >
                <div className="flex items-center justify-end mt-5 mr-5 cursor-pointer" onClick={() => closeNavbar()}>
                    <CloseIcon />
                </div>
                <div className="flex justify-center items-center gap-5 my-10 ">
                    <AuthButton page="sign-up">Sign Up</AuthButton>

                    <AuthButton page="sign-in">Log In</AuthButton>
                </div>

                <div className="flex flex-col ml-20 justify-between h-[75%] phone-sm:ml-10">
                    <ul className="flex flex-col gap-10 ">
                        <Link to="/" className="text-xl font-medium">
                            Plan a Celebration
                        </Link>
                        <Link to="/" className="text-xl font-medium">
                            About Us
                        </Link>
                        <Link to="/" className="text-xl font-medium">
                            FAQs
                        </Link>
                        <Link to="/" className="text-xl font-medium">
                            Partners
                        </Link>
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
                className={showNav ? 'fixed inset-0 block bg-zinc-500 opacity-20 z-40' : 'fixed inset-0 hidden bg-zinc-500 opacity-20'}
                onClick={() => closeNavbar()}
            ></div>
        </>
    );
};

export default NavbarHeader;
