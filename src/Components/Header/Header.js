
import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, ButtonGroup, NavbarBrand, NavDropdown } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


import './Header.css'
import useAuth from './../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MakeAdmin from './../../MakeAdmin/MakeAdmin';

const Header = () => {
  let { path, url } = useRouteMatch();
  const {admin, user,handleLogOut}=useAuth();
    return (
        <div className="nav-position">
        <Navbar  bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home"> <img className="logo"src="https://assets10.bike24.net/static/images/8e6800bd228af47a3e77.svg" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto fs-5">
        
        <Link to="/home" className="items" >Home</Link>
        <Link to="/about" className="items" >About Us</Link>
        <Link to="/contact" className="items" >Contact Us</Link>
        <Link to="/privacy" className="items" >Privacy Policy</Link>

      
        {user?.email && (
          <span className="d-flex  ps-6">
            <span>
             <small> <em>Hi, {user.displayName || <b> Name Not Found</b>}</em></small>
            </span>
          </span>
        )}
        
       { user.email && 
        
          //Dropdown Button Here


                      <Dropdown className='ps-3'>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Dashboard
              </Dropdown.Toggle>
              <Dropdown.Menu>
              {!admin &&<Dropdown.Item> <Link to="/pay" className='sub-dropdowns'>Pay</Link></Dropdown.Item>}
              {!admin && <Dropdown.Item> <Link to="/myorder" className='sub-dropdowns'>My Orders</Link></Dropdown.Item>}
              {!admin &&<Dropdown.Item> <Link to="/review" className='sub-dropdowns'>Review</Link></Dropdown.Item>}
              {admin &&  <Dropdown.Item> <Link to="/makeadmin" className='sub-dropdowns'>Make an Admin</Link></Dropdown.Item>}
              {admin &&  <Dropdown.Item> <Link to="/manageorder" className='sub-dropdowns'>Manage Orders </Link></Dropdown.Item>}
             {admin &&   <Dropdown.Item> <Link to="/manageproducts" className='sub-dropdowns'>Manage Products </Link></Dropdown.Item>}
             {admin &&   <Dropdown.Item> <Link to="/newservice" className='sub-dropdowns'>Add A New Service </Link></Dropdown.Item>}
               { user.email ?
         <button onClick={handleLogOut} className="btn bg-white ms-3 text-info">Log Out</button> 
         :  
         <Link to="/login"> <button className="btn bg-white border ms-xxl-5 ps-3" >LOGIN</button> </Link>
         
        }

       {! user.email && <Link to="/signup"><button className="btn bg-warning ms-3">SIGN UP</button></Link>
        }
      
               </Dropdown.Menu>

              </Dropdown>
              
             

        }
        {

! user.email &&  <Link to="/login"> <button className="btn bg-white border ms-xxl-5 ps-3" >LOGIN</button> </Link>
        }

       {! user.email && <Link to="/signup"><button className="btn bg-warning ms-3">SIGN UP</button></Link>
        }

        </Nav>

    </Navbar.Collapse>
  </Container>



</Navbar> 

          </div>
        
    );
};

export default Header;