import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="text-lg font-bold">inJob</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:underline">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            How it Works
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Pricing
          </a>
        </div>
        <a href="#" className="text-gray-600 hover:underline">
          Back to Home
        </a>
      </nav>

      {/* Auth Box */}
      <div className="bg-white p-8 rounded shadow-md w-96 mt-6">
        {/* Toggle Login/Register */}
        <div className="flex justify-between mb-4 border-b pb-2">
          <button
            className={`px-4 py-2 ${
              isLogin ? "font-bold border-b-2 border-black" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${
              !isLogin ? "font-bold border-b-2 border-black" : ""
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          {isLogin
            ? "Sign in to your account to continue"
            : "Register to get started"}
        </p>

        {/* Form Fields */}
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          )}
          {isLogin && (
            <a href="#" className="text-blue-500 text-sm float-right mb-4">
              Forgot Password?
            </a>
          )}
          <button className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
