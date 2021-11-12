import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(true);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        
        fetch('https://tush-bike.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Successfully Admin permission given!")
                    console.log(data);
                    setSuccess(true);
                }
                else {
                    alert("Failed to make Admin!")
                }
            })

        e.preventDefault()
    }
    return (
        <div className='container text-center mt-5 mb-5'>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Admin Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br />
                    <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
 
        </div>
    );
};

export default MakeAdmin;