import CheckDefault from "./checkDefault/CheckDefault";
import CheckDisable from "./checkDisable/CheckDisable";
import CheckOutline from "./checkOutline/CheckOutline";
import CheckWithLabelTS from "./checkWithLabel/CheckWithLabel";

export const CheckBoxMain = [
  {
    title: "Check Box",
    subComponent: [
      {
        name: "Input Checkbox Default",
        component: <CheckDefault />,
        code: "checkBox/checkDefault/CheckDefaultTS.tsx",
        href: "InputCheckboxDefault",
      },
      {
        name: "Input Check Outline",
        component: <CheckOutline />,
        code: "checkBox/checkOutline/CheckOutlineTS.tsx",
        href: "CheckOutline",
      },
      {
        name: "Input Check With Label",
        component: <CheckWithLabelTS />,
        code: "checkBox/checkWithLabel/CheckWithLabelTS.tsx",
        href: "InputCheckWithLabel",
      },
      {
        name: "Input Check Disable",
        component: <CheckDisable />,
        code: "checkBox/checkDisable/CheckDisableTS.tsx",
        href: "InputCheckDisable",
      },
    ],
  },
];
