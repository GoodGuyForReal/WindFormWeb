import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const ModalWarning = () => {
  return (
    <div>
      <div className="rounded-lg border bg-slate-50 p-5 shadow-xl">
        <div className="flex w-64 flex-col items-center justify-center gap-1">
          <ExclamationCircleIcon className="h-9 w-9 text-yellow-500" />
          <h2 className="font-semibold">Delete Account</h2>
          <p className="text-center text-gray-500">
            Warning: Your account will be permanently deleted.
          </p>
          <div className="mt-5 flex w-full gap-2">
            <button className="w-full rounded-md border border-gray-400 px-4 py-1.5 text-sm text-gray-500 duration-200 hover:bg-gray-800 hover:text-slate-50">
              Close
            </button>
            <button className="w-full rounded-md bg-red-500 px-4 py-1.5 text-sm text-slate-50 duration-200 hover:bg-red-500/80">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWarning;
