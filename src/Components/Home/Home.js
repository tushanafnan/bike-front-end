import React from 'react';
import Review from '../../Review/Review';
import Reviews from '../../Reviews/Reviews';
import Body from '../Body/Body';
import Consultancy from '../Consultancy/Consultancy';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Body></Body>
            <Products></Products>
            <Reviews></Reviews>
            <Consultancy></Consultancy>
            <Footer></Footer>
        </div>
    );
};

export default Home;