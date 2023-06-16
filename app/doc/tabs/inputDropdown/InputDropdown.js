import InputDropdownTS from "./inputDropdown/InputDropdownTS";
import InputDropdownOutsideTS from "./inputDropdownOutside/InputDropdownOutsideTS";

export const InputDropdown = [
  {
    title: "Inputs Dropdown",
    subComponent: [
      {
        name: "Input with dropdown Outside",
        component: <InputDropdownOutsideTS />,
        code: "inputDropdown/inputDropdownOutside/InputDropdownOutsideTS.tsx",
        href: "InputDropdownOutside",
      },
      {
        name: "Input with dropdown",
        component: <InputDropdownTS />,
        code: "inputDropdown/inputDropdown/InputDropdownTS.tsx",
        href: "InputDropdown",
      },
    ],
  },
];
