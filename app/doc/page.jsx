"use client";
import React from "react";
import { useState } from "react";
import SideBar from "./components/Sidebar";
import { tabs } from "./Tabs";
import Link from "next/link";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-full w-full flex-1 items-start bg-slate-50 pt-12 md:grid md:grid-cols-[200px_minmax(0,1fr)_200px] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)_250px] lg:gap-10">
      <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
        <SideBar
          tabs={tabs}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
        {tabs[activeTab].section}
      </main>

      <div className="included sticky top-14 pt-10">
        <h1 className="text-gray-800">On This Page</h1>
        <div className="included_main ml-2 mt-5 flex flex-col gap-2">
          {tabs[activeTab].list?.[0]?.subComponent.map((item, id) => (
            <Link
              href={`#${item.href}`}
              scroll={false}
              className="cursor-pointer text-sm text-gray-400 duration-200 hover:text-gray-800"
              key={id}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
