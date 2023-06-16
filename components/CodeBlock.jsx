"use client";
import React, { useEffect, useState } from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { FetchFileDataFromGithub } from "@/app/api/FetchFileDataFromGithub";

const CodeBlock = ({ item }) => {
  const [code, setCode] = useState("")

  useEffect(() => {
    FetchFileDataFromGithub(item.code)
      .then((item) => {
        setCode(item);
        console.log("FROM", item);
      })
      .catch((error) => {
        console.error("Error fetching code:", error);
      });
  }, [item.code]);

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
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
