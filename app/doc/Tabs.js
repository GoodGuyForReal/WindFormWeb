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
        subContent: [
            {
                title: 'Default',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Outline',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Ghost',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'With Icon',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Loading',
                localLink: '#ButtonPrimary'
            },
        ]
    },
    {
        title: "Installation",
        content: <Usage />,
        icon: <CloudArrowDownIcon className="h-5 w-h-5" />,
        subContent: [
            {
                title: 'Default',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Outline',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Ghost',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'With Icon',
                localLink: '#ButtonPrimary'
            },
            {
                title: 'Loading',
                localLink: '#ButtonPrimary'
            },
        ]
    },
    {
        title: "Components",
        subTabs: [
            {
                title: "Buttons",
                component: <Buttons />,
                subContent: [
                    {
                        title: 'Default',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Outline',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Ghost',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'With Icon',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Loading',
                        localLink: '#ButtonPrimary'
                    },
                ]
            },
            {
                title: "Inputs",
                component: <Inputs />,
                subContent: [
                    {
                        title: 'Default',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Outline',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Ghost',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'With Icon',
                        localLink: '#ButtonPrimary'
                    },
                    {
                        title: 'Loading',
                        localLink: '#ButtonPrimary'
                    },
                ]
            }
            // add more subtabs here as needed
        ]
    },

];
