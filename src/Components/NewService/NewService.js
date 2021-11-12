import React from "react";
import axios from "axios";
import './NewService.css'
import { useForm } from "react-hook-form";
const NewService = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://tush-bike.herokuapp.com/addPackage", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Bike Added");
          reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div className="add-resort-container">
      <h1 className="text-center text-success">Add New Bike</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder=" Bike Model"
          className="border-0 field"
        />
 
        <input
          {...register("price", { required: true })}
          placeholder=" Desired Selling Price "
          className="border-0 field"
        />
 
 

        <textarea
          className="mt-3 border-0 field"
          {...register("description", { required: true })}
          placeholder="About Bike Condition"
        />
        <input
          {...register("url", { required: true })}
          placeholder="Bike Image"
          className="border-0 field"
        />
        {errors.exampleRequired && <span>This field is required</span>}
 
        <input type="submit" value="Add Bike" className="bg-info rounded-3 w-25 border-0 field" />
      </form>
    </div>
  );
};
 
export default NewService;