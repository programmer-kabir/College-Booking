import React from 'react';
import SearchCard from '../Pages/Home/SearchCard/SearchCard';
import CollegeGallery from '../Pages/Home/CollegeGallery/CollegeGallery';
import Banner from '../Pages/Home/Banner/Banner';
import Review from '../Pages/Home/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <SearchCard />
            <CollegeGallery />
            <Review />
        </div>
    );
};

export default Home;