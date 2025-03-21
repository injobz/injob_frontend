import { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Your Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join inJob to discover AI-matched job opportunities
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <label className="block text-sm font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password (min. 8 characters)"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm">
              I agree to the Terms of Service and Privacy Policy
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
