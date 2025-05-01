import React, { useState, useEffect } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    email: "",
    phone: "",
    careerStatus: "",
    roles: "",
    branch: "",
    location: "",
    year: "",
    skills: "",
    languages: "",
    interests: "",
    projects: "",
    profileSummary: "",
    achievements: "",
    employment: "",
    resume: null,
    profileImage: null, // New state for profile image
  });

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    calculateCompletion();
  }, [formData]);

  const calculateCompletion = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter((value) =>
      typeof value === "string" ? value.trim() !== "" : value !== null
    ).length;
    const percentage = Math.round((filledFields / totalFields) * 100);
    setCompletion(percentage);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "resume" || name === "profileImage" ? files[0] : value, // Handle profile image upload
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile submitted successfully!");
  };

  return (
    <main className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-3xl mt-10 text-lg">
      {/* Profile Completion Progress */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Profile Completion
          </h2>
          <span className="text-gray-600 font-semibold">{completion}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all duration-700 ${
              completion === 100 ? "bg-green-500" : "bg-blue-600"
            }`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>
        {completion === 100 ? (
          <p className="text-green-600 mt-2 font-medium text-sm">
            Profile Completed!
          </p>
        ) : completion > 70 ? (
          <p className="text-blue-500 mt-2 font-medium text-sm">
            Almost There!
          </p>
        ) : (
          <p className="text-gray-500 mt-2 font-medium text-sm">Keep going!</p>
        )}
      </section>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Profile Header */}
        <section className="flex items-center gap-8 mb-12 bg-gray-50 p-6 rounded-2xl shadow-lg">
          <div className="relative">
            {/* Profile Image Upload */}
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <img
              src={
                formData.profileImage
                  ? URL.createObjectURL(formData.profileImage)
                  : "https://via.placeholder.com/120"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-400"
            />
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <InputField
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <InputField
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Degree / Course"
            />
            <div className="flex gap-6">
              <InputField
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
              <InputField
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
          </div>
        </section>

        {/* Sections */}
        <Section title="Career Preferences">
          <InputField
            name="careerStatus"
            value={formData.careerStatus}
            onChange={handleChange}
            placeholder="Career Status (e.g., Actively looking)"
          />
          <InputField
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            placeholder="Preferred Roles (comma separated)"
          />
        </Section>

        <Section title="Education">
          <InputField
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Branch (e.g., IT)"
          />
          <InputField
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <InputField
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year (e.g., 2024)"
          />
        </Section>

        <Section title="Key Skills">
          <InputField
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
          />
        </Section>

        <Section title="Languages">
          <InputField
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="Languages Known (comma separated)"
          />
        </Section>

        <Section title="Interests">
          <InputField
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Interests (comma separated)"
          />
        </Section>

        <Section title="Projects">
          <InputField
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            placeholder="Projects (comma separated)"
          />
        </Section>

        <Section title="Profile Summary">
          <textarea
            name="profileSummary"
            value={formData.profileSummary}
            onChange={handleChange}
            placeholder="Write your profile summary..."
            className="textarea"
          />
        </Section>

        <Section title="Achievements">
          <InputField
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            placeholder="Achievements (comma separated)"
          />
        </Section>

        <Section title="Employment">
          <InputField
            name="employment"
            value={formData.employment}
            onChange={handleChange}
            placeholder="Employment Details"
          />
        </Section>

        {/* Upload Resume */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Upload Resume
          </h2>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 mb-6"
          />
          {formData.resume && (
            <p className="text-green-600 font-medium mb-4">
              Selected: {formData.resume.name}
            </p>
          )}
        </section>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 mt-10 shadow-xl w-full"
        >
          Submit Profile
        </button>
      </form>
    </main>
  );
};

// Reusable Section Wrapper
const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
    <div className="flex flex-col gap-5">{children}</div>
  </section>
);

// Reusable Input Field
const InputField = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="input bg-gray-100 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all text-gray-700"
  />
);

export default Profile;
