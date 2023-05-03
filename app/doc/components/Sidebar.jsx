import React from 'react'

const SideBar = ({ tabs, setActiveTab, activeTab, setActiveSubTab, activeSubTab }) => {

    return (
        <div className="flex flex-col sidebar px-10 pt-5">
            {tabs.map((tab, index) => (
                <div key={index}>
                    <button
                        className={`flex items-center gap-2 py-2 px-4 text-sm text-left text-light-secondary font-medium hover:underline duration-200${activeTab === index
                            ? " text-white bg-gray-900 rounded-lg w-full"
                            : "text-light-secondary"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.icon}
                        {tab.title}
                    </button>
                    {tab.subtabs && activeTab === index && (
                        <div className="ml-3 mt-2">
                            {tab.subtabs.map((subtab, subIndex) => (
                                <button
                                    key={subIndex}
                                    className={`flex items-center gap-2 py-1 px-4 text-sm text-left text-light-secondary font-medium hover:underline duration-200${activeSubTab === subIndex
                                        ? " text-white bg-gray-900 rounded-lg w-full"
                                        : "text-light-secondary"
                                        }`}
                                    onClick={() => setActiveSubTab(subIndex)}
                                >
                                    {subtab.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SideBar;
