import MultiSelect from "./inputMultiSelect/MultiSelect";
import MultiSelectWithImage from "./inputMultiSelectV2/MultiSelectWithImage";
import SingleSelect from "./inputSingleSelect/SingleSelect";

export const SelectMain = [
  {
    title: "Select",
    subComponent: [
      {
        name: "Input Multi Select",
        component: <MultiSelect />,
        code: "multiSelect/inputMultiSelect/InputMultiSelectTS.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Multi Select V2",
        component: <MultiSelectWithImage />,
        code: "multiSelect/inputMultiSelectV2/inputMultiSelectV2TS.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Single Select",
        component: <SingleSelect />,
        code: "multiSelect/inputSingleSelect/InputSingleSelectTS.tsx",
        href: "InputMultiSelect",
      },
    ],
  },
];
