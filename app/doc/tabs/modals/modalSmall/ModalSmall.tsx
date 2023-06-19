import React, { useEffect, useRef, useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function Card({ setisOpen }: any) {
  return (
    <div className=" flex items-center justify-center rounded-lg bg-white p-5 shadow-xl">
      <div className="flex w-64 flex-col items-center justify-center gap-1">
        <img src="" alt="" />

        <CheckBadgeIcon className="h-w-9 w-9 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">
          Form Successfully Submitted
        </h3>
        <hr />
        <p className="text-center text-gray-800">
          Congratulations! Your account has been created successfully.
        </p>
        <hr />
        <div className="mt-5 flex w-full flex-col gap-2">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
            Details
          </button>
          <button
            onClick={() => setisOpen(false)}
            className="rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-800 duration-200 hover:bg-gray-800 hover:text-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const ModalSmall = () => {
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
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Display Modal
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

export default ModalSmall;
