import React, { useState } from "react";

const ResumeUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "resume_v1.pdf", size: "1.4MB", date: "May 15, 2023" },
    { name: "resume_v2.docx", size: "1.2MB", date: "Jun 22, 2023" },
  ]);
  const [uploadProgress, setUploadProgress] = useState(75);
  const [uploadingFile, setUploadingFile] = useState("resume.pdf");

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="border-b pb-4 mb-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Upload Your Resume</h1>
        <div className="space-x-4">
          <button className="text-blue-600">Register</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded">
            Login
          </button>
          <button className="bg-black text-white px-3 py-1 rounded">
            Post a Job
          </button>
        </div>
      </header>

      <p className="text-gray-600 mb-4">
        Upload your resume to get personalized job recommendations. We support
        PDF and DOCX formats.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center mb-6">
        <p className="font-semibold mb-2">Upload Resume</p>
        <p className="text-gray-500 text-sm">
          Drag and drop your resume file here or click to browse
        </p>
        <div className="mt-4 space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Browse Files
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Use Template
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Upload Progress</p>
        <div className="flex items-center space-x-3">
          <span className="bg-blue-100 p-2 rounded">📄</span>
          <p>{uploadingFile}</p>
          <p className="text-gray-500">{uploadProgress}% complete</p>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded mt-2">
          <div
            className="h-2 bg-green-500 rounded"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      </div>

      <div>
        <p className="font-medium mb-3">Previously Uploaded Resumes</p>
        <div className="border rounded-lg p-4">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <span className="flex items-center space-x-3">
                <span className="text-gray-500">📄</span>
                <p>{file.name}</p>
              </span>
              <span className="text-gray-500">{file.size}</span>
              <span className="text-gray-500">Uploaded on {file.date}</span>
              <button className="text-blue-600">⬇</button>
              <button className="text-red-600">🗑</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Continue to Job Preferences
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
