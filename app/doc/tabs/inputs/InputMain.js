import DefaultInput from "./inputDefault/DefaultInput";
import InputIcon from "./inputIcon/InputIcon";
import InputValidError from "./inputValidError/InputValidError";
import InputUrl from "./inputUrl/InputUrl";
import InputWithInfo from "./inputHint/InputWithInfo";
import InputSuccess from "./inputSuccess/InputSuccess";
import InputPassword from "./inputPassword/InputPassword";
import InputButtonInside from "./inputButtonInside/InputButtonInside";
import InputButtonOutside from "./inputButtonOutside/InputButtonOutside";

export const InputMain = [
  {
    title: "Inputs",
    subComponent: [
      {
        name: "Input Default",
        component: <DefaultInput />,
        code: "app/doc/tabs/inputs/inputDefault/DefaultInput.tsx",
        href: "DefaultInput",
      },
      {
        name: "Input With Info",
        component: <InputWithInfo />,
        code: "app/doc/tabs/inputs/inputHint/InputWithInfo.tsx",
        href: "InputWithInfo",
      },
      {
        name: "Input Error",
        component: <InputValidError />,
        code: "iapp/doc/tabs/inputs/inputValidError/InputValidError.tsx",
        href: "InputValidError",
      },
      {
        name: "Input Success",
        component: <InputSuccess />,
        code: "app/doc/tabs/inputs/inputSuccess/InputSuccess.tsx",
        href: "InputSuccess",
      },
      {
        name: "Input Password",
        component: <InputPassword />,
        code: "app/doc/tabs/inputs/inputPassword/InputPassword.tsx",
        href: "InputPassword",
      },
      {
        name: "Input Search with icon",
        component: <InputIcon />,
        code: "iapp/doc/tabs/inputs/inputIcon/InputIcon.tsx",
        href: "InputIcon",
      },
      {
        name: "Input URL",
        component: <InputUrl />,
        code: "app/doc/tabs/inputs/inputUrl/InputUrl.tsx",
        href: "InputURL",
      },
      {
        name: "Input Button Inside",
        component: <InputButtonInside />,
        code: "app/doc/tabs/inputs/inputButtonInside/InputButtonInside.tsx",
        href: "InputButtonInside",
      },
      {
        name: "Input Button Outside",
        component: <InputButtonOutside />,
        code: "app/doc/tabs/inputs/inputButtonOutside/InputButtonOutside.tsx",
        href: "InputButtonOutside",
      },
    ],
  },
];
