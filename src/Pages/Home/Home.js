import React from 'react';
import AboutHome from './AboutHome';
import Footer from './Footer';
import HomeBanner from './HomeBanner';
import Players from './Players';
import Upcoming from './Upcoming';

const Home = () => {
    return (
        <div>
           <HomeBanner /> 
           <AboutHome />
           <Players />
           <Upcoming />
           <Footer />
        </div>
    );
};

export default Home;