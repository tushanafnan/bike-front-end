import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
        <div className='container text-center'>
            <h1 className="text-center mt-5 mb-5 text-info"> Our Promise</h1>
            <div className="text-center">
<h2>Whatever you ride, wherever you ride and whenever you ride, we’re there for you.</h2>
<br />
<button className="btn bg-danger border border-radious text-light fs-4"> Hear from our community </button>
            </div>
            <div className="text-center mt-5 mb-5"></div>
     <h1 className="ps-3 text-info">Our Vision</h1>
     <p className='fs-3'>
We envision a Colorado where riding a bicycle is always safe and convenient for everyone, where bicycling is the top choice for recreation and everyday trips, and where the benefits of bicycling are experienced and valued by all people in our state.</p>
            <div className="text-center mt-5 mb-5"></div>
     <h1 className="ps-3 text-info">Our Mission</h1>
     <p className='fs-3'>
     Our mission is to lead a passionate and growing movement that champions the interests of everyone who rides or wants to ride a bicycle in our state.</p>
        <div>
            
        </div>
      
        </div>
        <Footer></Footer>
        </div>


    );
};

export default About;