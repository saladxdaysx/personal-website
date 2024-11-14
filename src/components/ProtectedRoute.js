import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                if (!user) {
                    return <Redirect to="/" />;
                }
                return <Component {...props} />;
            }}
        />
    );
};

export default ProtectedRoute;
