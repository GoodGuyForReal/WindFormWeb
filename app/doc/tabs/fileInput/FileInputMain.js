import InputFileDefaultTS from "../fileInput/inputFileDefault/InputFileDefaultTS";
import InputFileSmallTS from "./inputFileSmall/InputFileSmallTS";

export const FileInputMain = [
  {
    title: "File Input",
    subComponent: [
      {
        name: "Input File Default",
        component: <InputFileDefaultTS />,
        code: "fileInput/inputFileDefault/InputFileDefaultTS.tsx",
        href: "InputFileDefault",
      },
      {
        name: "Input File Small",
        component: <InputFileSmallTS />,
        code: "fileInput/inputFileSmall/InputFileSmallTS.tsx",
        href: "InputFileSmall",
      },
    ],
  },
];
