import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Spinner } from 'react-bootstrap';



const PrivateRoute = ({ children, ...rest }) => {
    const { user , isLoading} = useAuth();
    if (isLoading) {
        return <Spinner animation="border" role="status">
        <span className=" mt-5 text-center visually-hidden">Loading...</span>
      </Spinner>
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  };
  
  export default PrivateRoute;
