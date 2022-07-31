import { Container, Box, Typography } from '@mui/material';
import { PrimaryButton } from '../../shared';

const captionFooter = [
    {
        caption: 'About Us'
    },
    {
        caption: 'Facebook'
    },
    {
        caption: 'Twitter'
    },
    {
        caption: 'Instagram'
    }
];

const Footer = () => {
    return (
        <footer className="bg-yellow-light py-14 ">
            <Container>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: '1',
                            gap: '10px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#ffffff'
                            }}
                            variant="h4"
                            component="h2"
                        >
                            Sign up for special offers
                        </Typography>
                        <label htmlFor="footer-submit" className="text-white font-bold text-base">
                            Email Address
                        </label>
                        <input type="text" className="border-none outline-none h-10 w-3/5 px-3 rounded" id="footer-submit" />
                        <PrimaryButton>Submit</PrimaryButton>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: '1',
                            gap: '10px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                textAlign: 'center'
                            }}
                            variant="h4"
                            component="ul"
                        >
                            Connect With Us
                        </Typography>
                        <Box
                            sx={{
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '10px'
                            }}
                        >
                            {captionFooter.map((item): any => (
                                <Typography
                                    sx={{
                                        color: '#FFFFFF',
                                        listStyle: 'none'
                                    }}
                                    component="li"
                                    key={item.caption}
                                >
                                    {item.caption}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: '20px',
                        display: 'inline-block',
                        width: '100%',
                        marginTop: '30px',
                        marginBottom: '10px'
                    }}
                    variant="caption"
                    component="span"
                >
                    © 2022 Cheers App LLC • All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
