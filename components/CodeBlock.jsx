import React from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock = ({ item }) => {
  return (
    <div className="text-sm">
      <SyntaxHighlighter
        language="typescript"
        style={atomOneDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={(lineNumber) => {
          const style = { display: "block", width: "fit-content" };
          if (this?.props.data?.highlight === lineNumber) {
            style.backgroundColor = "#FFDB81";
          }
          return { style };
        }}
      >
        {item.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
