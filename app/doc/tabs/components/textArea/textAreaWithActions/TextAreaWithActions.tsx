import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const TextAreaWithActions = () => {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState<boolean>(false);

  return (
    <div
      className={`w-full rounded-md p-2 ring-1 ring-inset 
    placeholder:text-gray-400 
    ${isTextAreaFocused ? "ring-2 ring-blue-500" : "ring-gray-300"}`}
    >
      <div className="w-full">
        <textarea
          className="peer w-full resize-none rounded-md border-none bg-slate-100 px-2 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400  sm:leading-6"
          rows={5}
          placeholder="Enter your text..."
          onFocus={() => setIsTextAreaFocused(true)}
          onBlur={() => setIsTextAreaFocused(false)}
        />
      </div>

      <div className="flex justify-between">
        <InputSingleSelectTS />
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-slate-50 duration-200 hover:bg-blue-500/80">
          Sent
        </button>
      </div>
    </div>
  );
};

export default TextAreaWithActions;

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

type TeamProps = {
  empID: number;
  value: string;
  label: string;
  img: string;
}[];

type PersonProps = {
  empID: number;
  value: string;
  label: string;
  img: string;
};

function InputSingleSelectTS() {
  const [selectedValue, setselectedValue] = useState<string | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const teamEm: TeamProps = [
    {
      empID: 1,
      img: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      value: "Jane",
      label: "Jane",
    },
    {
      empID: 2,
      img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      value: "Jason",
      label: "Jason",
    },
    {
      empID: 3,
      img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      value: "Karen",
      label: "Karen",
    },
    {
      empID: 5,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      value: "Mark",
      label: "Mark",
    },
    {
      empID: 6,
      img: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwb3J0cmFpdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      value: "Vin",
      label: "Vin",
    },
    {
      empID: 7,
      img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      value: "Kurt",
      label: "Kurt",
    },
    {
      empID: 8,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      value: "Ashly",
      label: "Ashly",
    },
  ];

  popUpCloser(wrapperRef, setIsSelectOpen);

  useEffect(() => {
    setselectedValue(!selectedValue ? teamEm[0].label : selectedValue);
  }, [selectedValue]);

  return (
    <div className="w-full">
      <div
        className={`flex h-full w-full cursor-pointer items-center  justify-between rounded-full px-2 py-2 outline-none ring-1 ring-inset hover:bg-blue-50
            ${!isSelectOpen ? "ring-gray-300" : "ring-blue-500"}
            `}
        onClick={() => setIsSelectOpen(true)}
      >
        <label className="text-sm text-gray-800">{selectedValue}</label>
        <ChevronDownIcon className="h-4 w-4 text-gray-600" />
      </div>

      <div className="relative h-full w-full">
        {isSelectOpen && (
          <div
            ref={wrapperRef}
            className="absolute left-0 right-0 top-1 z-10 items-center drop-shadow-sm"
          >
            <div className="drop_down w-full overflow-hidden rounded-md border">
              <ul className="max-h-60 overflow-y-auto">
                {teamEm.map((item) => (
                  <li
                    onClick={() => setselectedValue(item.label)}
                    key={item.value}
                    className="flex w-full cursor-pointer items-center gap-1 truncate bg-white px-2 py-2 text-gray-800 duration-200 hover:bg-blue-100"
                  >
                    <img
                      src={item.img}
                      alt={item.value}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
