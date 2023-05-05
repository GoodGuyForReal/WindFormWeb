import React from 'react';
import PreviewCard from '../../../../../components/PreviewCard'
import { buttonMain } from './Buttonmain';

const Buttons = () => {
    const subComponents = buttonMain[0].subComponent;
    return (
        <div className="Buttons flex flex-col gap-5">
            <div className="buttons_header">
                <h2 className="text-4xl font-bold mb-4">{buttonMain[0].title}</h2>
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
