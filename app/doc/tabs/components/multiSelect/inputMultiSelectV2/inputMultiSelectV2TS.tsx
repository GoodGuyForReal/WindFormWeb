import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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

const InputMultiSelectV2TS = () => {
  const [selectedOptions, setSelectedOptions] = useState<TeamProps>([
    {
      empID: 4,
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      value: "Kaven",
      label: "Kaven",
    },
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
    <div className="w-full">
      <label
        htmlFor="person"
        className="mb-1 block text-sm font-medium leading-6 text-gray-900"
      >
        Select team member
      </label>
      <div className="multi_select_body">
        <div
          className={`flex h-full min-h-[40px] w-full rounded-sm border-0 bg-slate-50 px-2 py-2 text-gray-900 outline-none ring-1 ring-inset  duration-200 sm:text-sm sm:leading-6
         ${!isSelectOpen ? "ring-gray-300" : "ring-blue-500"}
         `}
        >
          <div className="team_main flex w-full flex-wrap items-center gap-2">
            {selectedOptions.map((item, id) => (
              <span
                key={id}
                className="flex cursor-pointer items-center gap-2 rounded-sm border border-gray-300 px-2 py-1 text-sm font-bold text-gray-800 duration-200 hover:border-red-300 hover:bg-red-100"
                onClick={() => handleSelectRemove(item)}
              >
                <img
                  src={item.img}
                  alt={item.value}
                  className="h-5 w-5 rounded-full bg-slate-400 object-cover"
                />
                {item.value}
                <XMarkIcon className="h-4 w-4 text-gray-800" />
              </span>
            ))}
            <input
              type="text"
              className="flex-grow bg-transparent p-1 text-sm text-gray-800 outline-none"
              placeholder="@Search..."
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
              <div className="drop_down h-full max-h-60 w-full overflow-hidden overflow-y-auto rounded-md border">
                {search.map((item) => (
                  <p
                    onClick={() => handleSelectAdd(item)}
                    key={item.value}
                    className="flex w-full cursor-pointer items-center gap-1 truncate bg-slate-50 px-2 py-2 text-gray-800 duration-200 hover:bg-blue-100"
                  >
                    <img
                      src={item.img}
                      alt={item.value}
                      className="h-6 w-6 rounded-full bg-slate-400 object-cover"
                    />
                    {item.label}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputMultiSelectV2TS;
