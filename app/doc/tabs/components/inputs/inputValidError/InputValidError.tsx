import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const InputValidError = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <label
          htmlFor="Email"
          className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
        >
          Email
        </label>
      </div>
      <div>
        <input
          defaultValue="test@gil.com"
          type="text"
          name="Email"
          id="errorEmail"
          className="block w-full rounded-md border-0 bg-slate-50 px-4 py-2 text-sm text-red-900 outline-none ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:leading-6"
          placeholder="Enter your email"
        />
        <span className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> Not a valid
          email address.
        </span>
      </div>
    </div>
  );
};

export default InputValidError;
