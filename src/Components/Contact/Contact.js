import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
        <div>
          <h1 className="fs-1 text-center text-secondary mt-5">Contact with us Anytime </h1>
            <div className="ps-3 mt-5">
            <Form>

            <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Full Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Message" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <button className="btn bg-info" type="submit">
    Submit
  </button>
</Form>

            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Contact;