import InputMultiSelectTS from "./inputMultiSelect/InputMultiSelectTS";
import InputMultiSelectV2TS from "./inputMultiSelectV2/inputMultiSelectV2TS";

export const MultiSelectMain = [
  {
    title: "Multi Select",
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
    ],
  },
];
