import React, { useState } from 'react'

const ToggleDisable = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const toggleSwitch = () => {
        if (!isDisabled) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className='flex gap-3'>
            <div className={`toggle_container ${isDisabled ? 'disabled opacity-50' : ''}`}>
                <label className={`relative inline-flex items-center cursor-pointer ${isDisabled ? 'disabled' : ''}`}>
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={toggleSwitch}
                        disabled={isDisabled}
                    />
                    <div className={`w-[45px] h-6 bg-gray-200 rounded-full dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white ${isChecked ? 'peer-checked:bg-blue-600' : ''}`}>
                        {/* Toggle Ball */}
                        <div
                            className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full transition-transform ${isChecked ? 'translate-x-[21px]' : 'translate-x-0'
                                } bg-white shadow-md`}
                        />
                    </div>
                </label>
            </div>
            <span className={`text-sm font-medium ${isDisabled ? 'text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-gray-800'}`}>
                {isChecked ? 'True' : 'False'}
            </span>
            <button
                className='py-2 px-4 text-sm rounded-md border border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-slate-50 duration-200'
                onClick={() => setIsDisabled(!isDisabled)}
            >
                {isDisabled ? "Active" : "Disable"}
            </button>
        </div>
    );
}

export default ToggleDisable;
