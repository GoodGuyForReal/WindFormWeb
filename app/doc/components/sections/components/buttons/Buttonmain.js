import ButtonGhost from "./buttonGhost/ButtonGhost";
import ButtonIcon from "./buttonIcon/ButtonIcon";
import ButtonLoading from "./buttonLoading/ButtonLoading";
import ButtonOutline from "./buttonOutline/ButtonOutline";
import ButtonPrimary from "./buttonPrimary/ButtonPrimary";
import ButtonSecondary from "./buttonSecondary/ButtonSecondary";


export const buttonMain = [
    {
        title: 'Buttons',
        subComponent: [
            {
                name: 'Default',
                component: <ButtonPrimary />,
                code: `<button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200'>Button</button>`,
            },
            {
                name: 'Secondary',
                component: <ButtonSecondary />,
                code: `<button className='py-2 px-4 rounded-md bg-gray-700 text-dark-primary hover:bg-gray-700/90 duration-200'>Button</button>`,
            },
            {
                name: 'Outline',
                component: <ButtonOutline />,
                code: `<button className='py-2 px-4 rounded-md border border-light-secondary text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200'>Button</button>`,
            },
            {
                name: 'Ghost',
                component: <ButtonGhost />,
                code: `<button className='py-2 px-4 rounded-md text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200'>Button</button>`,
            },
            {
                name: 'With Icon',
                component: <ButtonIcon />,
                code: `<button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200  flex items-center gap-2'><BanknotesIcon className=' h-5 w-5' /> Pay in cash</button>`,
            },
            {
                name: 'Loading',
                component: <ButtonLoading />,
                code: `

                import React from "react";

                function SpinIcon() {
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        ariaHidden="true"
                        className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-gray-500"
                        viewBox="0 0 100 101"
                    >
                        <path
                            fill="currentColor"
                            d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919z"
                        ></path>
                        <path
                            fill="currentFill"
                            d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0041.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0144.131 25.769c.902 2.34 3.361 3.802 5.787 3.165z"
                        ></path>
                    </svg>
                );
               }

export default SpinIcon;

                <button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200 flex items-center gap-2'><SpinIcon /> Loading...</button>
                `,
            },
        ],
    }
];