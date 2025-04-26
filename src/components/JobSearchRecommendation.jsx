import React from "react";

const JobSearchRecommendation = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="text-xl font-bold">InJob</div>
        <div className="space-x-4">
          <button className="text-gray-600">Register</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>

      <div className="mt-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center">
          Find Your Perfect Job
        </h1>
        <div className="flex items-center border rounded mt-4 p-2 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search job titles, skills, or company"
            className="flex-grow p-2 focus:outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 p-4 bg-white rounded shadow-sm max-w-4xl mx-auto">
        <h2 className="text-lg font-bold">Filters</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <input
            type="text"
            placeholder="Location"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Skills (e.g., JavaScript)"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Min - Max Salary"
            className="p-2 border rounded"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <label>
            <input type="checkbox" /> Remote Only
          </label>
          <label>
            <input type="checkbox" /> Experience Level
          </label>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="mt-6 grid grid-cols-3 gap-4 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((job, index) => (
          <div key={index} className="p-4 bg-white shadow-sm rounded">
            <h3 className="text-lg font-bold">Job Title</h3>
            <p className="text-gray-600">Company • Location • Salary</p>
            <div className="mt-2 space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Apply Now
              </button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded">
          Load More Results
        </button>
      </div>
    </div>
  );
};

export default JobSearchRecommendation;
