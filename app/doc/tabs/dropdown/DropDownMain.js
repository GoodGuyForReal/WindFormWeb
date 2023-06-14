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
        code: ``,
        href: "DropDownDefault",
      },
      {
        name: "DropDown Icon",
        component: <DropDownIcon />,
        code: ``,
        href: "DropDownIcon",
      },
      {
        name: "DropDown Account",
        component: <DropDownHeader />,
        code: ``,
        href: "DropDownHeader",
      },
    ],
  },
];
