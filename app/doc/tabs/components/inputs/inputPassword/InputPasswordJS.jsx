import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const InputPasswordJS = () => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  return (
    <div className="w-full">
      <label
        htmlFor="password"
        className="mb-1 block w-full text-sm font-medium leading-6 text-gray-800"
      >
        Password
      </label>

      <div className="relative">
        <input
          type={isPasswordHide ? "password" : "text"}
          name="password"
          id="password"
          className="block w-full rounded-md border-0 bg-slate-50 py-2 pl-4 pr-10 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Password"
        />

        <div
          className="absolute inset-y-0 right-3 flex items-center"
          onClick={() => setIsPasswordHide(!isPasswordHide)}
        >
          {isPasswordHide ? (
            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputPasswordJS;
