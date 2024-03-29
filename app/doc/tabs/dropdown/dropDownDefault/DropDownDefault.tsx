import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

function popUpCloser(ref: any, setIsSelectOpen: any): void {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}

type DropDownModalProps = {
  label: string;
}[];

function DropDownModal() {
  const dropdownItems: DropDownModalProps = [
    { label: "Rename" },
    { label: "Move to folder" },
    { label: "Duplicate" },
    { label: "Copy link" },
    { label: "Open in desktop app" },
    { label: "Delete" },
  ];

  return (
    <div className="absolute right-0 mt-2 min-w-[200px] z-50 rounded-md border bg-white shadow-md">
      <div>
        <ul className="p-2">
          {dropdownItems.map((item, id) => (
            <li
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-blue-50"
              key={id}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DropDownDefault = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  popUpCloser(wrapperRef, setisOpen);
  return (
    <div>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="flex  items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Options <ChevronDownIcon className=" h-5 w-5 text-slate-50" />
      </button> 
      <div className="relative" ref={wrapperRef}>
        {isOpen && <DropDownModal />}
      </div>
    </div>
  );
};

export default DropDownDefault;
