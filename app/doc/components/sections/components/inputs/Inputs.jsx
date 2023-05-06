import React from 'react';
import { InputMain } from './InputMain';
import DocSection from '@/app/components/DocSection';


const Inputs = () => {
  return (
    <div className="inputs flex flex-col gap-5">
      <DocSection section={InputMain}/>
    </div>
  )
}

export default Inputs