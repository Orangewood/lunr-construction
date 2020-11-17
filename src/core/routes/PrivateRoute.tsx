import React from 'react'
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ 
        render: Component,
        children, 
        isAuthenticated, 
        ...rest 
    }) =>{

    return <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) return <Component {...rest} {...props} />;
        else
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: {
                  from: props.location,
                },
              }}
            />
          );
      }}
    />
}
export default PrivateRoute;
