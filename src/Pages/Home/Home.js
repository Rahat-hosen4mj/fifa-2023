import React from 'react';
import AboutHome from './AboutHome';
import Footer from './Footer';
import HomeBanner from './HomeBanner';
import Upcoming from './Upcoming';

const Home = () => {
    return (
        <div>
           <HomeBanner /> 
           <AboutHome />
           <Upcoming />
           <Footer />
        </div>
    );
};

export default Home;