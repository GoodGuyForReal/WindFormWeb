import Intro from './components/sections/intro/Intro.jsx';
import Usage from './components/sections/usage/Usage.jsx';

import { HomeIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'
import Buttons from './components/sections/components/buttons/ButtonsSection.jsx';
import Inputs from './components/sections/components/inputs/Inputs';

export const tabs = [
    {
        title: "Getting Started",
        content: <Intro />,
        icon: <HomeIcon className="h-5 w-h-5" />,
    },
    {
        title: "Installation",
        content: <Usage />,
        icon: <CloudArrowDownIcon className="h-5 w-h-5" />,
    },
    {
        title: "Components",
        subTabs: [
            {
                title: "Buttons",
                component: <Buttons />,
            },
            {
                title: "Inputs",
                component: <Inputs />,
            }
            // add more subtabs here as needed
        ]
    },

];
