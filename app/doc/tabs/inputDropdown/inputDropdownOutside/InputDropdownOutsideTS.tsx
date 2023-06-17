import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type CategoryProp = {
  label: string;
}[];

const InputDropdownOutsideTS = () => {
  const [selectedValue, setselectedValue] = useState<string | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const category: CategoryProp = [
    { label: "All" },
    { label: "Shirt" },
    { label: "Blazers" },
    { label: "Tops" },
    { label: "Suits" },
  ];

  function popUpCloser(ref: any, setIsSelectOpen: any): void {
    useEffect(() => {
      function handleClickOutside(event: any) {
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

  useEffect(() => {
    setselectedValue(!selectedValue ? category[0].label : selectedValue);
  }, [selectedValue]);

  return (
    <div className="w-full max-w-sm">
      <label className="mb-1 block text-sm font-medium leading-6 text-gray-900">
        Category
      </label>
      <div className="flex h-full">
        <div className="w-full max-w-[110px]">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-between rounded-l-md border border-gray-300 px-2 py-2 outline-none hover:bg-slate-100"
            onClick={() => setIsSelectOpen(true)}
          >
            <label className="text-sm text-gray-800">
              {selectedValue}
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
                  {category.map((item, id) => (
                    <p
                      onClick={() => setselectedValue(item.label)}
                      key={id}
                      className="w-full cursor-pointer truncate bg-white px-2 py-2 text-sm text-gray-800 duration-200 hover:bg-blue-100"
                    >
                      {item.label}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <input
          type="text"
          name="category"
          id="category"
          className="block w-full rounded-r-md border-0 px-4 py-2 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default InputDropdownOutsideTS;
