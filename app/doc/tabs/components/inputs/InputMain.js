import DefaultInput from "./inputDefault/DefaultInput";
import InputIcon from "./inputIcon/InputIcon";
import InputValidError from "./inputValidError/InputValidError";
import InputUrl from "./inputUrl/InputUrl";
import InputWithInfo from "./inputHint/InputWithInfo";
import InputSuccess from "./inputSuccess/InputSuccess";
import InputPasswordTS from "./inputPassword/InputPasswordTS";
import InputButtonInside from "./inputButtonInside/InputButtonInside";
import InputButtonOutside from "./inputButtonOutside/InputButtonOutside";

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
        name: "Input With Info",
        component: <InputWithInfo />,
        code: ``,
        href: "InputWithInfo",
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
        name: "Input URL",
        component: <InputUrl />,
        code: ``,
        href: "InputURL",
      },
      {
        name: "Input Button Inside",
        component: <InputButtonInside />,
        code: ``,
        href: "InputButtonInside",
      },
      {
        name: "Input Button Outside",
        component: <InputButtonOutside />,
        code: ``,
        href: "InputButtonOutside",
      },
    ],
  },
];
