import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {

    const history = useHistory();
 
    return (
        
        <div className='header'>
            <section className='mx-auto pb-5'>
            <div  className="container">
            <div className="row">
           <div className="col-12 col-md-6 mt-5 "> 
           <h1 className="fs-1"> 
            <span className="text-color fs-1"> <b> Looking For Affordable Bike? </b></span> <br />
                <span className="fs-5 text-white"> Check Out Our Decents Bike Offer </span><br /> 
                <button onClick={() => history.push('/explore')} className="btn btn-color text-center mt-5"> EXPLORE MORE</button>
            </h1>
            </div>
            {/* <div className="col-12 col-md-6 d-flex justify-content-center" ><img className="img-men" src="https://lp-cms-production.imgix.net/2021-10/GettyImages-1145406277.jpg" alt="" /></div> */}
            </div>
            </div>
            </section>
            </div>
                    );
                    };

export default Body;