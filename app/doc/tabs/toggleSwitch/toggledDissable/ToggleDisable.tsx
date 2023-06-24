import React, { useState } from "react";

const ToggleDisable = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const toggleSwitch = () => {
    if (!isDisabled) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div>
      <div className="flex gap-3">
        <div
          className={`toggle_container ${
            isDisabled ? "disabled opacity-50" : ""
          }`}
        >
          <label
            className={`relative inline-flex cursor-pointer items-center ${
              isDisabled ? "disabled" : ""
            }`}
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isChecked}
              onChange={toggleSwitch}
              disabled={isDisabled}
            />
            <div
              className={`h-6 w-[45px] rounded-full bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300 ${
                isChecked && "peer-checked:bg-blue-600"
              }`}
            >
              {/* Toggle Ball */}
              <div
                className={`absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                  isChecked ? "translate-x-[21px]" : "translate-x-0"
                } bg-white shadow-md`}
              />
            </div>
          </label>
        </div>
        <span
          className={`text-sm font-medium ${
            isDisabled
              ? "text-gray-500 dark:text-gray-500"
              : "text-gray-900 dark:text-gray-800"
          }`}
        >
          {isChecked ? "True" : "False"}
        </span>
      </div>
      <button
        className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-800 duration-200 hover:bg-gray-800 hover:text-slate-50"
        onClick={() => setIsDisabled(!isDisabled)}
      >
        {isDisabled ? "Active" : "Disable"}
      </button>
    </div>
  );
};

export default ToggleDisable;
