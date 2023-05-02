import React from 'react'
const SideBar = ({ tabs, setActiveTab, activeTab }) => {
    return (
        <div className="flex flex-col sidebar px-10">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`py-2 px-4 text-sm text-left font-medium text-white hover:underline duration-200${activeTab === index
                        ? " bg-gray-900 rounded-lg"
                        : "text-white"
                        }`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
};

export default SideBar;
