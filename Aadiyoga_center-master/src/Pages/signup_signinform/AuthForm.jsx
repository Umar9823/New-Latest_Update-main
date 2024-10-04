import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BounceLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();



    const handleSignUpClick = () => {
        navigate("/"); 
        
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, password, mobile };
        setLoading(true); // Start loading

        try {
            if (isSignUp) {
                const response = await fetch('https://yogabackend-83ky.onrender.com/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                });
                const data = await response.json();
                if (response.ok) {
                    toast.success('Sign Up Successful. You can now log in!');
                    setIsSignUp(false);
                } else {
                    toast.error(data.message);
                }
            } else {
                const loginData = { email, password };
                const response = await fetch('https://yogabackend-83ky.onrender.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loginData),
                });
                const data = await response.json();
                if (response.ok) {
                    toast.success('Login Successful. Welcome back!');
                    navigate("/"); 

                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleForgotPassword = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch('https://yogabackend-83ky.onrender.com/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsOtpSent(true);
                toast.success('OTP Sent. Check your email for the OTP');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleVerifyOtp = async () => {
        if (!email || !otp) {
            toast.error('Email and OTP are required');
            return;
        }

        setLoading(true); // Start loading
        try {
            const response = await fetch('https://yogabackend-83ky.onrender.com/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsOtpVerified(true);
                toast.success('OTP Verified. You can now reset your password');
            } else {
                toast.error(data.message || 'OTP verification failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleResetPassword = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch('https://yogabackend-83ky.onrender.com/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Password Reset. Your password has been updated');
                setIsForgotPassword(false);
                setIsOtpSent(false);
                setIsOtpVerified(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
                <ToastContainer />
                {loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
                        <BounceLoader color="#3b82f6" loading={loading} size={60} />
                    </div>
                )}
                {isForgotPassword ? (
                    <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
                ) : (
                    <h2 className="text-3xl font-bold text-center mb-4">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
                )}

                {isForgotPassword ? (
                    <>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mb-4 border rounded"
                            autoComplete="off"
                        />
                        {!isOtpSent && (
                            <button
                                onClick={handleForgotPassword}
                                className="w-full bg-blue-500 text-white p-2 rounded"
                            >
                                Send OTP
                            </button>
                        )}
                        {isOtpSent && !isOtpVerified && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full p-2 mb-4 border rounded"
                                    autoComplete="off"
                                />
                                <button
                                    onClick={handleVerifyOtp}
                                    className="w-full bg-green-500 text-white p-2 rounded"
                                >
                                    Verify OTP
                                </button>
                            </>
                        )}
                        {isOtpVerified && (
                            <>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full p-2 mb-4 border rounded"
                                    autoComplete="off"
                                />
                                <button
                                    onClick={handleResetPassword}
                                    className="w-full bg-green-500 text-white p-2 rounded"
                                >
                                    Reset Password
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {isSignUp && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        {!isSignUp && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={() => setIsForgotPassword(true)}
                                    className="text-blue-500 text-sm"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}
                        <button
                            type="submit"
                            className={`w-full p-2 rounded text-white ${isSignUp ? 'bg-blue-500' : 'bg-blue-500'}`}
                        >
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                    </form>
                )}
                <div className="text-center mt-4">
                    {!isForgotPassword && (
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-blue-500"
                        >
                            {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
