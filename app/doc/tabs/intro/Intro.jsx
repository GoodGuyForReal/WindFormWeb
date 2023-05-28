import React from "react";

const Intro = () => {
  return (
    <div className="Intro flex min-h-screen w-full flex-col items-start gap-5">
      <div className="intro flex flex-col gap-5">
        <div className="intro_header">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-800">
            Introduction
          </h1>
          <p className=" text-lg text-gray-500">
            This is a re-usable and costimazible components based on forms.
            Built with Tailwind CSS.
          </p>
        </div>
        <hr className="border-light-secondary" />
        <div className="intro_main">
          <p className="text-lg leading-[160%] text-gray-800">
            This is a collection of reusable components that are not meant to be
            installed as a dependency or distributed through npm, so it is not
            considered a component library in the traditional sense.
            <br />
            <br />
            You can choose the specific components that you need and copy and
            paste their code into your own projects, then make any necessary
            customizations to fit your requirements.
            <br />
            <br />
            This means you have full control over the code and can use it as a
            reference to build your own component library.
          </p>
        </div>
      </div>

      <button className="rounded-md border border-light-secondary px-6 py-2 font-medium text-gray-800 duration-200 hover:bg-gray-800 hover:text-slate-50">
        How to use
      </button>
    </div>
  );
};

export default Intro;
