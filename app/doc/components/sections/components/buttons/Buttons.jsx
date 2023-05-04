import React from 'react';
import PreviewCard from '../../../../../components/PreviewCard'

const Buttons = () => {

    const test = [
        {
            title: 'Buttons',
            component: <Buttons />,
            subComponent: [
                {
                    name: 'Default Button',
                    class: 'py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200',
                    code: `<button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200'>Button</button>`,


                },
                {
                    name: 'Outline Button',
                    class: 'py-2 px-4 rounded-md border border-light-secondary text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200',
                    code: `<button className='py-2 px-4 rounded-md border border-light-secondary text-white hover:bg-dark-primary hover:text-dark-darkbg duration-200'>Button</button>`,
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
