import React from "react";
import logo from "../img/logo.png";
import Profile from "../img/profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-gray-10">
      {/* Left: Logo and Links */}
      <div className="flex items-center gap-8">
        <img src={logo} alt="logo" className="w-[200px]" />

        <ul className="flex gap-9 text-3xl font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Prepare</li>
          <li className="hover:text-blue-600 cursor-pointer">Participate</li>
          <li className="hover:text-blue-600 cursor-pointer">Opportunities</li>
        </ul>
      </div>

      {/* Center: Search bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search jobs here"
          className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-xl w-[500px]"
        />
        <button className="text-white bg-blue-600 p-3 rounded-full">🔍</button>
      </div>

      {/* Right: Login, Notifications and Profile */}
      <div className="flex items-center gap-6">
        {/* Login Button */}
        <Link to="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xl hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
    {/* don't know */}
        {/* Notification Bell with badge */}
        <div className="relative cursor-pointer">
          <span className="text-3xl text-gray-600">🔔</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        {/* Profile Section */}
        <Link
          to="/profile"
          className="relative flex items-center gap-2 cursor-pointer border px-2 py-1 rounded-full"
        >
          <span className="text-3xl text-gray-600">≡</span>
          <img
            src={Profile}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
