import React from 'react'

const SideBar = ({ tabs, setActiveTab, activeTab, setActiveSubTab, activeSubTab }) => {

    const componenets = tabs.find(item => item.title === 'Components')

    return (
        <div className="flex flex-col sidebar px-10 pt-10">
        {tabs.map((tab, index) => (
            <div key={index}>
                <button
                    className={`flex items-center gap-2 py-2 px-4 text-sm text-left text-gray-800 font-medium hover:underline duration-200${activeTab === index
                        && " text-gray-800 bg-gray-200 rounded-lg w-full"
                        }`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.icon}
                    {tab.title}
                </button>
            </div>
        ))
        }
        < div className="ml-3 mt-2">
            {componenets.subTabs.map((subtab, subIndex) => (
                <button
                    key={subIndex}
                    className={`flex items-center gap-2 py-1 px-4 text-sm text-left text-gray-400 font-medium hover:underline duration-200 ${activeSubTab === subIndex
                        && " text-gray-800 underline font-bold"
                        }`}
                    onClick={() => setActiveSubTab(subIndex)}
                >
                    {subtab.title}
                </button>
            ))}
        </div>
    </div >
    );
};

export default SideBar;
