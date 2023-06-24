import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const InputSuccess = () => {
  return (
    <div className="w-full max-w-sm">
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
          className="block w-full rounded-md border border-green-500 px-4 py-2 text-green-900 outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <span className="mt-2 flex items-center gap-1 text-sm text-green-800">
          <CheckCircleIcon className="h-5 w-5 text-green-500" /> Success email
          message.
        </span>
      </div>
    </div>
  );
};

export default InputSuccess;
