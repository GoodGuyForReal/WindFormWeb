import CheckDefaultTS from "./checkDefault/CheckDefaultTS";
import CheckDisableTS from "./checkDisable/CheckDisableTS";
import CheckOutlineTS from "./checkOutline/CheckOutlineTS";
import CheckWithLabelTS from "./checkWithLabel/CheckWithLabelTS";

export const CheckBoxMain = [
  {
    title: "Check Box",
    subComponent: [
      {
        name: "Input Checkbox Default",
        component: <CheckDefaultTS />,
        code: "checkBox/checkDefault/CheckDefaultTS.tsx",
        href: "InputCheckboxDefault",
      },
      {
        name: "Input Check Outline",
        component: <CheckOutlineTS />,
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
        component: <CheckDisableTS />,
        code: "checkBox/checkDisable/CheckDisableTS.tsx",
        href: "InputCheckDisable",
      },
    ],
  },
];
