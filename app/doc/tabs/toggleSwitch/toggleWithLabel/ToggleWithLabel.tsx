import React, { useState } from "react";

const ToggleWithLabel = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex gap-3">
      <div className="toggle_container pt-1">
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
      <div className="label">
        <h3 className="text-base font-semibold text-gray-800">Notifications</h3>
        <p className="text-sm text-gray-400">Receive updates and alerts</p>
      </div>
    </div>
  );
};

export default ToggleWithLabel;
