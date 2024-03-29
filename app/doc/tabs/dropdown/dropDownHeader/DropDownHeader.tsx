import React, { useEffect, useRef, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

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
    { label: "Account settings" },
    { label: "Support" },
    { label: "Licanse" },
    { label: "Sign out" },
  ];

  return (
    <div className="absolute right-0 mt-2 min-w-[200px] rounded-md border bg-white shadow-md">
      <div>
        <ul className="p-2">
          <li className="px-4 py-2">
            <p className="text-sm">Signed as</p>
            <label className="font-medium">james@example.com</label>
          </li>
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

const DropDownHeader = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  popUpCloser(wrapperRef, setisOpen);
  return (
    <div>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md border border-blue-500 bg-blue-50 px-4 py-1 text-sm duration-200 hover:bg-blue-100"
      >
        <EllipsisHorizontalIcon className="h-6 w-6 text-blue-500" />
      </button>
      <div className="relative" ref={wrapperRef}>
        {isOpen && <DropDownModal />}
      </div>
    </div>
  );
};

export default DropDownHeader;
