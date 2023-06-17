import React from "react";

const InputUrl = () => {
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="url"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        URL
      </label>
      <div className="flex">
        <div className="flex w-fit items-center rounded-l-md border border-gray-300 border-r-transparent bg-gray-50 px-3">
          <label className="text-gray-800">http://</label>
        </div>
        <input
          type="url"
          name="url"
          id="url"
          className="block w-full rounded-r-md border-0 py-2 pl-4 pr-4 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="yoursite.com"
        />
      </div>
    </div>
  );
};

export default InputUrl;
