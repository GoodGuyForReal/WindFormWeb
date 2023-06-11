import React, { useEffect, useRef, useState } from "react";
import {
  FolderArrowDownIcon,
  DocumentDuplicateIcon,
  LinkIcon,
  TrashIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

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
  icon: JSX.Element;
}[];

function DropDownModal() {
  const dropdownItems: DropDownModalProps = [
    { label: "Rename", icon: <Bars2Icon className="h-5 w-5 text-gray-600" /> },
    {
      label: "Move to folder",
      icon: <FolderArrowDownIcon className="h-5 w-5 text-gray-600" />,
    },
    {
      label: "Duplicate",
      icon: <DocumentDuplicateIcon className="h-5 w-5 text-gray-600" />,
    },
    {
      label: "Copy link",
      icon: <LinkIcon className="h-5 w-5 text-gray-600" />,
    },
    { label: "Delete", icon: <TrashIcon className="h-5 w-5 text-gray-600" /> },
  ];

  return (
    <div className="absolute right-0 z-50 mt-2 min-w-[200px] rounded-md border bg-white shadow-md">
      <div>
        <ul className="p-2">
          {dropdownItems.map((item, id) => (
            <li
              className="flex cursor-pointer items-center justify-between rounded-md px-4 py-2 hover:bg-blue-50"
              key={id}
            >
              {item.label}
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DropDownIcon = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  popUpCloser(wrapperRef, setisOpen);
  return (
    <div>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Options
      </button>
      <div className="relative" ref={wrapperRef}>
        {isOpen && <DropDownModal />}
      </div>
    </div>
  );
};

export default DropDownIcon;
