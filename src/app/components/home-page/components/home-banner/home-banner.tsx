import { Container, Typography } from '@mui/material';
import SearchInput from '../../../../shared/search-input/search-input';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section className='bg-[#f8a70433] pb-20'>
      <Container>
        <div className='flex pt-10'>
          <div className='flex flex-col'>
            <Typography
              variant='h2'
              component='h2'
              sx={{ color: '#f8a704', maxWidth: '600px', marginBottom: '20px', fontWeight: '600' }}>
              Order your celebration to your door
            </Typography>
            <SearchInput placeholder={'Enter Your Address'} />
            <Typography component='span' sx={{ fontWeight: '500', marginTop: '10px' }}>
              Or{' '}
              <Link to={'/sign-in'} className='decoration-solid underline '>
                log in
              </Link>{' '}
              to see saved addresses
            </Typography>
          </div>

          {/* <img src={Banner} alt='' /> */}
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
