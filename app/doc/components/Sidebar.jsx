import React from "react";

const SideBar = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="sidebar flex flex-col px-5 pt-10">
      <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      {tabs.map((tab, index) => (
        <div key={index}>
          <button
            className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:underline duration-200${
              activeTab === index
                ? "  rounded-sm bg-blue-50 font-medium text-blue-600"
                : " text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon && (
              <span
                className={` rounded-md text-white p-1.5 bg-blue-500 ${
                  activeTab === index
                    ? "shadow-blue-400 shadow-lg duration-200"
                    : " "
                }`}
              >
                {tab.icon}
              </span>
            )}
            {tab.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
