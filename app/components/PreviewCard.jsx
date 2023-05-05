import React, { useState } from 'react'
import CodeBlock from './CodeBlock';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';


const PreviewCard = ({ item }) => {
    const [isCodeDisplay, setIsCodeDisplay] = useState({
        isDisplay: false,
        style: '',
        text : 'Code'
    });

    const showCode = () => {
        setIsCodeDisplay((prevState) => ({
            isDisplay: !prevState.isDisplay,
            style: prevState.isDisplay ? '' : 'bg-[#282C34]',
            text:  prevState.isDisplay ? 'Code' : 'Preview'
        }));
    };

    const copyCodeToClipboard = () => {
        const code = item.code;
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    return (
        <div>
            <div className="preview_card w-full max-w-full ">
                <div className="card_header w-full flex items-center justify-between mb-3">
                    <h3 className='text-lg'>{item.name}</h3>

                    <div className='card_options flex gap-4'>
                        <button
                            onClick={showCode}
                            className='py-1 text-sm border border-dark-secondary hover:bg-dark-primary hover:text-dark-darkbg duration-200 px-4 rounded-md text-dark-primary'
                        >
                            {isCodeDisplay.text}
                        </button>
                        <button
                            onClick={copyCodeToClipboard}
                            className=''
                        >
                            <ClipboardDocumentIcon className=' h-5 w-5 text-white'/>
                        </button>
                    </div>
                </div>
                <div className={`card_main border border-dark-secondary rounded-md py-10 flex items-center justify-center ${isCodeDisplay.style}`}>
                    <div>
                        {
                            isCodeDisplay.isDisplay ?
                                <div className='w-full h-full px-10'>
                                    <CodeBlock item={item} />
                                </div>
                                :
                                <>
                                    {item.component}
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard