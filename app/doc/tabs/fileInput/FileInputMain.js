import InputFileDefault from "./inputFileDefault/InputFileDefault";
import InputFileSmall from "./inputFileSmall/InputFileSmall";

export const FileInputMain = [
  {
    title: "File Input",
    subComponent: [
      {
        name: "Input File Default",
        component: <InputFileDefault />,
        code: "fileInput/inputFileDefault/InputFileDefaultTS.tsx",
        href: "InputFileDefault",
      },
      {
        name: "Input File Small",
        component: <InputFileSmall />,
        code: "fileInput/inputFileSmall/InputFileSmallTS.tsx",
        href: "InputFileSmall",
      },
    ],
  },
];
