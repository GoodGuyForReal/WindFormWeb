import React from "react";

const Usage = () => {
  return (
    <div className="Intro flex w-full flex-col items-start gap-5">
      <div className="intro flex flex-col gap-5">
        <div className="intro_header">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-800">Usage</h1>
          <p className="text-lg text-gray-500">
            This is a re-usable and costimazible components based on forms.
            Built with Tailwind CSS.
          </p>
        </div>
        <hr className="border-light-secondary" />
        <div className="intro_main">
          <ol className="mb-6 list-decimal pl-6 text-lg text-gray-800 space-y-4">
            <li>
              <strong>Copy and Paste</strong>: Choose the specific form
              components that you need for your project. Copy the code of those
              components from this repository.
            </li>
            <li>
              <strong>Integration</strong>: Paste the copied component code into
              your own project files, such as HTML, JavaScript, or React files.
            </li>
            <li>
              <strong>Customization</strong>: Make any necessary customizations
              to the component code to fit your specific requirements. You have
              full control over the code and can modify it as needed.
            </li>
            <li>
              <strong>Styling</strong>: Utilize the power of Tailwind CSS to
              further style and enhance the appearance of the form components to
              match your design preferences.
            </li>
            <li>
              <strong>Integration Testing</strong>: Test the integrated form
              components within your project to ensure they function as expected
              and meet your desired functionality.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Usage;
