import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path if needed

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    // If user is logged in, render children, otherwise redirect to "/signin"
    return user ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
