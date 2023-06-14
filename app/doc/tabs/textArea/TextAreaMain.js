import TextAreaDefault from "./textAreaDefault/TextAreaDefault";
import TextAreaWithActions from "./textAreaWithActions/TextAreaWithActions";
import TextAreaWithImage from "./textAreaWithImage/TextAreaWithImage";

export const TextAreaMain = [
  {
    title: "Text Area",
    subComponent: [
      {
        name: "Text Area Default",
        component: <TextAreaDefault />,
        code: ``,
        href: "TextAreaDefault",
      },
      {
        name: "Text Area With Image",
        component: <TextAreaWithImage />,
        code: ``,
        href: "TextAreaWithImage",
      },
      {
        name: "Text Area With Actions",
        component: <TextAreaWithActions />,
        code: ``,
        href: "textAreaWithActions",
      },

      
    ],
  },
];
