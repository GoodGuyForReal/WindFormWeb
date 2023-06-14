import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const InputDropdownJS = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const wrapperRef = useRef(null);

  const country = [
    { code: "+1" },
    { code: "+49" },
    { code: "+44" },
    { code: "+90" },
  ];

  function popUpCloser(ref, setIsSelectOpen) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSelectOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
  }

  popUpCloser(wrapperRef, setIsSelectOpen);

  return (
    <div className="w-full">
      <label
        htmlFor="tel"
        className="mb-1 block text-sm font-medium leading-6 text-gray-900"
      >
        Phone Number
      </label>
      <div className="relative">
        <input
          type="tel"
          name="tel"
          id="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}"
          className="block w-full rounded-md border-0  py-2 pl-16 pr-4 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="000-000-000"
        />
        <div className="absolute inset-y-0 left-0 w-full max-w-[60px] px-2">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-between outline-none"
            onClick={() => setIsSelectOpen(true)}
          >
            <label className="text-sm text-gray-800">
              {!selectedValue ? country[0].code : selectedValue}
            </label>
            <ChevronDownIcon className="h-4 w-4 text-gray-600" />
          </div>

          <div className="relative h-full w-full">
            {isSelectOpen && (
              <div
                ref={wrapperRef}
                className="absolute -left-2 -right-2 top-1 z-10 items-center drop-shadow-sm"
              >
                <div className="drop_down w-full overflow-hidden rounded-md border">
                  {country.map((item, id) => (
                    <p
                      onClick={() => setSelectedValue(item.code)}
                      key={id}
                      className="w-full cursor-pointer truncate bg-white px-2 py-2 text-sm text-gray-800 duration-200 hover:bg-blue-100"
                    >
                      {item.code}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDropdownJS;