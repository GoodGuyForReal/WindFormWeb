import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const PreviewCard = ({ item }) => {
  const [isCodeDisplay, setIsCodeDisplay] = useState({
    isDisplay: false,
    style: "",
    text: "Code",
  });

  const showCode = () => {
    setIsCodeDisplay((prevState) => ({
      isDisplay: !prevState.isDisplay,
      style: prevState.isDisplay ? "" : "bg-[#282C34]",
      text: prevState.isDisplay ? "Code" : "Preview",
    }));
  };

  const copyCodeToClipboard = () => {
    const code = item.code;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="preview_card w-full max-w-full" id={item.href}>
      <div className="card_header mb-3 flex w-full items-center justify-between">
        <h3 className="text-lg text-gray-800">{item.name}</h3>

        <div className="card_options flex gap-4">
          <button
            onClick={showCode}
            className="rounded-md border border-gray-400 px-4 py-1 text-sm text-gray-800 duration-200 hover:bg-dark-primary hover:text-dark-darkbg"
          >
            {isCodeDisplay.text}
          </button>
          <button onClick={copyCodeToClipboard} className="">
            <ClipboardDocumentIcon className=" h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
      <div
        className={`card_main flex items-center justify-center rounded-lg border border-gray-300/90 ${isCodeDisplay.style}`}
      >
        {isCodeDisplay.isDisplay ? (
          <div className="h-full w-full px-5 py-2">
            <CodeBlock item={item} />
          </div>
        ) : (
          <div className="flex w-full max-w-sm items-center justify-center py-10">
            {item.component}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewCard;
