import React from "react";
import image from "../img/image.png";
const AuthPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">InJob</h1>
        <h2 className="text-3xl font-semibold mb-4">Welcome back</h2>
        <p className="text-gray-500 mb-6">Please enter your details</p>

        <form className="w-3/4">
          <label className="block mb-2 text-gray-600">Email address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your password"
          />

          <div className="flex justify-between items-center mb-4">
            <div>
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember for 30 days</span>
            </div>
            <a href="#" className="text--600 font-semibold">
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold mb-4">
            Sign in
          </button>

          <button className="w-full border p-3 rounded-lg flex items-center justify-center">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </form>

        <p className="text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-1/2 h-screen bg-purple-200 flex justify-center items-center">
        <img
          src={image}
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthPage;
