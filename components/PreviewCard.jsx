import React, { useState } from 'react'
import CodeBlock from './CodeBlock';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';


const PreviewCard = ({ item }) => {
    const [isCodeDisplay, setIsCodeDisplay] = useState({
        isDisplay: false,
        style: '',
        text: 'Code'
    });

    const showCode = () => {
        setIsCodeDisplay((prevState) => ({
            isDisplay: !prevState.isDisplay,
            style: prevState.isDisplay ? '' : 'bg-[#282C34]',
            text: prevState.isDisplay ? 'Code' : 'Preview'
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
                    <h3 className='text-lg text-gray-800'>{item.name}</h3>

                    <div className='card_options flex gap-4'>
                        <button
                            onClick={showCode}
                            className='text-gray-800 py-1 text-sm border border-gray-400 hover:bg-dark-primary hover:text-dark-darkbg duration-200 px-4 rounded-md'
                        >
                            {isCodeDisplay.text}
                        </button>
                        <button
                            onClick={copyCodeToClipboard}
                            className=''
                        >
                            <ClipboardDocumentIcon className=' h-5 w-5 text-gray-800' />
                        </button>
                    </div>
                </div>
                <div className={`card_main border border-gray-300/90 rounded-lg flex items-center justify-center ${isCodeDisplay.style}`}>
                    {
                        isCodeDisplay.isDisplay ?
                            <div className='w-full py-2 h-full px-5'>
                                <CodeBlock item={item} />
                            </div>
                            :
                            <div className='w-full max-w-sm flex items-center justify-center py-10'>
                                {item.component}
                            </div >
                    }
                </div>
            </div>
        </div>
    )
}

export default PreviewCard