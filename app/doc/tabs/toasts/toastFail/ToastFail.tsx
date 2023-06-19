import React, { useEffect, useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

function Card({ setisOpen }: any) {
  return (
    <div className=" flex items-center justify-center rounded-lg border bg-slate-50 p-5 shadow-xl">
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
  );
}

const ToastFail = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function popUpCloser(ref: any, setisOpen: any): void {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setisOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
  }

  popUpCloser(wrapperRef, setisOpen);

  return (
    <div className="relative flex w-full justify-center">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-red-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-red-500/80"
      >
        Modal Fail
      </button>
      {isOpen && (
        <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
          <div ref={wrapperRef}>
            <Card setisOpen={setisOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToastFail;
