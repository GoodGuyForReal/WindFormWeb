import React, { useEffect, useRef, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

// Card component to display the modal content
function Card({ setisOpen }: any) {
  return (
    <div className="m-5 flex items-center justify-center rounded-lg bg-slate-50 p-5 shadow-xl">
      <div className="flex w-full flex-col justify-center gap-5">
        <div className="flex items-center gap-3">
          <InformationCircleIcon className="h-7 w-7 text-blue-500" />
          <h3 className="text-lg font-bold text-gray-800">Modal title</h3>
        </div>
        <hr/>
        <p className="text-gray-800">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <hr/>
        <div className="flex w-full justify-end gap-2">
          <button
            onClick={() => setisOpen(false)}
            className="rounded-md border border-gray-400 px-4 py-2 text-sm  text-gray-800 duration-200 hover:bg-gray-800 hover:text-slate-50"
          >
            Close
          </button>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
            Deatils
          </button>
        </div>
      </div>
    </div>
  );
}

// ModalFullScreen component to display the modal
const ModalFullScreen = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Function to close the modal when clicked outside
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
      {/* Button to display the modal */}
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Display Modal
      </button>
      {/* Modal content */}
      {isOpen && (
        <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black/50 p-10">
          <div className="h-full w-full" ref={wrapperRef}>
            {/* Render the Card component */}
            <Card setisOpen={setisOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFullScreen;
