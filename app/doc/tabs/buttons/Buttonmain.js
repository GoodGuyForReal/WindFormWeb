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
        code: ` `,
        href: "ButtonPrimary",
      },
      {
        name: "Secondary",
        component: <ButtonSecondary />,
        code: `<button className='py-2 px-4 rounded-md bg-gray-700 text-dark-primary hover:bg-gray-700/90 duration-200'>Button</button>`,
        href: "ButtonSecondary",
      },
      {
        name: "Outline",
        component: <ButtonOutline />,
        code: `<button className='py-2 px-4 rounded-md border border-light-secondary text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200'>Button</button>`,
        href: "ButtonOutline",
      },
      {
        name: "Ghost",
        component: <ButtonGhost />,
        code: `<button className='py-2 px-4 rounded-md text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200'>Button</button>`,
        href: "ButtonGhost",
      },
      {
        name: "With Icon",
        component: <ButtonIcon />,
        code: `<button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200  flex items-center gap-2'><BanknotesIcon className=' h-5 w-5' /> Pay in cash</button>`,
        href: "ButtonIcon",
      },
      {
        name: "Loading",
        component: <ButtonLoading />,
        code: ` `,
        href: "ButtonLoading",
      },
    ],
  },
];
