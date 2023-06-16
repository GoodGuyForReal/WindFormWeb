import DropDownDefault from "./dropDownDefault/DropDownDefault";
import DropDownHeader from "./dropDownHeader/DropDownHeader";
import DropDownIcon from "./dropDownIcon/DropDownIcon";

export const DropDownMain = [
  {
    title: "Dropdown",
    subComponent: [
      {
        name: "DropDown Default",
        component: <DropDownDefault />,
        code: "dropdown/dropDownDefault/DropDownDefault.tsx",
        href: "DropDownDefault",
      },
      {
        name: "DropDown Icon",
        component: <DropDownIcon />,
        code: "dropdown/dropDownHeader/DropDownHeader.tsx",
        href: "DropDownIcon",
      },
      {
        name: "DropDown Account",
        component: <DropDownHeader />,
        code: "dropdown/dropDownIcon/DropDownIcon.tsx",
        href: "DropDownHeader",
      },
    ],
  },
];
