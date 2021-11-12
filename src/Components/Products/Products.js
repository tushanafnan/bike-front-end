import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Prodcuts.css'

const Products = () => {
    const [course, setCourse] = useState ([]);
    useEffect (()=> {

fetch ('https://tush-bike.herokuapp.com/products')
.then (res => res.json ())
.then (data => setCourse(data))
    }, [] )
    return (
<div>
  <br /> <br /> <br />
  <div className='container mx-auto text-center mb-5'>
    <h1 className="fs-1 ps-3 mb-5 text-dark"> Our Affordable Bike </h1>
        <div className="row text-center">
        <div className="col-md-12">
    
        <div className="row g-4 row-cols-1 row-cols-md-4 ms-2 row-solve">
              
        {course.map ( sub => <Product key= {sub.name} sub={sub}></Product>)}
              
        </div>
        </div>
        </div>

        
    </div>
  </div>
          
       
    );
};

export default Products;