import { Box, Container, Typography } from '@mui/material';
import { Logo } from '../../utils/dataImages';

import CheckoutInformation from './components/CheckoutInformation';
import CheckoutCart from './components/CheckoutCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { userState } from '../../redux/reducers/userReducer';
import { PrimaryButton } from '../../shared';

const PageCheckout = () => {
    const navigate = useNavigate();
    const userData = useSelector<RootState, userState>((state) => state.userLogin);

    const { userInfo } = userData;

    return (
        <>
            <Container>
                <Box
                    sx={{
                        paddingTop: '20px'
                    }}
                    className="phone:flex phone:justify-center"
                >
                    <img src={Logo} alt={Logo} className="w-32 " />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '20px',
                        marginBottom: '40px'
                    }}
                >
                    {' '}
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            fontWeight: '600'
                        }}
                        className="text-orange-light phone-sm:!text-2xl"
                    >
                        Checkout
                    </Typography>
                </Box>

                {userInfo ? (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            gap: '30px',
                            justifyContent: 'center'
                        }}
                        className="tablet:flex-col"
                    >
                        <CheckoutInformation />
                        <CheckoutCart />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                marginBottom: '16px'
                            }}
                            className="text-yellow-light"
                        >
                            Join with us!!
                        </Typography>

                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: '600',
                                marginBottom: '40px'
                            }}
                        >
                            You are not logged in. Please log in and try again!
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <PrimaryButton
                                border={'1px solid #111'}
                                bgcolor={'#fff'}
                                height={'40px'}
                                onClick={() => navigate('/sign-in')}
                                radius={'12px'}
                                width={'10%'}
                                color={'#111'}
                            >
                                Log in
                            </PrimaryButton>
                        </Box>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default PageCheckout;
