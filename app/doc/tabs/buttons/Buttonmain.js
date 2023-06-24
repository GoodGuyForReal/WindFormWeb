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
        code: "app/doc/tabs/buttons/buttonPrimary/ButtonPrimary.tsx",
        href: "ButtonPrimary",
      },
      {
        name: "Secondary",
        component: <ButtonSecondary />,
        code: "app/doc/tabs/buttons/buttonSecondary/ButtonSecondary.tsx",
        href: "ButtonSecondary",
      },
      {
        name: "Outline",
        component: <ButtonOutline />,
        code: "app/doc/tabs/buttons/buttonOutline/ButtonOutline.tsx",
        href: "ButtonOutline",
      },
      {
        name: "Ghost",
        component: <ButtonGhost />,
        code: "app/doc/tabs/buttons/buttonGhost/ButtonGhost.tsx",
        href: "ButtonGhost",
      },
      {
        name: "With Icon",
        component: <ButtonIcon />,
        code: "app/doc/tabs/buttons/buttonIcon/ButtonIcon.tsx",
        href: "ButtonIcon",
      },
      {
        name: "Loading",
        component: <ButtonLoading />,
        code: "app/doc/tabs/buttons/buttonLoading/ButtonLoading.tsx",
        href: "ButtonLoading",
      },
    ],
  },
];
