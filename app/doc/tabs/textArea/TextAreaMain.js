import TextAreaDefault from "./textAreaDefault/TextAreaDefault";
import TextAreaWithActions from "./textAreaWithActions/TextAreaWithActions";
import TextAreaWithImage from "./textAreaWithImage/TextAreaWithImage";

export const TextAreaMain = [
  {
    title: "Textarea",
    subComponent: [
      {
        name: "Text Area Default",
        component: <TextAreaDefault />,
        code: "app/doc/tabs/textArea/textAreaDefault/TextAreaDefault.tsx",
        href: "TextAreaDefault",
      },
      {
        name: "Text Area With Image",
        component: <TextAreaWithImage />,
        code: "app/doc/tabs/textArea/textAreaWithImage/TextAreaWithImage.tsx",
        href: "TextAreaWithImage",
      },
      {
        name: "Text Area With Actions",
        component: <TextAreaWithActions />,
        code: "app/doc/tabs/textArea/textAreaWithActions/TextAreaWithActions.tsx",
        href: "textAreaWithActions",
      },
    ],
  },
];
