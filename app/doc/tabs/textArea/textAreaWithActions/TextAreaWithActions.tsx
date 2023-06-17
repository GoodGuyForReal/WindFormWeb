import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import { XMarkIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";

type TeamProps = {
  empID: number;
  value: string;
  email: string;
  img: string;
}[];

type PersonProps = {
  empID: number;
  value: string;
  email: string;
  img: string;
};

const teamEm: TeamProps = [
  {
    empID: 1,
    img: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    value: "Jane",
    email: "jane@gmail.com",
  },
  {
    empID: 2,
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    value: "Jason",
    email: "jason@gmail.com",
  },
  {
    empID: 3,
    img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    value: "Karen",
    email: "karen@gmail.com",
  },
  {
    empID: 4,
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    value: "Mark",
    email: "mark@gmail.com",
  },
];

const InputMultiSelectV2TS = ({ setUsers }: any) => {
  const [selectedUser, setSelectedUser] = useState<TeamProps>([]);
  const [team, setTeam] = useState<TeamProps>(teamEm);
  const [searchitem, setSearchitem] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    setUsers(selectedUser);
  }, [setUsers, selectedUser]);

  const handleRemovePrevArray = (memberID: number) =>
    setTeam((current) => current.filter((item) => item.empID !== memberID));

  const handleSelectAdd = (item: PersonProps) => {
    setSelectedUser((current) => [item, ...current]);
    handleRemovePrevArray(item.empID);
    setSearchitem("");
  };

  const handleSelectRemove = (memberID: PersonProps) => {
    setTeam((current) => [memberID, ...current]);
    setSelectedUser((current) =>
      current.filter((item) => item.empID !== memberID.empID)
    );
  };

  const search =
    searchitem !== ""
      ? team.filter((item) =>
          item.email.toLowerCase().includes(searchitem.trim().toLowerCase())
        )
      : team;

  return (
    <div className="w-full">
      <div className="multi_select_body">
        <div className="flex h-full min-h-[40px]  w-full border-b px-2 py-2 text-gray-900 sm:text-sm sm:leading-6">
          <div className="team_main flex w-full flex-wrap items-center gap-2">
            {selectedUser.map((item, id) => (
              <span
                key={id}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-800 duration-200 hover:border-red-300 hover:bg-red-100"
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
              placeholder="@Add..."
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
              className="absolute left-0 right-0 z-10 items-center drop-shadow-sm"
            >
              <div className="drop_down h-full w-full overflow-hidden rounded-md border">
                <ul className="max-h-60 overflow-y-auto">
                  {search.map((item) => (
                    <li
                      onClick={() => handleSelectAdd(item)}
                      key={item.empID}
                      className="flex w-full cursor-pointer items-center gap-1 truncate bg-white px-2 py-2 text-gray-800 duration-200 hover:bg-blue-100"
                    >
                      <img
                        src={item.img}
                        alt={item.value}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {item.email}
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

const TextAreaWithActions = () => {
  const [users, setUsers] = useState<never[]>([]);
  const [message, setMessage] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const maxSizeInMb = 5;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileSizeInBytes = file.size;
      const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); // Convert bytes to megabytes

      if (fileSizeInMegabytes > maxSizeInMb) {
        alert(`Size limit is ${maxSizeInMb.toFixed(2)} MB`);
        event.target.value = "";
      } else {
        setSelectedFile(file);
      }
    }
  };

  const dormData = {
    to: users,
    message: message,
    file: selectedFile?.name,
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (users.length > 0) {
      console.log(dormData);
    }
  };

  return (
    <div
      className={`w-full max-w-sm rounded-md p-2 ring-1 ring-inset placeholder:text-gray-400 ${
        isTextAreaFocused ? "ring-2 ring-blue-500" : "ring-gray-300"
      }`}
    >
      <form onSubmit={onSubmit}>
        <InputMultiSelectV2TS setUsers={setUsers} />

        <div className="w-full">
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full resize-none rounded-md border-none px-2 py-2 text-gray-900 outline-none placeholder:text-gray-400 sm:leading-6"
            rows={5}
            placeholder="Enter your text..."
            onFocus={() => setIsTextAreaFocused(true)}
            onBlur={() => setIsTextAreaFocused(false)}
          />
        </div>

        <div className="flex justify-between gap-5">
          <div className="flex w-full">
            {!selectedFile ? (
              <div>
                <label
                  htmlFor="file-input-small"
                  className="flex h-full w-full cursor-pointer items-center justify-center gap-1 text-gray-400 duration-200 hover:text-gray-500"
                >
                  <PaperClipIcon className="h-5 w-5" />
                  <span className="text-sm">Attach a file</span>
                  <input
                    id="file-input-small"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpg, .svg, .png"
                  />
                </label>
              </div>
            ) : (
              <div className="flex w-40">
                <p className="truncate rounded-md border border-blue-600 bg-blue-50 px-3 py-1 text-center text-sm text-blue-600">
                  {selectedFile.name}
                </p>
                <button className="" onClick={() => setSelectedFile(null)}>
                  <XMarkIcon className="h-5 w-5 text-gray-800 duration-200 hover:text-red-500" />
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-slate-50 duration-200 hover:bg-blue-500/80"
          >
            Sent
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextAreaWithActions;
