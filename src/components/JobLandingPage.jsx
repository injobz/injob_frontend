import React from "react";

const JobLandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Dream Job With AI-Powered Recommendations
        </h1>
        <p className="text-gray-600 mt-4">
          Let our AI match you with job opportunities tailored to your skills
          and experience.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </header>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How inJob Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-8 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Upload Resume</h3>
            <p className="text-gray-600 mt-2">
              Simply upload your resume in PDF or DOCX format.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold">AI Analysis</h3>
            <p className="text-gray-600 mt-2">
              Our AI analyzes your skills, experience, and preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Get Matched</h3>
            <p className="text-gray-600 mt-2">
              Receive personalized job recommendations within seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose inJob */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Why Choose inJob
        </h2>
        <ul className="mt-6 space-y-4 text-center">
          <li className="text-lg text-gray-700">✅ AI-Powered Matching</li>
          <li className="text-lg text-gray-700">✅ Time Saving</li>
          <li className="text-lg text-gray-700">✅ Higher Success Rate</li>
          <li className="text-lg text-gray-700">✅ Privacy First</li>
        </ul>
      </section>

      {/* Call To Action */}
      <footer className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Ready to find your perfect job?</h2>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Create Account
        </button>
      </footer>
    </div>
  );
};

export default JobLandingPage;
