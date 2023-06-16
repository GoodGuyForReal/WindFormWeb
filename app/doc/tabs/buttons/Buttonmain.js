import ButtonGhost from "./buttonGhost/ButtonGhost";
import ButtonIcon from "./buttonIcon/ButtonIcon";
import ButtonLoading from "./buttonLoading/ButtonLoading";
import ButtonOutline from "./buttonOutline/ButtonOutline";
import ButtonPrimary from "./buttonPrimary/ButtonPrimary";
import ButtonSecondary from "./buttonSecondary/ButtonSecondary";

export const buttonMain = [
  {
    title: "Buttons",
    subComponent: [
      {
        name: "Default",
        component: <ButtonPrimary />,
        code: "buttons/buttonPrimary/ButtonPrimary.tsx",
        href: "ButtonPrimary",
      },
      {
        name: "Secondary",
        component: <ButtonSecondary />,
        code: "buttons/buttonSecondary/ButtonSecondary.tsx",
        href: "ButtonSecondary",
      },
      {
        name: "Outline",
        component: <ButtonOutline />,
        code: "buttons/buttonOutline/ButtonOutline.tsx",
        href: "ButtonOutline",
      },
      {
        name: "Ghost",
        component: <ButtonGhost />,
        code: "buttons/buttonGhost/ButtonGhost.tsx",
        href: "ButtonGhost",
      },
      {
        name: "With Icon",
        component: <ButtonIcon />,
        code: "buttons/buttonIcon/ButtonIcon.tsx",
        href: "ButtonIcon",
      },
      {
        name: "Loading",
        component: <ButtonLoading />,
        code: "buttons/buttonLoading/ButtonLoading.tsx",
        href: "ButtonLoading",
      },
    ],
  },
];
