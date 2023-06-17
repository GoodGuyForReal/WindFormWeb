import React, { useEffect, useRef, useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function Card({ setisOpen }: any) {
  return (
    <div className=" flex items-center justify-center rounded-lg border bg-slate-50 p-5 shadow-xl backdrop-blur-lg">
      <div className="flex w-64 flex-col items-center justify-center gap-1">
        <CheckBadgeIcon className="h-w-9 w-9 text-blue-500" />
        <h2 className="font-semibold">Form Successfully Submitted</h2>
        <p className="text-center text-gray-500">
          Congratulations! Your account has been created successfully.
        </p>
        <div className="mt-5 w-full">
          <button
            onClick={() => setisOpen(false)}
            className="w-full rounded-md border border-blue-400 px-4 py-1.5 text-sm text-blue-500 duration-200 hover:bg-blue-500 hover:text-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const ModalSuccess = () => {
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
    <div className="relative flex h-80 w-full justify-center">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="absolute rounded-md bg-blue-500 px-4 py-2 text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Modal Success
      </button>
      {isOpen && (
        <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black/50">
          <div ref={wrapperRef}>
            <Card setisOpen={setisOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSuccess;
