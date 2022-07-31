import { Container, Typography } from '@mui/material';
import SearchInput from '../../../../shared/search-input/search-input';
import { Link } from 'react-router-dom';

import { MainBanner } from '../../../../utils/dataImages';

const HomeBanner = () => {
    return (
        <section className="pb-20">
            <Container>
                <div className="flex pt-10">
                    <div className="flex flex-col justify-center flex-1">
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{ color: '#f8a704', maxWidth: '600px', marginBottom: '20px', fontWeight: '600' }}
                        >
                            Order your celebration to your door
                        </Typography>
                        <SearchInput placeholder={'Enter Your Address'} />
                        <Typography component="span" sx={{ fontWeight: '500', marginTop: '10px', ml: '10px' }}>
                            Or{' '}
                            <Link to={'/sign-in'} className="decoration-solid underline ">
                                log in
                            </Link>{' '}
                            to see saved addresses
                        </Typography>
                    </div>

                    <img src={MainBanner} alt={MainBanner} className=" w-[500px] h-[600px] tablet:hidden" />
                </div>
            </Container>
        </section>
    );
};

export default HomeBanner;
