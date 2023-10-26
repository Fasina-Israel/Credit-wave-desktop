import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const auth = JSON.parse(window.sessionStorage.getItem('auth'));
    // console.log(token)
    const token = auth?.token;    

    // const tokenDemo = auth?.token

    if (!token) {
        return <Navigate to="/login" replace />;
    };
    return children;
};

export default ProtectedRoute;
