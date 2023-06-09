import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const ToastFail = () => {
  return (
    <div>
      <div className="rounded-lg border bg-slate-50 p-5 shadow-xl">
        <div className="flex w-64 flex-col items-center justify-center gap-1">
          <XCircleIcon className="h-9 w-9 text-red-500" />
          <h2 className="font-semibold">Action Failed</h2>
          <p className="text-center text-gray-500">Oops! Something went wrong with the action.</p>
          <div className="mt-5 flex w-full gap-2">
            <button className="w-full rounded-md border border-red-400 px-4 py-1.5 text-sm text-red-500 duration-200 hover:bg-red-500 hover:text-slate-50">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastFail;
