import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/solid";

const InputFileDefault = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="file_input_container h-full w-full rounded-lg border border-gray-300 duration-200 hover:bg-blue-50">
      <label
        htmlFor="file-input"
        className="flex h-full w-full cursor-pointer flex-col items-center gap-3 rounded-lg p-5"
      >
        <div className="cameraIcon_container flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <CameraIcon className="h-5 w-5 text-blue-600" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">
            <span className="text-blue-600">Browse file</span> or drag and drop
          </p>
          <p className="text-xs font-medium text-gray-500">
            SVG, PNG, JPG or GIF(max. 10MB)
          </p>
        </div>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="mt-2 rounded-md border border-blue-600 bg-blue-50 px-3 py-1 text-center text-sm text-blue-600">
            {selectedFile.name}
          </p>
        )}
      </label>
    </div>
  );
};

export default InputFileDefault;
