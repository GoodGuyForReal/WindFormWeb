import React, { useState, useEffect } from 'react'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';


const PreviewCard = ({ item }) => {
    const [isCodeDisplay, setIsCodeDisplay] = useState({
        isDisplay: false,
        style: '',
    });

    const showCode = () => {
        setIsCodeDisplay((prevState) => ({
            isDisplay: !prevState.isDisplay,
            style: prevState.isDisplay ? '' : 'bg-[#282C34]',
        }));
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
                            Code
                        </button>
                    </div>
                </div>
                <div className={`card_main border border-dark-secondary rounded-md py-10 flex items-center justify-center ${isCodeDisplay.style}`}>
                    <div>
                        {
                            isCodeDisplay.isDisplay ?
                                <div className='w-full h-full px-10'>
                                    <SyntaxHighlighter
                                        wrapLongLines={true}
                                        language="jsx"
                                        style={atomOneDark}
                                    >
                                        {item.code}
                                    </SyntaxHighlighter>
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