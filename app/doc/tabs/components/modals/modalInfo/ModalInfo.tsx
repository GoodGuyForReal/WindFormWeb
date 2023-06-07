import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid"; 

const ModalInfo = () => {
  return (
    <div>
      <div className="rounded-lg border bg-slate-50 p-5 shadow-xl">
        <div className="flex w-64 flex-col items-center justify-center gap-1">
          <InformationCircleIcon className="h-9 w-9 text-blue-500" />
          <h2 className="font-semibold">Information</h2>
          <div className="mt-5 flex w-full gap-2">
            <button className="w-full rounded-md border border-blue-400 px-4 py-1.5 text-sm text-blue-500 duration-200 hover:bg-blue-500 hover:text-slate-50">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
