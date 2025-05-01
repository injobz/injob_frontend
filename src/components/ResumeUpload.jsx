import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white w-[800px] h-[500px] rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold">Upload file</h2>
          <button className="text-gray-500 hover:text-gray-700 text-3xl font-bold">
            &times;
          </button>
        </div>

        {/* Description */}
        <p className="mb-4 text-2xl text-gray-600">
          Add your files or documents here
        </p>

        {/* Drop Zone */}
        <div className="border-2 border-dashed border-purple-300 rounded-lg py-10 flex flex-col items-center justify-center mb-4 text-center px-6 cursor-pointer hover:bg-purple-50 transition-all">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaCloudUploadAlt className="text-6xl text-blue-500 mb-2" />
            <p className="text-gray-500 text-sm">
              Drop your files here,{" "}
              <span className="text-blue-600 underline">
                or click to browse
              </span>
            </p>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* File Types Info */}
        <div className="flex justify-between text-xl text-gray-500 mb-6">
          <span>🛈 Supported files: .docx, .png, .webp, .cvs, .txt, .zip</span>
          <span>Maximum size: 10MB</span>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all text-2xl">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
