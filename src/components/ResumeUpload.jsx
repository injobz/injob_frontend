import React, { useState } from "react";

const ResumeUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "resume_v1.pdf", size: "1.4MB", date: "May 15, 2023" },
    { name: "resume_v2.docx", size: "1.2MB", date: "Jun 22, 2023" },
  ]);
  const [uploadProgress, setUploadProgress] = useState(75);
  const [uploadingFile, setUploadingFile] = useState("resume.pdf");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">File Upload</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">
            Register
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
            Login
          </button>
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow">
            Post a Job
          </button>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Upload Box */}
        <div className="flex-1 bg-white border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-8 shadow-md">
          <div className="text-gray-400 text-6xl mb-4">☁️</div>
          <p className="text-gray-600 mb-2">Drop your files or</p>
          <button className="text-blue-600 hover:underline font-semibold">
            Browse files
          </button>
        </div>

        {/* Upload Info Section */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-md border">
          <p className="text-gray-600 mb-4">
            You can choose to upload more than one file at a time. Make sure
            each file size does not exceed{" "}
            <span className="font-semibold">5MB</span>.
          </p>
          <textarea
            placeholder="Add comments"
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
          ></textarea>

          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
              Upload
            </button>
            <button className="text-gray-600 hover:underline">Cancel</button>
          </div>

          {/* File Details */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-semibold">File Type:</span> CSV, PDF, DOCX
            </p>
            <p>
              <span className="font-semibold">File Compressed:</span> Yes
            </p>
            <p>
              <span className="font-semibold">File Processing Mode:</span>{" "}
              Offline
            </p>
          </div>

          {/* External Drives (Optional icons if you want) */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl">☁️</span>
            <span className="text-2xl">📂</span>
            <span className="text-2xl">🗂</span>
          </div>
        </div>
      </div>

      {/* Upload Progress */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-lg font-semibold mb-4">Upload Progress</h2>

        <div className="flex items-center gap-4 mb-2">
          <span className="bg-blue-100 p-2 rounded-full">📄</span>
          <div className="flex-1">
            <p className="text-gray-700">{uploadingFile}</p>
            <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-500">{uploadProgress}%</p>
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Uploads</h2>
          <button className="text-blue-600 hover:underline text-sm">
            Clear all
          </button>
        </div>

        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b last:border-none"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-xl">📄</span>
              <p className="text-gray-800">{file.name}</p>
            </div>
            <p className="text-gray-500">{file.size}</p>
            <p className="text-gray-400 text-sm">{file.date}</p>
            <button className="text-blue-600 text-xl hover:text-blue-800">
              ⬇
            </button>
            <button className="text-red-500 text-xl hover:text-red-700">
              🗑
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
          Continue to Job Preferences
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
