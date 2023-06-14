import React from 'react'
import PreviewCard from './PreviewCard';
import { v4 as uuidv4 } from 'uuid';

const DocSection = ({ section }) => {
    const subComponents = section[0].subComponent;
    return (
        <div className="doc flex flex-col gap-5">
            <div className="doc_header">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">{section[0].title}</h2>
            </div>
            <hr className="border-gray-300/90" />
            <div className="doc_main flex flex-col gap-20">
                {subComponents.map((item) => (
                    <div key={uuidv4()}>
                        <PreviewCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DocSection