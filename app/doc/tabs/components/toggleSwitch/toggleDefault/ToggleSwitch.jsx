import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="flex gap-3">
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="h-6 w-[45px] rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300">
            {/* Toggle Ball */}
            <div
              className={`absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                isChecked ? "translate-x-[21px]" : "translate-x-0"
              } bg-white shadow-md`}
            />
          </div>
        </label>
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-800">
        {isChecked ? "True" : "False"}
      </span>
    </div>
  );
};

export default ToggleSwitch;
