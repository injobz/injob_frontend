import React from "react";
import bgocean from "../img/bgocean.webp";
import Jobsearch from "../img/Jobsearch.webp";
import oneclick from "../img/oneclick.jpg";
import logo from "../img/logo.png";
const JobLandingPage = () => {
  return (
    <div className="font-[Poppins]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-sm">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="w-10 mb-6" />
        </div>
        <ul className="flex gap-6 text-2xl font-medium">
          <li className="text-blue-600 border-b-2 border-blue-600">
            How It Works
          </li>
          <li className="hover:text-blue-600">Features</li>
          <li className="hover:text-blue-600">Testimonials</li>
        </ul>
        <div className="text-gray-600 text-3xl h-8 cursor-pointer">🔍</div>
      </nav>

      {/* Hero Section */}
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
        <button className="text-xl mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
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
              <button className="text-xl px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Try now
              </button>
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
              <button className="text-xl px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Try now
              </button>
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
        <div className="flex justify-center items-center gap-3 text-4xl font-extrabold text-blue-600 mb-10">
          <div className="w-3 h-3 bg-pink-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
          <span>inJob</span>
        </div>

        {/* Subscribe Section */}
        <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 border border-gray-300 rounded-lg w-full max-w-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white text-xl font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mt-10 text-left justify-items-center text-base text-gray-700">
          <div>
            <p className="font-semibold text-2xl mb-3 text-gray-800">Product</p>
            <p className="hover:text-blue-600 cursor-pointer">Features</p>
            <p className="hover:text-blue-600 cursor-pointer">Pricing</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mb-3 text-gray-800">
              Resources
            </p>
            <p className="hover:text-blue-600 cursor-pointer">Blog</p>
            <p className="hover:text-blue-600 cursor-pointer">User Guides</p>
            <p className="hover:text-blue-600 cursor-pointer">Webinars</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mb-3 text-gray-800">Company</p>
            <p className="hover:text-blue-600 cursor-pointer">About Us</p>
            <p className="hover:text-blue-600 cursor-pointer">Contact</p>
          </div>
          <div>
            <p className="font-semibold text-2xl mb-3 text-gray-800">
              Plans & Pricing
            </p>
            <p className="hover:text-blue-600 cursor-pointer">Startup</p>
            <p className="hover:text-blue-600 cursor-pointer">Organization</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-14 text-gray-500">
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
