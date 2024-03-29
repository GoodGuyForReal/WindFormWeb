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

type TabsProbs = {
  id: number;
  label: string;
  content: React.JSX.Element;
}[];

const TabOutline = () => {
  const [selectedTabID, setSelectedTabID] = useState<number>(0);

  const tabs: TabsProbs = [
    { id: 0, label: "Tab 1", content: <Tab1 /> },
    { id: 1, label: "Tab 2", content: <Tab2 /> },
    { id: 3, label: "Tab 3", content: <Tab3 /> },
  ];

  const selectedTab = tabs.find((item) => item.id === selectedTabID);

  return (
    <div className="w-full max-w-sm">
      <div className="tabs flex w-full gap-1 rounded-md border border-gray-300 p-1">
        {tabs.map((item, id) => (
          <button
            key={id}
            className={`w-full rounded-md px-4 py-2 text-sm font-medium outline-none duration-200  
            ${
              selectedTabID === item.id
                ? "bg-blue-500 text-white hover:bg-blue-500/80 hover:text-white "
                : "bg-none text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            } `}
            onClick={() => setSelectedTabID(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab_contents mt-3">
        <div className="tab_contents_body text-gray-700">
          {selectedTab?.content}
        </div>
      </div>
    </div>
  );
};

export default TabOutline;
