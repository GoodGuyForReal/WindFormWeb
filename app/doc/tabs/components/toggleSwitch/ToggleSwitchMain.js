import ToggleSwitch from "./toggleDefault/ToggleSwitch";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";
import ToggleDisableJS from "./toggledDissable/ToggleDisableTS";

export const ToggleSwitchMain = [
    {
        title: 'Toggle Switch',
        subComponent: [
            {
                name: 'Input Toggle Switch',
                component: <ToggleSwitch />,
                code: ``,
                href: 'InputToggleSwitch'
            },
            {
                name: 'Input Toggle With Label',
                component: <ToggleWithLabel />,
                code: ``,
                href: 'InputToggleWithLabel'
            },
            {
                name: 'Input Toggle Disable',
                component: <ToggleDisableJS />,
                code: ``,
                href: 'InputToggleDisable'
            },
        ]
        
    }
]