import React from "react";

const TextAreaDefault = () => {
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="Email"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Your message
      </label>
      <div>
        <textarea
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900  outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:leading-6"
          rows={4}
          placeholder="Enter your text..."
        />
      </div>
    </div>
  );
};

export default TextAreaDefault;
