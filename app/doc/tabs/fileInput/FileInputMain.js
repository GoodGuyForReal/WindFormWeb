import InputFileDefault from "./inputFileDefault/InputFileDefault";
import InputFileSmall from "./inputFileSmall/InputFileSmall";

export const FileInputMain = [
  {
    title: "File Input",
    subComponent: [
      {
        name: "Input File Default",
        component: <InputFileDefault />,
        code: "app/doc/tabs/fileInput/inputFileDefault/InputFileDefault.tsx",
        href: "InputFileDefault",
      },
      {
        name: "Input File Small",
        component: <InputFileSmall />,
        code: "app/doc/tabs/fileInput/inputFileSmall/InputFileSmall.tsx",
        href: "InputFileSmall",
      },
    ],
  },
];
