import InputMultiSelectTS from "./inputMultiSelect/InputMultiSelectTS";
import InputMultiSelectV2TS from "./inputMultiSelectV2/inputMultiSelectV2TS";
import InputSingleSelectTS from "./inputSingleSelect/InputSingleSelectTS";

export const MultiSelectMain = [
  {
    title: "Input Select",
    subComponent: [
      {
        name: "Input Multi Select",
        component: <InputMultiSelectTS />,
        code: ``,
        href: "InputMultiSelect",
      },
      {
        name: "Input Multi Select V2",
        component: <InputMultiSelectV2TS />,
        code: ``,
        href: "InputMultiSelect",
      },
      {
        name: "Input Single Select",
        component: <InputSingleSelectTS />,
        code: ``,
        href: "InputMultiSelect",
      },
    ],
  },
];
