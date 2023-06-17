import React, { useState, ChangeEvent } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

interface FileInputProps {
  maxSizeInMb?: number;
}

export function InputFileSmallTS({ maxSizeInMb = 5 }: FileInputProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileSizeInBytes = file.size;
      const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); // Convert bytes to megabytes

      if (fileSizeInMegabytes > maxSizeInMb) {
        alert(`Size limit is ${maxSizeInMb.toFixed(2)} MB`);
        event.target.value = "";
      } else {
        setSelectedFile(file);
      }
    }
  };

  return (
    <div>
      <div className="h-full w-full max-w-sm rounded-lg border border-gray-300 duration-200 hover:bg-blue-50">
        <label
          htmlFor="file-input-small"
          className="flex h-full w-full cursor-pointer items-center gap-3 rounded-lg p-5"
        >
          <div className="cameraIcon_container flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <ArrowDownCircleIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-center">
            <p className="mb-1 text-sm font-medium text-gray-500">
              <span className="text-blue-600">Browse file</span> or drag and
              drop
            </p>
            <p className="text-xs font-medium text-gray-500">
              SVG, PNG, JPG or GIF(max. 10MB)
            </p>
          </div>
          <input
            id="file-input-small"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg, .svg, .png"
          />
        </label>
      </div>
      {selectedFile && (
        <p className="mt-2 rounded-md border border-blue-600 bg-blue-50 px-3 py-1 text-center text-sm text-blue-600">
          {selectedFile.name}
        </p>
      )}
    </div>
  );
}

export default InputFileSmallTS;
