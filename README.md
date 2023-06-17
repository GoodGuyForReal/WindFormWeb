# WindForm UI Alpha 1.0
website: https://windform.vercel.app/

## Overview
Welcome to WindForm Alpha 1.0! Our startup company is dedicated to providing a revolutionary solution for building forms quickly and effortlessly. With our fully customizable Tailwind CSS components, you can say goodbye to the hassle of npm downloads and gain complete control over your form design.

## Getting Started
This is a collection of reusable and customizable form components built with Tailwind CSS. The purpose of this repository is to provide a reference and inspiration for building your own form components, rather than being installed as a dependency or distributed through npm. Therefore, it is not considered a traditional component library.

## Repository Content
Please note that this repository includes only the component elements of WindForm Alpha 1.0. The full application and documentation can be found on our website.

## Usage
To use the components from this repository, follow these steps:

1. **Copy and Paste**: Choose the specific form components that you need for your project. Copy the code of those components from this repository.
2. **Integration**: Paste the copied component code into your own project files, such as HTML, JavaScript, or React files.
3. **Customization**: Make any necessary customizations to the component code to fit your specific requirements. You have full control over the code and can modify it as needed.
4. **Styling**: Utilize the power of Tailwind CSS to further style and enhance the appearance of the form components to match your design preferences.
5. **Integration Testing**: Test the integrated form components within your project to ensure they function as expected and meet your desired functionality.

Please note that this repository provides the foundation and reference for building your own form component library. It is up to you to adapt and customize the components to suit your project's needs.

### Examples
To help you get started, this repository includes several examples of form components along with their code snippets. You can refer to these examples as a starting point and modify them according to your requirements.


```javascript
import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex gap-3">
      <div className="toggle_container">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="h-6 w-[45px] rounded-full bg-gray-200 peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-300">
            {/* Toggle Ball */}
            <div
              className={`absolute left-[2px] top-[2px] h-5 w-5 rounded-full transition-transform ${
                isChecked ? "translate-x-[21px]" : "translate-x-0"
              } bg-white shadow-md`}
            />
          </div>
        </label>
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-800">
        {isChecked ? "True" : "False"}
      </span>
    </div>
  );
};

export default ToggleSwitch;

```

## Feedback and Contributions
We value your feedback and encourage you to share your thoughts and suggestions.

## Thank you
Thank you for choosing WindForm Alpha 1.0. We hope our form-building solution revolutionizes the way you collect data and simplifies your development process. Happy form building!

## License
WindForm Alpha 1.0 is released under the [MIT License](https://opensource.org/licenses/MIT). Please review the license terms and conditions before using our software.
