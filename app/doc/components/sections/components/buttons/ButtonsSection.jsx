import React from 'react';
import PreviewCard from '../../../../../components/PreviewCard'
import ButtonPrimary from './buttonPrimary/ButtonPrimary';
import ButtonOutline from './buttonOutline/ButtonOutline';
import ButtonGhost from './buttonGhost/ButtonGhost';
import ButtonIcon from './buttonIcon/ButtonIcon';

const Buttons = () => {

    const test = [
        {
            title: 'Buttons',
            component: <Buttons />,
            subComponent: [
                {
                    name: 'Default',
                    component: <ButtonPrimary />,
                    code: `<button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200'>Button</button>`,


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
            ],
        },
    ];

    const subComponents = test[0].subComponent;


    return (
        <div className="Buttons flex flex-col gap-5">
            <div className="buttons_header">
                <h2 className="text-4xl font-bold mb-4">{test[0].title}</h2>
            </div>
            <hr className="border-light-secondary" />
            <div className="buttons_main flex flex-col gap-10">
                {subComponents.map((item, id) => (
                    <div key={id}>
                        <PreviewCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Buttons;
