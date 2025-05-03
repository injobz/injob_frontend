import React from "react";

const AccountSetting = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      <div className="border-b pb-3 mb-4">
        <ul className="flex space-x-6 text-gray-500">
          <li className="cursor-pointer font-medium text-black">Profile</li>
          <li className="cursor-pointer">Notifications</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Billing</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Personal Information</h3>
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full p-2 border rounded"
          type="tel"
          placeholder="Phone Number"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Professional Title"
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Bio"
          rows="3"
        ></textarea>

        <h2 className="text-xl font-medium">Profile Picture</h2>
        <div className="border p-3 rounded flex items-center justify-between">
          <span>Current Photo</span>
          <div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
              Upload New
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </div>
        </div>

        <h3 className="text-xl font-medium">Password & Security</h3>
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Current Password"
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="New Password"
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Confirm New Password"
        />
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4" />
          <label>Two-Factor Authentication</label>
        </div>

        <h3 className="text-xl font-medium">Account Management</h3>
        <button className="w-full bg-gray-200 p-2 rounded">
          Download Personal Data
        </button>
        <button className="w-full bg-red-500 text-white p-2 rounded">
          Delete Account
        </button>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Logouts
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
