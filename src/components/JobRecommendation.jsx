import React from "react";

const JobRecommendation = () => {
  const jobs = [
    {
      company: "Google",
      location: "San Francisco",
      title: "Senior UX Designer",
      matchScore: "92%",
      posted: "7 days ago",
      type: "Remote",
    },
    {
      company: "Microsoft",
      location: "Seattle",
      title: "Product Designer",
      matchScore: "85%",
      posted: "1 day ago",
      type: "Hybrid",
    },
    {
      company: "Adobe",
      location: "Remote",
      title: "UI/UX Designer",
      matchScore: "89%",
      posted: "3 days ago",
      type: "Full-time",
    },
    {
      company: "Apple",
      location: "Cupertino",
      title: "Interaction Designer",
      matchScore: "88%",
      posted: "5 days ago",
      type: "On-site",
    },
    {
      company: "Amazon",
      location: "New York",
      title: "UX Researcher",
      matchScore: "90%",
      posted: "1 week ago",
      type: "Hybrid",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold">Job Recommendations</h2>
      <p className="text-gray-600 mt-2">
        Based on your resume, we've found these job matches for you.
      </p>
      <div className="mt-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4 shadow">
            <h3 className="font-semibold">
              {job.company} - {job.location}
            </h3>
            <p className="text-lg font-medium">{job.title}</p>
            <p className="text-sm text-gray-500">
              Match score: {job.matchScore} • Posted {job.posted} • {job.type}
            </p>
            <div className="mt-2 flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Apply Now
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// done done

export default JobRecommendation;
