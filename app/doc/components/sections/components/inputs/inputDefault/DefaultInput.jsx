import React from "react";

const DefaultInput = () => {
  return (
    <div className="w-full">
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
          id="Email"
          className="block w-full rounded-md border-0 bg-slate-50 px-4 py-2 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};

export default DefaultInput;
