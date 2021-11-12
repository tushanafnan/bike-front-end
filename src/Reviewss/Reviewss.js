import React from 'react';
import { Typography, Rating } from '@mui/material';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Reviewss = (props) => {
    const {displayName, rate, Review} = props.sub || {};
    
    const history = useHistory();


    return (
   

            <div className='col '>
                <div className='card  text-center bg-secondary bg-gradient'>

            
  <Card className="bg-dark text-white">
  <Card.Body>
      <Card.Text> Buyer Name : {displayName} <span className='text-warning'> <i class="fas fa-star"></i> {rate}</span></Card.Text>
      <Card.Text>
     Buyer Comments : {Review}
</Card.Text>
     <Card.Text>
     <Rating name="read-only" value={rate} readOnly />
</Card.Text>
     
      </Card.Body>
  </Card>
                </div>

            </div>

     



    ); 

}
    
export default Reviewss;