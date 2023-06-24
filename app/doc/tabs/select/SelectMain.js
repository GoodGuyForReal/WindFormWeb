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
        code: "app/doc/tabs/select/inputMultiSelect/MultiSelect.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Multi Select V2",
        component: <MultiSelectWithImage />,
        code: "app/doc/tabs/select/inputMultiSelectV2/MultiSelectWithImage.tsx",
        href: "InputMultiSelect",
      },
      {
        name: "Input Single Select",
        component: <SingleSelect />,
        code: "app/doc/tabs/select/inputSingleSelect/SingleSelect.tsx",
        href: "InputMultiSelect",
      },
    ],
  },
];
