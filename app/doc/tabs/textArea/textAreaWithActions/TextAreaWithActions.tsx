import React, {
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";

const TextAreaWithActions = () => {
  const [message, setMessage] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const maxSizeInMb = 5;

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

  const formData = {
    message: message,
    file: selectedFile?.name,
  };
  function onSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <div
      className={`w-full max-w-sm rounded-md p-2 ring-1 ring-inset placeholder:text-gray-400 ${
        isTextAreaFocused ? "ring-2 ring-blue-500" : "ring-gray-300"
      }`}
    >
      <form onSubmit={onSubmit}>
        <div className="w-full">
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full resize-none rounded-md border-none px-2 py-2 text-gray-900 outline-none placeholder:text-gray-400 sm:leading-6"
            rows={5}
            placeholder="Enter your text..."
            onFocus={() => setIsTextAreaFocused(true)}
            onBlur={() => setIsTextAreaFocused(false)}
          />
        </div>

        <div className="flex justify-between gap-5">
          <div className="flex w-full">
            {!selectedFile ? (
              <div>
                <label
                  htmlFor="file-input-small"
                  className="flex h-full w-full cursor-pointer items-center justify-center gap-1 text-gray-400 duration-200 hover:text-gray-500"
                >
                  <PaperClipIcon className="h-5 w-5" />
                  <span className="text-sm">Attach a file</span>
                  <input
                    id="file-input-small"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpg, .svg, .png"
                  />
                </label>
              </div>
            ) : (
              <div className="flex w-40">
                <p className="truncate rounded-md border border-blue-600 bg-blue-50 px-3 py-1 text-center text-sm text-blue-600">
                  {selectedFile.name}
                </p>
                <button className="" onClick={() => setSelectedFile(null)}>
                  <XMarkIcon className="h-5 w-5 text-gray-800 duration-200 hover:text-red-500" />
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-slate-50 duration-200 hover:bg-blue-500/80"
          >
            Sent
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextAreaWithActions;
