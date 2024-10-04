import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (isSignUp && !mobileRegex.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    alert(isSignUp ? 'Sign Up Successful' : 'Login Successful');
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
    alert('Google Login Successful');
  };

  const handleGoogleFailure = (response) => {
    console.log(response);
    alert('Google Login Failed');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
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
            />
          </div>
          {!isSignUp && (
            <div className="text-right">
              <button type="button" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white  bg-heading rounded hover:bg-blue-700 transition duration-200 font-semibold"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:underline font-medium"
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
        <div className="text-center mt-6 shadow-lg p-2 rounded">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google Client ID
            buttonText="Continue with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
