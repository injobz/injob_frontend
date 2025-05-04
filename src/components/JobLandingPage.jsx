import React, { useRef } from "react"; // Added useRef
import bgocean from "../img/bgocean.webp";
import Jobsearch from "../img/Jobsearch.webp";
import oneclick from "../img/oneclick.jpg";
import logo from "../img/logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const JobLandingPage = () => {
  // Add file input ref
  const fileInputRef = useRef(null);

  // Handle upload button click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here you can handle the file upload
      alert(`Uploaded file: ${file.name}`);
    }
  };

  return (
    <div className="font-[Poppins]">
      {/* Add hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Added onClick handler */}
      <section
        className="text-center h-[50vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgocean})` }}
      >
        <h1 className="text-6xl font-bold text-white">
          Find Your Dream Job with AI
        </h1>
        <p className="text-white mt-2 text-2xl ">
          inJob uses AI to match your resume with the perfect opportunities
        </p>
        <button
          onClick={handleUploadClick} // Added click handler
          className="text-xl mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload Resume
        </button>
      </section>

      {/* How It Works */}
      <section className="py-32 px-10 text-center bg-white">
        <h2 className="text-5xl font-bold mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1: Upload Resume */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 h-[300px]">
            <p className="text-5xl mb-4">⬆️</p>
            <h3 className="font-semibold text-3xl mb-2">Upload Resume</h3>
            <p className="text-gray-600 text-xl">
              Start your journey by uploading your resume. inJob supports all
              major file formats including PDF, DOCX, and TXT. No resume? No
              worries! You can fill in your details using our interactive job
              application form.
            </p>
          </div>

          {/* Card 2: AI Analyzes Skills */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <p className="text-5xl mb-4">🧠</p>
            <h3 className="font-semibold text-3xl mb-2">AI Analyzes Skills</h3>
            <p className="text-gray-600 text-xl">
              Our advanced AI parses your resume and extracts relevant
              information such as your skills, experience, education, and
              keywords. It then maps your profile to industry standards to
              better understand your strengths and goals.
            </p>
          </div>

          {/* Card 3: Get Job Matches */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <p className="text-5xl mb-4">📥</p>
            <h3 className="font-semibold text-3xl mb-2">Get Job Matches</h3>
            <p className="text-gray-600 text-xl">
              Receive personalized job recommendations that match your unique
              profile. Whether you're looking for full-time, part-time, remote,
              or freelance roles — we’ve got the right match for you, delivered
              in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="text-center py-20 px-6 bg-white">
        <h2 className="text-6xl font-bold mb-6 text-gray-800">
          Discover Your Career
        </h2>
        <p className="text-2xl text-gray-600 mb-10">
          Unlock your dream job with innovative tools to simplify your job
          search.
        </p>

        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Card on the left with left margin */}
          <div className="bg-white p-10 rounded-lg shadow-lg w-[800px] h-[500px] flex flex-col justify-between text-left ml-[150px]">
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 mb-4">
                Personalized Job Matching
              </h3>
              <p className="text-gray-700 mb-4 text-2xl">
                Get tailored job recommendations based on your skills,
                experience, and preferences. Our intelligent algorithm analyzes
                your resume, preferred industries, and previous applications to
                deliver the most relevant job listings daily.
              </p>
              <ul className="list-disc list-inside text-xl text-gray-600">
                <li>Smart filters for roles, salary, and location</li>
                <li>AI-powered resume analysis</li>
                <li>Real-time updates for new job matches</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <Link to="/Job-list">
                <button className="text-xl px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                  Try now
                </button>
              </Link>
              <button className="text-xl px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300">
                Learn more
              </button>
            </div>
          </div>

          {/* Image on the right with reduced right margin */}
          <img
            src={Jobsearch}
            alt="Job Search"
            className="rounded w-[800px] h-[500px] object-cover shadow-lg mr-[150px]"
          />
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          {/* Image on the left with left margin */}
          <img
            src={oneclick}
            alt="One Click Apply"
            className="rounded w-[800px] h-[500px] object-cover shadow-lg ml-[150px]"
          />

          {/* Card on the right with reduced right margin */}
          <div className="bg-white p-10 rounded-lg shadow-lg w-[800px] h-[500px] flex flex-col justify-between text-left mr-[150px]">
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 mb-4">
                One-Click Apply
              </h3>
              <p className="text-gray-700 mb-4 text-2xl">
                Streamline your application process with a single tap to send
                your resume and details. Save time and never miss an opportunity
                by applying to multiple positions instantly.
              </p>
              <ul className="list-disc list-inside text-xl text-gray-600">
                <li>Instant application submission</li>
                <li>Save frequently used details and documents</li>
                <li>Track application status in one place</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <Link to="/Job-list">
                <button className="text-xl px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                  Try now
                </button>
              </Link>

              <button className="text-xl px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 bg-white text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-800">
          Hear from our awesome users!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {[
            {
              name: "Emily R.",
              quote: "inJob helped me land my dream job in just two weeks!",
              role: "UX Designer at TechCorp",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Michael T.",
              quote: "The job search experience is unmatched—highly recommend!",
              role: "Full Stack Developer at DevSolutions",
              image: "https://randomuser.me/api/portraits/men/35.jpg",
            },
            {
              name: "Sophia L.",
              quote: "Fantastic platform with great opportunities for growth!",
              role: "Marketing Analyst at BrandBoost",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "David K.",
              quote: "A seamless experience from application to interview!",
              role: "Data Scientist at AIWorks",
              image: "https://randomuser.me/api/portraits/men/54.jpg",
            },
          ].map((user, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 border rounded-lg shadow-lg flex flex-col items-center text-center h-[400px] w-full"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4 shadow-md object-cover"
              />
              <p className="font-bold text-xl">{user.name}</p>
              <p className="text-sm text-gray-500 mb-2">{user.role}</p>
              <p className="text-yellow-400 text-xl mb-2">★★★★★</p>
              <p className="text-gray-600 text-base italic">“{user.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-6 bg-white flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">
          Join inJob Today!
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Sign up to discover personalized job opportunities and simplify your
          career journey.
        </p>

        <form className="w-full max-w-xl flex flex-col gap-6">
          <input
            type="email"
            placeholder="example@email.com"
            className="px-6 py-4 border border-gray-300 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="********"
            className="px-6 py-4 border border-gray-300 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white px-10 py-20 text-center border-t border-gray-200">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="logo" className="w-[160px] mb-4" />
        </div>

        {/* Subscribe Section */}
        <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 border border-gray-300 rounded-lg w-full max-w-sm text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white text-xl font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* About Section */}
        <div className="max-w-2xl mx-auto text-gray-700 text-base mb-10 text-xl">
          <p>
            <strong>inJob</strong> connects talent with opportunity. Whether
            you're looking for your first job or your next big role, our
            platform is designed to help you succeed.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-gray-500">
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8.5h4.56V24H.23V8.5zm7.89 0h4.37v2.1h.06c.61-1.16 2.11-2.37 4.34-2.37 4.64 0 5.49 3.05 5.49 7.01V24h-4.57v-6.86c0-1.63-.03-3.73-2.28-3.73-2.29 0-2.64 1.78-2.64 3.61V24h-4.57V8.5z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mt-10 text-left justify-items-center text-base text-gray-700">
          <div>
            <p className="font-semibold text-3xl mb-3 text-gray-800">Product</p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Features
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Pricing
            </p>
          </div>
          <div>
            <p className="font-semibold text-3xl mb-3 text-gray-800">
              Resources
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">Blog</p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              User Guides
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Webinars
            </p>
          </div>
          <div>
            <p className="font-semibold text-3xl mb-3 text-gray-800">Company</p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              About Us
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Contact
            </p>
          </div>
          <div>
            <p className="font-semibold text-3xl mb-3 text-gray-800 text-xl">
              Plans
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Startup
            </p>
            <p className="hover:text-blue-600 cursor-pointer text-xl">
              Organization
            </p>
          </div>
        </div>

        {/* App Download Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-black text-white px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800"
          >
            <svg className="w-8 h-8" fill="white" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-2.8-23.3 6.6-45.3 24.4-61.4-22.5-33.5-57.1-52.5-103.3-55.2-43.5-2.6-90.5 25.8-108.5 25.8-18 0-60.2-25.1-93.5-25.1-47.8 0-87.3 27.8-111.1 76.7C-7.6 324.7 62.4 424 113.4 424c30.5 0 53.6-22.8 94.3-22.8s61.2 22.8 94.3 22.8c52.1 0 97.6-76.6 83.1-132.1zM267.3 64c0-33.6-25.5-61-57-61s-57 27.4-57 61c0 33.7 25.4 60.9 57 60.9s57-27.2 57-60.9z" />
            </svg>
            <span className="text-xl">Download on Play Store</span>
          </a>
          <a
            href="#"
            className="bg-black text-white px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800"
          >
            <svg className="w-8 h-8" fill="white" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-2.8-23.3 6.6-45.3 24.4-61.4-22.5-33.5-57.1-52.5-103.3-55.2-43.5-2.6-90.5 25.8-108.5 25.8-18 0-60.2-25.1-93.5-25.1-47.8 0-87.3 27.8-111.1 76.7C-7.6 324.7 62.4 424 113.4 424c30.5 0 53.6-22.8 94.3-22.8s61.2 22.8 94.3 22.8c52.1 0 97.6-76.6 83.1-132.1zM267.3 64c0-33.6-25.5-61-57-61s-57 27.4-57 61c0 33.7 25.4 60.9 57 60.9s57-27.2 57-60.9z" />
            </svg>
            <span className="text-xl">Download on App Store</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-10 text-gray-500">
          © 2025 inJob, Inc. •{" "}
          <span className="hover:text-blue-500 cursor-pointer">Privacy</span> •{" "}
          <span className="hover:text-blue-500 cursor-pointer">Terms</span> •{" "}
          <span className="hover:text-blue-500 cursor-pointer">Sitemap</span>
        </p>
      </footer>
    </div>
  );
};

export default JobLandingPage;
