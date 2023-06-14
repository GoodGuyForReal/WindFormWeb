import React from "react";

const InputButtonInside = () => {
  return (
    <div className="w-full">
      <label
        htmlFor="searchButtonInside"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Search
      </label>

      <div className="relative">
        <input
          type="text"
          name="searchButtonInside"
          id="searchButtonInside"
          className="block w-full rounded-md border-0 py-3 pl-4 pr-[88px] text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-1.5 flex items-center">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputButtonInside;
