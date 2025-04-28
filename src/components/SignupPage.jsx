import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden font-sans">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col justify-center items-center p-10 relative overflow-hidden">
        {/* Menu Icon */}
        <div className="absolute top-5 left-5 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
          &#9776;
        </div>

        {/* Welcome Text */}
        <h2 className="text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fadeIn">
          Welcome Back!
        </h2>
        <p className="text-white text-center px-10 mb-8 leading-relaxed tracking-wide text-xl animate-fadeIn delay-100">
          To keep connected with us, please login with your personal info.
        </p>

        {/* Sign In Button */}
        <Link to="/login">
          <button className="border-2 border-white px-10 py-3 rounded-full text-white text-xl font-semibold hover:bg-white hover:text-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Sign In
          </button>
        </Link>

        {/* Bottom Clouds */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-32 blur-sm opacity-70"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z"
              fill="#3b82f6"
            />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10 relative overflow-hidden">
        {/* Create Account Text */}
        <h2 className="text-5xl font-bold text-blue-600 mb-2 animate-fadeIn">
          Create Account
        </h2>
        <p className="text-gray-500 mb-8 text-center text-lg px-6 leading-relaxed animate-fadeIn delay-100">
          It takes less than a minute to create an account.
          <br />
          Already have one?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
          .
        </p>

        {/* Form */}
        <form className="w-full max-w-sm space-y-5 animate-fadeIn delay-200">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-blue-300 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-blue-300 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-blue-300 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <input
            type="password"
            placeholder="Re-enter password"
            className="w-full border border-blue-300 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Create Account
          </button>
        </form>

        {/* Bottom Clouds */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-32 blur-sm opacity-70"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z"
              fill="#bfdbfe"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
