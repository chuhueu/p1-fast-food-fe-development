import { Container, CardContent, Typography, Box } from '@mui/material';

import { Desc1, Desc2, Desc3, Desc4, Desc5 } from '../../../../utils/dataImages';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const dataDescrription = [
    {
        img: Desc1,
        heading: 'Plan Your Celebration!',
        description:
            'Choose the event name, who to invite, and the payment method for your next social gathering. Fit with local menus and drinks, Cheers handles your group orders on the app and online.'
    },
    {
        img: Desc2,
        heading: 'We Deliver On Base',
        description:
            "Don't stress about having to leave family functions or a nice night in, Cheers is dedicated to help your family out and Soldiers in the B's"
    },
    {
        img: Desc3,
        heading: '#DitchTheDUI',
        description:
            'Drinking and driving kills 28 people a day in the U.S. That is more than 10,000 lives lost each year to drunk driving. Together, we can end drunk driving across the world.'
    }
];

const HomeDescription = () => {
    return (
        <section className="pb-14 bg-white">
            <Container>
                <Box sx={{ display: 'flex', marginBottom: '40px' }} className="tablet:!flex-col">
                    {dataDescrription.map((item) => (
                        <CardContent
                            sx={{
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column',
                                textAlign: 'center',
                                gap: '20px'
                            }}
                            key={item.heading}
                        >
                            <img src={item.img} alt={item.img} className="h-[360px]" />
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    color: '#FFCE00',
                                    fontWeight: '600',
                                    fontSize: '32px'
                                }}
                            >
                                {item.heading}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '18px'
                                }}
                            >
                                {item.description}
                            </Typography>
                        </CardContent>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    className="tablet:!flex-col"
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flex: '1',
                            flexDirection: 'column',
                            textAlign: 'center',
                            gap: '20px'
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                color: '#FFCE00',
                                fontWeight: '600',
                                fontSize: '32px'
                            }}
                        >
                            Bartender made cocktails delivered to your doorstep
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                fontSize: '18px'
                            }}
                        >
                            Explore a range of restaurants to compliment your chosen drink, either online or on the app. Find a select
                            choice of local menu items and enjoy your celebration!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            Speciality Cocktails <KeyboardArrowRightIcon />
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: '1',
                            position: 'relative',
                            '&:before': {
                                content: "''",
                                position: 'absolute',
                                top: '-10%',
                                left: '5rem',
                                width: '60px',
                                height: '60px',
                                borderRadius: '999px',
                                background: '#FFCE00'
                            },
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                bottom: '-10%',
                                right: '5rem',
                                width: '60px',
                                height: '60px',
                                borderRadius: '999px',
                                background: '#FFCE00'
                            }
                        }}
                    >
                        <img src={Desc4} className=" w-full" />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '40px'
                    }}
                    className="tablet:!flex-col tablet:!mt-14"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: '1',
                            position: 'relative',
                            '&:before': {
                                content: "''",
                                position: 'absolute',
                                top: '-10%',
                                right: '-5%',
                                width: '60px',
                                height: '60px',
                                borderRadius: '999px',
                                background: '#FFCE00'
                            },
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                bottom: '-10%',
                                left: '5rem',
                                width: '60px',
                                height: '60px',
                                borderRadius: '999px',
                                background: '#FFCE00'
                            }
                        }}
                    >
                        <img src={Desc5} className=" w-full" />
                    </Box>

                    <CardContent
                        sx={{
                            display: 'flex',
                            flex: '1',
                            flexDirection: 'column',
                            textAlign: 'center',
                            gap: '20px',
                            marginTop: '20px'
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                color: '#FFCE00',
                                fontWeight: '600',
                                fontSize: '32px'
                            }}
                        >
                            Draft brews delivered to you
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                fontSize: '18px'
                            }}
                        >
                            Whether you need a casual nightcap, or the courage to get on the dance floor, Cheers will bring the party to
                            you. Enjoy our selection of fresh craft beers!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            Start Exploring <KeyboardArrowRightIcon />
                        </Typography>
                    </CardContent>
                </Box>
            </Container>
        </section>
    );
};

export default HomeDescription;
