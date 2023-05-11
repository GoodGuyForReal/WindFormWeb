import React, { useState } from 'react';

const ToggleWithLabel = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => setIsChecked(!isChecked);

    return (
        <div className='flex gap-3'>
            <div className='toggle_container pt-1'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <div className="w-[45px] h-6 bg-gray-200 rounded-full dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600">
                        {/* Toggle Ball */}
                        <div
                            className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full transition-transform ${isChecked ? 'translate-x-[21px]' : 'translate-x-0'
                                } bg-white shadow-md`}
                        />
                    </div>
                </label>
            </div>
            <div className="label">
                <h3 className='text-gray-800 font-semibold text-base'>Notifications</h3>
                <p className='text-gray-400 text-sm'>Receive updates and alerts</p>
            </div>
        </div>
    );
};

export default ToggleWithLabel;
