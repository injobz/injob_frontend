import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <div className="text-lg font-bold">inJob</div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-700">
            Features
          </a>
          <a href="#" className="text-gray-700">
            How it Works
          </a>
          <a href="#" className="text-gray-700">
            Pricing
          </a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Post a Job
          </button>
        </div>
      </nav>

      {/* Dashboard */}
      <h1 className="text-2xl font-semibold mt-6">Dashboard</h1>

      {/* Profile Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[
          {
            title: "Profile Completion",
            desc: "Complete your profile to improve job matches",
            btn1: "Edit Profile",
            btn2: "View Profile",
          },
          {
            title: "Resume",
            desc: "Upload or update your resume for better recommendations",
            btn1: "Upload Resume",
            btn2: "View Current",
          },
          {
            title: "Job Preferences",
            desc: "Set preferences to get personalized job matches",
            btn1: "Update Preferences",
            btn2: "View Details",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                {item.btn1}
              </button>
              <button className="border px-4 py-2 rounded-lg">
                {item.btn2}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Jobs */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Recommended Jobs</h2>
        <div className="flex gap-4 mt-4 border-b">
          {["All Jobs", "Saved", "Applied", "Interviews"].map((tab, index) => (
            <button key={index} className="px-4 py-2">
              {tab}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          {[
            {
              role: "Senior UX Designer",
              company: "Google",
              location: "San Francisco",
              salary: "$120-150K",
            },
            {
              role: "Frontend Developer",
              company: "Microsoft",
              location: "Remote",
              salary: "$90-120K",
            },
            {
              role: "Product Manager",
              company: "Amazon",
              location: "Seattle",
              salary: "$130-160K",
            },
            {
              role: "Data Scientist",
              company: "Netflix",
              location: "Los Angeles",
              salary: "$110-140K",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b p-4"
            >
              <div>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="text-gray-600">
                  {job.company} • {job.location} • {job.salary}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="border p-2 rounded-lg">🔄</button>
                <button className="border p-2 rounded-lg">🔗</button>
              </div>
            </div>
          ))}
          <button className="w-60 mt-4 bg-indigo-600 text-white py-2 rounded-lg">
            View All Recommendations
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          {[
            {
              activity: "Viewed Frontend Developer at Airbnb",
              time: "2 hours ago",
            },
            {
              activity: "Applied for UX Designer at Spotify",
              time: "Yesterday",
            },
            { activity: "Saved Product Manager at Apple", time: "2 days ago" },
          ].map((act, index) => (
            <div key={index} className="flex justify-between border-b p-4">
              <span>{act.activity}</span>
              <span className="text-gray-600">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
