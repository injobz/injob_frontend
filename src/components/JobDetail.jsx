import React from "react";

const JobDetail = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <nav className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">inJob</h1>
        <div>
          <button className="px-4 py-2 border rounded-md mr-2">Register</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
            Login
          </button>
          <button className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md">
            Post a Job
          </button>
        </div>
      </nav>

      <div className="mt-6">
        <h2 className="text-3xl font-bold">Senior UX Designer</h2>
        <p className="text-gray-600">TechCorp Inc. - San Francisco, CA</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {[
          { label: "Salary Range", value: "$120,000 - $150,000" },
          { label: "Experience", value: "5+ years" },
          { label: "Job Type", value: "Full-time" },
          { label: "Remote", value: "Hybrid (2 days in office)" },
        ].map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-500">{item.label}</p>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold">Job Description</h3>
      <p className="text-gray-600 mt-2">
        TechCorp is seeking a Senior UX Designer to join our product team.
        You'll be responsible for creating intuitive, user-centered designs for
        our enterprise software solutions.
      </p>

      <h3 className="text-xl font-bold mt-6">Requirements</h3>
      <ul className="list-disc pl-6 text-gray-600">
        <li>5+ years of UX design experience</li>
        <li>Proficiency with Figma, Sketch, and Adobe Creative Suite</li>
        <li>Experience conducting user research and usability testing</li>
        <li>Strong portfolio demonstrating problem-solving skills</li>
        <li>Bachelor's degree in Design, HCI, or related field</li>
      </ul>

      <h3 className="text-xl font-bold mt-6">Skills</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {[
          "UX Design",
          "Wireframing",
          "Prototyping",
          "User Research",
          "Figma",
        ].map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 rounded-full text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-bold">Apply for this position</h3>
        <p className="text-gray-600 text-sm mt-1">
          Submit your application through the company website or use our 1-click
          apply feature with your inJob profile.
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md mr-2">
            Apply Now
          </button>
          <button className="px-4 py-2 border rounded-md">Save Job</button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6">Similar Jobs</h3>
      <ul className="text-gray-600 mt-2">
        <li>UX/UI Designer - DesignHub - Remote - $80K-$110K</li>
        <li>Product Designer - InnovateCo - New York, NY - $100K-$130K</li>
        <li>Senior UI Designer - CreativeWorks - Austin, TX - $110K-$140K</li>
      </ul>

      <button className="mt-6 px-4 py-2 border rounded-md">
        Back to Search Results
      </button>
    </div>
  );
};

export default JobDetail;
