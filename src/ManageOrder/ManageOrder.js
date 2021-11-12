import React, { useEffect, useState } from "react";

import axios from "axios";

import { Table, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
 
  const  ManageOrder = () => {
  const [bookedResort, setBookedResort] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://tush-bike.herokuapp.com/manageAllBookings")
      .then((result) => {
        
        setBookedResort(result.data);
      });
  }, [isLoading]);
 
  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you really want to Cancel this order?");
    if (proceed) {
    axios
      .delete(
        `https://tush-bike.herokuapp.com/deleteBooking/${id}`
      )
      .then((result) => {
        if (result.data.deletedCount) {
          setIsLoading(!false);
        }
      });
    }
  };

//Handle Status
const handleApprove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Does the product shipped??");
    if (proceed) {
      axios
        .put(
          `https://tush-bike.herokuapp.com/approveBooking/${id}`
        )
        .then((result) => {
          if (result.data.modifiedCount) {
            setIsLoading(!false);
          }
        });
    }
  }


  window.scroll(0, 0);
  return (
    <div className="container">
      <Table responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            
            <th>Shipping Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookedResort.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>{BR?.email}</td>
              <td>{BR?.date}</td>
              <td>
              <Button variant="info" className="text-white"onClick={() => handleApprove(BR._id)}>{BR?.status}</Button> 
              
              </td>
              <td>
                <Button
                  variant="danger"
                  className="text-white"
                  onClick={() => handleRemove(BR._id)}
                >
                  {" "}
                  Cancel{" "}
                  <span>
                    {" "}
                    <MdDelete />{" "}
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
 export default ManageOrder;