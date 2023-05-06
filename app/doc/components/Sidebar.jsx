import React from 'react'

const SideBar = ({ tabs, setActiveTab, activeTab, setActiveSubTab, activeSubTab }) => {


    const componenets = tabs.find(item => item.title === 'Components')

    console.log(componenets);

    return (
        <div className="flex flex-col sidebar px-10 pt-10">
            {tabs.map((tab, index) => (
                <div key={index}>
                    <button
                        className={`flex items-center gap-2 py-2 px-4 text-sm text-left text-gray-800 font-medium hover:underline duration-200${activeTab === index
                            ? " bg-slate-200 rounded-lg w-full"
                            : "text-slite-50"
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
                                    className={`flex items-center gap-2 py-1 px-4 text-sm text-left text-gray-800 font-medium hover:underline duration-200 ${activeSubTab === subIndex
                                        ? " text-white underline font-bold"
                                        : "text-slite-50"
                                        }`}
                                    onClick={() => setActiveSubTab(subIndex)}
                                >
                                    {subtab.title}
                                </button>
                            ))}
                        </div>
                    )}
                    {componenets.subTabs && activeTab === index && (
                        < div className="ml-3 mt-2">
                            {componenets.subTabs.map((subtab, subIndex) => (
                                <button
                                    key={subIndex}
                                    className={`flex items-center gap-2 py-1 px-4 text-sm text-left text-gray-800  font-medium hover:underline duration-200 ${activeSubTab === subIndex
                                        ? "underline font-bold"
                                        : "text-gray-500"
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

        </div >
    );
};

export default SideBar;
