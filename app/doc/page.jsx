"use client"
import React from 'react'
import { useState } from "react";
import SideBar from './components/Sidebar';
import { tabs } from './Tabs';

const page = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeSubTab, setActiveSubTab] = useState(0);

    return (
        <div className="w-full h-full pt-12 flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)_200px] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)_250px] lg:gap-10 bg-slate-50">
            <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                <SideBar tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} setActiveSubTab={setActiveSubTab} activeSubTab={activeSubTab} />
            </div>

            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
                {tabs[activeTab].subTabs
                    ? tabs[activeTab].subTabs[activeSubTab].component
                    : tabs[activeTab].content
                }
            </main>

            <div className='included pt-14'>
                <h1 className='text-gray-800'>Doc</h1>
            </div>
        </div >
    );
}

export default page