import { Container, Box, Typography } from '@mui/material';
import './sign-up.scss';

import { Logo } from '../../../utils/dataImages';
import SignUpForm from './sign-up-form/SignUpForm';

const SignUp = () => {
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
                            Tell us about yourself
                        </Typography>
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontWeight: '500'
                            }}
                        >
                            Please add the following information
                        </Typography>
                        <SignUpForm />
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default SignUp;
