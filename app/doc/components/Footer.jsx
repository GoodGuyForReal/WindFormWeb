import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Footer = ({ setActiveTab, activeTab, tabs }) => {
  const [changeTab, setChangeTab] = useState(activeTab);

  useEffect(() => {
    setActiveTab(changeTab);
  }, [setActiveTab, changeTab]);

  useEffect(() => {
    setChangeTab(activeTab);
  }, [activeTab]);

  console.log(tabs.length);
  console.log(activeTab);
  console.log(changeTab);

  return (
    <div className="flex flex-col gap-5 pt-16">
      <div className="flex w-full justify-between">
        {activeTab > 0 && (
          <div>
            <p className="mb-5 font-bold">{tabs[activeTab - 1]?.title}</p>
            <button
              onClick={() => setChangeTab((prev) => prev - 1)}
              className="flex items-center gap-2 rounded-full border border-blue-500 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-500 duration-200 hover:bg-blue-100"
            >
              <ArrowLeftIcon className="h-4 pt-0.5 text-blue-500" /> Previous
            </button>
          </div>
        )}
        {changeTab < tabs.length - 1 && (
          <div>
            <p className="mb-5 font-bold">{tabs[activeTab + 1]?.title}</p>
            <button
              onClick={() => setChangeTab((prev) => prev + 1)}
              className="flex items-center gap-2 rounded-full border border-blue-500 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-500 duration-200 hover:bg-blue-100"
            >
              Next <ArrowRightIcon className="h-4 pt-0.5 text-blue-500" />
            </button>
          </div>
        )}
      </div>
      <hr />
      <div className="flex w-full justify-between">
        <p>© Copyright 2023. All rights reserved.</p>
        <div className="flex gap-2">
          <p>Linkedin</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
