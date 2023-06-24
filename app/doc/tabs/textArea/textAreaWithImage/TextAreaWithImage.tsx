import React from "react";

const TextAreaWithImage = () => {
  return (
    <div className="flex w-full max-w-sm gap-3">
      <img
        src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="user"
        className="h-9 w-9 rounded-full bg-slate-500 object-cover"
      />
      <div className="w-full">
        <textarea
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 outline-none  ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:leading-6"
          rows={4}
          placeholder="Enter your text..."
        />
      </div>
    </div>
  );
};

export default TextAreaWithImage;
