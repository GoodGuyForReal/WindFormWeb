import React from 'react'



const SideBar = ({ tabs, setActiveTab, activeTab }) => {
    return (
        <div className="flex flex-col sidebar px-10 pt-5">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`flex items-center gap-2 py-2 px-4 text-sm text-left text-light-secondary font-medium hover:underline duration-200${activeTab === index
                        ? " text-white bg-gray-900 rounded-lg"
                        : "text-light-secondary"
                        }`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.icon}
                    {tab.title}
                </button>
            ))}
        </div>
    );
};

export default SideBar;
