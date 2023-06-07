import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const ModalDefault = () => {
  return (
    <div>
      <div className="rounded-lg border bg-slate-50 p-5 shadow-xl backdrop-blur-lg">
        <div className="flex w-64 flex-col items-center justify-center gap-1">
          <CheckBadgeIcon className=" h-w-9 w-9 text-blue-500" />
          <h2 className="font-semibold">Form Successfully Submited</h2>
          <p className="text-center text-gray-500">
            Congratulations! Your account has been created successfully.
          </p>
          <div className="mt-5 w-full">
            <button className="w-full rounded-md border border-blue-400 px-4 py-1.5 text-sm text-blue-500 duration-200 hover:bg-blue-500 hover:text-slate-50">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDefault;
