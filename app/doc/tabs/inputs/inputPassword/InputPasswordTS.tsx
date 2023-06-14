import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const InputPasswordTS = () => {
  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

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
          className="w-full rounded-md border-0 py-2 pl-4 pr-10 text-sm text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:leading-6"
          placeholder="Password"
        />

        <div
          className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
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

export default InputPasswordTS;
