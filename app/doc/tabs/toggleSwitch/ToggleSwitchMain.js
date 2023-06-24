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
        code: "toggleSwitch/toggleDefault/ToggleSwitch.jsx",
        href: "InputToggleSwitch",
      },
      {
        name: "Input Toggle Switch Colors",
        component: <ToggleSwitchColor />,
        code: "toggleSwitch/toggleColor/ToggleSwitchColor.jsx",
        href: "ToggleSwitchWithIcon",
      },
      {
        name: "Input Toggle With Label",
        component: <ToggleWithLabel />,
        code: "toggleSwitch/toggleWithLabel/ToggleWithLabel.jsx",
        href: "InputToggleWithLabel",
      },
      {
        name: "Input Toggle Disable",
        component: <ToggleDisable />,
        code: "toggleSwitch/toggledDissable/ToggleDisableTS.tsx",
        href: "InputToggleDisable",
      },
    ],
  },
];
