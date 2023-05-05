import React from 'react'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';


const CodeBlock = ({ item }) => {
    return (
        <SyntaxHighlighter
            wrapLongLines={true}
            language="jsx"
            style={atomOneDark}
        >
            {item.code}
        </SyntaxHighlighter>
    )
}

export default CodeBlock