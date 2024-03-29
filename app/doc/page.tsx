"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SideBar from "./components/Sidebar";
import { tabs } from "./Tabs";
import ComponentLinks from "./components/ComponentLinks";
import Footer from "./components/Footer";
import DocMobileNavbar from "./components/DocMobileNavbar";

const page = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  };

  return (
    <div>
      <div className="bottom-10 right-10 fixed z-40">
          <div className="flex md:hidden">
            <DocMobileNavbar
              tabs={tabs}
              setActiveTab={handleTabChange}
              activeTab={activeTab}
            />
          </div>
      </div>

      <div className="h-full w-full flex-1 items-start px-5 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 md:pr-10 pt-14 lg:grid-cols-[250px_minmax(0,1fr)_200px] lg:gap-10">
        <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
          <SideBar
            tabs={tabs}
            setActiveTab={handleTabChange}
            activeTab={activeTab}
          />
        </div>

        <main className="relative min-h-screen py-6 lg:gap-10 lg:py-8">
          {tabs[activeTab].section}
          <Footer
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={tabs}
          />
        </main>

        <div className="included sticky top-14 pt-10">
          <h1 className="text-gray-800">On This Page</h1>
          <ComponentLinks
            components={tabs[activeTab].list?.[0]?.subComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
