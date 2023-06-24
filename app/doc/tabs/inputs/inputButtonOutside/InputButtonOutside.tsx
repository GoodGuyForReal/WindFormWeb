import React from "react";

const InputButtonOutside = () => {
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="searchButtonOutside"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Search
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          name="searchButtonOutside"
          id="searchButtonOutside"
          className="block w-full rounded-md border border-gray-300 py-2 pl-4 pr-[88px] text-gray-900 outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
        <button className="rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-slate-50 duration-200 hover:bg-blue-500/80">
          Search
        </button>
      </div>
    </div>
  );
};

export default InputButtonOutside;
