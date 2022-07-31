import { PageHeader, Footer } from '../../shared';
import HomeBanner from './components/home-banner/home-banner';
import HomeSlider from './components/home-slider/HomeSlider';
import HomeRestaurant from './components/home-restaurant/HomeRestaurant';
import HomeDescription from './components/home-description/HomeDescription';

import { smallLogo } from '../../utils/dataImages';

const HomePage = () => {
    return (
        <div className="bg-[#f8a70433]">
            <PageHeader />
            <HomeBanner />
            <HomeSlider />
            <HomeRestaurant />

            <div className="py-5 bg-white">
                <div className=" bg-white relative  w-full flex justify-center items-center before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-[2px] before:bg-black before:z-10">
                    <img src={smallLogo} alt={smallLogo} className="z-20 bg-white px-3" />
                </div>
            </div>

            <HomeDescription />
            <Footer />
        </div>
    );
};

export default HomePage;
