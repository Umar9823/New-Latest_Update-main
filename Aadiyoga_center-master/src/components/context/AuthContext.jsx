import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../Pages/firebase/firebaseConfig'; // Ensure this path is correct

// Initialize Firebase once
const app = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = firebase.auth(app);

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use Auth context
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
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
    
        if (storedUser && storedLoginTime) {
            const checkLoginExpiry = () => {
                const currentTime = Date.now();
                const loginTime = parseInt(storedLoginTime, 10);
                const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000;
    
                if (currentTime - loginTime >= threeDaysInMillis) {
                    logout(); // Log user out if login expired
                } else {
                    setUser(JSON.parse(storedUser)); // Restore user session
                }
            };
    
            // Initial check on component mount
            checkLoginExpiry();
    
            // Set interval to check every hour (3600000ms = 1 hour)
            const interval = setInterval(checkLoginExpiry, 3600000);
    
            // Clean up interval on unmount
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loginMessage }}>
            {children}
        </AuthContext.Provider>
    );
};
