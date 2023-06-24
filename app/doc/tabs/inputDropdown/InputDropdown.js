import InputWithInlineDropdown from "./inputDropdown/InputWithInlineDropdown";
import InputDropdownOutside from "./inputDropdownOutside/InputDropdownOutside";

export const InputDropdown = [
  {
    title: "Inputs Dropdown",
    subComponent: [
      {
        name: "Input With Dropdown Outside",
        component: <InputDropdownOutside />,
        code: "app/doc/tabs/inputDropdown/inputDropdown/InputWithInlineDropdown.tsx",
        href: "InputDropdownOutside",
      },
      {
        name: "Input With Inline Dropdown",
        component: <InputWithInlineDropdown />,
        code: "app/doc/tabs/inputDropdown/inputDropdownOutside/InputDropdownOutside.tsx",
        href: "InputDropdown",
      },
    ],
  },
];
