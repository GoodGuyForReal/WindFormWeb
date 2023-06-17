import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const ModalFail = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-red-500 px-4 py-2 text-slate-50 duration-200 hover:bg-red-500/80"
      >
        Toast Failed
      </button>
      {isOpen && (
        <div className="absolute bottom-24 left-0 z-50 flex w-full justify-center ">
          <div className="rounded-lg border bg-slate-50 p-5 shadow-xl">
            <div className="flex w-64 flex-col items-center justify-center gap-1">
              <XCircleIcon className="h-9 w-9 text-red-500" />
              <h2 className="font-semibold">Action Failed</h2>
              <p className="text-center text-gray-500">
                Oops! Something went wrong with the action.
              </p>
              <div className="mt-5 flex w-full gap-2">
                <button
                  onClick={() => setisOpen(false)}
                  className="w-full rounded-md border border-red-400 px-4 py-1.5 text-sm text-red-500 duration-200 hover:bg-red-500 hover:text-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFail;
