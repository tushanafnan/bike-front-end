import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Typography, Rating } from '@mui/material';
import useAuth from './../hooks/useAuth';


const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(2);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        console.log(data);

        axios
            .post("https://tush-bike.herokuapp.com/review", { ...data, ...user})
            .then((result) => {
                if (result.data.insertedId) {
                    alert("Successfully Review Added");
                    reset();
                }
            });
    };

    window.scroll(0, 0);
    return (
        <div className="add-resort-container">
            <h1 className="text-center text-success">Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("rate", { required: true })}
                    placeholder=" Ratings in 1 - 5"
                    className="border-0 field"
                />

               
                <textarea
                    className="mt-3 border-0 field"
                    {...register("Review", { required: true })}
                    placeholder="Review"
                />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Place Review" className="bg-info rounded-3 w-25 border-0 field" />
            </form>
        </div>
    );
};
{/* <Rating
                    {...register("ratings", { required: true })}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> */}
export default Review;