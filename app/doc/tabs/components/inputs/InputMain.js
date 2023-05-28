import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdownTS from "./inputDropdown/InputDropdownTS";
import InputIcon from "./inputIcon/InputIcon";
import InputValidError from "./inputValidError/InputValidError";
import InputUrl from "./inputUrl/InputUrl";
import InputWithInfo from "./inputHint/InputWithInfo";
import InputDropdownOutsideTS from "./inputDropdownOutside/InputDropdownOutsideTS";
import InputSuccess from "./inputSuccess/InputSuccess";


import InputPasswordTS from "./inputPassword/InputPasswordTS";

export const InputMain = [
  {
    title: "Inputs",
    subComponent: [
      {
        name: "Input Default",
        component: <DefaultInput />,
        code: ``,
        href: "DefaultInput",
      },
      {
        name: "Input Error",
        component: <InputValidError />,
        code: ``,
        href: "InputValidError",
      },
      {
        name: "Input Success",
        component: <InputSuccess />,
        code: ``,
        href: "InputSuccess",
      },
      {
        name: "Input With Info",
        component: <InputWithInfo />,
        code: ``,
        href: "InputWithInfo",
      },
      {
        name: "Input Password",
        component: <InputPasswordTS />,
        code: ``,
        href: "InputPassword",
      },
      {
        name: "Input Search with icon",
        component: <InputIcon />,
        code: ``,
        href: "InputIcon",
      },
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
      {
        name: "Input URL",
        component: <InputUrl />,
        code: ``,
        href: "InputURL",
      },
    ],
  },
];
