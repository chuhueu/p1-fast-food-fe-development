import { PageHeader } from '../../shared';
import HomeBanner from './components/home-banner/home-banner';
import HomeSlider from './components/home-slider/HomeSlider';
import HomePopular from './components/home-populars';

const HomePage = () => {
    return (
        <>
            <PageHeader></PageHeader>
            <HomeBanner />
            <HomeSlider />
            <HomePopular />
        </>
    );
};

export default HomePage;
