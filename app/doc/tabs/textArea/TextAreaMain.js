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
        code: "textArea/textAreaDefault/TextAreaDefault.tsx",
        href: "TextAreaDefault",
      },
      {
        name: "Text Area With Image",
        component: <TextAreaWithImage />,
        code: "textArea/textAreaWithImage/TextAreaWithImage.tsx",
        href: "TextAreaWithImage",
      },
      {
        name: "Text Area With Actions",
        component: <TextAreaWithActions />,
        code: "textArea/textAreaWithActions/TextAreaWithActions.tsx",
        href: "textAreaWithActions",
      },
    ],
  },
];
