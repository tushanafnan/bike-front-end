import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Table, Button, Container } from "react-bootstrap";
const ManageProducts = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    axios
      .get(
        `https://tush-bike.herokuapp.com/explore`
      )
      .then((result) => setBookings(result?.data));
  }, [isLoading]);
 
  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you really want to Delete this Bike?");
    if (proceed) {
    axios
      .delete(
        `https://tush-bike.herokuapp.com/deleteBooking/${id}`
      )
      .then((result) => {
        console.log(result);
        if (result.data.deletedCount) {
          setIsLoading(!false);
        }
      });
    }
  };
  return ( <div className="container">

  <Container style={{ minHeight: "80vh" }}>
    <Table responsive>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Delete Product</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((BR, index) => (
          <tr key={BR._id}>
            <td>{index + 1} </td>
            <td>{BR?.name}</td>
            <td>
            <Button onClick={() => handleRemove(BR._id)}> Delete Product </Button>
            </td>

          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  </div>
);
};

export default ManageProducts; 