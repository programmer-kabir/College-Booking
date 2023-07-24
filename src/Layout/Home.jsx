import React from 'react';
import SearchCard from '../Pages/Home/SearchCard/SearchCard';
import CollegeGallery from '../Pages/Home/CollegeGallery/CollegeGallery';
import Banner from '../Pages/Home/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <SearchCard />
            <CollegeGallery />
        </div>
    );
};

export default Home;