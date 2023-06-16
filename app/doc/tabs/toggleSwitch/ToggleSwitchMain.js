import ToggleSwitch from "./toggleDefault/ToggleSwitch";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";
import ToggleDisableJS from "./toggledDissable/ToggleDisableTS";
import ToggleSwitchColor from "./toggleColor/ToggleSwitchColor";

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
        component: <ToggleDisableJS />,
        code: "toggleSwitch/toggledDissable/ToggleDisableTS.tsx",
        href: "InputToggleDisable",
      },
    ],
  },
];
