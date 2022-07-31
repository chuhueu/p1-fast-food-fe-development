import { Container, Box, Typography } from '@mui/material';

import { Logo } from '../../../utils/dataImages';
import SignInForm from './sign-in-form/SignInForm';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <section>
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
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <Typography
                            component="h2"
                            variant="h4"
                            sx={{
                                fontWeight: '600'
                            }}
                            className="text-orange-light phone-sm:!text-2xl"
                        >
                            Wellcome back
                        </Typography>
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontWeight: '500'
                            }}
                        >
                            Please enter your email and password to continue
                        </Typography>

                        <SignInForm />

                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            Don't have an account? {''}
                            <Link to="/sign-up" className="text-yellow-light hover:decoration-black">
                                Log in
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default SignIn;
