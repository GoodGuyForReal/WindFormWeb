import InputMultiSelectTS from "./inputMultiSelect/InputMultiSelectTS";
import InputMultiSelectV2TS from "./inputMultiSelectV2/inputMultiSelectV2TS";
import InputSingleSelectTS from "./inputSingleSelect/InputSingleSelectTS";

export const MultiSelectMain = [
  {
    title: "Select",
    subComponent: [
      {
        name: "Input Multi Select",
        component: <InputMultiSelectTS />,
        code: "multiSelect/inputMultiSelect/InputMultiSelectTS.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Multi Select V2",
        component: <InputMultiSelectV2TS />,
        code: "multiSelect/inputMultiSelectV2/inputMultiSelectV2TS.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Single Select",
        component: <InputSingleSelectTS />,
        code: "multiSelect/inputSingleSelect/InputSingleSelectTS.tsx",
        href: "InputMultiSelect",
      },
    ],
  },
];
