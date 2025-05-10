import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ title, company, location, salary, type, color }) => (
  <div
    className={`rounded-xl p-6 shadow-lg ${color} text-gray-800 hover:shadow-2xl transition-all`}
  >
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm font-medium">{company}</span>
      <span className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full">
        {type}
      </span>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-5">{location}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold">{salary}</span>
      <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
        Details
      </button>
    </div>
  </div>
);

const jobsData = [
  {
    title: "Senior UI/UX Designer",
    company: "Figma",
    location: "Remote",
    salary: "$70k/yr",
    type: "Full Time",
    color: "bg-orange-100",
  },
  {
    title: "Junior UI/UX Designer",
    company: "Adobe",
    location: "Onsite - Berlin",
    salary: "$45k/yr",
    type: "Intern",
    color: "bg-green-100",
  },
  {
    title: "Senior Motion Designer",
    company: "Meta",
    location: "Remote",
    salary: "$90k/yr",
    type: "Full Time",
    color: "bg-purple-100",
  },
  {
    title: "UX Designer",
    company: "Twitter",
    location: "Remote",
    salary: "$72k/yr",
    type: "Full Time",
    color: "bg-blue-100",
  },
  {
    title: "Graphic Designer",
    company: "FMC",
    location: "Hybrid - NYC",
    salary: "$60k/yr",
    type: "Part Time",
    color: "bg-pink-100",
  },
  {
    title: "Graphic Designer",
    company: "FMC",
    location: "Onsite - LA",
    salary: "$65k/yr",
    type: "Full Time",
    color: "bg-pink-100",
  },
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "$110k/yr",
    type: "Full Time",
    color: "bg-yellow-100",
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "Hybrid - Seattle",
    salary: "$105k/yr",
    type: "Full Time",
    color: "bg-red-100",
  },
  {
    title: "Product Manager",
    company: "Microsoft",
    location: "Onsite - Redmond",
    salary: "$130k/yr",
    type: "Full Time",
    color: "bg-teal-100",
  },
];

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterMode, setFilterMode] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "" || job.type === filterType;
    const matchesMode =
      filterMode === "" ||
      job.location.toLowerCase().includes(filterMode.toLowerCase());

    return matchesSearch && matchesType && matchesMode;
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">InJob</div>
        <div className="hidden md:flex space-x-6 text-3xl">
          <a href="#" className="hover:underline">
            Find Job
          </a>
          <Link to="/box" className="hover:underline">
            Messages
          </Link>
          <a href="#" className="hover:underline">
            Hiring
          </a>
          <a href="#" className="hover:underline">
            Community
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </div>
        <div className="flex space-x-4">
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-white px-8 py-6 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center bg-gray-100 rounded-full px-6 py-3">
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 text-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">
            🔍
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex p-8 gap-8">
        {/* Sidebar */}
        <aside className="w-1/4 lg:w-1/5 xl:w-1/4">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-3">
              Get Your Best Profession with Injob
            </h2>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-2xl">
              Learn More
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-6 shadow-lg h-auto">
            <h3 className="font-bold text-xl mb-4">Filters</h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Job Type</h4>
              <ul className="space-y-2 text-lg">
                {["Full Time", "Part Time", "Intern"].map((type) => (
                  <li
                    key={type}
                    onClick={() =>
                      setFilterType(filterType === type ? "" : type)
                    }
                    className={`cursor-pointer ${
                      filterType === type ? "text-blue-600 font-bold" : ""
                    }`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Work Mode</h4>
              <ul className="space-y-2 text-lg">
                {["Remote", "Onsite", "Hybrid"].map((mode) => (
                  <li
                    key={mode}
                    onClick={() =>
                      setFilterMode(filterMode === mode ? "" : mode)
                    }
                    className={`cursor-pointer ${
                      filterMode === mode ? "text-blue-600 font-bold" : ""
                    }`}
                  >
                    {mode}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setFilterMode("");
                setFilterType("");
              }}
              className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full text-center hover:bg-gray-300"
            >
              Clear Filters
            </button>

            <Link to="/box" className="mt-8 inline-block">
              <div className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xl text-center mt-4">
                Help?
              </div>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-4xl font-bold">Recommended jobs</h2>
            <span className="text-2xl text-gray-600">
              Sort by: Last updated
            </span>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredJobs.length ? (
              filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
            ) : (
              <p className="text-xl col-span-full">No jobs found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobListingPage;
