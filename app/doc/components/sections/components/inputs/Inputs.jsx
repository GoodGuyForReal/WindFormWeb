import React from 'react';
import PreviewCard from '../../../../../components/PreviewCard'
import { InputMain } from './InputMain';

const Inputs = () => {
  const subComponents = InputMain[0].subComponent;
  return (
    <div className="inputs flex flex-col gap-5">
      <div className="inputs_header">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{InputMain[0].title}</h2>
      </div>
      <hr className="border-light-secondary" />
      <div className="inputs_main flex flex-col gap-10">
        {subComponents.map((item, id) => (
          <div key={id}>
            <PreviewCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inputs