import ToggleSwitch from "./toggleDefault/ToggleSwitch";

import ToggleDisable from "./toggledDissable/ToggleDisable";
import ToggleSwitchColor from "./toggleColor/ToggleSwitchColor";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";

export const ToggleSwitchMain = [
  {
    title: "Toggle Switch",
    subComponent: [
      {
        name: "Input Toggle Switch",
        component: <ToggleSwitch />,
        code: "app/doc/tabs/toggleSwitch/toggleDefault/ToggleSwitch.tsx",
        href: "InputToggleSwitch",
      },
      {
        name: "Input Toggle Switch Colors",
        component: <ToggleSwitchColor />,
        code: "app/doc/tabs/toggleSwitch/toggleColor/ToggleSwitchColor.tsx",
        href: "ToggleSwitchWithIcon",
      },
      {
        name: "Input Toggle With Label",
        component: <ToggleWithLabel />,
        code: "app/doc/tabs/toggleSwitch/toggleWithLabel/ToggleWithLabel.tsx",
        href: "InputToggleWithLabel",
      },
      {
        name: "Input Toggle Disable",
        component: <ToggleDisable />,
        code: "app/doc/tabs/toggleSwitch/toggledDissable/ToggleDisable.tsx",
        href: "InputToggleDisable",
      },
    ],
  },
];
