import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => setIsChecked(!isChecked);

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={toggleSwitch}
            />
            <div className="w-[45px] h-6 bg-gray-200 rounded-full dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600">
                {/* Toggle Ball */}
                {/* New toggle ball implementation */}
                <div
                    className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full transition-transform ${isChecked ? 'translate-x-[21px]' : 'translate-x-0'
                        } bg-white shadow-md`}
                />
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-800">
                {isChecked ? 'True' : 'False'}
            </span>
        </label>
    );
};

export default ToggleSwitch;
