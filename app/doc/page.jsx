"use client"
import React from 'react'
import { useState } from "react";
import SideBar from './components/Sidebar';
import Intro from './components/sections/intro/Intro.jsx';
import Usage from './components/sections/usage/Usage.jsx';

import { HomeIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'
import Buttons from './components/sections/components/buttons/Buttons';
import Inputs from './components/sections/components/inputs/Inputs';


const page = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeSubTab, setActiveSubTab] = useState(0);
    const tabs = [
        {
            title: "Getting Started",
            content: <Intro />,
            icon: <HomeIcon className="h-5 w-h-5" />
        },
        {
            title: "Installation",
            content: <Usage />,
            icon: <CloudArrowDownIcon className="h-5 w-h-5" />
        },
        {
            title: "Components",
            subtabs: [
                {
                    title: "Buttons",
                    component: <Buttons />
                },
                {
                    title: "Inputs",
                    component: <Inputs />
                }
                // add more subtabs here as needed
            ]
        },

    ];


    return (
        <div className="w-full h-full pt-12 flex-1 items-start md:grid md:grid-cols-[300px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[350px_minmax(0,1fr)] lg:gap-10 bg-slate-950">

            <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                <SideBar tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} setActiveSubTab={setActiveSubTab} activeSubTab={activeSubTab} />
            </div>

            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                {tabs[activeTab].subtabs
                    ? tabs[activeTab].subtabs[activeSubTab].component
                    : tabs[activeTab].content
                }
            </main>
        </div>
    );
}

export default page