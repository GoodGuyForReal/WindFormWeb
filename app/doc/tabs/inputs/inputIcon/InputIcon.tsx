import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const InputIcon = () => {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Search
      </label>

      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-2 pl-12 pr-4 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default InputIcon;
