import InputWithInlineDropdown from "./inputDropdown/InputWithInlineDropdown";
import InputDropdownOutside from "./inputDropdownOutside/InputDropdownOutside";

export const InputDropdown = [
  {
    title: "Inputs Dropdown",
    subComponent: [
      {
        name: "Input With Dropdown Outside",
        component: <InputDropdownOutside />,
        code: "inputDropdown/inputDropdownOutside/InputDropdownOutsideTS.tsx",
        href: "InputDropdownOutside",
      },
      {
        name: "Input With Inline Dropdown",
        component: <InputWithInlineDropdown />,
        code: "inputDropdown/inputDropdown/InputDropdownTS.tsx",
        href: "InputDropdown",
      },
    ],
  },
];
