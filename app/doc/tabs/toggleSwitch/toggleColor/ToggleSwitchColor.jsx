import React, { useState } from "react";

const ToggleBlue = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="h-6 w-[45px] rounded-full bg-gray-200 peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300">
            {/* Toggle Ball */}

            <div
              className={`toggle_ball absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                isChecked ? "translate-x-[21px]" : "translate-x-0"
              } bg-white shadow-md`}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

const ToggleRed = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="h-6 w-[45px] rounded-full bg-gray-200 peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300">
            {/* Toggle Ball */}

            <div
              className={`toggle_ball absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                isChecked ? "translate-x-[21px]" : "translate-x-0"
              } bg-white shadow-md`}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

const ToggleGreen = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="h-6 w-[45px] rounded-full bg-gray-200 peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300">
            {/* Toggle Ball */}

            <div
              className={`toggle_ball absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                isChecked ? "translate-x-[21px]" : "translate-x-0"
              } bg-white shadow-md`}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

const ToggleSwitchColor = () => {
  return (
    <div className="flex gap-4">
      <ToggleBlue />
      <ToggleRed />
      <ToggleGreen />
    </div>
  );
};

export default ToggleSwitchColor;
