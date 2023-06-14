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

type CategoryProp = {
  label: string;
}[];

const InputSingleSelectTS = () => {
  const [selectedValue, setselectedValue] = useState<string | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const category: CategoryProp = [
    { label: "A0/A1 English (Beginner/Elementary)" },
    { label: "A2 English (Pre Intermediate)" },
    { label: "B1 English (Intermediate)" },
    { label: "B2 English (Upper Intermediate)" },
    { label: "C1 English (Advanced)" },
    { label: "C2 English (Proficient)" },
  ];

  popUpCloser(wrapperRef, setIsSelectOpen);

  useEffect(() => {
    setselectedValue(!selectedValue ? category[0].label : selectedValue);
  }, [selectedValue]);

  return (
    <div className="w-full">
      <label
        htmlFor="tel"
        className="mb-1 block text-sm font-medium leading-6 text-gray-900"
      >
        How is your English?
      </label>
      <div className="w-full">
        <div className="w-full">
          <div
            className={`flex h-full w-full cursor-pointer items-center  justify-between rounded-md px-2 py-2 outline-none ring-1 ring-inset hover:bg-blue-50
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
                    {category.map((item, id) => (
                      <li
                        onClick={() => setselectedValue(item.label)}
                        key={id}
                        className="w-full cursor-pointer truncate bg-white px-2 py-2 text-sm text-gray-800 duration-200 hover:bg-blue-100"
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSingleSelectTS;
