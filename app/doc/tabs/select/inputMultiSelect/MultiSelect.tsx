import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type TeamProps = {
  empID: number;
  value: string;
  label: string;
}[];

type PersonProps = {
  empID: number;
  value: string;
  label: string;
};

const teamEm: TeamProps = [
  { empID: 1, value: "Jane", label: "Jane" },
  { empID: 2, value: "Jason", label: "Jason" },
  { empID: 3, value: "Karen", label: "Karen" },
  { empID: 5, value: "Mark", label: "Mark" },
  { empID: 6, value: "Kandry", label: "Kandry" },
  { empID: 7, value: "Kurt", label: "Kurt" },
  { empID: 8, value: "Ashly", label: "Ashly" },
];

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<TeamProps>([
    { empID: 4, value: "Kaven", label: "Kaven" },
  ]);
  const [team, setTeam] = useState<TeamProps>(teamEm);
  const [searchitem, setSearchitem] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  popUpCloser(wrapperRef, setIsSelectOpen);

  const handleRemovePrevArray = (memberID: number) =>
    setTeam((current) => current.filter((item) => item.empID !== memberID));

  const handleSelectAdd = (item: PersonProps) => {
    setSelectedOptions((current) => [item, ...current]);
    handleRemovePrevArray(item.empID);
    setSearchitem("");
  };

  const handleSelectRemove = (memberID: PersonProps) => {
    setTeam((current) => [memberID, ...current]);
    setSelectedOptions((current) =>
      current.filter((item) => item.empID !== memberID.empID)
    );
  };

  const search =
    searchitem !== ""
      ? team.filter((item) =>
          item.label.toLowerCase().includes(searchitem.trim().toLowerCase())
        )
      : team;

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

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="person"
        className="mb-1 block text-sm font-medium leading-6 text-gray-900"
      >
        Select team member
      </label>
      <div className="multi_select_body">
        <div
          className={`flex h-full min-h-[40px] w-full rounded-md border-0 px-2 py-2 text-gray-900 outline-none ring-1 ring-inset duration-200 sm:text-sm sm:leading-6
          ${!isSelectOpen ? "ring-gray-300" : "ring-blue-500"}
          `}
        >
          <div className="team_main flex w-full flex-wrap items-center gap-2">
            {selectedOptions.map((item, id) => (
              <span
                key={id}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-1 text-sm font-medium text-gray-800 duration-200 hover:border-red-300 hover:bg-red-100"
                onClick={() => handleSelectRemove(item)}
              >
                {item.value}
                <XMarkIcon className="h-4 w-4 text-gray-800" />
              </span>
            ))}
            <input
              type="text"
              className="flex-grow bg-transparent p-1 text-sm text-gray-800 outline-none"
              placeholder="Search..."
              value={searchitem}
              onChange={(e) => setSearchitem(e.target.value)}
              onClick={() => setIsSelectOpen(true)}
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          {isSelectOpen && team.length > 0 && (
            <div
              ref={wrapperRef}
              className="absolute left-0 right-0 top-1 z-10 items-center drop-shadow-sm"
            >
              <div className="drop_down w-full overflow-hidden rounded-md border">
              <ul className="max-h-60 overflow-y-auto">
                {search.map((item) => (
                  <li
                    onClick={() => handleSelectAdd(item)}
                    key={item.value}
                    className="w-full cursor-pointer truncate bg-white px-2 py-2 text-gray-800 duration-200 hover:bg-blue-100"
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
  );
};

export default MultiSelect;
