import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Explores = (props) => {
    const {name, url, description, price} = props.sub || {};
    
    const history = useHistory();


    return (
        

            <div className='col'>
                <div className='card text-center bg-secondary bg-gradient'>

            
  <Card >
    <Card.Img className='card-img-top h-100' variant="top" src={url} />
    <Card.Body>
      <Card.Title><small> {name} </small> </Card.Title>
      <Card.Text>
     <p className="fs-8"> <small> {description}</small> </p>
       </Card.Text>
      <Card.Text>
     Price : ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer >
    <button onClick={() => history.push('/orders')}  className='btn w-100 btn-warning'> <i class="fas fa-shopping-cart"></i> <b>BUY NOW</b> </button>
    </Card.Footer>
  </Card>
                </div>

            </div>

     



    ); 

}
export default Explores;