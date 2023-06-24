import React from "react";

const InputWithInfo = () => {
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="Email"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Email
      </label>
      <div>
        <input
          type="text"
          name="Email"
          id="hintEmail"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:leading-6"
          placeholder="Enter your email"
        />
        <span className="mt-2 text-sm text-gray-500">
          We’ll never share your details.
        </span>
      </div>
    </div>
  );
};

export default InputWithInfo;
