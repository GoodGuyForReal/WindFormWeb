import React, { useState } from 'react'

const PreviewCard = ({ item }) => {
    const [isCodeDisplay, setisCodeDisplay] = useState({
        isDisplay: false,
        style: 'bg-white'
    })

    const showCode = () => {
        !isCodeDisplay.isDisplay ?
            setisCodeDisplay({ isDisplay: true, style: 'bg-slate-900' })
            :
            setisCodeDisplay({ isDisplay: false, style: 'bg-white' })
    }

    console.log(item);

    return (
        <div>
            <div className="preview_card w-full">
                <div className="card_header w-full flex items-center justify-between mb-3">
                    <h3 className='text-lg'>{item.name}</h3>

                    <div className='card_options flex gap-4'>
                        <button
                            onClick={showCode}
                            className='py-1 text-sm border border-dark-secondary hover:bg-dark-primary hover:text-dark-darkbg duration-200 px-4 rounded-md text-dark-primary'
                        >
                            Code
                        </button>
                    </div>
                </div>
                <div className="card_main border border-dark-secondary rounded-md py-10 flex items-center justify-center">
                    <div>
                        {
                            isCodeDisplay.isDisplay ?
                                <div className='w-full h-full px-10'>
                                    <pre lang='language-javascript' className='overflow-auto text-white'>
                                        <code>{item.code}</code>
                                    </pre>
                                </div>
                                :
                                <button className={`${item.class}`}>Button</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard