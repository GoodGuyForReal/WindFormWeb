import Intro from './tabs/intro/Intro' 
import Usage from './tabs/usage/Usage' 

import { HomeIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'
import Buttons from './tabs/components/buttons/ButtonsSection' 
import Inputs from './tabs/components/inputs/Inputs' 

export const tabs = [
    {
        title: "Getting Started",
        content: <Intro />,
        icon: <HomeIcon className="h-5 w-h-5" />,
        id:0
    },
    {
        title: "Installation",
        content: <Usage />,
        icon: <CloudArrowDownIcon className="h-5 w-h-5" />,
        id:1
    },
    {
        title: "Buttons",
        content: <Buttons />,
        id:2
    },
    {
        title: "Inputs",
        content: <Inputs />,
        id:3
    }

];
