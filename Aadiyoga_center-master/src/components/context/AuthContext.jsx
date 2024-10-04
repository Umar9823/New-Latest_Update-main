import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from "../../Pages/firebase/firebaseConfig"; // Ensure this path is correct

// Initialize Firebase only if it hasn't been initialized yet
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firebase auth instance
const auth = firebase.auth();

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use Auth context
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// AuthProvider component to wrap the application and provide auth context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loginMessage, setLoginMessage] = useState('');

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
        localStorage.setItem('loginTime', Date.now()); // Store the current timestamp
        setLoginMessage('User is logged in.');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Clear user data from local storage
        localStorage.removeItem('loginTime'); // Clear login time from local storage
        setLoginMessage(''); // Clear login message
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedLoginTime = localStorage.getItem('loginTime');

        if (storedUser) {
            const currentTime = Date.now();
            const loginTime = parseInt(storedLoginTime, 10);
            const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

            // Check if the login time is within the last 3 days
            if (currentTime - loginTime < threeDaysInMillis) {
                setUser(JSON.parse(storedUser)); // Restore user data
                setLoginMessage('User is logged in.');
            } else {
                logout(); // If more than 3 days, log the user out
            }
        }

        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setLoginMessage('User is logged in.');
            } else {
                setLoginMessage('');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loginMessage }}>
            {children}
        </AuthContext.Provider>
    );
};
