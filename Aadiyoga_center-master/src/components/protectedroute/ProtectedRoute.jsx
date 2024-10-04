// src/components/protectedroute/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path if needed

const ProtectedRoute = ({ element }) => {
    const { user } = useAuth();

    return user ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
