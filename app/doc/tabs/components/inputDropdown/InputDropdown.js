import InputDropdownTS from "./inputDropdown/InputDropdownTS";
import InputDropdownOutsideTS from "./inputDropdownOutside/InputDropdownOutsideTS";

export const InputDropdown = [
  {
    title: "Inputs",
    subComponent: [
      {
        name: "Input with dropdown Outside",
        component: <InputDropdownOutsideTS />,
        code: ``,
        href: "InputDropdownOutside",
      },
      {
        name: "Input with dropdown",
        component: <InputDropdownTS />,
        code: ``,
        href: "InputDropdown",
      },
    ],
  },
];
