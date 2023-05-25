import React from "react";

const SideBar = ({ tabs, setActiveTab, activeTab }) => {
  const componenets = tabs.find((item) => item.title === "Components");

  return (
    <div className="sidebar flex flex-col px-10 pt-10">
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
            {tab.icon}
            {tab.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
