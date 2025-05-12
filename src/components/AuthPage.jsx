import React from "react";
import image from "../img/image.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Side - Login Form */}
      
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <img src={logo} alt="logo" className="w-40 mb-6" />

        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          Welcome back
        </h2>
        <p className="text-gray-500 mb-6">Please enter your details</p>

        <form className="w-[89%] max-w-md">
          <label className="block mb-2 text-gray-700 text-xl">
            Email address
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-gray-700 text-xl">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />

          <div className="flex justify-between items-center mb-4 text-xl">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold transition mb-3">
            Sign in
          </button>

          <button className="w-full border border-gray-300 p-3 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            <span className="text-xl">Sign in with Google</span>
          </button>
        </form>

        <p className="text-gray-600 mt-6 text-xl">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-1/2 h-screen bg-white flex justify-center items-center">
        <img
          src={image}
          alt="Illustration"
          className="w-[95%] h-[95%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AuthPage;
