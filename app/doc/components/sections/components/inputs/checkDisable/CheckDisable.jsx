import React, { useState } from 'react'

function CheckIcon({ checked }) {
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

const CheckDisable = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const toggleSwitch = () => {
        if (!isDisabled) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className="flex gap-3">
            <div className={`toggle_container ${isDisabled ? 'disabled opacity-50' : ''}`}>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <div className="flex items-center justify-center h-5 w-5 bg-gray-100 hover:bg-gray-100 border border-gray-400 rounded-md peer-checked:after:border-white peer-checked:bg-blue-500 peer-checked:hover:bg-blue-600 peer-checked:border-blue-500 duration-200">
                        <CheckIcon checked={isChecked} />
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

export default CheckDisable