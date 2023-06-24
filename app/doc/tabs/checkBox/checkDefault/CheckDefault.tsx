import React, { useState } from "react";

type CheckProp = {
  checked: boolean;
};

function CheckIcon({ checked }: CheckProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 30 30"
    >
      <defs>
        <clipPath id="id1">
          <path d="M2.328 4.223h25.406v20.32H2.328zm0 0"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#id1)">
        <path
          fill={checked ? "#ffffff" : "none"}
          strokeWidth="2"
          d="M27.5 7.531l-3.035-2.988a.797.797 0 00-1.117 0L11.035 16.668l-4.21-4.145a.825.825 0 00-1.122 0L2.641 15.54a.771.771 0 000 1.102l7.804 7.683a.795.795 0 001.121 0L27.5 8.633a.772.772 0 00.234-.551.779.779 0 00-.234-.55zm0 0"
        ></path>
      </g>
    </svg>
  );
}

const CheckDefault = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="check_default flex gap-3">
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-400 duration-200 hover:bg-gray-100 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:after:border-white peer-checked:hover:bg-blue-600">
            <CheckIcon checked={isChecked} />
          </div>
        </label>
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-800">
        {isChecked ? "True" : "False"}
      </span>
    </div>
  );
};

export default CheckDefault;
