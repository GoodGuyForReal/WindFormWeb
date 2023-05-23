import React, { useState } from "react";

const Tab1 = () => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      Tab 1 Content area
    </div>
  );
};

const Tab2 = () => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      Tab 2 Content area
    </div>
  );
};

const Tab3 = () => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      Tab 3 Content area
    </div>
  );
};

const TabDefault = () => {
  const [selectedTabID, setSelectedTabID] = useState(0);

  const tabs = [
    { id: 0, lable: "Tab 1", content: <Tab1 /> },
    { id: 1, lable: "Tab 2", content: <Tab2 /> },
    { id: 3, lable: "Tab 3", content: <Tab3 /> },
  ];

  const selectedTab = tabs.find((item) => item.id === selectedTabID);

  return (
    <div>
      <div className="tabs flex gap-1 rounded-md bg-gray-200 p-1">
        {tabs.map((item, id) => (
          <button
            key={id}
            className={`rounded-md px-4 py-2 font-medium outline-none duration-200 hover:bg-gray-50 
            ${
              selectedTabID === item.id
                ? "bg-white text-blue-500 drop-shadow-md"
                : "bg-none text-gray-400"
            } `}
            onClick={() => setSelectedTabID(item.id)}
          >
            {item.lable}
          </button>
        ))}
      </div>
      <div className="tab_contents">
        <div className="tab_contents_body text-gray-700">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};

export default TabDefault;
