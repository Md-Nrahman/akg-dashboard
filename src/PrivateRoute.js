import React from 'react';
import {useSelector} from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest}) => {

  const auth =  useSelector((state) => state.auth);
    
  
// var token=JSON.parse(localStorage.getItem('login'));

    return (
        <Route
        {...rest}
      render={({ props }) =>
        auth.login? (
          <Component {...props}/>
        ) : (
          <Redirect
            to= "/login"
          />
        )
      }
    />
    );
};

export default PrivateRoute;



