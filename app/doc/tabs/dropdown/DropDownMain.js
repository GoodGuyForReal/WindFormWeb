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
        code: "app/doc/tabs/dropdown/dropDownDefault/DropDownDefault.tsx",
        href: "DropDownDefault",
      },
      {
        name: "DropDown Icon",
        component: <DropDownIcon />,
        code: "app/doc/tabs/dropdown/dropDownIcon/DropDownIcon.tsx",
        href: "DropDownIcon",
      },
      {
        name: "DropDown Account",
        component: <DropDownHeader />,
        code: "app/doc/tabs/dropdown/dropDownHeader/DropDownHeader.tsx",
        href: "DropDownHeader",
      },
    ],
  },
];
